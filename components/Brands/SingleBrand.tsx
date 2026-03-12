import Image from "next/image";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: any) => {

  return (
    <motion.a
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
       transition={{ duration: 1, delay: 0.1}}
      viewport={{once:true}}
      href={brand?.href}
      className=" animate_top mx-w-full relative block h-10 w-[98px]"
    >

      {brand?.image?.asset?.url && (
        <Image
          src={brand.image.asset.url}
          alt="img"
          fill
           className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        />
      )}

      {brand?.imageDark?.asset?.url && (
        <Image
          src={brand.imageDark.asset.url}
          alt="img"
          fill
           className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        />
      )}

    </motion.a>
  );
};

export default SingleBrand;