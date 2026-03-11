"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { getIntegration } from "@/sanity/lib/getIntegration";

const Integration = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const res = await getIntegration();
      setData(res);
    }

    loadData();
  }, []);

  if (!data) return null;

  return (
    <section>
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
          }}
        />
      </div>

      <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 max-w-c-1154 relative z-50 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="flex flex-wrap justify-around gap-y-10">
          {data.brands?.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="shadow-solid-7 dark:bg-btndark inline-block rounded-[10px] bg-white p-4.5">
                <Image
                  width={50}
                  height={50}
                  src={item.logo.asset.url}
                  alt="Brand"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;
