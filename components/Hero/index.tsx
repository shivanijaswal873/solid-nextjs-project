"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroProps {
  data: any;
}

const Hero = ({ data }: HeroProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!data) return null;

  return (
    <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              {data.badge}
            </h4>

            <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
              {data.title}{" "}
              <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                {data.highlightText}
              </span>
            </h1>

            <p>{data.description}</p>

            <div className="mt-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder={data.placeholder}
                    className="border-stroke shadow-solid-2 focus:border-primary dark:border-strokedark dark:focus:border-primary rounded-full border px-6 py-2.5 focus:outline-hidden dark:bg-black dark:shadow-none"
                  />

                  <button className="hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300">
                    {data.buttonText}
                  </button>
                </div>
              </form>

              <p className="mt-5 text-black dark:text-white">
                {data.bottomText}
              </p>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <div className="relative aspect-[700/444] w-full">
                {data?.heroImageLight?.asset?.url && (
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src={data?.heroImageLight?.asset.url}
                    alt="Hero"
                    fill
                  />
                )}

                {data.heroImageDark?.asset?.url && (
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src={data?.heroImageDark?.asset.url}
                    alt="Hero"
                    fill
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
