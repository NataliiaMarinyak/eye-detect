"use client";
import { useEffect } from "react";
import { track, captureAttribution } from "@/helpers/analytics";

// Глобальні події без правок у кожній кнопці:
// натискання на телефон (tel:) і на месенджери (Telegram, Viber, WhatsApp).
// Також запам'ятовує джерело трафіку для заявок.
const where = (el) => {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("[role=dialog]")) return "quiz";
  return "page";
};

const messengerOf = (href) => {
  if (/^(https?:\/\/)?(t\.me|telegram\.me)\//i.test(href) || href.startsWith("tg:")) return "telegram";
  if (href.startsWith("viber:") || /viber\.com|viber\.click/i.test(href)) return "viber";
  if (/wa\.me|whatsapp\.com/i.test(href) || href.startsWith("whatsapp:")) return "whatsapp";
  return "";
};

export default function AnalyticsEvents() {
  useEffect(() => {
    captureAttribution();

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        track("click_phone", { link_location: where(a) });
        return;
      }
      const m = messengerOf(href);
      if (m) track("click_messenger", { messenger: m, link_location: where(a) });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
