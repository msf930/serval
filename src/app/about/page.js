import styles from "./page.module.scss";
import MobileNav2 from "../components/MobileNav2";
import Image from "next/image";

import wiki from "../../../public/wiki.jpeg";

export default function About() {
  return (
    <div className={styles.main}>
      <MobileNav2 />
      <div>
        <div className={styles.headerCont}>
          <h1>ABOUT</h1>
        </div>
        <div className={styles.aboutCont}>
          <h2 className={styles.wikiTitle}>Serval</h2>
          <hr className={styles.aboutWikiLine}></hr>
        </div>
        <div className={styles.content}>
          <div className={styles.introCont}>
            <p>
              At Serval, we&apos;re more than just a web development company -
              we&apos;re architects of digital transformation. Our mission is to
              empower businesses of all sizes to thrive in the digital landscape
              through innovative web solutions that captivate audiences and
              drive results.
            </p>
          </div>
          <div className={styles.aboutWikiInfoContainer}>
            <div className={styles.aboutWikiInfo}>
              <h3>Serval</h3>
              <Image
                src={wiki}
                alt="cat"
                priority={true}
                className={styles.aboutImage}
              />
              <hr className={styles.aboutWikiLine2}></hr>
              <h4>A serval in Serengeti National Park</h4>
              <h3>Conservation status</h3>
              <div className="flex justify-evenly">
                <div className={styles.wikiCircle}>EX</div>
                <div className={styles.wikiCircle}>EW</div>
                <div className={styles.wikiCircle}>CR</div>
                <div className={styles.wikiCircle}>EN</div>
                <div className={styles.wikiCircle}>VU</div>
                <div className={styles.wikiCircle}>NT</div>
                <div className={styles.wikiCircle2}>LC</div>
              </div>
              <h4>Least Concern (IUCN 3.1)</h4>
              <hr className={styles.aboutWikiLine2}></hr>
              <h4>CITES Appendix II (CITES)</h4>
              <div className={styles.sci}>
                <h3>Scientific classification</h3>
                <div className={styles.aboutWikiClass}>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Domain: </p>
                    <p>Eukaryota</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Kingdom: </p>
                    <p>Animalia</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Phylum: </p>
                    <p>Chordata</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Class: </p>
                    <p>Mammalia</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Order: </p>
                    <p>Carnivora</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Suborder: </p>
                    <p>Feliformia</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Family: </p>
                    <p>Felidae</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Subfamily: </p>
                    <p>Felinae</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Genus: </p>
                    <p>Leptailurus</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Species: </p>
                    <p>L. serval</p>
                  </div>
                </div>
              </div>

              <h3>Binomial name</h3>
              <h4>Leptailurus serval</h4>
            </div>
          </div>
          <div className={styles.aboutWikiText}>
            <p>
              With a team of passionate developers, designers, and strategists,
              we specialize in creating bespoke websites and web applications
              that not only meet but exceed our clients&apos; expectations. From
              sleek and responsive designs to powerful e-commerce platforms, we
              leverage cutting-edge technologies and best practices to bring our
              clients&apos; visions to life.
              <br />
              <br />
              Whether you&apos;re a startup looking to make your mark online or
              an established enterprise seeking to elevate your digital
              presence, Serval is here to help you succeed. Let&apos;s embark on
              this journey together and unleash the full potential of your
              digital presence.
            </p>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.content2Cont}>
            <div className={styles.introCont}>
              <p>
                At Serval, we&apos;re more than just a web development company -
                we&apos;re architects of digital transformation. Our mission is
                to empower businesses of all sizes to thrive in the digital
                landscape through innovative web solutions that captivate
                audiences and drive results.
              </p>
            </div>
            <div className={styles.aboutWikiText}>
              <p>
                <br />
                With a team of passionate developers, designers, and
                strategists, we specialize in creating bespoke websites and web
                applications that not only meet but exceed our clients&apos;
                expectations. From sleek and responsive designs to powerful
                e-commerce platforms, we leverage cutting-edge technologies and
                best practices to bring our clients&apos; visions to life.
                <br />
                <br />
                Whether you&apos;re a startup looking to make your mark online
                or an established enterprise seeking to elevate your digital
                presence, Serval is here to help you succeed. Let&apos;s embark
                on this journey together and unleash the full potential of your
                digital presence.
              </p>
            </div>
          </div>

          <div className={styles.aboutWikiInfoContainer}>
            <div className={styles.aboutWikiInfo}>
              <h3>Serval</h3>
              <Image
                src={wiki}
                alt="cat"
                priority={true}
                className={styles.aboutImage}
              />
              <hr className={styles.aboutWikiLine2}></hr>
              <h4>A serval in Serengeti National Park</h4>
              <h3>Conservation status</h3>
              <div className="flex justify-evenly">
                <div className={styles.wikiCircle}>EX</div>
                <div className={styles.wikiCircle}>EW</div>
                <div className={styles.wikiCircle}>CR</div>
                <div className={styles.wikiCircle}>EN</div>
                <div className={styles.wikiCircle}>VU</div>
                <div className={styles.wikiCircle}>NT</div>
                <div className={styles.wikiCircle2}>LC</div>
              </div>
              <h4>Least Concern (IUCN 3.1)</h4>
              <hr className={styles.aboutWikiLine2}></hr>
              <h4>CITES Appendix II (CITES)</h4>
              <div className={styles.sci}>
                <h3>Scientific classification</h3>
                <div className={styles.aboutWikiClass}>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Domain: </p>
                    <p>Eukaryota</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Kingdom: </p>
                    <p>Animalia</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Phylum: </p>
                    <p>Chordata</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Class: </p>
                    <p>Mammalia</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Order: </p>
                    <p>Carnivora</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Suborder: </p>
                    <p>Feliformia</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Family: </p>
                    <p>Felidae</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Subfamily: </p>
                    <p>Felinae</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Genus: </p>
                    <p>Leptailurus</p>
                  </div>
                  <hr className={styles.aboutWikiLine2}></hr>
                  <div className={styles.aboutWikiClassItem}>
                    <p>Species: </p>
                    <p>L. serval</p>
                  </div>
                </div>
              </div>

              <h3>Binomial name</h3>
              <h4>Leptailurus serval</h4>
            </div>
          </div>
        </div>

        <hr className={styles.aboutWikiLine3}></hr>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.buffer}></div>
    </div>
  );
}
