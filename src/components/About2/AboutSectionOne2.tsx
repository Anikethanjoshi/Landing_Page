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
    <section id="about2" className="w-full pt-16 md:pt-20 lg:pt-28">
      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="flex flex-wrap items-center w-full">
          {/* Left Side: Text and List */}
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="About Full Stack Development Tools"
              paragraph="Explore a wide range of cybersecurity tools designed to protect and monitor your digital assets."
            />
            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="NumPy" link="https://numpy.org/" />
                  <List text="Pandas" link="https://pandas.pydata.org/" />
                  <List text="Matplotlib" link="https://matplotlib.org/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="Seaborn" link="https://seaborn.pydata.org/" />
                  <List text="Scikit-Learn" link="https://scikit-learn.org/" />
                  <List text="TensorFlow" link="https://www.tensorflow.org/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="PyTorch" link="https://pytorch.org/" />
                  <List text="OpenCV" link="https://opencv.org/" />
                  <List text="Flask" link="https://flask.palletsprojects.com/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="Django" link="https://www.djangoproject.com/" />
                  <List text="FastAPI" link="https://fastapi.tiangolo.com/" />
                  <List text="Requests" link="https://docs.python-requests.org/en/latest/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="BeautifulSoup" link="https://www.crummy.com/software/BeautifulSoup/" />
                  <List text="Scrapy" link="https://scrapy.org/" />
                  <List text="Pytest" link="https://pytest.org/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="Selenium" link="https://www.selenium.dev/" />
                  <List text="PyPDF2" link="https://pypi.org/project/PyPDF2/" />
                  <List text="Pillow" link="https://pillow.readthedocs.io/en/stable/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="SQLAlchemy" link="https://www.sqlalchemy.org/" />
                  <List text="NetworkX" link="https://networkx.github.io/" />
                  <List text="PyGame" link="https://www.pygame.org/" />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/2">
                  <List text="Plotly" link="https://plotly.com/python/" />
                  <List text="Boto3" link="https://boto3.amazonaws.com/v1/documentation/api/latest/index.html" />
                  <List text="Dash" link="https://dash.plotly.com/" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/about-image.svg"
                alt="Full Stack Development"
                width={500}
                height={500}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="Full Stack Development Dark Mode"
                width={500}
                height={500}
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
