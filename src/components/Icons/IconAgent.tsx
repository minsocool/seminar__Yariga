import * as React from 'react';
import { SvgProps } from '../types';
const IconAgent = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.5 10.97a4 4 0 0 0 0-7.94A5.977 5.977 0 0 1 16 7a5.977 5.977 0 0 1-1.5 3.97ZM20 20a1 1 0 1 0 2 0v-2a5 5 0 0 0-4.698-4.991 8.007 8.007 0 0 1 2.303 3.503c.252.439.395.947.395 1.488v2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 15a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H7ZM10 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IconAgent;
