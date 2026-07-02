import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Problem from "@/components/Problem";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Announcement />
      <Header />
      <Hero />
      <TrustMarquee />
      <Problem />
      <Stats />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
