import dynamic from 'next/dynamic';

const Link = dynamic(() => import("next/link"), {
    ssr: false,
  });



export const LinkNext = Link