import styles from "./page.module.scss";
import { projects, numbers } from "../../src/app/data";
import Card from "../app/components/Card/index";
import Form from "../app/components/Form/index";

import Image from "next/image";

import logoW from "../../public/servalDesignLogoSmallWhite.png";
import logoB from "../../public/servalDesignLogoSmallBlack.png";
import wiki from "../../public/wiki.jpeg";
import MobileHome from "./components/MobileHome";

export default function Home() {
  return (
    <div>
      <div className="desktopPage">
        <div className="ct" id="home">
          <div className="ct" id="portfolio">
            <div className="ct" id="about">
              <div className="ct" id="contact">
                <div className="ct" id="t5">
                  <div className="ct" id="tS">
                    <ul className="menuList" id="menu">
                      <a href="#home">
                        <li className="icon" id="uno">
                          HOME
                        </li>
                      </a>
                      <a href="#portfolio">
                        <li className="icon" id="dos">
                          PORTFOLIO
                        </li>
                      </a>
                      <a href="#about">
                        <li className="icon" id="tres">
                          ABOUT
                        </li>
                      </a>
                      <a href="#contact">
                        <li className="icon" id="cuatro">
                          CONTACT
                        </li>
                      </a>
                    </ul>
                    <div className="page" id="p1">
                      <div className="pageGrid">
                        {numbers.map((cell) => {
                          return (
                            <div key={cell} className="cellCont">
                              <div key={cell} className="cell"></div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="logoContainer">
                        <section>
                          <Image
                            src={logoW}
                            alt="logo"
                            priority={true}
                            className="logoW"
                          />
                          <Image
                            src={logoB}
                            alt="logo"
                            priority={true}
                            className="logoB"
                          />
                        </section>
                      </div>
                    </div>
                    <div className="page2" id="p2">
                      <div className="mediaArea">
                        <section className="icon">
                          <span className="title">PORTFOLIO</span>
                        </section>

                        <main className={styles.main}>
                          {projects.map((project, i) => {
                            const targetScale =
                              1 - (projects.length - i) * 0.05;
                            return (
                              <Card
                                key={`p_${i}`}
                                i={i}
                                {...project}
                                range={[i * 0.25, 1]}
                                targetScale={1}
                                total={projects.length}
                              />
                            );
                          })}
                        </main>
                      </div>
                    </div>
                    <div className="page2" id="p3">
                      <div className="aboutArea">
                        <section className="icon">
                          <span className="title">ABOUT</span>
                        </section>
                        <div className="flex flex-col">
                          <h2 className="wikiTitle">Serval</h2>
                          <hr className="aboutWikiLine"></hr>
                        </div>
                        <div className="aboutWiki">
                          <div className="aboutWikiText">
                            <p>
                              At Serval, we're more than just a web development
                              company - we're architects of digital
                              transformation. Our mission is to empower
                              businesses of all sizes to thrive in the digital
                              landscape through innovative web solutions that
                              captivate audiences and drive results.
                              <br />
                              <br />
                              With a team of passionate developers, designers,
                              and strategists, we specialize in creating bespoke
                              websites and web applications that not only meet
                              but exceed our clients' expectations. From sleek
                              and responsive designs to powerful e-commerce
                              platforms, we leverage cutting-edge technologies
                              and best practices to bring our clients' visions
                              to life.
                              <br />
                              <br />
                              What sets us apart is our commitment to
                              collaboration and excellence. We work closely with
                              our clients every step of the way, from initial
                              concept to final launch, ensuring that every
                              project is tailored to their unique needs and
                              objectives. Our iterative approach allows for
                              flexibility and agility, ensuring that we deliver
                              solutions that evolve with our clients'
                              businesses.
                              <br />
                              <br />
                              Whether you're a startup looking to make your mark
                              online or an established enterprise seeking to
                              elevate your digital presence, Serval is here to
                              help you succeed. Let's embark on this journey
                              together and unleash the full potential of your
                              digital presence.
                            </p>
                          </div>
                          <div className="aboutWikiInfoContainer">
                            <div className="aboutWikiInfo">
                              <h3>Serval</h3>
                              <Image
                                src={wiki}
                                alt="cat"
                                priority={true}
                                className="p-3"
                              />
                              <h4>A serval in Serengeti National Park</h4>
                              <h3>Conservation status</h3>
                              <div className="flex justify-evenly">
                                <div className="wikiCircle">EX</div>
                                <div className="wikiCircle">EW</div>
                                <div className="wikiCircle">CR</div>
                                <div className="wikiCircle">EN</div>
                                <div className="wikiCircle">VU</div>
                                <div className="wikiCircle">NT</div>
                                <div className="wikiCircle2">LC</div>
                              </div>
                              <h4>Least Concern (IUCN 3.1)</h4>
                              <h4>CITES Appendix II (CITES)</h4>
                              <h3>Scientific classification</h3>
                              <div className="aboutWikiClass">
                                <div className="aboutWikiClassLeft">
                                  <p>Domain: </p>
                                  <p>Kingdom: </p>
                                  <p>Phylum: </p>
                                  <p>Class: </p>
                                  <p>Order: </p>
                                  <p>Suborder: </p>
                                  <p>Family: </p>
                                  <p>Subfamily: </p>
                                  <p>Genus: </p>
                                  <p>Species: </p>
                                </div>
                                <div>
                                  <p>Eukaryota</p>
                                  <p>Animalia</p>
                                  <p>Chordata</p>
                                  <p>Mammalia</p>
                                  <p>Carnivora</p>
                                  <p>Feliformia</p>
                                  <p>Felidae</p>
                                  <p>Felinae</p>
                                  <p>Leptailurus</p>
                                  <p>L. serval</p>
                                </div>
                              </div>
                              <h3>Binomial name</h3>
                              <h4>Leptailurus serval</h4>
                            </div>
                          </div>
                        </div>
                        <div className="aboutBottom"></div>
                      </div>
                    </div>
                    <div className="page2" id="p4">
                      <section className="icon">
                        <span className="title">CONTACT</span>
                        <Form />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobilePage">
        <MobileHome />
      </div>
    </div>
  );
}
