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
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleUp,
  faC,
  faCode,
  faCommentSms,
  faDatabase,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
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
        className="mx-auto my-auto p-5 d-flex align-items-center justify-content-start text-dark"
        id="home"
      >
        <Hero />
      </Wrapper>

      {/* {just for example} */}
      {/* <Servicepage/> */}

      {/* detailed info section */}
      <section
        className="mx-auto my-auto p-5 d-flex flex-col justify-content-start bg-white text-dark"
        id="intro"
      >
        <div className="row">
          <div className="col-sm-10 col-md-8 mb-5">
            <h1 className="display-5 fw-bold text-dark mb-5">Introduction</h1>
            <p className="fs-5 .text-dark">
              Are you looking for a Developer? Highly motivated and fast
              learner? I'm here for you!
            </p>
            <p className="fs-5 text-dark">
              Highly skilled and results-driven Software Developer with 5 years
              of experience specializing in React.js. Proficient in performance
              optimization while delivering efficient, responsive, and visually
              appealing user interfaces.
            </p>
            <p className="fs-5 text-dark">
              Adept at troubleshooting and maintaining SEO performance for
              seamless web experience. Committed to enhancing web accessibility
              standards to create inclusive digital products.
            </p>
            <p className="fs-5 text-dark">
              I am always looking for opportunities to learn and grow as a
              developer.
            </p>

            <p className="fs-5 d-flex text-dark my-3">
              <Link
                href="https://www.github.com/sehaj97"
                className="d-flex justify-content-start align-items-center text-dark pr-5"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sehajpreetsingh/"
                className="d-flex justify-content-start align-items-center text-dark"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </Link>
            </p>
            <Link href="/assets/resume.pdf">
              <button class="btn-animated" href="#intro">
                <span>Resume</span>
              </button>
            </Link>
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
      <section
        className="mx-auto my-auto p-5 d-flex flex-col justify-content-start bg-white text-dark"
        id="tech"
      >
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

      <section
        className="mx-auto my-auto p-5 d-flex flex-col justify-content-start bg-white text-dark"
        id="tech"
      >
        <div className="row mb-5">
          <div className="col-sm-10 col-md-8">
            <h1 className="display-5 fw-bold ">Contact</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-10 col-md-8">
            <h2 className="fw-bold display-6 mb-2">Let's Work Together</h2>
            <Link href="mailto:sehajmagan@gmail.com" className="mb-2">
              <button
                class="btn-animated"
                href="#intro"
                style={{ width: "230px" }}
              >
                <span>Call to Action</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="mx-auto my-auto p-5 d-flex flex-col justify-content-start bg-dark text-white"
        id="tech"
      >
        <div className="row mb-5 d-flex flex-col justify-content-center align items-center">
          <p className="fs-5 d-flex my-2">
            <Link
              href="/#home"
              className="d-flex justify-content-start align-items-center"
            >
              <FontAwesomeIcon icon={faAngleUp} size="2x" />
            </Link>
          </p>
          <p className="fs-5 d-flex my-2">
            <Link
              href="https://www.github.com/sehaj97"
              className="d-flex justify-content-start align-items-center pr-5"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sehajpreetsingh/"
              className="d-flex justify-content-start align-items-center pr-5"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </Link>
          </p>
          <div class="text-white">
            <hr />
          </div>
          <p className="fs-5 d-flex my-2">
            © 2023 - Developed by Sehajpreet Singh
          </p>
        </div>
      </section>
    </>
  );
}
