"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text, link }) => (
    <Link href={link} passHref>
      <p className="mb-5 flex items-center text-lg font-medium text-body-color hover:text-primary transition-all duration-300 cursor-pointer">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        {text}
      </p>
    </Link>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About DCET"
                paragraph="Explore a wide range of cybersecurity tools designed to protect and monitor your digital assets."
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Official KEA D-CET Website" link="http://kea.kar.nic.in/" />
                  <List text="NCERT Books" link="https://ncert.nic.in/textbook.php" />
                  <List text="Embibe D-CET Prep" link="https://www.embibe.com/" />
                  <List text="Unacademy D-CET Classes" link="https://unacademy.com/" />
                  <List text="BYJU’S Diploma CET Prep" link="https://byjus.com/" />
                  <List text="Testbook D-CET Mock Tests" link="https://testbook.com/" />
                  <List text="Edurev D-CET Study Materials" link="https://edurev.in/" />
                  <List text="Topper D-CET Video Lectures" link="https://www.topperlearning.com/" />
                  <List text="ExamFear Free Video Lessons" link="https://www.examfear.com/" />
                  <List text="Khan Academy Math & Science" link="https://www.khanacademy.org/" />
                  <List text="Physics Wallah Diploma Courses" link="https://www.pw.live/" />
                  <List text="Coursera Engineering Courses" link="https://www.coursera.org/" />
                  <List text="JEE Mains & D-CET Materials" link="https://www.vedantu.com/" />
                  <List text="Previous Year Question Papers" link="https://www.examrace.com/" />
                  <List text="Mock Tests & Quiz" link="https://www.gradeup.co/" />
                  <List text="Aglasem D-CET Study Guide" link="https://aglasem.com/" />
                  <List text="Gate Academy Diploma CET" link="https://www.gateacademy.co.in/" />
                  <List text="CS & IT Engineering Books" link="https://www.geeksforgeeks.org/" />
                  <List text="Electronics & Electrical Basics" link="https://www.electronics-tutorials.ws/" />
                  <List text="Mechanical Engineering Notes" link="https://nptel.ac.in/" />
                  <List text="Chemistry Study Materials" link="https://www.chemguide.co.uk/" />
                  <List text="Maths & Logical Reasoning" link="https://brilliant.org/" />
                  <List text="Aptitude & Logical Reasoning" link="https://www.indiabix.com/" />
                  <List text="Free PDF Books for D-CET" link="https://pdfdrive.com/" />
</div>
                  </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="Cybersecurity Tools"
                  width={500}
                  height={500}
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="Cybersecurity Tools Dark Mode"
                  width={500}
                  height={500}
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
