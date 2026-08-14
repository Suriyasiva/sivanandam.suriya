import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 58,
          fontWeight: 800,
          letterSpacing: "-2px",
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
