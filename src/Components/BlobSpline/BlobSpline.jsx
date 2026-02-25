import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import SideElements from "../SideElements/SideElements";

export default function BlobSpline({ onReady }) {
  const splineRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const el = splineRef.current;
    if (!el) return;

    let done = false;
    const fireReady = () => {
      if (done) return;
      done = true;
      onReady?.();
    };

    el.addEventListener("load", fireReady);
    const t = setTimeout(fireReady, 3500);

    return () => {
      el.removeEventListener("load", fireReady);
      clearTimeout(t);
    };
  }, [onReady]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ✅ on donne plus de largeur au Spline sur mobile */}
      <div
        style={{
          width: isMobile ? "120%" : "100%",
          height: "100%",
          marginLeft: isMobile ? "-10%" : "0", // centre le 120%
          transform: isMobile ? "scale(0.95)" : "scale(1)",
          transformOrigin: "center",
        }}
      >
        <spline-viewer
          ref={splineRef}
          url="https://prod.spline.design/pZTGKB2LXuO07uZT/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <SideElements />
    </div>
  );
}