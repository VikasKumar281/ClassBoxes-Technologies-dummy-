
import Hero from '../components/Hero'
import Features from '../components/Features'
import SplitSection from '../components/SplitSection'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Newsletter from '../components/Newsletter'
import Reviews from '../components/Reviews.jsx'
import ScrollReveal from '../components/ScrollReveal'
import Blogs from '../components/Blogs.jsx'

import candidate from '../assets/candidate.png'
import jobImage from '../assets/jobopenings.png'
import skillsImage from '../assets/Testskills.png'

export default function Home() {
  return (
    <>
      <style>{`
        .page-content > * {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        .page-content > section,
        .page-content > .section,
        .page-content > div {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .page-content .section,
        .page-content .reviews-section,
        .page-content .testimonial-section {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        .page-content .container {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        #find-talent,
        #find-job,
        #skills,
        #contact,
        #search {
          scroll-margin-top: 110px;
        }

        #find-talent,
        #find-job,
        #skills {
          padding-top: 25px !important;
          padding-bottom: 25px !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          min-height: auto !important;
        }

        #find-job + #skills {
          padding-top: 20px !important;
          margin-top: 0 !important;
        }

        .reviews-section {
          padding-top: 25px !important;
          padding-bottom: 25px !important;
        }

        @media (max-width: 991px) {
          #find-talent,
          #find-job,
          #skills {
            scroll-margin-top: 100px;
          }
        }
      `}</style>

      <main className="page-content">
        <Hero />

        <ScrollReveal>
          <Features />
        </ScrollReveal>

        <ScrollReveal>
          <SplitSection
            id="find-talent"
            eyebrow="GET YOUR TEAM WORKING RIGHT"
            red="Need Candidates"
            dark="for your Company"
            text="We specialize in finding skilled and motivated candidates for your company. With our extensive network and resources, we can connect you with top-notch candidates who have the skills and experience to fit your company's unique needs"
            button="SHARE YOUR REQUIREMENT"
            to="/find-talent#inquiry"
            image={candidate}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Clients />
        </ScrollReveal>

        <ScrollReveal>
          <SplitSection
            id="find-job"
            reverse
            eyebrow="GET YOUR DREAM COMPANY HERE"
            red="Looking for"
            dark="Job Openings"
            text="We are a leading job-providing company in the US, committed to connecting talented individuals with top-notch employers. Our mission is to help job seekers find their dream jobs while assisting employers in recruiting the best talent for their organizations."
            button="APPLY NOW"
            to="/find-a-job#inquiry"
            image={jobImage}
          />
        </ScrollReveal>

        <ScrollReveal>
          <SplitSection
            id="skills"
            eyebrow="GET YOUR DREAM COMPANY HERE"
            red="Test your Skills"
            dark="Get Direct Offers"
            text="Are you ready to take your skills to the next level? Test your abilities and get direct job offers with our unique platform. Our comprehensive skills assessment and the matching system connect you with companies that value your expertise and are actively seeking individuals with your skill set."
            button="TEST SKILLS NOW"
            to="/test-your-skills#inquiry"
            image={skillsImage}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Reviews />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>

        <ScrollReveal>
          <Blogs />
        </ScrollReveal>

        <ScrollReveal>
          <Newsletter />
        </ScrollReveal>
      </main>
    </>
  )
}
