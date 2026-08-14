import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_NAME;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#101826",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#0e9488",
            opacity: 0.18,
            top: -140,
            right: -140,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "#4a5ed1",
            opacity: 0.14,
            bottom: -120,
            left: -100,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2dd4bf",
            display: "flex",
          }}
        >
          Личные финансы для начинающих
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 800,
            color: "#ffffff",
            display: "flex",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "#9fb0c3",
            display: "flex",
          }}
        >
          Бюджет, накопления и долги простым языком
        </div>
      </div>
    ),
    { ...size }
  );
}
