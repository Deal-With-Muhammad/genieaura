"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { SectionHero } from "./SectionHero";
import { SectionFooter } from "./SectionFooter";
import { SectionTestimonials } from "./SectionTestimonials";
import { SectionTechstack } from "./SectionTechstack";
import { SectionFlower } from "./SectionFlower";
import { SectionServices } from "./SectionServices";
import { SectionProjects } from "./SectionProjects";
import { SectionKPI } from "./SectionKPI";
import "./main.css";
import { useLayoutEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
// import Loading from "../loading";
import IntroVideoSection from "../../components/intro-video";

const Main = () => {
  const { progress } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (progress === 100) {
      setFadeOut(true);
      lenis?.start();
    }
  }, [progress, lenis]);

  return (
    <ReactLenis root>
      <SectionHero />
      <IntroVideoSection />

      <SectionKPI />
      <div className=" pt-32 overflow-x-hidden">
        <SectionProjects />
      </div>
      <div className="normal-padding" />
      <SectionTestimonials />
      <div className="normal-padding" />
      <SectionTechstack />
      <div className="normal-padding" />
      <div className="hidden sm:block">
        <SectionFlower />
      </div>
    </ReactLenis>
  );
};

export default Main;

{
  /* <SectionServices /> */
}
