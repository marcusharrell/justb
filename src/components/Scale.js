import React from "react";

const Scale = ({ color = "#fff" }) => (
  <svg height={"700px"}
       id="Layer_1"
       data-name="Layer 1"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="300 0 150 690">
    <defs>
      {/*<linearGradient id="linear-gradient" x1="362.93" y1="673" x2="362.93" y2="56" gradientUnits="userSpaceOnUse">*/}
      {/*  <stop offset="0" stop-color="#c9c38d" stop-opacity="0.3"/>*/}
      {/*  <stop offset="0.33" stop-color="#c9c38d" stop-opacity="0.31"/>*/}
      {/*  <stop offset="0.45" stop-color="#c9c38d" stop-opacity="0.34"/>*/}
      {/*  <stop offset="0.53" stop-color="#c9c38c" stop-opacity="0.4"/>*/}
      {/*  <stop offset="0.6" stop-color="#c8c28c" stop-opacity="0.49"/>*/}
      {/*  <stop offset="0.66" stop-color="#c8c28b" stop-opacity="0.6"/>*/}
      {/*  <stop offset="0.66" stop-color="#c8c28b" stop-opacity="0.6"/>*/}
      {/*  <stop offset="0.67" stop-color="#c7c087" stop-opacity="0.68"/>*/}
      {/*  <stop offset="0.7" stop-color="#c5bc82" stop-opacity="0.8"/>*/}
      {/*  <stop offset="0.74" stop-color="#c4b97d" stop-opacity="0.89"/>*/}
      {/*  <stop offset="0.78" stop-color="#c3b77a" stop-opacity="0.95"/>*/}
      {/*  <stop offset="0.84" stop-color="#c2b678" stop-opacity="0.99"/>*/}
      {/*  <stop offset="1" stop-color="#c2b678"/>*/}
      {/*</linearGradient>*/}
    </defs>
    <path className="cls-1" stroke={"#c2b678"} fill={"#c2b678"} stroke-miterlimit={10} fill={'url(#linear-gradient)'} d="M401.29,648h9.24c-.94,1.41-17.69,25.38-48.68,25-30-.39-46-23.26-47.1-25H325.1V84.37h-9.82c8.82-16.93,26.8-27.89,46.57-28.35,20.71-.49,40,10.6,49.26,28.35h-9.82Z"/>
    <path className="cls-2" stroke={"#c2b678"} fill={"#c2b678"} stroke-miterlimit={10} d="M411.11,84.32h-9.82v178.3H325.1V84.32h-9.82A54.44,54.44,0,0,1,362.79,56a55.88,55.88,0,0,1,44.67,22.32A44.21,44.21,0,0,1,411.11,84.32Z"/>
    <rect className="cls-3" opacity={0.25} stroke={"#c2b678"} fill={"#c2b678"} stroke-miterlimit={10}  x="325.1" y="263.38" width="76.19" height="200.86"/>
    <path  opacity={0} fill={"#c9c38d"}  stroke-miterlimit={10} d="M410.53,648c-.92,1.38-17.65,25.43-48.68,25-30-.39-46-23.33-47.1-25H325.1V465h76.19V648Z"/>
  </svg>
);

export default Scale;