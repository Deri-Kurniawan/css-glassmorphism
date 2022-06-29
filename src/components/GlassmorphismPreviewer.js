import React from "react";
import { hexToRGBA } from "../utils/colorConverter";
import "../styles/GlassmorphismPreviewer.css";

export default function GlassmorphismPreviewer({
  bgHexColor,
  bgOpacity,
  filterBlur,
  borderRadius,
  borderOpacity,
}) {
  const glassmorphismStyles = {
    backgroundColor: hexToRGBA(bgHexColor, bgOpacity),
    backdropFilter: `blur(${filterBlur}px)`,
    WebkitBackdropFilter: `blur(${filterBlur}px)`,
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: `${borderRadius}px`,
    border: `1px solid ${hexToRGBA(bgHexColor, borderOpacity)}`,
  };

  return (
    <div className="glassmorphismPreviewer" style={glassmorphismStyles}></div>
  );
}
