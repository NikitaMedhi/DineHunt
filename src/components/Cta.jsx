import React from 'react';

export default function Cta() {
  return (
    // { /* CTA Section */ }
    <section id="cta" className="bg-[#2D6A4F]">
      {/*  Flex Container  */}
      <div className="container flex flex-col items-center justify-center px-6 py-24 mx-auto text-center">
        {/*  Heading  */}
        <h2 className="text-5xl font-bold leading-tight text-[#E9F5DB] md:text-4xl md:max-w-2xl">
          Hunt for Good Food, Map Your Way to Deliciousness!
        </h2>
      </div>
    </section>
  );
}
