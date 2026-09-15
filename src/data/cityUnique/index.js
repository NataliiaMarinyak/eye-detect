// Унікальний контент сторінок міст: SEO, вступ, факти, питання, випадки, міста країни.
// Кожне місто в окремому файлі; нове місто — імпорт і рядок у cityUnique.
import { tallinn } from "./tallinn";

export const cityUnique = {
  tallinn,
};

export const getCityUnique = (slug, lang) => cityUnique[slug]?.[lang] || null;

// Спершу питання міста, далі шаблонні, крім тих, чий key замінено (replaces). Лишаємо тільки {q, a}.
export const mergeCityFaq = (uniqueFaq = [], templateFaq = []) => {
  const replaced = new Set(uniqueFaq.flatMap((f) => f.replaces || []));
  return [
    ...uniqueFaq.map(({ q, a }) => ({ q, a })),
    ...templateFaq.filter((f) => !replaced.has(f.key)).map(({ q, a }) => ({ q, a })),
  ];
};
