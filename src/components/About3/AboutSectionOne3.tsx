"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text, link }) => (
  <Link href={link} passHref>
    <p className="mb-4 flex items-center text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg px-4 py-2">
      <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  </Link>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-gray-100 dark:bg-gray-900 px-6 md:px-12 lg:px-20 w-full">
      <div className="border-b border-gray-300 dark:border-gray-700 pb-16 md:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              title="About Python Tools"
              paragraph="Explore a wide range of AI & ML tools designed to enhance your development experience."
            />
            <div className="grid grid-cols-2 gap-6 mt-6">
              <List text="TensorFlow" link="https://www.tensorflow.org/" />
              <List text="PyTorch" link="https://pytorch.org/" />
              <List text="Scikit-Learn" link="https://scikit-learn.org/" />
              <List text="Keras" link="https://keras.io/" />
              <List text="XGBoost" link="https://xgboost.ai/" />
              <List text="LightGBM" link="https://lightgbm.readthedocs.io/" />
              <List text="OpenCV" link="https://opencv.org/" />
              <List text="Hugging Face Transformers" link="https://huggingface.co/docs/transformers/index" />
              <List text="FastAI" link="https://docs.fast.ai/" />
              <List text="MLflow" link="https://mlflow.org/" />
            </div>
          </div>

          <div>
            <div className="relative mx-auto max-w-[450px]">
              <Image
                src="/images/about/about-image.svg"
                alt="AI & ML Tools"
                width={500}
                height={500}
                className="rounded-lg shadow-lg dark:hidden"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="AI & ML Tools Dark Mode"
                width={500}
                height={500}
                className="hidden rounded-lg shadow-lg dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
