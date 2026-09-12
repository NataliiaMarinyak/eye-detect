"use client";
import { useEffect, useRef, useState } from "react";

// Лічильник для смуги цифр: рахує від 0 до value один раз, коли блок у в'юпорті.
// До гідрації показує кінцеве значення, тому без JS цифри теж видно.
const format = (n) => n.toLocaleString("uk-UA").replace(/,/g, " ");

const Counter = ({ value, prefix = "", suffix = "", duration = 1.2 }) => {
  const ref = useRef(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started) return;
        started = true;
        io.disconnect();
        const start = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - start) / (duration * 1000));
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        setN(0);
        requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {format(n)}
      {suffix}
    </span>
  );
};

export default Counter;
