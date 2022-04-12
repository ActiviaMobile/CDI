import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={300}
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M66.5.9c-6.9 1.7-12.6 6.4-15.9 12.9-1.9 3.6-.4-11-31.1 303.2C9.9 415.7 1.7 498.6 1.4 501.2c-.5 4.4-.3 5 2.4 7.8l3 3h15.1c15.8 0 19.1-.7 21-4.4.6-1.1 5-16.3 9.7-33.6 5.9-21.8 9.2-32.2 10.7-33.8l2-2.2h190.4c180.7 0 190.4.1 192.1 1.8 1.1 1.1 5.1 14.2 10.6 34.2 4.9 17.9 9.4 33.3 9.9 34.2.6.9 2.2 2.1 3.4 2.7 3 1.4 30.2 1.5 33.7.1 1.4-.5 3.2-2.2 4-3.8 1.3-2.6-.6-23.8-22.4-246.4C460.7-7.6 463.2 12.6 455.3 6.1c-7.8-6.5 4.8-6.1-199.7-6C153.2.2 68.2.5 66.5.9zm131.3 53.3c4.3 1.3 10.2 6.4 11.7 10.3 1.3 3.1 1.3 25.4 0 27.4-.3.6-1.4 1.1-2.5 1.1-1.2 0-2.9 1.9-4.9 5.4-3.3 5.9-5.4 7.2-9.4 5.7-2.2-.9-2.8-.7-3.8 1-.6 1.1-.9 2.2-.7 2.4.2.2 4.1 1.8 8.7 3.5 9.9 3.8 15 8.1 18.6 15.5 2.4 4.7 2.9 8.1 4.9 30.2 1.3 13.7 2.7 25.6 3.2 26.4.5.8 5.4 7 10.8 13.8 6.9 8.5 9.6 12.5 8.7 13-.7.4-7.1-.6-14.2-2.4l-13-3.2-6.4-7.3c-4-4.5-6.7-8.4-7-10.4-.3-1.7-1.2-8.2-2-14.5-.9-6.3-1.7-11.7-1.9-11.9-.8-.7-1.5 3.3-3.7 20.3-1.2 9.3-2.4 17.3-2.8 17.7-.7.8-62.1-13-63.4-14.2-.5-.4 1.2-11.2 3.8-24 2.6-12.7 4.4-23.8 4.1-24.6-.9-2.5-4.8-1.4-16.6 4.5l-11.5 5.7-1.5 15.7c-.9 8.6-2 16.1-2.5 16.6-.6.5-4 0-8.5-1.3l-7.5-2.2-.3-6.4c-.1-3.6.1-12.9.6-20.7 1.1-18.7.6-18.1 23.7-32.1 9.9-6 19.1-11.6 20.5-12.3 1.6-.8 8-1.5 17-1.8l14.5-.6 2.8-5.3c2.8-5.2 2.8-5.3 1.3-9.9-2.1-6.2-2-14.8.3-19.8 2.5-5.5 9.1-11.2 13.8-12 2.1-.4 4.5-.8 5.3-.9 1.8-.4 5.3.2 9.8 1.6zm-14.4 149.3c52.1 12.4 96.4 22.8 98.7 23.1 2.2.4 5.7 1.8 7.7 3.2 4.3 2.9 26.4 10.5 59.2 20.3 12.9 3.8 24.7 7.5 26.3 8.1 4.6 1.8 4.5 8.2-.2 10.8-1.7.9-42.8-1.7-57.1-3.5-7.9-1.1-14.1-4.7-24.4-14.4-5.3-5-10.7-9.7-11.9-10.5-2.9-1.8-85.4-21.2-86.4-20.3-.4.4 3.6 14.1 8.9 30.5 5.3 16.3 9.9 31 10.2 32.7.3 1.6.2 20.3-.2 41.5-.6 34.4-.9 38.9-2.5 41.3-5.9 9-20 7.7-22.7-2.1-.5-2-1.7-19.7-2.5-39.2l-1.5-35.5-12.6-31.8c-6.9-17.5-12.9-31.5-13.2-31.2-.4.4-2.5 15.4-4.8 33.3-4 32.3-4.2 33.1-13.3 68.1-5.1 19.5-10 36.5-10.8 37.8-2.2 3.3-6.4 5.3-11.4 5.3-3.3 0-4.7-.6-7.5-3.4-3-3-3.4-4.1-3.4-8.4 0-2.7 3.1-19.5 6.9-37.3l6.8-32.4.8-36.5c.4-20.1.4-39.7 0-43.7l-.7-7.2-17.7-4.2c-21.9-5.2-24.1-6.2-24.1-11.5 0-2.2 3.8-5.4 6.4-5.4 1.3 0 45 10.1 97 22.5zm186.5 89.4c1 .6 15.4 15 32.1 32.1 29.2 30.1 30.2 31.2 29.6 34.3-.3 1.8-1.7 4.2-3.2 5.4l-2.5 2.3h-80c-58.9 0-80.6-.3-82.2-1.2-4.6-2.4-6-7.1-3.4-11.3 1.6-2.7 37.6-36.9 40.4-38.3 3.7-2 5.7-1.4 12.9 4.1 8.2 6.4 9.6 7 13.1 5.6 1.4-.5 9.6-7.9 18.2-16.3s16.5-15.8 17.6-16.4c2.5-1.4 5.1-1.5 7.4-.3z" />
    <path d="M76.5 450.7c-1.3 1.3-1.6 2.7-1.2 6.2.4 2.5.9 10.4 1.3 17.4.5 9.1 1.1 13.3 2.1 14.3 1.1 1.1 4.6 1.4 15.1 1.4 7.5 0 14.4-.5 15.2-1 1.6-1 2.8-11.7 2.9-27.7.1-12.7.7-12.3-18.4-12.3-13 0-15.6.3-17 1.7zM400.5 451c-1.7 1.8-1.7 3.4-1.1 18.2.9 22-.2 20.8 18 20.8 12.4 0 14.5-.2 15.8-1.8 1.1-1.2 1.8-6.1 2.6-18.2 1.4-22.5 2.7-21-17.7-21-14.5 0-15.9.2-17.6 2z" />
  </svg>
)

export default SvgComponent
