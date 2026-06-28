import type { Metadata } from "next";
import SectionBand from "@/components/ui/SectionBand";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Disclaimer & Legal Notice",
  description: "Legal disclaimer, Impressum, and liability notice for the personal website of Georgios Nanos.",
};

export default function DisclaimerPage() {
  return (
    <>
      <SectionBand>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Legal</p>
          <h1
            className="font-display text-5xl font-normal text-ink mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Disclaimer &amp; Legal Notice
          </h1>
          <p className="text-[8px] text-muted mt-2">Last updated: June 2026</p>
        </FadeIn>
      </SectionBand>

      <SectionBand card>
        <FadeIn>
          <div className="max-w-3xl space-y-10 text-[8px] leading-relaxed">

            {/* ── 1. IMPRESSUM ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                1. Impressum (Anbieterkennzeichnung gemäß § 5 TMG)
              </h2>
              <p className="text-[7px] text-muted mb-3">
                Pflichtangaben nach dem Telemediengesetz (TMG) für in Deutschland zugängliche Websites.
              </p>
              <p>
                <strong>Verantwortlich für den Inhalt dieser Website / Responsible for content:</strong>
              </p>
              <p className="mt-2">
                Dipl.-Ing. Georgios Nanos, MBA<br />
                Contact: via the <a href="/contact" className="text-primary hover:underline">Contact page</a> of this website
              </p>
              <p className="mt-3 text-[8px] text-muted">
                This website is a purely private, non-commercial personal portfolio. It does not offer goods or services for sale, does not generate revenue, and does not pursue any commercial purpose within the meaning of § 5 TMG or § 14 BGB. It is operated as a private informational and self-presentational resource and falls within the scope of private use under applicable German teleservices law. No EU VAT identification number is held or required in connection with this website.
              </p>
            </div>

            {/* ── 2. NATURE OF THIS WEBSITE ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                2. Nature and Purpose of this Website
              </h2>
              <p>
                This website (<strong>www.nanos.work</strong>) is a purely personal and informational portfolio maintained by Georgios Nanos in a private capacity. It serves exclusively to present the operator&apos;s academic background, professional career history, and publicly known personal research interests. It does not constitute a business, a commercial enterprise, an offer of services for remuneration, or an economic activity of any kind. No contracts are solicited, entered into, or fulfilled through this website. No fees, commissions, or payments of any nature are charged, collected, or accepted in connection with the content of this website.
              </p>
              <p className="mt-3">
                The website does not constitute advertising within the meaning of the German Act Against Unfair Competition (UWG) or comparable legislation. The mere presentation of professional qualifications and experience does not, in and of itself, constitute the offer of competing commercial services.
              </p>
            </div>

            {/* ── 3. EMPLOYMENT & NEBENTÄTIGKEIT ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                3. Employment Status, Secondary Activities, and Non-Competition
              </h2>
              <p>
                The operator is currently engaged in full-time salaried employment. This website is operated entirely in a private capacity, during personal free time, and without use of any employer resources, facilities, systems, proprietary information, or working time. It does not constitute a <em>Nebentätigkeit</em> (secondary occupation or side activity) in the legal sense of the term as defined under German employment law, labor regulations, or the operator&apos;s employment agreement, for the following reasons:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>No remuneration, payment, commission, or economic benefit of any kind is received in connection with the operation or content of this website.</li>
                <li>No services are rendered through this website to third parties, whether gratuitously or for consideration.</li>
                <li>The website does not compete with the business, products, services, or commercial activities of the operator&apos;s current or former employer(s).</li>
                <li>No confidential, proprietary, classified, or otherwise protected information belonging to any current or former employer is disclosed, referenced, derived from, or implied by the content of this website. All professional information presented herein is based on publicly available facts and the operator&apos;s personal recollection and assessment.</li>
                <li>The maintenance of this website does not impair, interfere with, or otherwise affect the operator&apos;s capacity to fulfill his contractual obligations toward his employer.</li>
                <li>No trade secrets, client lists, technical specifications, project particulars, pricing data, or internal commercial intelligence of any employer are contained in or inferrable from the content of this website.</li>
              </ul>
              <p className="mt-3">
                Accordingly, the operation of this website does not trigger any notification obligation under § 60 HGB (prohibition of competing activities for commercial agents), any implied or express contractual non-compete clause, or any duty arising from the general duty of loyalty owed by an employee under §§ 241 (2) and 242 BGB. To the extent that any applicable employment contract requires prior consent for secondary activities, the operator asserts that this website does not constitute such an activity, as it involves no occupational performance, no economic consideration, and no competitive element. In the event of any ambiguity, the operator has taken or will take appropriate steps to seek clarification from the relevant employer in accordance with applicable contractual and statutory obligations.
              </p>
            </div>

            {/* ── 4. CONFLICT OF INTEREST ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                4. Conflict of Interest Statement
              </h2>
              <p>
                The operator explicitly declares that no actual, apparent, or potential conflict of interest exists between the content and purpose of this website and the operator&apos;s duties and obligations to his current or former employer(s), clients, or contracting parties. Specifically:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>This website does not solicit clients, business partners, suppliers, or employees of any current or former employer of the operator.</li>
                <li>This website does not market competing products or services in any market segment in which the operator&apos;s employer operates.</li>
                <li>This website does not leverage, appropriate, or commercially exploit employer-specific knowledge, relationships, goodwill, or resources.</li>
                <li>The operator&apos;s professional affiliations referenced on this website are mentioned solely in the context of describing a personal career history and not for the purpose of creating the impression of any ongoing commercial relationship, endorsement, or partnership.</li>
              </ul>
              <p className="mt-3">
                This website does not constitute a competing business within the meaning of § 60 HGB, § 74 HGB, or any equivalent provision of German or European labor law. The display of professional experience and qualifications on a personal portfolio website is a universally recognized and legally protected exercise of the right to free professional self-presentation, as guaranteed inter alia by Art. 12 (1) of the German Basic Law (Grundgesetz – freedom of occupation) and Art. 2 (1) GG (general freedom of action).
              </p>
            </div>

            {/* ── 5. DEEPDOCK ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                5. DEEPDOCK Research Initiative
              </h2>
              <p>
                DEEPDOCK (deepdock.xyz) is a private, non-commercial, non-profit research initiative concerning autonomous maritime systems, conducted by the operator entirely in personal free time since 1999. It is not a company, a registered legal entity, a commercial enterprise, or a source of income. It does not offer, sell, license, or deliver any products, services, software, or consulting to any third party. It has no clients, no revenues, no employees, and no commercial purpose.
              </p>
              <p className="mt-3">
                DEEPDOCK is an intellectual and exploratory research interest of a purely academic nature. Its subject matter — maritime autonomy, artificial intelligence in naval environments — represents a broad, interdisciplinary scientific field of study. Interest in or publication of general scientific and technological concepts in this field does not, in itself, constitute a competing activity with any defense, naval, or technology company, including the operator&apos;s current employer. Academic and personal interest in a field of technology is not prohibited by any provision of German labor law, general civil law, or standard employment contract terms.
              </p>
              <p className="mt-3">
                No classified, sensitive, restricted, or otherwise protected information obtained through any employment relationship has been used in, contributed to, or disclosed through DEEPDOCK or this website. The operator complies fully with all applicable obligations under German law (including §§ 17–18 UWG — protection of trade secrets), European trade secret law (Directive (EU) 2016/943, implemented in Germany as GeschGehG), and any applicable contractual confidentiality obligations.
              </p>
            </div>

            {/* ── 6. NON-AFFILIATION ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                6. Non-Affiliation and Non-Endorsement
              </h2>
              <p>
                This website is not affiliated with, sponsored by, endorsed by, or representative of THALES Group, RWTH Aachen University, DNV, ThyssenKrupp, ThyssenKrupp Marine Systems (TKMS), digitalsalt, or any other organization, institution, or entity referenced herein. All such references appear solely in the context of the operator&apos;s personal and professional biography and serve a purely informational and historical purpose. No currently existing business, contractual, or representative relationship with any such organization is implied by the content of this website, unless explicitly stated.
              </p>
              <p className="mt-3">
                Company names, logos, and trademarks displayed on this website are the property of their respective owners. They are reproduced for identification and informational purposes only, under the doctrine of nominative fair use (entsprechend § 23 MarkenG), and their appearance on this website does not constitute or imply endorsement, partnership, agency, or sponsorship of any kind.
              </p>
            </div>

            {/* ── 7. LIABILITY FOR CONTENT ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                7. Liability for Content (Haftung für Inhalte)
              </h2>
              <p>
                The content of this website has been compiled with the utmost care. However, the operator cannot guarantee the accuracy, completeness, or timeliness of the information provided. As a private individual operating a personal website, the operator&apos;s liability for content is governed by § 7 (1) TMG: the operator is responsible for its own content under general laws. However, pursuant to §§ 8–10 TMG, there is no obligation to monitor transmitted or stored third-party information or to investigate circumstances pointing to illegal activity, unless there is concrete knowledge of a specific infringement.
              </p>
              <p className="mt-3">
                Any liability for content is excluded to the fullest extent permitted by applicable law. In particular, no liability is assumed for the accuracy of career information presented herein from the perspective of any third party, for decisions made by any person in reliance on the content of this website, or for any misinterpretation of professional experience, qualifications, or roles described on this website.
              </p>
            </div>

            {/* ── 8. LIABILITY FOR EXTERNAL LINKS ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                8. Liability for External Links (Haftung für Links)
              </h2>
              <p>
                This website contains links to external third-party websites. The operator has no influence over the content of those websites and therefore cannot accept any liability for their content. The respective provider or operator of those linked websites is responsible for their content. Linked websites were verified at the time of linking and were found to be free of apparent legal violations. Permanent monitoring of linked external content is not reasonable without concrete indications of an infringement. Upon notification of legal violations, such links will be removed immediately.
              </p>
            </div>

            {/* ── 9. COPYRIGHT ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                9. Copyright (Urheberrecht)
              </h2>
              <p>
                The content and works on this website created by the operator are subject to German copyright law (Urheberrechtsgesetz — UrhG). Reproduction, editing, distribution, or any form of exploitation beyond the limits of copyright law requires the prior written consent of the operator. Downloads and copies of this website are permitted only for private, non-commercial use. Where content on this website was not created by the operator, third-party copyrights are respected and third-party content is identified as such. Should any copyright infringement be brought to the operator&apos;s attention, the relevant content will be removed immediately.
              </p>
            </div>

            {/* ── 10. DATA PROTECTION ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                10. Data Protection (Datenschutz)
              </h2>
              <p>
                This website does not collect, store, or process personal data beyond what is technically necessary for the operation of the web server and the delivery of website content. No analytics tools, tracking cookies, or advertising networks are employed on this website. No user accounts, registration forms, or persistent data collection mechanisms are operated. Any personal data voluntarily provided through the contact form is used solely for the purpose of responding to the enquiry and is not shared with third parties. The operator complies with applicable data protection law, in particular the General Data Protection Regulation (GDPR / DSGVO) and the German Federal Data Protection Act (BDSG).
              </p>
            </div>

            {/* ── 11. GOVERNING LAW ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                11. Governing Law and Jurisdiction
              </h2>
              <p>
                This website is operated and maintained by a private individual resident in Germany. To the extent that any legal dispute arises in connection with this website, German law shall apply, excluding its conflict-of-law provisions. For disputes with consumers, the mandatory consumer protection provisions of the consumer&apos;s country of residence remain unaffected. The EU Online Dispute Resolution platform is available at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ec.europa.eu/consumers/odr</a>; however, the operator is neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board (Verbraucherschlichtungsstelle), as this is a non-commercial personal website.
              </p>
            </div>

            {/* ── 12. GENERAL LIMITATION OF LIABILITY ── */}
            <div>
              <h2 className="font-sans text-[9px] font-semibold text-ink mb-1 uppercase tracking-wide">
                12. General Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, the operator excludes all liability for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with access to or use of this website, reliance on its content, or interpretation of the information presented herein. This includes, without limitation, liability for loss of profits, loss of data, business interruption, or reputational harm. This limitation applies regardless of the legal theory under which any claim is brought. Nothing in this disclaimer shall be construed to limit liability for death or personal injury resulting from negligence, fraud, or fraudulent misrepresentation, or any other liability that cannot be excluded by law.
              </p>
            </div>

            {/* ── FOOTER ── */}
            <div className="border-t border-hairline pt-6 space-y-2">
              <p className="text-[7px] text-muted">
                © 1998–2026 Dipl.-Ing. Georgios Nanos, MBA. All rights reserved.
              </p>
              <p className="text-[7px] text-muted">
                This disclaimer was last reviewed in June 2026. The operator reserves the right to update or amend this disclaimer at any time without prior notice.
              </p>
              <p className="text-[7px] text-muted italic">
                This disclaimer is provided for informational purposes and does not constitute legal advice. It represents the operator&apos;s good-faith interpretation of applicable law. For binding legal counsel, consult a qualified attorney.
              </p>
            </div>

          </div>
        </FadeIn>
      </SectionBand>
    </>
  );
}
