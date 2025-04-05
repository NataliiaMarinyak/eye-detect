import { addressData } from "@/data/addressData";
import { email, phone } from "@/data/socialMediaData";
import styles from "./PrivacyPolicySection.module.scss";

const PrivacyPolicyRu = () => {
  return (
    // <section className={styles.section}>
    <div className={`container ${styles.container}`}>
      <h1>Политика конфиденциальности</h1>

      <p>
        Вся информация, предоставленная пользователями сайта{" "}
        <span>{addressData.siteLink}</span>, обрабатывается в соответствии с
        этой Политикой конфиденциальности личных данных (далее - Политика).
      </p>

      <h2>1. Термины</h2>

      <p>1.1 В настоящей Политике используются следующие термины:</p>
      <p>
        1.1.1. &rdquo;Администратор сайта&rdquo; (далее именуемый
        &rdquo;администратором&rdquo;) - уполномоченное лицо/лица, участвующие в
        управлении сайтом, которые обрабатывают персональные данные и определяют
        цель обработки персональных данных, их состав и операции, осуществляемые
        с личными данными.
      </p>

      <p>
        1.1.2. &rdquo;Персональные данные&rdquo; - информация или набор
        информации о лице, которое идентифицировано или может быть специально
        идентифицировано.
      </p>
      <p>
        1.1.3. &rdquo;Обработка персональных данных&rdquo; - любые действия,
        предпринятые с использованием средств автоматизации или без
        использования таких средств, с личными данными (включая сбор,
        регистрацию, систематизацию, накопление, хранение, уточнение
        (обновление, изменение), извлечение, использование, передача
        (распространение, предоставление, доступ), обезличение, блокирование,
        удаление, уничтожение персональных данных).
      </p>
      <p>
        1.1.4. &rdquo;Конфиденциальность личных данных&rdquo; - обязательное
        соблюдение Оператором или другим лицом, имеющим доступ к персональным
        данным, требований по предотвращению их распространения без согласия
        Пользователя или другого правового основания.
      </p>
      <p>
        1.1.5. &rdquo;Пользователь сайта (далее - Пользователь)&rdquo; - лицо,
        имеющее доступ на сайт через Интернет и использует сайт.
      </p>
      <p>
        1.1.6. &rdquo;Cookie&rdquo; - небольшой фрагмент данных, отправленный
        веб-сервером, хранящийся на компьютере пользователя, который веб-браузер
        каждый раз отправляет веб-серверу в НТТР запросе, когда он пытается
        открыть страницу соответствующего сайта.
      </p>
      <p>
        1.1.7. &rdquo;IP адрес&rdquo; - уникальный адрес узла в компьютерной
        сети, построенной по протоколу IP.
      </p>
      <p>
        1.1.8. Сайт (далее - &rdquo;сайт&rdquo;) - сайт
        <a href={addressData.siteLink}>&rdquo;{addressData.siteLink}&rdquo;</a>
      </p>
      <p>
        1.1.9. Заказы услуг с использованием механизмов сайта, расположенного на
        доменном имени <span>{addressData.siteDomain}</span> (далее -
        &rdquo;Заказ&rdquo;), - услуги, указанные Клиентом при оформлении
        электронного запроса на покупку услуг, оформленного с использованием
        механизмов сайта в системе онлайн на основании намерения Клиента
        получить услуги, и переданные Подрядчику посредством использования
        механизмов сайта.
      </p>
      <p>
        1.1.10. Клиент (далее &rdquo;Клиент&rdquo;) - физическое лицо,
        посетитель сайта, принимающий условия договора об обслуживании
        (выполнении работ) в области информационных технологий, осуществляющий
        заказ с использованием механизмов сайта исключительно для личных,
        семейных, домашних и другие потребностей, не связанных с осуществлением
        предпринимательской деятельности.
      </p>
      <p>
        1.1.11. Услуги (далее &rdquo;Услуги&rdquo;) - доступные для заказа
        Клиентом и предоставления Подрядчиком услуг, информация о которых
        публикуется для ознакомление Клиентом на сайте.
      </p>

      <h2>2. Общие положения</h2>

      <p>
        2.1. Использование сайта пользователем означает согласие с этой
        политикой и условиями обработки персональных данных Пользователя.
      </p>
      <p>
        2.2. При несогласии с условиями Политики, Пользователь должен прекратить
        использование сайта.
      </p>
      <p>
        2.3. Эта политика применяется только к сайту. Сайт не контролирует и не
        несет ответственности за сайты третьих сторон, к которым пользователь
        может пройти по ссылкам, доступным на сайте.
      </p>
      <p>
        2.4. Администрация не проверяет точность личных данных, которые
        предоставлены пользователем сайта.
      </p>

      <h2>З. Вопросы политики</h2>

      <p>
        3.1. Настоящая политика устанавливает обязательства администрации по
        неразглашению и обеспечению защиты конфиденциальности персональных
        данных, которые Пользователь должен предоставить по запросу
        Администрации или при оформлении Услуги.
      </p>
      <p>
        3.2. Персональные данные, разрешенные для обработки в соответствии с
        настоящей политикой, предоставляются Пользователем путем заполнения
        формы на сайте и включают в себя следующую информацию:
      </p>
      <p>3.2.1. имя пользователя;</p>
      <p>3.2.2. контактный телефон пользователя;</p>
      <p>3.2.3. электронный адрес (необязательный);</p>
      <p>
        З.3. Сайт защищает Данные, которые автоматически передаются в процессе
        просмотра рекламныч блоков и при посещение страниц, на которых
        установлен статистический скрипт системы (&ldquo;пиксель&ldquo;):
      </p>
      <p>а) IP адрес</p>
      <p>б) информация из cookie;</p>
      <p>
        в) информация о браузере (или о другом приложении, которое осуществляет
        доступ к показу рекламы);
      </p>
      <p>г) время доступа;</p>
      <p>д) адрес страницы, на которой размещается рекламный блок;</p>
      <p>е) реферер (адрес предыдущей страницы).</p>
      <p>
        3.3.1. Отключение cookie может помешать доступу к части сайта, требующей
        разрешения.
      </p>
      <p>
        3.3.2. Сайт собирает статистические данные об IP-адресах своих
        посетителей. Эта информация используется для определения и решения
        технических проблем, контроля законности проводимых финансовых платежей,
        или иных целей Компании, не противоречащих действующему законодательство
        Украины.
      </p>
      <p>
        3.4. Любая другая личная информация, не обсужденная выше (история
        закупки, используемые браузеры и операционные системы и т.д.), хранится
        и не распространяется, за исключением случаев, предусмотренных в пунктах
        5.2. и 5.3. настоящей Политики и используется исключительно
        Администрацией в целях повышения качества обслуживания клиентов,
        продвижения товаров и услуг Компании, и других целей Компании, не
        противоречат действующему законодательству Украины в
        неперсонализированном виде.
      </p>

      <h2>4. Цели сбора персональных данных пользователей</h2>

      <p>
        4.1. Администрация может использовать персональные данные пользователя в
        следующих целях:
      </p>
      <p>
        4.1.1. Идентификация пользователя, зарегистрированного на сайте, для
        выполнение Заказа и (или) заключение договора на оказание услуг
        удаленно, используя механизмы сайта.
      </p>
      <p>
        4.1.2. Предоставление пользователю доступа к персонализированным
        ресурсам сайта.
      </p>
      <p>
        4.1.3. Установление обратной связи с пользователем, включая отправку
        сообщений, запросов относительно использования сайта, предоставление
        услуг, обработку запросов и заявок от Пользователя.
      </p>
      <p>
        4.1.4. Определение местоположения пользователя для обеспечения
        безопасности, предотвращения мошенничества и удобства использования
        сайта.
      </p>
      <p>
        4.1.5. Предоставление Пользователю, с его согласия, обновлений продукта,
        специальных предложений, информации о ценах, информационных бюллетеней и
        другой информация от имени сайта или от имени партнеров по сайту.
      </p>
      <p>
        {" "}
        4.1.6. Осуществление рекламной деятельности с согласия пользователя.
      </p>

      <h2>5. Методы и условия обработки персональных данных</h2>

      <p>
        5.1. Обработка персональных данных Пользователя осуществляется без
        ограничений в любой правовой форме, включая информационные системы
        персональных данных с использованием инструментов автоматизации или без
        использования таких средств.
      </p>
      <p>
        5.2. Пользователь соглашается с тем, что администрация имеет право
        передавать персональные данные Пользователя третьим лицам, в частности,
        курьерским службам, почтовым организациям, операторам телекоммуникации,
        рекламным платформам, системам CRM исключительно с целью выполнения
        Заказа, контроля качества обслуживания клиентов, своевременного
        предоставления клиентам информации об обновлении продукции, специальных
        предложений, информации о ценах, рассылки новостей и другой информации
        от имени сайта или от имени партнеров сайта, оформленного на сайте,
        включая случаи участия представителей Компании в организации оказания
        услуг Клиенту.
      </p>
      <p>
        5.3. Персональные данные пользователя могут быть переданы уполномоченным
        государственным органам только на основаниях и в порядке, установленном
        законодательством Украины.
      </p>
      <p>
        5.4. При потере или раскрытии личных данных Администрация информирует
        Пользователя о потере или раскрытии личных данных.
      </p>
      <p>
        5.5. Администрация принимает необходимые организационные и технические
        меры по защите персональных данных пользователя от незаконного или
        случайного доступа, уничтожения, искажения, блокирования, копирования,
        распространения, а также от других незаконных действий третьи стороны.
      </p>

      <p>
        Компания не несет ответственности за использование этих данных,
        полученных посторонними лицами в результате взлома (кражи) сайта
        Компании / серверов компании или организаций, где расположены сайты
        компании. В то же время Компания использует все возможные меры для
        сохранения данных в целости.
      </p>

      <address>
        Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с менеджером
        по телефону
        <a href={phone.href} target="_blank" rel="noopener noreferrer">
          {phone.contact}
        </a>
        или по электронной почте
        <a href={email.href} target="_blank">
          {email.contact}
        </a>
      </address>
    </div>
    // </section>
  );
};

export default PrivacyPolicyRu;
