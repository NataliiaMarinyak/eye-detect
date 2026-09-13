import { addressData } from "@/data/addressData";
import { email, phone } from "@/data/socialMediaData";
import styles from "./PrivacyPolicySection.module.scss";

const PrivacyPolicyEn = () => {
  return (
    // <section className={styles.section}>
    <div className={`container ${styles.container}`}>
      <h1>Privacy Policy</h1>

      <p>Updated 13 September 2026.</p>

      <p>
        This policy explains in plain language what data we receive when you use
        the website <span>{addressData.siteLink}</span> or take an EyeDetect or
        VerifEye test with us, why we process it, who we share it with and what
        rights you have.
      </p>

      <h2>1. Who we are and what this policy covers</h2>

      <p>
        The data controller is the private practice (sole proprietor) of
        Nataliia Marynyak, 45 Horodotska St., Lviv, Ukraine. We are an
        authorized Service Provider of Converus, Inc. (USA) in Ukraine: we
        administer EyeDetect tests in our office or on site and VerifEye tests
        online.
      </p>
      <p>
        For the data of people who take a test, we act as the data controller:
        we decide which details are entered into the system and we are
        responsible for their confidentiality. Converus acts as the data
        processor: its servers process and score the test data on our
        instructions.
      </p>
      <p>
        We follow the Law of Ukraine &ldquo;On Personal Data Protection&rdquo;.
        If you take a test online while in the European Union, the GDPR also
        applies to you.
      </p>

      <h2>2. What data we collect</h2>

      <p>
        <strong>Website.</strong> When you browse the pages, technical data is
        collected: IP address, browser and device type, pages viewed, time of
        visit, referring source. This happens through cookies and analytics
        tools (see section 8).
      </p>
      <p>
        <strong>Request form.</strong> In the form on the website you leave your
        name and phone number. Together with the page name and the selected
        service, this data reaches us as a message from a Telegram bot and is
        stored only in that chat and in our working records. The price
        quiz on the site sends your answers, name and phone number the same way
        and on the same terms.
      </p>
      <p>
        <strong>EyeDetect test (in office or on site).</strong> During the test
        the system records eye movements and pupil diameter 60 times per second,
        as well as True/False answers with timestamps. These are physical
        measurements, not photographs or video, and a person cannot be
        identified from them, so they are not biometric data. By default the
        examiner enters the test taker&#39;s name into the system and takes a
        photo for the report. At your request an ID number can be used instead
        of a name and no photo taken.
      </p>
      <p>
        <strong>VerifEye test (online).</strong> The test runs in an app on your
        phone. The app records eye reactions through the front camera, your
        spoken answers to the questions, and takes several photos of your face
        that appear in the report. The name or ID you enter and technical data
        about the device are also recorded.
      </p>
      <p>
        Testing is carried out only with your written consent. Test questions
        never concern health, religion, political views, sexual orientation or
        ethnic origin. Converus likewise does not require or collect such
        &ldquo;sensitive&rdquo; data.
      </p>

      <h2>3. Why and on what basis</h2>

      <p>
        We use request form data to contact you, agree on a time and terms, and
        provide the service. Basis: your consent given by submitting the form,
        and steps taken prior to entering into a contract.
      </p>
      <p>
        We process test data to administer the test, obtain the result and
        deliver the report to the client. Basis: your written consent to take
        the test and the contract with the client.
      </p>
      <p>
        We use website technical data to keep the site running reliably and to
        understand which pages are useful to visitors. Basis: our legitimate
        interest in maintaining the site; for analytics cookies, your consent
        through your browser settings.
      </p>
      <p>
        We do not use your data for newsletters, advertising or profiling, and
        we do not sell it.
      </p>

      <h2>4. Who we share it with</h2>

      <p>
        <strong>Converus, Inc.</strong> (610 S. 850 E., Ste. 4, Lehi, Utah
        84043, USA), the developer of EyeDetect and VerifEye. Test data is
        transmitted in encrypted form to Converus servers in the USA, where the
        algorithm scores it and produces a PDF report. This is an international
        data transfer. Converus is certified under the EU-U.S. Data Privacy
        Framework and processes data under its own privacy policy.
      </p>
      <p>
        <strong>The client who ordered the test.</strong> The report goes to
        whoever ordered the testing: the test taker themselves, or an employer
        or other authorized person, with the test taker&#39;s knowledge. We do
        not publish photos, reports or reviews without permission and do not
        discuss test results with third parties.
      </p>
      <p>
        <strong>Website services.</strong> Google (Tag Manager, Analytics) and
        Binotel (call widget) receive technical data about visits within the
        limits described in section 8.
      </p>
      <p>
        We share data with anyone else only when the law requires it, for
        example on a lawful request from a court or law enforcement.
      </p>

      <h2>5. How long we keep it</h2>

      <p>
        We keep request form data until the conversation is finished and the
        service is provided, after which we delete it from the chat and our
        records, or earlier at your request.
      </p>
      <p>
        We keep test reports for as long as needed to deliver the result to the
        client and answer possible follow-up questions. Our practice: up to 12
        months after the test, after which reports are deleted routinely, or
        earlier at your request. Retention on Converus servers is governed by
        its policy.
      </p>
      <p>
        Website analytics data is kept in Google Analytics for the period set in
        the service settings, in anonymized form.
      </p>

      <h2>6. Your rights and how to use them</h2>

      <p>You have the right to:</p>
      <p>— find out what data we hold about you and receive a copy;</p>
      <p>— correct inaccurate data;</p>
      <p>— request deletion when there is no legal basis to keep the data;</p>
      <p>
        — withdraw consent at any time, including declining the test before it
        starts or stopping it while it is in progress;
      </p>
      <p>
        — object to or restrict processing, and, for EU residents, receive your
        data in a portable format;
      </p>
      <p>
        — lodge a complaint with the Ukrainian Parliament Commissioner for Human
        Rights (Ombudsman) or, for EU residents, with the supervisory authority
        of your country.
      </p>
      <p>
        To exercise your rights, email or call us (contacts in section 10). We
        will respond within 30 days. If the data is processed by Converus, we
        will forward your request to them or help you contact them directly.
      </p>

      <h2>7. Security</h2>

      <p>
        The website runs over HTTPS. Test data is encrypted in transit and
        stored on Converus servers in encrypted form. Only the examiner who
        administered the test has access to the reports. We do not send reports
        through open channels and do not leave them on shared devices.
      </p>
      <p>
        No system can guarantee absolute security. If a breach occurs that could
        harm you, we will notify you.
      </p>

      <h2>8. Cookies and analytics</h2>

      <p>
        The website uses Google Tag Manager to load Google Analytics, which
        collects anonymized visit statistics using cookies. The Binotel call
        widget loads its own script and may store its own technical cookies
        needed for the call button to work.
      </p>
      <p>
        You can block or delete cookies in your browser settings. The website
        will keep working; data about your visit simply will not reach the
        analytics.
      </p>

      <h2>9. Children</h2>

      <p>
        We do not test persons under 18 without the written consent of a parent
        or guardian, and we do not knowingly collect children&#39;s data through
        the website. Converus does not process data of children under 11 and
        deletes it if received.
      </p>

      <h2>10. Changes to this policy and contacts</h2>

      <p>
        We may update this policy when our processes or the law change. The date
        of the last update is shown at the top of the page. We will additionally
        flag material changes on the website.
      </p>

      <address>
        For questions about personal data, call
        <a href={phone.href} target="_blank" rel="noopener noreferrer">
          {phone.contact}
        </a>
        or email
        <a href={email.href} target="_blank">
          {email.contact}
        </a>
      </address>

      <p>
        This is our policy as a Converus Service Provider; the policy of Converus
        itself is available at
        <a
          href="https://converus.com/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          converus.com/privacy-policy
        </a>
        .
      </p>
    </div>
    // </section>
  );
};

export default PrivacyPolicyEn;
