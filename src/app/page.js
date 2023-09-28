"use client";
import Hero from "@/components/Hero";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faGithub,
  faNodeJs,
  faCloudflare,
  faCss3,
  faJs,
  faAtlassian,
  faJira,
  faMicrosoft,
  faBootstrap,
  faBitbucket,
  faSearchengin,
  faAccessibleIcon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faC,
  faCode,
  faCommentSms,
  faDatabase,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
`;

export default function Home() {
  return (
    <>
      {/* intro section */}
      <Wrapper
        className="mx-auto my-auto p-5 d-flex align-items-center justify-content-start"
        id="home"
      >
        <Hero />
      </Wrapper>

      {/* {just for example} */}
      {/* <Services/> */}

      {/* detailed info section */}
      <section className="mx-auto my-auto p-5 d-flex flex-col justify-content-start bg-white">
        <div className="row">
          <div className="col-sm-10 col-md-8">
            <h1 className="display-5 fw-bold .text-dark">Introduction</h1>
            <p className="fs-5 .text-dark">
              Are you looking for a Developer? Highly motivated and fast
              learner? I'm here for you!
            </p>
            <p className="fs-5 .text-dark">
              Highly skilled and results-driven Software Developer with 5 years
              of experience specializing in React.js. Proficient in performance
              optimization while delivering efficient, responsive, and visually
              appealing user interfaces.
            </p>
            <p className="fs-5 .text-dark">
              Adept at troubleshooting and maintaining SEO performance for
              seamless web experience. Committed to enhancing web accessibility
              standards to create inclusive digital products.
            </p>
            <p className="fs-5 .text-dark">
              I am always looking for opportunities to learn and grow as a
              developer.
            </p>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-bg-dark mb-3">
              <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
                <h5 className="card-title pb-5">
                  <img
                    src="/assets/frontend.png"
                    className="rounded"
                    alt="..."
                  />
                </h5>
                <p className="card-text fw-bold">Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-bg-dark mb-3">
              <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
                <h5 className="card-title pb-5">
                  <img
                    src="/assets/backend.png"
                    className="rounded"
                    alt="..."
                  />
                </h5>
                <p className="card-text fw-bold">Software Design</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-bg-dark mb-3">
              <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
                <h5 className="card-title pb-5">
                  <img src="/assets/design.png" className="rounded" alt="..." />
                </h5>
                <p className="card-text fw-bold">UI/UX Design</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-bg-dark mb-3">
              <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
                <h5 className="card-title pb-5">
                  <img
                    src="/assets/software.png"
                    className="rounded"
                    alt="..."
                  />
                </h5>
                <p className="card-text fw-bold">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tech skills section */}
      <section className="mx-auto my-auto p-5 d-flex flex-col justify-content-start bg-white">
        <div className="row mb-5">
          <div className="col-sm-10 col-md-8">
            <h1 className="display-5 fw-bold ">Technical Skills</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faHtml5} size="6x" />
            <p className="card-text fw-bold">Html 5</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faJs} size="6x" />
            <p className="card-text fw-bold">Javascript</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faCss3} size="6x" />
            <p className="card-text fw-bold">Css 3</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faReact} size="6x" />
            <p className="card-text fw-bold">React</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faGithub} size="6x" />
            <p className="card-text fw-bold">Github</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faNodeJs} size="6x" />
            <p className="card-text fw-bold">NodeJs</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faJira} size="6x" />
            <p className="card-text fw-bold">Jira</p>
          </div>
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
        </div>
        <div className="row my-5">
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faMicrosoft} size="6x" />
            <p className="card-text fw-bold">Azure Devops</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBootstrap} size="6x" />
            <p className="card-text fw-bold">Bootstrap</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBitbucket} size="6x" />
            <p className="card-text fw-bold">Bitbucket</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faLeaf} size="6x" />
            <p className="card-text fw-bold">Mongo DB</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faDatabase} size="6x" />
            <p className="card-text fw-bold">Sql</p>
          </div>
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
        </div>
        <div className="row mb-6 pb-6">
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <img src="/assets/graphqlicon.png" className="rounded w-75" />
            <p className="card-text fw-bold">GraphQL</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faCode} size="6x" />
            <p className="card-text fw-bold">Axios</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faSearchengin} size="6x" />
            <p className="card-text fw-bold">SEO</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faAccessibleIcon} size="6x" />
            <p className="card-text fw-bold">Web Accessibility</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <img src="/assets/contentful.png" className="rounded w-75" />
            <p className="card-text fw-bold">Contentful CMS</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <img src="/assets/strapi.png" className="rounded w-75" />
            <p className="card-text fw-bold">Strapi CMS</p>
          </div>
          <div className="col d-flex flex-col justify-content-center align-items-center">
            <FontAwesomeIcon icon={faJira} size="6x" />
            <p className="card-text fw-bold">Jira</p>
          </div>
          <div className="col-sm-0 col-md-1 d-flex flex-col justify-content-center align-items-center"></div>
        </div>
      </section>

      {/* experience section */}
      {/* projects section */}
      {/* {contact me} */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-wrapper load-hidden">
            <p className="contact-wrapper__text">Let's Work Together</p>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--resume"
              href="mailto:sehajmagan@gmail.com"
            >
              Call to Action
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
