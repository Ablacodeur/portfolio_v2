import React, { useEffect, useRef } from "react";
import SideElements from "../SideElements/SideElements";

export default function BlobSpline({ onReady }) {
  const splineRef = useRef(null);

  useEffect(() => {
    const el = splineRef.current;
    if (!el) return;

    let done = false;

    const fireReady = () => {
      if (done) return;
      done = true;
      onReady?.();
    };

    // ✅ certains cas: l'évènement "load" fonctionne
    el.addEventListener("load", fireReady);

    // ✅ fallback: si le load ne fire pas, on ne bloque pas
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
        height: "95%",
        pointerEvents: "none",
        position: "relative",
      }}
    >
      <spline-viewer
        ref={splineRef}
        url="https://prod.spline.design/7zrDzCifAboq0qlU/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
      <SideElements />
    </div>
  );
}
