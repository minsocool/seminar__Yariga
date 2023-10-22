import Button from "@/components/Button";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Title from "@/components/Title/Title";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";

const Property = () => {
  return (
    <div className="p-[25px]">
      <div className="flex justify-between">
        <Title>Property</Title>

        <Button>+ add property</Button>
      </div>

      <Card className="mt-7 p-5">
        <div className="grid grid-cols-2 gap-16">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <PropertyItem key={index} />
            ))}
        </div>

        <div className="flex justify-between items-center mt-7">
          <div className="">Showing 1 to 10 Properties</div>

          <Pagination />
        </div>
      </Card>
    </div>
  );
};

export default Property;
