import * as React from "react"
import { SvgProps } from "../types"
const IconProperty = (props: SvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m12.758 4.872-6 1.5a1 1 0 0 0-.758.97V20h8V5.842a1 1 0 0 0-1.242-.97ZM16 10v10h2v-9a1 1 0 0 0-1-1h-1Zm4 12h1a1 1 0 1 0 0-2h-1v-9a3 3 0 0 0-3-3h-1V5.842a3 3 0 0 0-3.728-2.91l-6 1.5A3 3 0 0 0 4 7.342V20H3a1 1 0 1 0 0 2h17Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 17a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
        />
    </svg>
)
export default IconProperty
