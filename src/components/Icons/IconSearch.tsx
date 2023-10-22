import * as React from "react"
import { SvgProps } from "../types"
const IconSearch = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.803 13.864a.75.75 0 0 0 1.06-1.061l-1.06 1.06ZM11.25 7A4.25 4.25 0 0 1 7 11.25v1.5A5.75 5.75 0 0 0 12.75 7h-1.5ZM7 11.25A4.25 4.25 0 0 1 2.75 7h-1.5A5.75 5.75 0 0 0 7 12.75v-1.5ZM2.75 7A4.25 4.25 0 0 1 7 2.75v-1.5A5.75 5.75 0 0 0 1.25 7h1.5ZM7 2.75A4.25 4.25 0 0 1 11.25 7h1.5A5.75 5.75 0 0 0 7 1.25v1.5Zm6.864 10.053-2.792-2.792-1.06 1.06 2.791 2.793 1.06-1.061Z"
    />
  </svg>
)
export default IconSearch
