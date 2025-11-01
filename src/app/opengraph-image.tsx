import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 72,
          fontWeight: 700,
          background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
          color: "white",
        }}
      >
        Portfolio 2.0
      </div>
    ),
    { ...size }
  );
}