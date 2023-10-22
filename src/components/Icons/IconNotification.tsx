import * as React from "react";
import { SvgProps } from "../types";
const IconNotification = (props: SvgProps) => (
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
      d="M2 16.596c0-.38.155-.745.429-1.01l1.029-.994a2 2 0 0 0 .61-1.444l-.01-3.153A7.97 7.97 0 1 1 20 9.97v3.2a2 2 0 0 0 .586 1.415l1 1a1.414 1.414 0 0 1-1 2.414H16a4 4 0 0 1-8 0H3.404A1.404 1.404 0 0 1 2 16.596ZM10 18a2 2 0 1 0 4 0h-4Zm8-4.828A4 4 0 0 0 19.172 16H4.879a4 4 0 0 0 1.19-2.858l-.01-3.153A5.97 5.97 0 1 1 18 9.97v3.2Z"
      clipRule="evenodd"
    />
    <circle cx={18.5} cy={5.5} r={3.5} fill="#EB5757" />
  </svg>
);
export default IconNotification;
