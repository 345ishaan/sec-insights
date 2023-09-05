import * as React from "react";
const LlamaIndexLogo = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="https://www.w3.org/2000/svg"
    xmlnsXlink="https://www.w3.org/1999/xlink"
    width={191}
    height={44}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 .728h190.243v42.671H0z" />
    <path
      fill="url(#b)"
      d="M43.984.728h146.26v42.671H43.984z"
      style={{
        mixBlendMode: "exclusion",
      }}
    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00234 .01042)" />
      </pattern>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="matrix(.00304 0 0 .01042 -.3 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={428}
        height={96}
      />
    </defs>
  </svg>
);
export default LlamaIndexLogo;