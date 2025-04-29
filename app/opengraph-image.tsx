import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "PDF2IMG - Convert PDF to Images"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 50,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
          <rect x="10" y="10" width="180" height="180" rx="10" stroke="#2196F3" strokeWidth="10" />
          <circle cx="70" cy="70" r="20" fill="#2196F3" />
          <path d="M40 160 L100 100 L160 160" stroke="#2196F3" strokeWidth="10" />
        </svg>
        <div style={{ marginLeft: 20, fontWeight: "bold", color: "#1e293b" }}>PDF2IMG</div>
      </div>
      <div style={{ fontSize: 48, color: "#64748b", textAlign: "center" }}>Convert PDF to Images Securely</div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
