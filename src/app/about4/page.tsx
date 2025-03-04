
import AboutSectionOne4 from "@/components/About4/AboutSectionOne4";
import AboutSectionTwo4 from "@/components/About4/AboutSectionTwo4";
import Breadcrumb from "@/components/Common/Breadcrumb";




const About4 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 flex-1">
        <Breadcrumb pageName="AI & ML" description="AI & ML" />
        <div className="flex flex-col gap-12 mt-8 md:mt-12">
          <AboutSectionOne4 />
          <AboutSectionTwo4 />
        </div>
      </div>
    </div>
  );
};

export default About4;
