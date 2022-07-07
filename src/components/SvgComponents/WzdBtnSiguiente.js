import * as React from "react"

const WzdBtnSiguiente = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={49}
    height={232.081}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="current"
      d="m0 147.488 31.447-31.448L0 84.593z"
    />
    <defs>
      <path id="a" d="M0 0h49v232.081H0z" />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <radialGradient
      id="c"
      cx={614.501}
      cy={120.421}
      r={55.709}
      gradientTransform="matrix(-.3047 0 0 1.7137 181.526 -90.323)"
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
      cx={-5.712}
      cy={116.041}
      rx={16.973}
      ry={95.476}
    />
  </svg>
)

export default WzdBtnSiguiente