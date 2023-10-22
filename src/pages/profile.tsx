import React from 'react'
import { Accordion, AccordionProvider } from "@/components/Accordion";

const ProfilePage = () => {
  return (
    <div className="wrap max-w-[500px] mx-auto mt-10 p-10">
      <AccordionProvider>
        <Accordion title='Heading 1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere itaque error quaerat quos, blanditiis minima accusantium,
          perspiciatis quod facilis delectus sit totam aut fugiat possimus
          voluptate expedita ipsam similique.
        </Accordion>
        <Accordion title='Heading 2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere itaque error quaerat quos, blanditiis minima accusantium,
          perspiciatis quod facilis delectus sit totam aut fugiat possimus
          voluptate expedita ipsam similique.
        </Accordion>
        <Accordion title='Heading 3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facere itaque error quaerat quos, blanditiis minima accusantium,
          perspiciatis quod facilis delectus sit totam aut fugiat possimus
          voluptate expedita ipsam similique.
        </Accordion>
      </AccordionProvider>
    </div>
  )
}

export default ProfilePage