/* eslint-disable react/jsx-key */
"use client";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons";
import { useDotButton } from "./Carousel/EmblaCarouselDotButton";
import Fade from "embla-carousel-fade";
import { Works } from "../../components/WorkCarousel";
import { Zap } from "lucide-react";
gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjects = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const contentRef = useRef();
  const imageContainerRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  // GSAP ANIMATIONS

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
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      }
    );

    // description text animation
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

    // image parallax effect
    gsap.fromTo(
      imageContainerRef.current,
      { yPercent: 7.5 },
      {
        yPercent: -7.5,
        scrollTrigger: {
          trigger: ".projects",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  // FOLLOWING CURSOR
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
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

  return (
    <>
      {" "}
      <div className="flex justify-center mb-2">
        <div
          ref={subheadlineBoxRef}
          className="subheadline-box opacity-blur"
          style={{ filter: "blur(8px)" }}
        >
          <Zap className="w-4 h-4 subheadline-box-icon" />
          <h2 className="text-sm font-medium small-description grey">
            Featured Projects
          </h2>
        </div>
      </div>
      <div className="textbox">
        <div className="titlebox">
          <div className="" />
          <h1 className="subheadline white" ref={titleRef}>
            Crafted by GenieAura
          </h1>
        </div>
        <p className="text-base text-gray-700" ref={descriptionRef}>
          Every project we build blends strategy,
          <br className="hide-on-desktop" /> technology, and imagination to give
          our clients an edge that lasts.
        </p>
      </div>
      <Works />
    </>
  );
};
