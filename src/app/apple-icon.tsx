import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          color: "#10B981",
          fontSize: 156,
          fontWeight: 800,
          letterSpacing: "-6px",
          lineHeight: 1,
          fontFamily: "Georgia, serif",
        }}
      >
        S
      </div>
    ),
    size
  );
}
