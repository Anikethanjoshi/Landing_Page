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
                title="About  AIML Tools"
                paragraph="Explore a wide range of cybersecurity tools designed to protect and monitor your digital assets."
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="TensorFlow" link="https://www.tensorflow.org/" />
                  <List text="PyTorch" link="https://pytorch.org/" />
                  <List text="Scikit-Learn" link="https://scikit-learn.org/" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Keras" link="https://keras.io/" />
                  <List text="XGBoost" link="https://xgboost.ai/" />
                  <List text="LightGBM" link="https://lightgbm.readthedocs.io/" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="CatBoost" link="https://catboost.ai/" />
                  <List text="OpenCV" link="https://opencv.org/" />
                  <List text="Hugging Face Transformers" link="https://huggingface.co/docs/transformers/index" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="FastAI" link="https://docs.fast.ai/" />
                  <List text="MLflow" link="https://mlflow.org/" />
                  <List text="Kubeflow" link="https://www.kubeflow.org/" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="DVC" link="https://dvc.org/" />
                  <List text="Optuna" link="https://optuna.org/" />
                  <List text="Ray" link="https://www.ray.io/" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="ONNX" link="https://onnx.ai/" />
                  <List text="TFLite" link="https://www.tensorflow.org/lite" />
                  <List text="AutoML" link="https://cloud.google.com/automl" />
                  <List text="PyCaret" link="https://pycaret.org/" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="NVIDIA RAPIDS" link="https://rapids.ai/" />
                  <List text="DeepChem" link="https://deepchem.io/" />
                  <List text="Albumentations" link="https://albumentations.ai/" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Detectron2" link="https://detectron2.readthedocs.io/" />
                  <List text="FiftyOne" link="https://voxel51.com/fiftyone/" />
                  <List text="Weights & Biases" link="https://wandb.ai/" />
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
