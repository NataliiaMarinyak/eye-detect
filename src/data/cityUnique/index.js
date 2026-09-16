// Унікальний контент сторінок міст: SEO, вступ, факти, питання, випадки, міста країни.
// Кожне місто в окремому файлі; нове місто — імпорт і рядок у cityUnique.
import { amsterdam } from "./amsterdam";
import { andorraLaVella } from "./andorra-la-vella";
import { athens } from "./athens";
import { belgrade } from "./belgrade";
import { berlin } from "./berlin";
import { bern } from "./bern";
import { bratislava } from "./bratislava";
import { brussels } from "./brussels";
import { bucharest } from "./bucharest";
import { budapest } from "./budapest";
import { cherkasy } from "./cherkasy";
import { chernihiv } from "./chernihiv";
import { chernivtsi } from "./chernivtsi";
import { chisinau } from "./chisinau";
import { copenhagen } from "./copenhagen";
import { dnipro } from "./dnipro";
import { dublin } from "./dublin";
import { helsinki } from "./helsinki";
import { ivanoFrankivsk } from "./ivano-frankivsk";
import { kharkiv } from "./kharkiv";
import { kherson } from "./kherson";
import { khmelnytskyi } from "./khmelnytskyi";
import { kropyvnytskyi } from "./kropyvnytskyi";
import { kyiv } from "./kyiv";
import { lisbon } from "./lisbon";
import { ljubljana } from "./ljubljana";
import { london } from "./london";
import { lutsk } from "./lutsk";
import { luxembourg } from "./luxembourg";
import { madrid } from "./madrid";
import { monaco } from "./monaco";
import { mykolaiv } from "./mykolaiv";
import { odesa } from "./odesa";
import { oslo } from "./oslo";
import { paris } from "./paris";
import { podgorica } from "./podgorica";
import { poltava } from "./poltava";
import { prague } from "./prague";
import { pristina } from "./pristina";
import { reykjavik } from "./reykjavik";
import { riga } from "./riga";
import { rivne } from "./rivne";
import { rome } from "./rome";
import { sanMarino } from "./san-marino";
import { sarajevo } from "./sarajevo";
import { skopje } from "./skopje";
import { sofia } from "./sofia";
import { stockholm } from "./stockholm";
import { sumy } from "./sumy";
import { tallinn } from "./tallinn";
import { ternopil } from "./ternopil";
import { tirana } from "./tirana";
import { uzhgorod } from "./uzhgorod";
import { vaduz } from "./vaduz";
import { valletta } from "./valletta";
import { vatican } from "./vatican";
import { vienna } from "./vienna";
import { vilnius } from "./vilnius";
import { vinnytsia } from "./vinnytsia";
import { warsaw } from "./warsaw";
import { zagreb } from "./zagreb";
import { zaporizhzhia } from "./zaporizhzhia";
import { zhytomyr } from "./zhytomyr";

export const cityUnique = {
  amsterdam,
  "andorra-la-vella": andorraLaVella,
  athens,
  belgrade,
  berlin,
  bern,
  bratislava,
  brussels,
  bucharest,
  budapest,
  cherkasy,
  chernihiv,
  chernivtsi,
  chisinau,
  copenhagen,
  dnipro,
  dublin,
  helsinki,
  "ivano-frankivsk": ivanoFrankivsk,
  kharkiv,
  kherson,
  khmelnytskyi,
  kropyvnytskyi,
  kyiv,
  lisbon,
  ljubljana,
  london,
  lutsk,
  luxembourg,
  madrid,
  monaco,
  mykolaiv,
  odesa,
  oslo,
  paris,
  podgorica,
  poltava,
  prague,
  pristina,
  reykjavik,
  riga,
  rivne,
  rome,
  "san-marino": sanMarino,
  sarajevo,
  skopje,
  sofia,
  stockholm,
  sumy,
  tallinn,
  ternopil,
  tirana,
  uzhgorod,
  vaduz,
  valletta,
  vatican,
  vienna,
  vilnius,
  vinnytsia,
  warsaw,
  zagreb,
  zaporizhzhia,
  zhytomyr,
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
