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
                title="About Cybersecurity Tools"
                paragraph="Explore a wide range of cybersecurity tools designed to protect and monitor your digital assets."
              />
              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Portswigger" link="https://portswigger.net/" />
                    <List text="Tryhackme" link="https://tryhackme.com/" />
                    <List text="HackTheBox" link="https://www.hackthebox.com/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="RangeForce" link="https://www.rangeforce.com/" />
                  <List text="CyberDefenders" link="https://cyberdefenders.org/" />
                  <List text="CTFtime" link="http://ctftime.org/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="PicoCTF" link="https://picoctf.org/" />
                  <List text="OverTheWire" link="https://overthewire.org/wargames/" />
                  <List text="Cybrary" link="https://www.cybrary.it/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="INE Security" link="https://ine.com/" />
                  <List text="Coursera" link="https://www.coursera.org/" />
                  <List text="Udemy" link="https://www.udemy.com/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="SANS Cyber Aces" link="https://www.sans.org/cyberaces/" />
                  <List text="OWASP" link="https://owasp.org/" />
                  <List text="MITRE ATT&CK" link="https://attack.mitre.org/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Security Onion" link="https://securityonionsolutions.com/" />
                  <List text="Krebs on Security" link="https://krebsonsecurity.com/" />
                  <List text="The Hacker News" link="https://thehackernews.com/" />
                  </div>
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="AlienVault OTX" link="https://otx.alienvault.com/" />
                  <List text="Splunk Security Essentials" link="https://www.splunk.com/" />
                  <List text="LogRhythm Community" link="https://www.exabeam.com/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="VirusTotal" link="https://www.virustotal.com/" />
                  <List text="Shodan" link="https://www.shodan.io/" />
                  <List text="Censys" link="https://censys.io/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="URLScan.io" link="https://urlscan.io/" />
                  <List text="Hybrid Analysis" link="https://www.hybrid-analysis.com/" />
                  <List text="Any.Run" link="https://app.any.run/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Joe Sandbox" link="https://www.joesandbox.com/" />
                  <List text="CyberChef" link="https://gchq.github.io/CyberChef/" />
                  <List text="Autopsy" link="https://www.autopsy.com/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Velociraptor" link="https://www.velociraptor.app/" />
                  <List text="Splunk" link="https://www.splunk.com/" />
                  <List text="ELK Stack" link="https://www.elastic.co/elk-stack/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Graylog" link="https://www.graylog.org/" />
                  <List text="Metasploit" link="https://www.metasploit.com/" />
                  <List text="Burp Suite" link="https://portswigger.net/burp" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="OWASP ZAP" link="https://www.zaproxy.org/" />
                  <List text="PicoCTF" link="https://picoctf.org/" />
                  <List text="PhishTank" link="https://www.phishtank.com/" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="AWS Security Hub" link="https://aws.amazon.com/security-hub/" />
                  <List text="Google Chronicle" link="https://cloud.google.com/chronicle" />
                  <List text="Tenable Nessus" link="https://www.tenable.com/products/nessus" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="OpenVAS" link="https://www.openvas.org/" />
                  <List text="Maltego" link="https://www.maltego.com/" />
                  <List text="SpiderFoot" link="https://www.spiderfoot.net/" />
                  <List text="Sherlock" link="https://github.com/sherlock-project/sherlock" />
                  </div> </div>  </div> </div>   
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
              </div>  </div> </div>  </div> </div>     
    </section>
  );
};

export default AboutSectionOne;
