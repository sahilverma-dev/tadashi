import React from "react";
import AccordionCard from "../components/AccordionCard";
import Layout from "../components/Layout";
import { faqData } from "../constansts/faqData";

const Fap = () => {
  return (
    <Layout title="Frequently Asked Questions">
      <div className="w-full p-3 max-w-7xl mx-auto">
        <div className="my-2 md:my-12">
          {faqData?.map((item, index) => (
            <AccordionCard
              key={index}
              first={index === 0}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fap;
