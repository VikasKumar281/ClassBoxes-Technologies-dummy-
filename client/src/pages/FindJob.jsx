import { Link } from 'react-router-dom'
import FeatureBand from '../components/FeatureBand'
import GetInTouch from '../components/GetInTouch'
import LogoStrip from '../components/LogoStrip'
import RoleGrid from '../components/RoleGrid'
import StatsBand from '../components/StatsBand'
import usePageTitle from '../usePageTitle'
import jobHero from '../assets/brand/job-hero.jpg'

export default function FindJob() {
  usePageTitle('Find a Job – ClassBoxes Technologies')

  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="page-kicker">FINDING JOB IS NOW MORE EASIER</p>
              <h1>
                <span>Finding Jobs?</span>
                <br />
                Direct Apply with Us
              </h1>
              <p>
                Classboxes offer a wide range of opportunities across various industries and skill levels. The company provides valuable resources such as resume writing tips, interview preparation, and career coaching to help job seekers land their dream job. Discover exciting job opportunities in New Jersey, USA, with Classboxes. We are a trusted recruitment brand, connecting top talent with leading companies. Let us help you find a job and take your career to new heights. Join us now.
              </p>
              <p>
                Classboxes values its clients’ needs and works hard to exceed their expectations. The company provides regular feedback and updates throughout the recruitment process to ensure that everyone is informed and up to date. With a commitment to customer satisfaction, Classboxes is the premier choice for job seekers and employers alike.
              </p>
              <div className="hero-actions">
                <a className="cb-btn" href="#inquiry">Apply Now</a>
                <Link className="cb-btn dark" to="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-art">
                <img src={jobHero} alt="Find a job with ClassBoxes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />
      <LogoStrip />

      <FeatureBand
        eyebrow="MORE THAN JUST HR"
        title="Why get a job from ClassBoxes?"
        text="ClassBoxes is recognized for its user-friendly platform and professional support, making the job search process smoother and more productive for job seekers. By creating a talented and innovative workforce for the future, ClassBoxes provides exciting growth opportunities and a fulfilling career path for its employees. Overall, selecting ClassBoxes can be an outstanding decision for any job seeker seeking thrilling job opportunities and a supportive partner in their career path."
        items={['High quality jobs', 'Immediate joining', 'Zero hiring cost', '12 Month Support']}
      />

      <RoleGrid />

      <GetInTouch
        source="find-a-job"
        text="Feel free to contact us anytime for any queries or assistance. We are always available to help."
      />
    </main>
  )
}
