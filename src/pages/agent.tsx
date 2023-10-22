import { Accordion, AccordionProvider } from "@/components/Accordion";
import React from "react";

const Agent = () => {
  return (
    <div className="wrap max-w-[500px] mx-auto mt-10 p-10">
      <AccordionProvider>
        <Accordion title="This is heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere itaque error quaerat quos, blanditiis minima accusantium,
          perspiciatis quod facilis delectus sit totam aut fugiat possimus
          voluptate expedita ipsam similique.
        </Accordion>
        <Accordion title="This is heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere itaque error quaerat quos, blanditiis minima accusantium,
          perspiciatis quod facilis delectus sit totam aut fugiat possimus
          voluptate expedita ipsam similique.
        </Accordion>
        <Accordion title="This is heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere itaque error quaerat quos, blanditiis minima accusantium,
          perspiciatis quod facilis delectus sit totam aut fugiat possimus
          voluptate expedita ipsam similique.
        </Accordion>
      </AccordionProvider>
    </div>
  );
};

export default Agent;
