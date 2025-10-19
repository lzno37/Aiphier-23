// import AutoHome from "@/components/AutoHome";
// import AutoTimeline from "@/components/AutoTime";
// import AutoFea from "@/components/AutoFea";
// import FaQs from "@/components/FaQs";
// import Contact from "@/components/Contact";
// import Comparison from "@/components/Comparison";

// export const metadata = {
//   title: "Automatizaciones con IA para crecer | Aiphier",
//   description:
//     "Automatiza tareas y flujos de varios pasos, integra tus sistemas y decide con analíticas en tiempo real. Consultoría, despliegue y mejora continua.",
// };

// export default function Automations() {
//   return (
//     <div>
//       <AutoHome />
//       <AutoTimeline />
//       <AutoFea />
//       <Comparison />
//       <FaQs />
//       <Contact />
//     </div>
//   );
// }

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CardEc from "@/components/CardEc";
import Voice from "@/components/Voice";
import CalcSection from "@/components/CalcSection";
import Logos from "@/components/Logos";
import DashBoard from "@/components/DashBoard";
import Features from "@/components/Features";
import FaQs from "@/components/FaQs";
import Contact from "@/components/Contact";
import ExploreSol from "@/components/ExploreSol";

export const metadata = {
  title: "Automatizaciones con IA para crecer | Aiphier",
  description:
    "Automatiza tareas y flujos de varios pasos, integra tus sistemas y decide con analíticas en tiempo real. Consultoría, despliegue y mejora continua.",
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Features />
      <CardEc />
      <DashBoard />
      <CalcSection />
      <FaQs />
      <Contact />
    </div>
  );
}
