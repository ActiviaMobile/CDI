import * as React from "react"

const HorizontalShadow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={841.89}
    height={48.999}
    xmlSpace="preserve"
    {...props}
  >
    <defs>
      <path id="a" d="M0 0h841.889v48.999H0z" />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <radialGradient
      id="c"
      cx={1354.458}
      cy={-75.998}
      r={55.709}
      gradientTransform="matrix(0 -.3047 6.2164 0 893.378 406.991)"
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
    <path
      opacity={0.3}
      clipPath="url(#b)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="url(#c)"
      d="M420.947-22.686c191.278 0 346.343 7.6 346.343 16.973 0 9.375-155.064 16.974-346.343 16.974-191.285 0-346.344-7.599-346.344-16.974.001-9.373 155.059-16.973 346.344-16.973z"
    />
  </svg>
)

export default HorizontalShadow