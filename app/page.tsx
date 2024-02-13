import React from "react";
import Hero from "@/components/Hero/Hero";
import ShowCaseItemsList from "@/components/ShowCase/ShowCaseItemsList";


const Home =async () => {

  return (
    <main className={`flex flex-col gap-12 `}>
      <Hero/>
      <section className="sm:p-2 mx-auto md:pt-6 mb">
        <ShowCaseItemsList />
      </section>
    </main>
  );
};

export default Home;
