import { addressData } from "@/data/addressData";
import { email, phone } from "@/data/socialMediaData";
import styles from "./PrivacyPolicySection.module.scss";

const PrivacyPolicyEn = () => {
  return (
    // <section className={styles.section}>
    <div className={`container ${styles.container}`}>
      <h1>Privacy Policy</h1>

      <p>
        All information provided by Users of the website{" "}
        <span>{addressData.siteLink}</span> is processed in accordance with
        this Personal Data Privacy Policy (hereinafter referred to as the
        Policy).
      </p>

      <h2>1. Terms</h2>

      <p>1.1 The following terms are used in this Policy:</p>
      <p>
        1.1.1. &rdquo;Site Administrator&rdquo; (hereinafter referred to as the
        &rdquo;Administrator&rdquo;) – the authorized person or persons involved
        in managing the website who process personal data and determine the
        purposes of processing personal data, its composition, and the
        operations performed with personal data.
      </p>

      <p>
        1.1.2. &rdquo;Personal data&rdquo; – information or a set of information
        about an individual who is identified or can be specifically
        identified.
      </p>
      <p>
        1.1.3. &rdquo;Processing of personal data&rdquo; – any actions performed
        with personal data, with or without the use of automated means
        (including collection, recording, organization, accumulation, storage,
        clarification (updating, modification), retrieval, use, transfer
        (distribution, provision, access), anonymization, blocking, deletion,
        and destruction of personal data).
      </p>
      <p>
        1.1.4. &rdquo;Confidentiality of personal data&rdquo; – the mandatory
        compliance by the Operator or any other person who has obtained access
        to personal data with the requirement not to disclose such data without
        the User&#39;s consent or another legal basis.
      </p>
      <p>
        1.1.5. &rdquo;Site User (hereinafter – the User)&rdquo; – a person who
        has access to the website via the Internet and uses the website.
      </p>
      <p>
        1.1.6. &rdquo;Cookies&rdquo; – a small piece of data sent by a web server
        and stored on the user&#39;s computer, which the web browser sends back
        to the web server in an HTTP request each time it attempts to open a
        page of the corresponding website.
      </p>
      <p>
        1.1.7. &rdquo;IP address&rdquo; – a unique address of a node in a
        computer network built on the IP protocol.
      </p>
      <p>
        1.1.8. Website (hereinafter – the &rdquo;website&rdquo;) – the website
        <a href={addressData.siteLink}>&rdquo;{addressData.siteLink}&rdquo;</a>.
      </p>
      <p>
        1.1.9. Ordering services using the mechanisms of the website located at
        the domain name <span>{addressData.siteDomain}</span> (hereinafter –
        the &rdquo;Order&rdquo;) – the services specified by the Customer when
        submitting an electronic request to purchase services, generated using
        the mechanisms of the website in the online system based on the
        Customer&#39;s intention to receive services, and transmitted to the
        Contractor using the mechanisms of the website.
      </p>
      <p>
        1.1.10. Customer (hereinafter – the &rdquo;Customer&rdquo;) – an
        individual, a visitor of the website, who accepts the terms of the
        agreement for the provision of services (performance of work) in the
        field of information technology and places an order using the
        mechanisms of the website solely for personal, family, household, and
        other needs not related to business activities.
      </p>
      <p>
        1.1.11. Services (hereinafter – the &rdquo;Services&rdquo;) – services
        available for ordering by the Customer and provision by the Contractor,
        information about which is published on the website for the Customer to
        review.
      </p>

      <h2>2. General provisions</h2>

      <p>
        2.1. The User&#39;s use of the website constitutes acceptance of this
        Policy and of the terms of processing the User&#39;s personal data.
      </p>
      <p>
        2.2. If the User does not agree with the terms of the Policy, the User
        must stop using the website.
      </p>
      <p>
        2.3. This Policy applies only to the website. The website does not
        control and is not responsible for third-party websites that the User
        may visit via links available on the website.
      </p>
      <p>
        2.4. The Administration does not verify the accuracy of the personal
        data provided by the User of the website.
      </p>

      <h2>3. Subject of the Policy</h2>

      <p>
        3.1. This Policy establishes the obligations of the Administration
        regarding non-disclosure and protection of the confidentiality of the
        personal data that the User must provide at the request of the
        Administration or when placing an Order.
      </p>
      <p>
        3.2. The personal data permitted for processing under this Policy is
        provided by the User by filling out a form on the website and includes
        the following information:
      </p>
      <p>3.2.1. the User&#39;s name;</p>
      <p>3.2.2. the User&#39;s contact phone number;</p>
      <p>3.2.3. email address (optional);</p>
      <p>
        3.3. The website protects the Data that is automatically transmitted
        while viewing advertising blocks and when visiting pages on which the
        system&#39;s statistical script (&rdquo;pixel&rdquo;) is installed:
      </p>
      <p>a) IP address;</p>
      <p>b) information from cookies;</p>
      <p>
        c) information about the browser (or another program that accesses the
        display of advertising);
      </p>
      <p>d) time of access;</p>
      <p>e) address of the page on which the advertising block is located;</p>
      <p>f) referrer (address of the previous page).</p>
      <p>
        3.3.1. Disabling cookies may make it impossible to access parts of the
        website that require authorization.
      </p>
      <p>
        3.3.2. The website collects statistics on the IP addresses of its
        visitors. This information is used to identify and resolve technical
        issues, to verify the legality of financial payments, or for other
        purposes of the Company that do not contradict the current legislation
        of Ukraine.
      </p>
      <p>
        3.4. Any other personal information not discussed above (purchase
        history, browsers and operating systems used, etc.) is stored and not
        distributed, except in the cases provided for in clauses 5.2 and 5.3 of
        this Policy, and is used exclusively by the Administration in a
        non-personalized form for the purpose of improving the quality of
        customer service, promoting the Company&#39;s goods and services, and
        other purposes of the Company that do not contradict the current
        legislation of Ukraine.
      </p>

      <h2>4. Purposes of collecting the User&#39;s personal information</h2>

      <p>
        4.1. The Administration may use the User&#39;s personal data for the
        following purposes:
      </p>
      <p>
        4.1.1. Identifying the User registered on the website in order to place
        an Order and (or) conclude a service agreement remotely using the
        mechanisms of the website.
      </p>
      <p>
        4.1.2. Providing the User with access to the personalized resources of
        the website.
      </p>
      <p>
        4.1.3. Establishing feedback with the User, including sending
        notifications and requests related to the use of the website and the
        provision of services, and processing requests and applications from
        the User.
      </p>
      <p>
        4.1.4. Determining the User&#39;s location to ensure security, prevent
        fraud, and make the website more convenient to use.
      </p>
      <p>
        4.1.5. Providing the User, with the User&#39;s consent, with product
        updates, special offers, pricing information, newsletters, and other
        information on behalf of the website or on behalf of the website&#39;s
        partners.
      </p>
      <p> 4.1.6. Carrying out advertising activities with the User&#39;s consent.</p>

      <h2>5. Methods and terms of processing personal information</h2>

      <p>
        5.1. The User&#39;s personal data is processed without any time limit
        by any lawful means, including in personal data information systems
        with or without the use of automated means.
      </p>
      <p>
        5.2. The User agrees that the Administration has the right to transfer
        the User&#39;s personal data to third parties, in particular courier
        services, postal organizations, telecommunications operators,
        advertising platforms, and CRM systems, solely for the purpose of
        fulfilling the Order placed on the website, monitoring the quality of
        customer service, and providing customers in a timely manner with
        information about product updates, special offers, pricing
        information, newsletters, and other information on behalf of the
        website or on behalf of the website&#39;s partners, including cases in
        which representatives of the Company take part in organizing the
        provision of services to the Customer.
      </p>
      <p>
        5.3. The User&#39;s personal data may be transferred to authorized
        government authorities only on the grounds and in the manner
        established by the legislation of Ukraine.
      </p>
      <p>
        5.4. In the event of loss or disclosure of personal data, the
        Administration informs the User of the loss or disclosure of the
        personal data.
      </p>
      <p>
        5.5. The Administration takes the necessary organizational and
        technical measures to protect the User&#39;s personal information from
        unlawful or accidental access, destruction, alteration, blocking,
        copying, and distribution, as well as from other unlawful actions of
        third parties.
      </p>

      <p>
        The Company is not responsible for the use of the above data obtained
        by third parties as a result of hacking (theft) of the Company&#39;s
        website / the Company&#39;s servers or of the organizations hosting the
        Company&#39;s websites. At the same time, the Company takes all possible
        measures to keep the data intact.
      </p>

      <address>
        If you have any questions, please contact our manager by phone
        <a href={phone.href} target="_blank" rel="noopener noreferrer">
          {phone.contact}
        </a>
        or by email
        <a href={email.href} target="_blank">
          {email.contact}
        </a>
      </address>
    </div>
    // </section>
  );
};

export default PrivacyPolicyEn;
