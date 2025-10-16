"use client";

import { HeroUIProvider } from "@heroui/react";

export const Providers = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
