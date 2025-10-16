"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex items-start justify-center py-40 px-6">
      <div className="max-w-4xl w-full   text-black     ">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-gray-700">Last updated: October 2025</p>
        </header>

        <div className="space-y-6 items-start text-gray-600">
          <div>
            <h2 className="text-xl text-gray-700  font-semibold mb-2">
              Information We Collect
            </h2>
            <p className="text-gray-500">
              We may collect information you provide directly (for example, when
              you contact us or request services) and technical data (such as
              cookies and usage data) to improve site performance and deliver
              tailored experiences.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              How We Use Information
            </h2>
            <p className="text-gray-500">
              We use information to deliver services, communicate about
              projects, improve our products, and for security and legal
              compliance.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Sharing & Third Parties
            </h2>
            <p className="text-gray-500">
              We do not sell personal data. We may share information with
              trusted providers who perform services on our behalf, and where
              required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Security
            </h2>
            <p className="text-gray-500">
              We take reasonable measures to protect your data, but no system is
              completely secure. Please contact us if you suspect a security
              issue.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 font-semibold mb-2">
              Contact
            </h2>
            <p className="text-gray-500">
              For privacy questions, reach out to us via the contact form on the
              site or email privacy@yourdomain.com.
            </p>
          </div>
        </div>

        <footer className="mt-10 text-sm text-gray-400">
          <p>
            This policy may be updated occasionally. When we make material
            changes, we will post an updated date at the top of this page.
          </p>
        </footer>
      </div>
    </main>
  );
}
