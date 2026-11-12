
import GetInTouch from '../components/GetInTouch'
import LogoStrip from '../components/LogoStrip'
import usePageTitle from '../usePageTitle'
import assist from '../assets/assist.png'

export default function About() {
  usePageTitle('About us – ClassBoxes Technologies')

  return (
    <>
      <style>{`
        .about-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #303542;
          font-family: 'Raleway', sans-serif;
        }

        .about-page .container {
          max-width: 1180px;
        }

        .about-intro {
          position: relative;
          padding: 135px 0 35px;
          background: #ffffff;
          isolation: isolate;
        }

        .about-intro::before {
          content: "";
          position: absolute;
          top: -300px;
          right: -8%;
          width: 85%;
          height: 720px;
          background: #f2f2f3;
          border-radius: 0 0 45% 50%;
          transform: rotate(13deg);
          z-index: -1;
          pointer-events: none;
        }

        .about-intro-content h1 {
          font-size: clamp(38px, 4vw, 58px);
          font-weight: 800;
          line-height: 1.2;
          color: #303542;
          margin-bottom: 30px;
          letter-spacing: -1.5px;
        }

        .about-intro-content h1 span {
          color: #f04455;
        }

        .about-intro-content p {
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          color: #171717;
          margin-bottom: 17px;
          text-align: left;
        }

        .about-overview {
          padding: 35px 0 55px;
          background: #ffffff;
        }

        .about-overview h2 {
          font-size: clamp(38px, 4vw, 58px);
          font-weight: 800;
          color: #303542;
          margin-bottom: 30px;
          letter-spacing: -1.5px;
        }

        .about-overview p {
          font-size: 16px;
          line-height: 1.7;
          font-weight: 500;
          color: #171717;
          margin: 0;
        }

        .about-overview p span {
          color: #f04455;
        }

        .help-section {
          padding: 25px 0 80px;
          background: #ffffff;
        }

        .help-main-title {
          font-size: 38px;
          font-weight: 800;
          color: #202020;
          margin-bottom: 45px;
          letter-spacing: -1px;
        }

        .help-item {
          margin-bottom: 30px;
        }

        .help-item h3 {
          font-size: 27px;
          font-weight: 800;
          color: #171717;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .help-item:hover h3 {
          color: #f04455;
        }

        .help-item p {
          font-size: 15.5px;
          line-height: 1.7;
          color: #202020;
          font-weight: 500;
          margin-bottom: 0;
        }

        .help-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
        }

        .help-image {
          width: 100%;
          max-width: 550px;
          height: auto;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .help-image:hover {
          transform: translateY(-8px);
        }

        @media (max-width: 991px) {
          .about-intro {
            padding: 110px 0 25px;
          }

          .about-intro::before {
            width: 100%;
            right: -25%;
          }

          .about-overview {
            padding: 25px 0 40px;
          }

          .help-section {
            padding: 20px 0 60px;
          }

          .help-main-title {
            font-size: 34px;
            margin-bottom: 35px;
          }

          .help-item h3 {
            font-size: 24px;
          }

          .help-image {
            max-width: 480px;
          }
        }

        @media (max-width: 767px) {
          .about-intro {
            padding: 95px 0 20px;
          }

          .about-intro-content h1,
          .about-overview h2 {
            font-size: 37px;
            margin-bottom: 22px;
          }

          .about-intro-content p,
          .about-overview p {
            font-size: 14.5px;
            line-height: 1.75;
          }

          .about-overview {
            padding: 30px 0 40px;
          }

          .help-section {
            padding: 20px 0 50px;
          }

          .help-main-title {
            font-size: 30px;
            margin-bottom: 30px;
          }

          .help-item {
            margin-bottom: 25px;
          }

          .help-item h3 {
            font-size: 22px;
          }

          .help-item p {
            font-size: 14px;
            line-height: 1.7;
          }

          .help-image-wrapper {
            padding: 0;
          }

          .help-image {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .about-intro-content h1,
          .about-overview h2 {
            font-size: 32px;
          }

          .help-main-title {
            font-size: 27px;
          }

          .help-item h3 {
            font-size: 20px;
          }
        }
      `}</style>

      <main className="about-page">

        <section className="about-intro">
          <div className="container">
            <div className="about-intro-content">
              <h1>
                About <span>ClassBoxes</span>
              </h1>

              <p>
                Classboxes is not only an online learning platform but
                also a reliable recruitment agency in New Jersey, USA.
                We understand the challenges of hiring and recognize
                the significant impact that the right candidate can
                have on the success of an organization. Our expert team
                works tirelessly to connect companies with the most
                skilled professionals in the industry. Trust us to help
                you find the best talent for your organization.
              </p>

              <p>
                Our comprehensive training programs in the most
                advanced technologies are in high demand by companies
                across various industries. We aim to transform ordinary
                learners into expert professionals, making them
                industry-ready and highly sought after by employers.
                Our courses are designed to match the current industry
                and market demands and standards, ensuring that our
                candidates have the skills and knowledge required to
                excel in their roles.
              </p>

              <p>
                At Classboxes, we also provide recruitment services
                to companies looking to hire the best talent. We
                understand the importance of finding the right fit
                for an organization, and we go the extra mile to
                ensure that our candidates are the perfect match.
                We work closely with companies to understand their
                unique requirements and find the most suitable
                candidates from our pool of highly skilled professionals.
              </p>

              <p>
                Our commitment to excellence is reflected in our
                periodic reviews and updates to our training programs
                to keep pace with the latest trends in the industry.
                This approach ensures that our candidates are not
                only industry-ready but also able to adapt to the
                ever-changing demands of the market.
              </p>
            </div>
          </div>
        </section>

        <section className="about-overview">
          <div className="container">
            <h2>Overview</h2>

            <p>
              Classboxes is known to provide best-in-class training
              solutions in cutting-edge technologies like
              <span> Salesforce</span>, Azure, DevOps, Amazon Web
              Services, SailPoint, Splunk, Business Analysis,
              Quality Analysis, Java, Dot Net, Performance Testing,
              and many more.
            </p>
          </div>
        </section>

        <section className="help-section">
          <div className="container">
            <h2 className="help-main-title">
              How can we help you?
            </h2>

            <div className="row align-items-center g-5">
              <div className="col-lg-6">

                <div className="help-item">
                  <h3>Career Guidance</h3>
                  <p>
                    It's important to put effort into choosing a path
                    that leads to a successful career. This can become
                    very easy with the right skills and correct
                    guidance. Classboxes holds expertise in skill
                    building and preparing students to match the
                    expectations of employers.
                  </p>
                </div>

                <div className="help-item">
                  <h3>Expert Instruction</h3>
                  <p>
                    The expert instructors at Classboxes are dedicated
                    to developing technical and interpersonal skills
                    in learners. We have top-notch industry experts
                    excelling in their domains for over two decades.
                  </p>
                </div>

                <div className="help-item">
                  <h3>Lifetime Access</h3>
                  <p>
                    Classboxes provides you full lifetime access to
                    quality course content, student portal, and other
                    resources available in the portal to all
                    registered learners.
                  </p>
                </div>

                <div className="help-item">
                  <h3>Lifelong Learning</h3>
                  <p>
                    Securing the future of our learners is our primary
                    objective, and we strive to provide seamless
                    learning to all our students in a comfortable way.
                  </p>
                </div>

              </div>

              <div className="col-lg-6 text-center">
                <div className="help-image-wrapper">
                  <img
                    src={assist}
                    alt="ClassBoxes Career Guidance and Learning"
                    className="img-fluid help-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoStrip />

        <GetInTouch
          eyebrow="REACH US"
          source="about-us"
          text="Feel free to contact us anytime for any queries or assistance. We are always available to help."
        />

      </main>
    </>
  )
}
