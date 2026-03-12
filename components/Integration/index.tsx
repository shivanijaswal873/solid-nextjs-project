"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

interface IntegrationProps {
  data: any;
}

const Integration = ({ data }: IntegrationProps) => {

  if (!data) return null;

  return (
    <section>
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">

        <SectionHeader
          headerInfo={{
            title: data?.title,
            subtitle: data?.subtitle,
            description: data?.description,
          }}
        />

      </div>

      <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 max-w-c-1154 relative z-50 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">

        <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">

          {data?.dottedLight?.asset?.url && (
            <Image
              width={1200}
              height={400}
              src={data.dottedLight.asset.url}
              alt="Dotted"
              className="dark:hidden"
            />
          )}

          {data?.dottedDark?.asset?.url && (
            <Image
              width={1200}
              height={400}
              src={data.dottedDark.asset.url}
              alt="Dotted"
              className="hidden dark:block"
            />
          )}

        </div>

        <div className="flex flex-wrap justify-around gap-y-14">

          {data?.items?.map((item: any, index: number) => (
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

              {item?.type === "empty" && item?.logo?.asset?.url && (
                <div className="shadow-solid-7 dark:bg-btndark inline-block rounded-[10px] bg-white p-4.5">
                  <Image
                    width={50}
                    height={50}
                    src={item.logo.asset.url}
                    alt="Brand"
                  />
                </div>
              )}

              {item?.type === "dot" && (
                <div
                  className="rounded-full"
                  style={{
                    backgroundColor: item?.dotColor,
                    width: item?.dotSize || "12px",
                    height: item?.dotSize || "12px",
                  }}
                />
              )}

              {/* {item?.type === "empty" && <div />} */}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Integration;