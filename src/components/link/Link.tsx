import React from 'react';
import { LinkNext } from '@/util';
import { ILinkProps } from './type';



const Link = (props: ILinkProps) => {
  return (
    <LinkNext {...props} href={props.href}>
      {props.children}
    </LinkNext>
  );
};

export default Link;
