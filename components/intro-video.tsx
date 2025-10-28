// Server Component - SEO Optimized with VideoObject Schema
import { IntroVideoPlayer } from "./intro-video-client";

export default function IntroVideoSection() {
  return (
    <>
      {/* VideoObject Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Genie Aura - AI Automation Agency Introduction",
            description:
              "Learn how Genie Aura helps businesses automate repetitive tasks with custom AI solutions. Discover our AI voice agents, custom chatbots, and workflow automation services.",
            thumbnailUrl: "https://coderesults.tech/images/video-thumbnail.jpg",
            uploadDate: new Date().toISOString(),
            contentUrl: "/videos/intro-video.mp4",
            embedUrl: "/videos/intro-video.mp4",
            duration: "PT1M5S", // 1 minute 5 seconds
            publisher: {
              "@type": "Organization",
              name: "Genie Aura",
              logo: {
                "@type": "ImageObject",
                url: "https://coderesults.tech/logo.png",
              },
            },
          }),
        }}
      />

      <div className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20 mt-6">
        <div className="mx-auto max-w-6xl px-6 space-y-12 ">
          <div className="textbox mb-10">
            <div className="subheadline-box">
              <h2 className="text-sm font-medium small-description grey">
                Watch Our Story{" "}
              </h2>
            </div>
            <div className="titlebox">
              <h1 className="subheadline white">
                See How We Transform Businesses
              </h1>
            </div>
            <p className="text-base text-gray-700">
              Watch our introduction to understand how Genie Aura helps
              businesses like yours save time and grow faster with AI
              automation.
            </p>
            <br />
          </div>

          {/* Video Player */}
          <IntroVideoPlayer />
        </div>
      </div>
    </>
  );
}
