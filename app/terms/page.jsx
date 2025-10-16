"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex items-start justify-center py-40 px-6">
      <div className="max-w-4xl w-full   text-black     ">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Terms of Service
          </h1>
          <p className="mt-2 text-gray-700">Effective date: October 2025</p>
        </header>

        <div className="space-y-6 items-start text-gray-600">
          <div>
            <h2 className="text-xl text-gray-700  font-semibold mb-2">
              Acceptance of Terms
            </h2>
            <p className="text-gray-500">
              By using GenieAura's website and services, you agree to these
              Terms of Service. Please read them carefully.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Services
            </h2>
            <p className="text-gray-500">
              We provide design, development, and consulting services. Project
              scope, deliverables, timelines, and payment terms are agreed in
              separate proposals or contracts.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Payment & Refunds
            </h2>
            <p className="text-gray-500">
              Fees and payment schedules will be specified in your contract. In
              general, deposits are non-refundable except where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Intellectual Property
            </h2>
            <p className="text-gray-500">
              Unless otherwise agreed, GenieAura retains ownership of code,
              assets, and designs until full payment is received. After full
              payment, rights are transferred as specified in the agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-500">
              To the fullest extent allowed by law, GenieAura's liability for
              any claim arising from services is limited to the fees paid for
              the services giving rise to the claim.
            </p>
          </div>
        </div>

        <footer className="mt-10 text-sm text-gray-400">
          <p>
            If you have questions about these Terms, contact us via the contact
            page or email contact@genieaura.com.
          </p>
        </footer>
      </div>
    </main>
  );
}
