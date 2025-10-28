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
        "https://cdn.dribbble.com/userupload/17922532/file/original-d82d086e0aecdc408f71b055633e9d57.png?resize=1504x1128&vertical=center",
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
                className="group relative bg-[#fafafa] bg-gradient-to-b from-[#fafafa] to-[#eaeaea] border-1 border-[#eaeaea] rounded-4xl p-6 hover:bg-slate-700   transition-colors duration-500 ease-in-out"
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
              >
                {/* Image */}
                <div className="w-full mb-6 rounded-lg overflow-hidden relative h-40">
                  <img
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold text-black  mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700   mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                {/* <button className="w-full cursor-pointer mt-auto py-3 px-4 rounded-xl bg-black text-white font-medium transition-all duration-300 group-hover:bg-white group-hover:text-black  ">
                  Learn More
                </button> */}

                {/* Decorative grid (kept subtle) */}
                {/* <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <div className="grid grid-cols-8 gap-1 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-black rounded-sm group-hover:bg-white"
                      />
                    ))}
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - changed to black and white theme */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black hover:border-1 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
};
