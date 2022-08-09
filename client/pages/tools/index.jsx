import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import ToolCard from "../../components/ToolCard";
import { toolsData } from "../../constansts/tools";

const Tools = () => {
  return (
    <Layout title="Tools" description="Tools">
      <div className="md:max-w-7xl md:my-20  mx-auto w-full p-1 md:p-3">
        <div className="grid sm:grid-cols-2 w-full gap-4">
          {toolsData.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
