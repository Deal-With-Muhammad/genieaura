import dynamic from "next/dynamic";
import "./globals.css";
import { SectionFooter } from "./Main/SectionFooter";
import { Navigation } from "./Navigation";

const Providers = dynamic(
  () => import("./Providers").then((mod) => mod.Providers),
  {
    ssr: false, // ⛔ disables server-side rendering
  }
);

export const metadata = {
  title:
    "Genieaura: Custom Website Design, AI Automation & Digital Solutions Agency",

  description:
    "We build stunning, custom designed websites and immersive digital experiences. From expert UI/UX design to advanced 3D motion graphics and tailored full-stack development, Genieaura brings your vision to life.",

  keywords: [
    "custom website design services",
    "best UI/UX design agency",
    "full-stack web development experts",
    "modern website redesign and branding",
    "interactive digital solutions for business",
    "3D motion graphics and animation studio",
    "professional 3D video production",
    "social media management and strategy",
    "creative digital agency for startups",
    "responsive web design and development",
  ],

  openGraph: {
    title:
      "Genieaura: Custom Website Design, 3D Graphics & Digital Solutions Agency",
    description:
      "We build stunning, custom-designed websites and immersive digital experiences. From expert UI/UX design to advanced 3D motion graphics, Genieaura brings your vision to life.",
    images: ["/logo.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <Navigation />
          {children}
          <SectionFooter />
        </Providers>
      </body>
    </html>
  );
}
