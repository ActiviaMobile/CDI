import * as React from "react"

const WzdBtnPrev = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={49}
    height={232.082}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="current"
      d="m49 148.085-31.448-31.449L49 85.189z"
    />
    <defs>
      <path id="a" d="M0 .597h49v232.081H0z" />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <radialGradient
      id="c"
      cx={642.383}
      cy={120.828}
      r={55.709}
      gradientTransform="matrix(.3047 0 0 1.7137 -141.022 -90.424)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#231f20",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#231f20",
          stopOpacity: 0,
        }}
      />
    </radialGradient>
    <ellipse
      opacity={0.3}
      clipPath="url(#b)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="url(#c)"
      cx={54.712}
      cy={116.638}
      rx={16.973}
      ry={95.475}
    />
  </svg>
)

export default WzdBtnPrev