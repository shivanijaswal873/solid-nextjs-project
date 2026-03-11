"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFunFact } from "@/sanity/lib/getFunFact";

const FunFact = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const res = await getFunFact();
      setData(res);
    }

    loadData();
  }, []);

  if (!data) return null;

  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-linear-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">

        {data?.leftImage?.asset?.url && (
          <Image
            width={335}
            height={384}
            src={data.leftImage.asset.url}
            alt="shape"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
        )}

        {data?.rightImage?.asset?.url && (
          <Image
            width={132}
            height={132}
            src={data.rightImage.asset.url}
            alt="shape"
            className="absolute bottom-0 right-0 -z-1"
          />
        )}

        {data?.dottedLight?.asset?.url && (
          <Image
            fill
            src={data.dottedLight.asset.url}
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
        )}

        {data?.dottedDark?.asset?.url && (
          <Image
            fill
            src={data?.dottedDark.asset.url}
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />
        )}

        {/* HEADER */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            {data?.title}
          </h2>

          <p className="mx-auto lg:w-11/12">{data?.description}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
          {data?.facts?.map((fact: any, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {fact?.number}
              </h3>

              <p className="text-lg lg:text-para2">{fact?.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;