import * as React from "react"
export default function SvgComponent(props){
const {width , height , route } = props;
    return ( 
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>{"Rectangle 5"}</title>
            <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
        </svg>
    )
}

