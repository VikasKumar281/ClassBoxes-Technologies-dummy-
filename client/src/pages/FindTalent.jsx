import { Link } from 'react-router-dom'
import FeatureBand from '../components/FeatureBand'
import LogoStrip from '../components/LogoStrip'
import TalentForm from '../components/TalentForm'
import RoleGrid from '../components/RoleGrid'
import StatsBand from '../components/StatsBand'
import usePageTitle from '../usePageTitle'
import talentHero from '../assets/brand/talent-hero.png'

export default function FindTalent() {
  usePageTitle('Find Talent – ClassBoxes Technologies')

  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="page-kicker">FINDING TALENT IS NOW MORE EASIER</p>
              <h1>
                <span>Hire the Best Talent</span>
                <br />
                at Zero Cost with ClassBoxes
              </h1>
              <p>
                ClassBoxes is a unique platform that provides a solution for companies and organizations seeking to hire the best talent at zero cost. With ClassBoxes, businesses can connect with a pool of talented individuals who are eager to work and gain experience in their chosen fields.
              </p>
              <div className="hero-actions">
                <a className="cb-btn" href="#inquiry">Drop Requirements</a>
                <Link className="cb-btn dark" to="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-art">
                <img src={talentHero} alt="Hire dedicated employees in the USA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />
      <LogoStrip />

      <FeatureBand
        eyebrow="MORE THAN JUST HR"
        title="Why hire from ClassBoxes?"
        text="ClassBoxes is a cost-effective and efficient solution for businesses seeking to hire the best talent from a diverse pool of young professionals. With its easy-to-use platform and expert support, ClassBoxes can help businesses build a talented and innovative workforce for the future."
        items={['High quality candidates', 'Immediate joining', 'Zero hiring cost', '12 Month Support']}
      />

      <RoleGrid />

      <TalentForm />
    </main>
  )
}
