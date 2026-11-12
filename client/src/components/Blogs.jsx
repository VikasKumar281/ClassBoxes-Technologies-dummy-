import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'

const blogs = [
  {
    title: 'The Java Talent Crunch: Strategies',
    description:
      'In the ever-evolving landscape of technology, one programming language that continues to stand the test of time is Java.',
    image: blog1,
    link: 'https://www.classboxes.com/the-java-talent-crunch-strategies-for-finding-and-hiring-the-best/'
  },
  {
    title: 'Navigating the High Demand for Java',
    description:
      'In the ever-evolving world of technology, Java remains a steadfast and versatile programming language.',
    image: blog2,
    link: 'https://www.classboxes.com/navigating-the-high-demand-for-java-developers/'
  },
  {
    title: 'Upskilling Your Java Developers: Investing',
    description:
      'In the fast-paced world of software development, staying up-to-date with the latest technologies and skills is essential.',
    image: blog3,
    link: 'https://www.classboxes.com/upskilling-your-java-developers-investing-in-continuous-learning/'
  },
  {
    title: 'Top Qualities to Look for When Recruiting',
    description:
      'In the fast-paced world of software development, Java remains a cornerstone programming language.',
    image: blog4,
    link: 'https://www.classboxes.com/recruiting-java-developers/'
  }
]

export default function Blogs() {
  return (
    <>
      <style>{`
        .blogs-section {
          width: 100%;
          padding: 35px 0 40px;
          background: #fff;
          overflow: hidden;
        }

        .blogs-section .blogs-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .blogs-section .blogs-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 65px;
          gap: 20px;
        }

        .blogs-section .blogs-eyebrow {
          font-size: 19px;
          font-weight: 400;
          color: #303030;
          margin-bottom: 10px;
        }

        .blogs-section .blogs-heading {
          font-size: clamp(38px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.15;
          color: #303441;
          margin: 0;
        }

        .blogs-section .blogs-heading .red {
          color: #f04455;
        }

        .blogs-section .read-all-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 17px 32px;
          min-width: 188px;
          background: #f04455;
          color: #fff;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .blogs-section .read-all-btn:hover {
          background: #303441;
          color: #fff;
          transform: translateY(-3px);
        }

        .blogs-section .blog-card {
          height: 100%;
          background: #f3f3f3;
          border: none;
          border-radius: 0;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blogs-section .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .blogs-section .blog-image-wrapper {
          position: relative;
          width: 100%;
          height: 302px;
          overflow: hidden;
          display: block;
          background: #f3f3f3;
        }

        .blogs-section .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .blogs-section .blog-image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          z-index: 1;
          transition: background 0.4s ease;
        }

        .blogs-section .blog-hover-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f04455;
          color: #fff;
          font-size: 36px;
          font-weight: 300;
          line-height: 1;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 0;
          z-index: 2;
          transition: all 0.35s ease;
        }

        .blogs-section .blog-image-wrapper:hover::before {
          background: rgba(0, 0, 0, 0.38);
        }

        .blogs-section .blog-image-wrapper:hover .blog-image {
          transform: scale(1.07);
        }

        .blogs-section .blog-image-wrapper:hover .blog-hover-icon {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .blogs-section .blog-content {
          padding: 24px 32px 28px;
          min-height: 245px;
          display: flex;
          flex-direction: column;
        }

        .blogs-section .blog-title {
          font-size: 23px;
          line-height: 1.45;
          font-weight: 750;
          color: #f04455;
          margin-bottom: 14px;
        }

        .blogs-section .blog-description {
          font-size: 15px;
          line-height: 1.55;
          color: #252525;
          margin-bottom: 18px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blogs-section .blog-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: #f04455;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          margin-top: auto;
          transition: gap 0.3s ease, color 0.3s ease;
        }

        .blogs-section .blog-link:hover {
          gap: 14px;
          color: #303441;
        }

        .blogs-section .blog-arrow {
          font-size: 22px;
          line-height: 1;
        }

        @media (max-width: 1199px) {
          .blogs-section .blog-image-wrapper {
            height: 260px;
          }

          .blogs-section .blog-content {
            padding: 22px 24px;
          }

          .blogs-section .blog-title {
            font-size: 20px;
          }
        }

        @media (max-width: 991px) {
          .blogs-section {
            padding: 35px 0;
          }

          .blogs-section .blogs-header {
            margin-bottom: 40px;
          }

          .blogs-section .blog-image-wrapper {
            height: 250px;
          }

          .blogs-section .blog-content {
            min-height: 225px;
          }
        }

        @media (max-width: 767px) {
          .blogs-section {
            padding: 30px 0;
          }

          .blogs-section .blogs-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 30px;
          }

          .blogs-section .blogs-eyebrow {
            font-size: 15px;
          }

          .blogs-section .blogs-heading {
            font-size: 38px;
          }

          .blogs-section .read-all-btn {
            padding: 13px 25px;
            font-size: 13px;
          }

          .blogs-section .blog-image-wrapper {
            height: 280px;
          }

          .blogs-section .blog-content {
            padding: 22px 25px;
            min-height: 210px;
          }

          .blogs-section .blog-title {
            font-size: 21px;
          }
        }

        @media (max-width: 480px) {
          .blogs-section .blogs-heading {
            font-size: 33px;
          }

          .blogs-section .blog-image-wrapper {
            height: 240px;
          }

          .blogs-section .blog-content {
            padding: 20px;
          }

          .blogs-section .blog-title {
            font-size: 19px;
          }
        }
      `}</style>

      <section className="blogs-section" id="blogs">
        <div className="container blogs-container">

          <div className="blogs-header">
            <div>
              <p className="blogs-eyebrow">
                KEEP UP TO DATE WITH CLASSBOXES BLOG UPDATES
              </p>

              <h2 className="blogs-heading">
                <span className="red">Latest</span> Blogs
              </h2>
            </div>

            <a
              href="https://www.classboxes.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-all-btn"
            >
              READ ALL BLOGS
            </a>
          </div>

          <div className="row g-4">
            {blogs.map((blog, index) => (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <article className="blog-card">

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-image-wrapper"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                      loading="lazy"
                    />

                    <span className="blog-hover-icon">+</span>
                  </a>

                  <div className="blog-content">
                    <h3 className="blog-title">
                      {blog.title}
                    </h3>

                    <p className="blog-description">
                      {blog.description}
                    </p>

                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Read more
                      <span className="blog-arrow">›</span>
                    </a>
                  </div>

                </article>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
