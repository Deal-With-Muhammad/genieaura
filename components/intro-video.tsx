// Server Component - SEO Optimized with VideoObject Schema
import { IntroVideoPlayer } from "./intro-video-client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);
export default function IntroVideoSection() {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const boxRefs = useRef([]);
  const descriptionRef = useRef();
  const descriptionSplit = new SplitText(descriptionRef.current, {
    type: "words",
  });
  gsap.fromTo(
    descriptionSplit.words,
    { filter: "blur(8px)", opacity: 0 },
    {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.025,
      ease: "sine",
      scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" },
    }
  );

  useEffect(() => {
    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" },
    });

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(
      titleSplit.words,
      {
        willChange: "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.085,
        duration: 1,
        ease: "power2",
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      }
    );

    // Animate each service card
    boxRefs.current.forEach((ref, i) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        { rotationY: 30, scale: 0.6, opacity: 0 },
        {
          delay: i * 0.2,
          rotationY: 0,
          scale: 1,
          opacity: 1,
          duration: 0.75,
          ease: "power1",
          scrollTrigger: { trigger: ref, start: "top bottom" },
        }
      );
    });
  }, []);
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
            <div
              ref={subheadlineBoxRef}
              className="subheadline-box opacity-blur"
              style={{ filter: "blur(8px)" }}
            >
              <h2 className="text-sm  font-medium small-description grey">
                Watch Our Story{" "}
              </h2>
            </div>
            <div className="titlebox">
              <h1 ref={titleRef} className="subheadline white">
                See How We Transform Businesses
              </h1>
            </div>
            <p ref={descriptionRef} className="text-base text-gray-700">
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
