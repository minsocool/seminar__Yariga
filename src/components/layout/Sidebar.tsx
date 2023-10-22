import Link from "../link/Link";
import React from "react";
import { cn } from "@/util";
import { css, styled } from "styled-components";
import { sidebarLink } from "@/constants/general.const";
import { useRouter } from "next/router";
import SubNav from "../SubNav";

const LinkStyle = styled.a<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 23px;
  border-radius: 12px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: #475be8;
      color: #fff;
      span {
        color: #fff;
      }
    `};
`;

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="bg-grayfc pt-6 p-4">
      {sidebarLink.map((item, index) => {
        return item.children && item.children.length > 0 ? (
          <SubNav item={item} key={index} />
        ) : (
          item.link && (
            <Link href={item?.link} key={index}>
              <LinkStyle
                active={router.asPath === item.link}
                className={cn("text-secondary group transition-all", {
                  "hover:text-bg-primary": router.asPath !== item.link,
                })}
              >
                {item.icon}
                <span
                  className={cn(
                    "text-base font-bold text-secondary  transition-all",
                    {
                      "group-hover:text-bg-primary":
                        router.asPath !== item.link,
                    }
                  )}
                >
                  {item.title}
                </span>
              </LinkStyle>
            </Link>
          )
        );
      })}
    </div>
  );
};

export default Sidebar;
