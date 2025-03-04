
import AboutSectionOne5 from "@/components/About5/AboutSectionOne5";
import AboutSectionTwo5 from "@/components/About5/AboutSectionTwo5";
import Breadcrumb from "@/components/Common/Breadcrumb";




const About5 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 flex-1">
        <Breadcrumb pageName="D-CET" description="D-CET" />
        <div className="flex flex-col gap-12 mt-8 md:mt-12">
          <AboutSectionOne5 />
          <AboutSectionTwo5 />
        </div>
      </div>
    </div>
  );
};

export default About5;
