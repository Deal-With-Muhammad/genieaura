"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionKPI = () => {
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

  // Services data provided by user (Web, App, AI)
  const servicesData = [
    {
      title: "Web Development",
      description:
        "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",
      image:
        "https://cdn.dribbble.com/userupload/16992356/file/original-049acea0cb3b604de901dc87f7599cdd.png?resize=1504x1128&vertical=center",
    },
    {
      title: "App Development",
      description:
        "We design and develop mobile applications that blend performance, usability, and visual appeal. Whether for iOS, Android, or cross-platform, our apps are built to engage users, solve real problems, and adapt as your business grows—ensuring a seamless experience across all devices.",
      image:
        "https://cdn.dribbble.com/userupload/16779043/file/original-f0fa9e97854c1b322ef711072fb0af9e.png?resize=1504x1128&vertical=center",
    },
    {
      title: "AI Automation",
      description:
        "Harness the potential of artificial intelligence to streamline your workflows, predict trends, and unlock new growth opportunities. From intelligent chatbots to predictive analytics, we integrate AI seamlessly into your processes—making them smarter, faster, and more adaptive.",
      image:
        "https://cdn.dribbble.com/userupload/16992356/file/original-049acea0cb3b604de901dc87f7599cdd.png?resize=1504x1128&vertical=center",
    },
  ];

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
    <section className="kpi">
      <div className="kpi-content">
        <div className="textbox">
          <div
            ref={subheadlineBoxRef}
            className="subheadline-box opacity-blur"
            style={{ filter: "blur(8px)" }}
          >
            <Zap className="w-4 h-4 subheadline-box-icon" />
            <h2 className="text-sm font-medium small-description grey">
              Our Premium Services
            </h2>
          </div>
          <div className="titlebox">
            <h1 className="subheadline white" ref={titleRef}>
              Here’s How We Help
            </h1>
          </div>
          <p className="text-base text-gray-700" ref={descriptionRef}>
            We build AI tools and custom software that take the heavy lifting
            <br className="hide-on-desktop" /> off your plate and give you more
            time to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            return (
              <div
                className="group  relative rounded-3xl overflow-hidden h-[400px] transition-all duration-700 ease-out hover:scale-105  hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.1)]"
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
              >
                {/* Full background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full blur-3xl h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay for text readability */}
                </div>

                {/* Content overlaid on image */}
                <div className="relative h-full flex flex-col justify-center p-8 z-10">
                  {/* Service title */}
                  <h3 className="text-3xl font-bold text-black mb-4 transform transition-all duration-700 group-hover:translate-y-[-8px]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-900 text-lg leading-relaxed transition-all duration-700 group-hover:text-black">
                    {service.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 w-16 h-1 bg-black group-hover:w-full transition-all duration-700" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-white transition-all duration-700 rounded-tr-3xl opacity-60 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - changed to black and white theme */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black hover:border-1 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
