// Унікальний контент сторінок міст: SEO, вступ, факти, питання, випадки, міста країни.
// Кожне місто в окремому файлі; нове місто — імпорт і рядок у cityUnique.
import { belgrade } from "./belgrade";
import { berlin } from "./berlin";
import { bratislava } from "./bratislava";
import { chernivtsi } from "./chernivtsi";
import { chisinau } from "./chisinau";
import { dnipro } from "./dnipro";
import { dublin } from "./dublin";
import { ivanoFrankivsk } from "./ivano-frankivsk";
import { kharkiv } from "./kharkiv";
import { kyiv } from "./kyiv";
import { lutsk } from "./lutsk";
import { madrid } from "./madrid";
import { odesa } from "./odesa";
import { podgorica } from "./podgorica";
import { prague } from "./prague";
import { riga } from "./riga";
import { rivne } from "./rivne";
import { tallinn } from "./tallinn";
import { ternopil } from "./ternopil";
import { uzhgorod } from "./uzhgorod";
import { vienna } from "./vienna";
import { vilnius } from "./vilnius";
import { vinnytsia } from "./vinnytsia";
import { warsaw } from "./warsaw";

export const cityUnique = {
  belgrade,
  berlin,
  bratislava,
  chernivtsi,
  chisinau,
  dnipro,
  dublin,
  "ivano-frankivsk": ivanoFrankivsk,
  kharkiv,
  kyiv,
  lutsk,
  madrid,
  odesa,
  podgorica,
  prague,
  riga,
  rivne,
  tallinn,
  ternopil,
  uzhgorod,
  vienna,
  vilnius,
  vinnytsia,
  warsaw,
};

export const getCityUnique = (slug, lang) => cityUnique[slug]?.[lang] || null;

// Спершу питання міста, далі шаблонні, крім тих, чий key замінено (replaces). Лишаємо {q, a} і sources, якщо є.
export const mergeCityFaq = (uniqueFaq = [], templateFaq = []) => {
  const replaced = new Set(uniqueFaq.flatMap((f) => f.replaces || []));
  return [
    ...uniqueFaq.map(({ q, a, sources }) => (sources ? { q, a, sources } : { q, a })),
    ...templateFaq.filter((f) => !replaced.has(f.key)).map(({ q, a }) => ({ q, a })),
  ];
};
