"use client";

import styles from "./style.module.scss";

import { useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const AboutAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div>
      <div className={styles.cont}>
        <button className={styles.acordionButton} onClick={toggleAccordion}>
          <span className={styles.carrot}>
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          Technologies
        </button>
        <hr className={styles.aboutWikiLine}></hr>
        {isOpen && (
          <div className={styles.body}>
            <p>
              A non-exhaustive list of technologies used at Serval Designs.
              <br />
              <br />
            </p>
            <ul className="list-disc ml-4">
              <li className="mb-1">
                <i>Next.js</i>: an open-source web development framework with
                server-side rendering and static website generation.
              </li>
              <li className="mb-1">
                <i>React</i>: a free and open-source front-end JavaScript
                library for building user interfaces based on components.
              </li>
              <li className="mb-1">
                <i>WordPress.com</i>: a web building platform for
                self-publishing that is popular for blogging and other works.
              </li>
              <li className="mb-1">
                <i>Wix.com</i>: a cloud-based web development platform that
                allows users to create and manage professional websites with
                ease using drag-and-drop tools and customizable templates.
              </li>
              <li className="mb-1">
                <i>Squarespace</i>: is an all-in-one website building and
                hosting platform that enables users to create professional,
                visually stunning websites with ease using its intuitive
                drag-and-drop interface and designer-quality templates.
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={styles.cont}>
        <button className={styles.acordionButton} onClick={toggleAccordion2}>
          <span className={styles.carrot}>
            {isOpen2 ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          Contact
        </button>
        <hr className={styles.aboutWikiLine}></hr>
        {isOpen2 && (
          <div lassName={styles.body}>
            <p>
              Contact Serval Designs for all business inquiries
              <br />
              <br />
            </p>
            <ul className="list-disc ml-4">
              <li className="mb-1">
                <p>
                  To contact Serval Designs directly please call{" "}
                  <a className={styles.link} href="tel:+7209685664">
                    720-968-5664
                  </a>
                </p>
              </li>
              <li className="mb-1">
                <p>
                  To Email Serval Designs please send email to{" "}
                  <a
                    className={styles.link}
                    href="mailto:info@servaldesigns.com"
                  >
                    info@servaldesigns.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutAccordion;
