"use client";
import { useEffect } from "react";


export default function CallWidget() {

  useEffect(() => {
    const widgetHash = "m0jpnihbe0t19nh0h1iw";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `//widgets.binotel.com/getcall/widgets/${widgetHash}.js`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI, just loads the script
}