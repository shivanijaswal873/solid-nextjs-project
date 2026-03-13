"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = ({ data }: any) => {
  if (!data) return null;

  return (
    <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
      <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 md:px-12.5 xl:px-17.5">

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-xl text-center lg:text-left"
          >
            <h2 className="mb-4 text-3xl font-bold text-black xl:text-sectiontitle4">
              {data?.title}
            </h2>

            <p className="text-gray-600">
              {data?.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {data?.image?.asset?.url && (
              <Image
                src={data.image.asset.url}
                width={200}
                height={200}
                alt="cta"
              />
            )}

            <a
              href={data?.buttonLink}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90"
            >
              {data?.buttonText}

              {data?.arrowLight?.asset?.url && (
                <Image
                  src={data.arrowLight.asset.url}
                  width={20}
                  height={20}
                  alt="arrow"
                />
              )}
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CTA;