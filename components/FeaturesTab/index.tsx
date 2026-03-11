"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import { getFeaturesTabs } from "@/sanity/lib/getTab";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    async function loadData() {
      const data = await getFeaturesTabs();

      setTabs(data.tabs);

      if (data.tabs?.length > 0) {
        setCurrentTab(data.tabs[0].id);
      }
    }

    loadData();
  }, []);

  if (!tabs.length) return null;

  return (

      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 mb-15 flex flex-wrap justify-center rounded-[10px] border bg-white md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setCurrentTab(tab.id)}
              className={`border-stroke dark:border-strokedark relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === tab?.id
                  ? "active before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px]"
                  : ""
              }`}
            >
              <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  {index + 1}
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  {tab.tabTitle}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="max-w-c-1154 mx-auto"
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={tab.id === currentTab ? "block" : "hidden"}
            >
              <FeaturesTabItem featureTab={tab} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesTab;
