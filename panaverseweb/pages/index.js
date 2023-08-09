import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Rough from "@/components/rough";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Section5 />
      <Section7 />
      <Section8 />
      {/* <Rough /> */}
    </>
  );
}
