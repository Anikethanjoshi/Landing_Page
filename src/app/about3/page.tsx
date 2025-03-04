import AboutSectionOne3 from "@/components/About3/AboutSectionOne3";
import AboutSectionTwo3 from "@/components/About3/AboutSectionTwo3";
import Breadcrumb from "@/components/Common/Breadcrumb";

const About3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width Breadcrumb */}
      <Breadcrumb pageName="Python" description="Python" />

      {/* Sections without container */}
      <div className="flex flex-col gap-12 mt-8 md:mt-12 w-full">
        <AboutSectionOne3 />
        <AboutSectionTwo3 />
      </div>
    </div>
  );
};

export default About3;
