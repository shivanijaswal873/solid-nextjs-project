// import { Metadata } from "next";
// import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
// import Feature from "@/components/Features";
// import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
// import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
// import Testimonial from "@/components/Testimonial";

// export const metadata: Metadata = {
//   title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

//   // other metadata
//   description: "This is Home for Solid Pro"
// };

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <Brands />
//       <Feature />
//       <About />
//       <FeaturesTab />
//       <FunFact />
//       <Integration />
//       <CTA />
//       <FAQ />
//       <Testimonial />
//       <Pricing />
//       <Contact />
//       <Blog />
//     </main>
//   );
// }
import { getPage } from "@/sanity/lib/getpage";
import Hero from "@/components/Hero";
// import Feature from "@/sanity/schemaTypes/feature";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";

export default async function Home() {

  const page = await getPage("home");
  console.log(page ,"page")

  return (
    <main>
      {page?.sections?.map((section: any, index: number) => {

        switch (section._type) {

          case "hero":
            return <Hero key={index} data={section} />;

          // case "featureSection":
          //   return <Feature key={index} data={section} />;

          // case "integrationSection":
          //   return <Integration key={index} data={section} />;

          // case "ctaSection":
          //   return <CTA key={index} data={section} />;

          default:
            return null;
        }

      })}
    </main>
  );
}
