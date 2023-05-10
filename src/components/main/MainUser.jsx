"use client";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Main from "@/components/main/Main";
import { ColorContext } from "@/context/ColorProvider";

import { useContext } from "react";

const Index = ({ params }) => {
  const { state } = useContext(ColorContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header state={state} />
      <Main className="flex-grow" id={params.id} />
      <Footer />
    </div>
  );
};

export default Index;
