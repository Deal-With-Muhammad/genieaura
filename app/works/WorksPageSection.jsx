"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "./works.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../Main/Carousel/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, Zap } from "lucide-react";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  WORK_ITEMS,
  INDUSTRIES,
  CASE_STUDIES,
  WORKS_CONTENT,
} from "./works-data";
import { Works } from "../../components/WorkCarousel";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const WorksPageSection = () => {
  const titleRef = useRef();
  const subtitleRef1 = useRef();
  const subtitleRef2 = useRef();
  const descriptionRef = useRef();
  const subdescriptionRef1 = useRef();
  const subdescriptionRef2 = useRef();
  const lineRef = useRef();
  const carouselWrapperRef = useRef();
  const worksItemRef1 = useRef();
  const worksItemRef2 = useRef();
  const worksItemRef3 = useRef();
  const industryImageRefs = useRef([]);
  const subheadlineBoxRef1 = useRef();
  const subheadlineBoxRef2 = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        delay: 0.2,
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.02,
        duration: 0.75,
        ease: "power1",
      }
    );

    // description text animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.6,
    });

    // line animation
    gsap.fromTo(
      lineRef.current,
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
    );

    // work carousel items animation
    gsap.to(worksItemRef1.current, {
      delay: 0.4,
      opacity: 0,
      duration: 1,
      ease: "power1",
    });

    // industry images - dynamic refs
    industryImageRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { width: 0 },
          {
            width: "100%",
            scrollTrigger: {
              trigger: ref,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          }
        );
      }
    });

    // ... rest of existing animations ...
    gsap.to(carouselWrapperRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: carouselWrapperRef.current, start: "top 95%" },
    });

    gsap.to(subheadlineBoxRef1.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: { trigger: subheadlineBoxRef1.current, start: "top 95%" },
    });
    gsap.to(subheadlineBoxRef2.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: { trigger: subheadlineBoxRef2.current, start: "top 95%" },
    });

    const subtitleSplit1 = new SplitText(subtitleRef1.current, {
      type: "words",
    });
    const subtitleSplit2 = new SplitText(subtitleRef2.current, {
      type: "words",
    });
    gsap.fromTo(
      subtitleSplit1.words,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.05,
        duration: 0.75,
        ease: "power2",
        scrollTrigger: { trigger: subtitleRef1.current, start: "top 95%" },
      }
    );
    gsap.fromTo(
      subtitleSplit2.words,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.05,
        duration: 0.75,
        ease: "power2",
        scrollTrigger: { trigger: subtitleRef2.current, start: "top 95%" },
      }
    );

    const subdescriptionSplit1 = new SplitText(subdescriptionRef1.current, {
      type: "words",
    });
    const subdescriptionSplit2 = new SplitText(subdescriptionRef2.current, {
      type: "words",
    });
    gsap.fromTo(
      subdescriptionSplit1.words,
      { filter: "blur(8px)", opacity: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: {
          trigger: subdescriptionRef1.current,
          start: "top 95%",
        },
      }
    );
    gsap.fromTo(
      subdescriptionSplit2.words,
      { filter: "blur(8px)", opacity: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: {
          trigger: subdescriptionRef2.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  // ... existing cursor and carousel logic ...
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  // EMBLA CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ dragFree: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0);

  const {
    prevBtnDisabled: prevBtnDisabled1,
    nextBtnDisabled: nextBtnDisabled1,
    onPrevButtonClick: onPrevButtonClick1,
    onNextButtonClick: onNextButtonClick1,
  } = usePrevNextButtons(emblaApi);

  const {
    prevBtnDisabled: prevBtnDisabled2,
    nextBtnDisabled: nextBtnDisabled2,
    onPrevButtonClick: onPrevButtonClick2,
    onNextButtonClick: onNextButtonClick2,
  } = usePrevNextButtons(emblaApi2);

  const onScroll = useCallback((emblaApi, setProgress) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const handleScroll = () => onScroll(emblaApi, setScrollProgress);
    handleScroll();
    emblaApi
      .on("reInit", handleScroll)
      .on("scroll", handleScroll)
      .on("slideFocus", handleScroll);
    return () =>
      emblaApi
        .off("reInit", handleScroll)
        .off("scroll", handleScroll)
        .off("slideFocus", handleScroll);
  }, [emblaApi, onScroll]);

  useEffect(() => {
    if (!emblaApi2) return;
    const handleScroll = () => onScroll(emblaApi2, setScrollProgress2);
    handleScroll();
    emblaApi2
      .on("reInit", handleScroll)
      .on("scroll", handleScroll)
      .on("slideFocus", handleScroll);
    return () =>
      emblaApi2
        .off("reInit", handleScroll)
        .off("scroll", handleScroll)
        .off("slideFocus", handleScroll);
  }, [emblaApi2, onScroll]);

  return (
    <ReactLenis root>
      <section className="works">
        <div className="works-content">
          <div className="works-content-top">
            <div className="works-content-top-text">
              <div className="works-content-textbox">
                <div className="titlebox">
                  <div className="subpage- " />
                  <h1 className="headline white" ref={titleRef}>
                    {WORKS_CONTENT.hero.title}
                  </h1>
                </div>
                <p
                  className="description grey opacity-blur"
                  ref={descriptionRef}
                >
                  {WORKS_CONTENT.hero.description}
                </p>
              </div>
              <div className="works-content-top-divider" ref={lineRef} />
            </div>
            {/* start */}
            <Works />
            {/* Work carousel */}
          </div>

          <div className="works-industries">
            <div className="works-subtextbox">
              <div
                className="subheadline-box opacity-blur"
                ref={subheadlineBoxRef1}
              >
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">
                  {WORKS_CONTENT.industries.badge}
                </h2>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h1 className="subheadline white" ref={subtitleRef1}>
                  {WORKS_CONTENT.industries.title}
                </h1>
              </div>
              <p className="description grey" ref={subdescriptionRef1}>
                {WORKS_CONTENT.industries.description}
              </p>
            </div>
            <div className="works-industries-container">
              <div className="works-industries-divider" />
              {INDUSTRIES.map((industry, index) => (
                <React.Fragment key={industry.id}>
                  <div className="works-industries-item">
                    <div className="works-industries-item-left">
                      <h2 className="small-subheadline white">
                        {industry.title}
                      </h2>
                    </div>
                    <div className="works-industries-item-right">
                      <div
                        className="works-industries-item-right-imagebox"
                        ref={(el) => (industryImageRefs.current[index] = el)}
                      >
                        <img
                          src={industry.image || "/placeholder.svg"}
                          className="works-industries-item-right-image"
                          alt={industry.alt}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="works-industries-divider" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="hover-cursor" ref={cursor}>
          <p className="small-description text-white">Drag</p>
        </div>

        <br />
        <br />
      </section>
    </ReactLenis>
  );
};
