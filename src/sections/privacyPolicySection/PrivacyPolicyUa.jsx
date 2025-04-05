import { addressData } from "@/data/addressData";
import { email, phone } from "@/data/socialMediaData";
import styles from "./PrivacyPolicySection.module.scss";

const PrivacyPolicyUa = () => {
  return (
    // <section className={styles.section}>
    <div className={`container ${styles.container}`}>
      <h1>Політика конфіденційності</h1>

      <p>
        Вся інформація, надана Користувачами сайту{" "}
        <span>{addressData.siteLink}</span>, обробляється відповідно до цієї
        Політики конфіденційності персональних даних (далі за текстом –
        Політика).
      </p>

      <h2>1. Терміни</h2>

      <p>1.1 У цій Політиці використовуються такі терміни:</p>
      <p>
        1.1.1. &rdquo; Адміністратор сайту &rdquo; (далі по тексту –
        &rdquo;Адміністратор&rdquo;) – уповноважена особа/особи, які беруть
        участь в управлінні сайтом, які здійснюють обробку персональних даних, а
        також визначають мету обробки персональних даних, їх склад, і операції,
        що здійснюються з персональними даними.
      </p>

      <p>
        1.1.2. &rdquo;Персональні дані&rdquo; – відомості чи сукупність
        відомостей про фізичну особу, яка ідентифікована або може бути конкретно
        ідентифікована.
      </p>
      <p>
        1.1.3. &rdquo;Обробка персональних даних&rdquo; – будь-які дії, що
        здійснюються з використанням засобів автоматизації або без використання
        таких засобів, з персональними даними (в тому числі збір, запис,
        систематизація, накопичення, зберігання, уточнення (оновлення, зміна),
        витяг, використання, передача (поширення, надання, доступ),
        знеособлення, блокування, видалення, знищення персональних даних).
      </p>
      <p>
        1.1.4. &rdquo;Конфіденційність персональних даних&rdquo; – обов’язкове
        дотримання Оператором або іншою особою, що отримала доступ до
        персональних даних, вимог про недопущення їх поширення без згоди
        Користувача або наявності іншої законної підстави.
      </p>
      <p>
        1.1.5. &rdquo;Користувач сайту (далі – Користувач)&rdquo; – особа, яка
        має доступ до сайту за допомогою мережі Інтернет і використовує сайт.
      </p>
      <p>
        1.1.6. &rdquo;Cookies&rdquo; – невеликий фрагмент даних, відправлений
        веб-сервером, що зберігається на комп’ютері користувача, який
        веб-браузер кожен раз пересилає веб-серверу в HTTP-запиті при спробі
        відкрити сторінку відповідного сайту.
      </p>
      <p>
        1.1.7. &rdquo;IP-адреса&rdquo; – унікальна адреса вузла в комп’ютерній
        мережі, яка побудована за протоколом IP.
      </p>
      <p>
        1.1.8. Сайт (далі – &rdquo;сайт&rdquo;) – сайт
        <a href={addressData.siteLink}>&rdquo;{addressData.siteLink}&rdquo;</a>.
      </p>
      <p>
        1.1.9. Замовлення послуг з використанням механізмів сайту, розташованого
        на доменному імені <span>{addressData.siteDomain}</span> (далі –
        &rdquo;Замовлення&rdquo;), – послуги, зазначені Замовником при
        оформленні електронної заявки на придбання послуг, сформованої з
        використанням механізмів сайту в системі онлайн на підставі наміру
        Замовника отримати послуги, та переданої Виконавцю за допомогою
        використання механізмів сайту.
      </p>
      <p>
        1.1.10. Замовник (далі – &rdquo;Замовник&rdquo;) – фізична особа,
        відвідувач сайту, що приймає умови договору про надання послуг
        (виконання робіт) у сфері інформаційних технологій, що здійснює
        замовлення з використанням механізмів сайту виключно для особистих,
        сімейних, домашніх і інших потреб, не пов’язаних із здійсненням
        підприємницької діяльності.
      </p>
      <p>
        1.1.11. Послуги (далі – &rdquo;Послуги&rdquo;) – доступні до замовлення
        Замовником і надання Виконавцем послуги, інформація про які опублікована
        для ознайомлення Замовником на сайті.
      </p>

      <h2>2. Загальні положення</h2>

      <p>
        2.1. Використання Користувачем сайту означає згоду з цією Політикою і
        умовами обробки персональних даних Користувача.
      </p>
      <p>
        2.2. У разі незгоди з умовами Політики Користувач повинен припинити
        використання сайту.
      </p>
      <p>
        2.3. Ця Політика застосовується тільки до сайту. Сайт не контролює і не
        несе відповідальність за сайти третіх осіб, на які Користувач може
        перейти за посиланнями, доступними на сайті.
      </p>
      <p>
        2.4. Адміністрація не перевіряє достовірність персональних даних, що
        надаються Користувачем сайту.
      </p>

      <h2>3. Предмети політики</h2>

      <p>
        3.1. Ця Політика встановлює зобов’язання Адміністрації щодо
        нерозголошення та забезпечення захисту конфіденційності персональних
        даних, які Користувач повинен надати за вимогою Адміністрації або при
        оформленні Замовлення.
      </p>
      <p>
        3.2. Персональні дані, дозволені до обробки в рамках цієї Політики,
        надаються Користувачем шляхом заповнення форми на сайті і включають в
        себе наступну інформацію:
      </p>
      <p>3.2.1. ім&#39;я Користувача;</p>
      <p>3.2.2. контактний телефон Користувача;</p>
      <p>3.2.3. адреса електронної пошти (e-mail) (за бажанням);</p>
      <p>
        3.3. Сайт захищає Дані, які автоматично передаються в процесі перегляду
        рекламних блоків і при відвідуванні сторінок, на яких встановлено
        статистичний скрипт системи (&rdquo;піксель&rdquo;):
      </p>
      <p>а) IP адреса;</p>
      <p>б) інформація з cookies;</p>
      <p>
        в) інформація про браузер (чи іншу програму, яка здійснює доступ до
        показу реклами);
      </p>
      <p>г) час доступу;</p>
      <p>д) адреса сторінки, на якій розташований рекламний блок;</p>
      <p>е) реферер (адреса попередньої сторінки).</p>
      <p>
        3.3.1. Відключення cookies може спричинити неможливість доступу до
        частин сайту, що вимагають авторизації.
      </p>
      <p>
        3.3.2. Сайт здійснює збір статистики про IP-адреси своїх відвідувачів.
        Дана інформація використовується з метою виявлення і вирішення технічних
        проблем, для контроля законності проведених фінансових платежів або
        інших цілей Компанії, що не суперечать чинному законодавству України.
      </p>
      <p>
        3.4. Будь-яка інша персональна інформація, не обговорена вище (історія
        покупок, використовувані браузери і операційні системи і т.д.), підлягає
        зберіганню і не розповсюджується, за винятком випадків, передбачених в
        п.п. 5.2. і 5.3. цієї Політики і використовується, виключно стороною
        Адміністрації в цілях поліпшення якості обслуговування клієнтів,
        популяризації товарів і послуг Компанії та інших цілей Компанії, не
        суперечать чинному законодавству України у неперсоналізованому вигляді.
      </p>

      <h2>4. Цілі збору персональної інформації користувача</h2>

      <p>
        4.1. Персональні дані Користувача Адміністрація може використовувати в
        наступних цілях:
      </p>
      <p>
        4.1.1. Ідентифікація Користувача, зареєстрованого на сайті, для
        оформлення Замовлення і (або) укладення договору надання послуг
        дистанційним способом з використанням механізмів сайту.
      </p>
      <p>
        4.1.2. Надання Користувачеві доступу до персоналізованих ресурсів сайту.
      </p>
      <p>
        4.1.3. Встановлення з Користувачем зворотного зв’язку, включаючи
        напрямок повідомлень, запитів, що стосуються використання сайту, надання
        послуг, обробка запитів і заявок від Користувача.
      </p>
      <p>
        4.1.4. Визначення місця знаходження Користувача для забезпечення
        безпеки, запобігання шахрайства, а також для забезпечення зручності
        користування сайтом.
      </p>
      <p>
        4.1.5. Надання Користувачеві, з його згоди, оновлень продукції,
        спеціальних пропозицій, інформації про ціни, розсилки новин та інших
        відомостей від імені сайту або від імені партнерів сайту.
      </p>
      <p> 4.1.6. Здійснення рекламної діяльності за згодою Користувача.</p>

      <h2>5. Способи і терміни обробки персональної інформації</h2>

      <p>
        5.1. Обробка персональних даних Користувача здійснюється без обмеження
        терміну будь-яким законним способом, в тому числі в інформаційних
        системах персональних даних з використанням засобів автоматизації або
        без використання таких засобів.
      </p>
      <p>
        5.2. Користувач погоджується з тим, що Адміністрація має право
        передавати персональні дані Користувача третім особам, зокрема,
        кур’єрським службам, організаціям поштового зв’язку, операторам
        електрозв’язку, рекламних майданчиків, CRM систем виключно в цілях
        виконання Замовлення, контролю якості обслуговування клієнтів,
        своєчасного надання клієнтам інформації про оновлення продукції,
        спеціальних пропозицій, інформації про ціни, розсилки новин та інших
        відомостей від імені сайту або від імені партнерів сайту, оформленого на
        сайті, включаючи випадки участі представників Компанії в організації
        надання послуг Замовнику.
      </p>
      <p>
        5.3. Персональні дані Користувача можуть бути передані уповноваженим
        органам державної влади тільки на підставах та в порядку, встановленим
        законодавством України.
      </p>
      <p>
        5.4. При втраті або розголошенні персональних даних Адміністрація
        інформує Користувача про втрату або розголошення персональних даних.
      </p>
      <p>
        5.5. Адміністрація вживає необхідних організаційних і технічних заходів
        для захисту персональної інформації Користувача від неправомірного або
        випадкового доступу, знищення, перекручення, блокування, копіювання,
        поширення, а також від інших неправомірних дій третіх осіб.
      </p>

      <p>
        Компанія не несе відповідальності за використання зазначених даних,
        отриманих сторонніми особами в результаті злому (крадіжки) сайту
        Компанії / серверів Компанії або організацій, де розміщені сайти
        компанії. При цьому Компанія використовує всі можливі заходи для
        утримання даних в цілості.
      </p>

      <address>
        Якщо у Вас виникли питання, звертайтесь до менеджера за телефоном
        <a href={phone.href} target="_blank" rel="noopener noreferrer">
          {phone.contact}
        </a>
        або на електронну пошту
        <a href={email.href} target="_blank">
          {email.contact}
        </a>
      </address>
    </div>
    // </section>
  );
};

export default PrivacyPolicyUa;
