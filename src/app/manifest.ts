import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio 2.0",
    short_name: "Portfolio",
    description: "Interaction-rich portfolio built with Next.js & Tailwind.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0ea5e9",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}