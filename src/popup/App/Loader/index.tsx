import React from "react";

export default function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //       xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "#fff",
        display: "block",
      }}
      //       style="margin:auto;background:#fff;display:block;"
      width="75%"
      height="75%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="scale(-1,1) translate(-100,0)">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            values="360 50 50;240 50 50;120 50 50;0 50 50"
            keyTimes="0;0.333;0.667;1"
            dur="1s"
            keySplines="0.7 0 0.3 1;0.7 0 0.3 1;0.7 0 0.3 1"
            calcMode="spline"
          ></animateTransform>
          <path
            fill="#49af95"
            d="M91,74.1C75.6,98,40.7,102.4,21.2,81c11,9.9,26.8,13.5,40.8,8.7c7.4-2.5,13.9-7.2,18.7-13.3 c1.8-2.3,3.5-7.6,6.7-8C90.5,67.9,92.7,71.5,91,74.1z"
          ></path>
          <path
            fill="#347b69"
            d="M50.7,5c-4,0.2-4.9,5.9-1.1,7.3c1.8,0.6,4.1,0.1,5.9,0.3c2.1,0.1,4.3,0.5,6.4,0.9c5.8,1.4,11.3,4,16,7.8 C89.8,31.1,95.2,47,92,62c4.2-13.1,1.6-27.5-6.4-38.7c-3.4-4.7-7.8-8.7-12.7-11.7C66.6,7.8,58.2,4.6,50.7,5z"
          ></path>
          <path
            fill="#1d463c"
            d="M30.9,13.4C12,22.7,2.1,44.2,7.6,64.8c0.8,3.2,3.8,14.9,9.3,10.5c2.4-2,1.1-4.4-0.2-6.6 c-1.7-3-3.1-6.2-4-9.5C10.6,51,11.1,41.9,14.4,34c4.7-11.5,14.1-19.7,25.8-23.8C37,11,33.9,11.9,30.9,13.4z"
          ></path>
        </g>
      </g>
    </svg>
  );
}
