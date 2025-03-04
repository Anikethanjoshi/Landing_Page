import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 flex-1">
        <Breadcrumb pageName="Cyber Security" description="Cyber Security" />
        <div className="flex flex-col gap-12 mt-8 md:mt-12">
          <AboutSectionOne />
          <AboutSectionTwo />
        </div>
      </div>
    </div>
  );
};

export default About;
