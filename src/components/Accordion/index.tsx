import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

const Context = createContext<any>(null);

interface IAccordion {
  title: string;
  children: React.ReactNode;
  index?: number;
}
const Accordion = ({ title, children, index }: IAccordion) => {
  const { activeIndex, onActive } = useContext(Context);

  const contentRef = useRef<HTMLDivElement | any>();
  const heightContent = contentRef.current?.scrollHeight;

  const active = activeIndex === index;
  const _onClick = () => {
    onActive(index);
  };
  return (
    <div className="accordion mt-5">
      <div
        className="heading text-xl bg-white p-5 cursor-pointer shadow-sm"
        onClick={_onClick}
      >
        {title}
      </div>
      <div
        style={{
          height: active ? `${heightContent}px` : 0,
          transition: "0.2s",
          overflow: "hidden",
        }}
      >
        <div
          className="content bg-white border-t-2 border-black p-5"
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const AccordionProvider = ({ children }: { children: any }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const onActive = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <Context.Provider value={{ activeIndex, onActive }}>
      {Children.map(children, (child, index) => cloneElement(child, { index }))}
    </Context.Provider>
  );
};
export { AccordionProvider, Accordion };
