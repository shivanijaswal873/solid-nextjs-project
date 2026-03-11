"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAbout } from "@/sanity/lib/getAbout";

const About = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const res = await getAbout();
      setData(res);
    }
    loadData();
  }, []);

  if (!data) return null;

  return (
    <>
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div className="relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
              {data?.imageLight?.asset?.url && (
                <Image
                  src={data.imageLight.asset.url}
                  alt="about"
                  fill
                  className="dark:hidden"
                />
              )}

              {data?.imageDark?.asset?.url && (
                <Image
                  src={data.imageDark.asset.url}
                  alt="about"
                  fill
                  className="hidden dark:block"
                />
              )}
            </motion.div>

            <div className="md:w-1/2">
              <span className="font-medium text-black uppercase dark:text-white">
                <span className="bg-meta text-metatitle mr-4 mb-4 inline-flex rounded-full px-4.5 py-1 text-white uppercase">
                  New
                </span>

                {data?.badge}
              </span>

              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                {data?.heading}

                <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  {data?.highlightText}
                </span>
              </h2>

              <p>{data?.description}</p>

              {data?.points?.map((item: any, index: number) => (
                <div key={index} className="mt-7.5 flex items-center gap-5">
                  <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {item?.number}
                    </p>
                  </div>

                  <div className="w-3/4">
                    <h3 className="text-black dark:text-white">
                      {item?.title}
                    </h3>

                    <p>{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-c-1235 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="font-medium text-black uppercase dark:text-white">
                {data?.secondTitle}
              </h4>

              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                {data?.secondHeading}

                <span className="before:bg-titlebg2 dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  {data?.secondHighlight}
                </span>
              </h2>

              <p>{data?.secondDescription}</p>

              {data?.buttonText && (
                <a
                  href="#"
                  className="group hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5 text-black dark:text-white"
                >
                  <span className="duration-300 group-hover:pr-2">
                    {" "}
                    {data?.buttonText}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              )}
            </div>

            <div className="relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
              {data?.secondImageLight?.asset?.url && (
                <Image
                  src={data.secondImageLight.asset.url}
                  alt="about"
                  fill
                  className="dark:hidden"
                />
              )}

              {data?.secondImageDark?.asset?.url && (
                <Image
                  src={data?.secondImageDark.asset.url}
                  alt="about"
                  fill
                  className="hidden dark:block"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
