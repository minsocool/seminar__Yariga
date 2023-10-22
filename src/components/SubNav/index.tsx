import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { cn } from "@/util";
import { useRouter } from "next/router";

const ContentStyle = styled.div`
  transition: height 0.2s linear;
  overflow: hidden;
`;

const TabStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 23px;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
`;

interface IItem {
  item: {
    icon: JSX.Element;
    title: string;
    link?: string;
    children?: {
      title: string;
      link: string;
    }[];
  };
}

const SubNav = ({ item }: IItem) => {
  const [heightContent, setHeightContent] = useState<number | undefined>(0);
  const [active, setActive] = useState<boolean | undefined>(false);
  const heightContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (heightContentRef.current)
      setHeightContent(heightContentRef.current.scrollHeight);
  }, [heightContentRef]);

  useEffect(() => {
    if (item.children) {
      const hasActiveChild = item.children.some(
        (item) => item.link === router.asPath
      );

      setActive(hasActiveChild);
    }
  }, [item.children, router.asPath]);

  return (
    <div className="flex flex-col">
      <TabStyle
        onClick={() => setActive(!active)}
        className="text-secondary group transition-all"
      >
        {item.icon}
        <span
          className={cn("text-base font-bold text-secondary transition-all")}
        >
          {item.title}
        </span>
      </TabStyle>

      <ContentStyle
        style={{
          height: active && heightContent ? heightContent : 0,
        }}
      >
        <div ref={heightContentRef}>
          {item?.children?.map((child, index) => {
            return (
              <Link href={child.link} key={index}>
                <div className="flex items-center p-3 gap-5 ml-5">
                  <div
                    className={cn("w-2 h-2 rounded-full transition-all", {
                      "bg-[#475BE8]": child.link === router.asPath,
                      "bg-[#B1B9C1] ": child.link !== router.asPath,
                    })}
                  ></div>
                  {child.title}
                </div>
              </Link>
            );
          })}
        </div>
      </ContentStyle>
    </div>
  );
};

export default SubNav;
