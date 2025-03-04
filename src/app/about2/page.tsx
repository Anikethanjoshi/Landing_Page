
import AboutSectionOne2 from "@/components/About2/AboutSectionOne2";
import AboutSectionTwo2 from "@/components/About2/AboutSectionTwo2";
import Breadcrumb from "@/components/Common/Breadcrumb";

const About2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 flex-1">
        <Breadcrumb pageName="Full Stack Development" description="Full Stack Development" />
        <div className="flex flex-col gap-12 mt-8 md:mt-12">
          <AboutSectionOne2 />
          <AboutSectionTwo2 />
        </div>
      </div>
    </div>
  );
};

export default About2;
