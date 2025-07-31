import { Container } from "./styles";
import Sagar from "../../assets/Sagar.jpg"
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>📌 About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi! I’m Sagar Chauhan, a frontend developer based in Bangalore with
            2.5+ years of experience building responsive and user-friendly web
            applications.{" "}
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I specialize in React.js, JavaScript (ES6+ & TypeScript), Tailwind
            CSS, Material-UI, and also have experience in Node.js, Python, and
            ASP.NET for backend development.{" "}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Currently, I'm working at UTPL Technologies Pvt. Ltd. as a Junior
            Frontend Developer, where I build scalable web solutions. 📚 Outside
            of work, I love learning about modern frameworks, open-source
            projects, and improving my design skills. ⚡ Tech stack & tools:
            React.js, Next.js, JavaScript, TypeScript, Node.js, Python, Tailwind
            CSS, Material-UI, Redux, Git, MySQL, MongoDB, SQL Server, Supabase,
            etc.{" "}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>🎓 Education</h3>
            <h4> Master of Computer Applications (MCA)</h4>
            <p>
              Dr. A.P.J. Abdul Kalam Technical University Aug 2022 – Aug 2024 |
              First Division{" "}
            </p>
            <p>8.09 CGPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>🎓 Education</h3>
            <h4> Bachelor of Computer Applications (B.C.A.)</h4>
            <p>
              Bachelor of Computer Applications (B.C.A.) Rajarshi School of
              Management & Technology, Varanasi Aug 2017 – Aug 2020 | First
              Division{" "}
            </p>
            <p>7.09 CGPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>💼 Experience 1</h3>
            <h4>Junior Frontend Developer</h4>
            <p>UTPL Technologies Pvt. Ltd., Bengaluru Aug 2024 – Present</p>
            <p>
              ✅ Developing and maintaining responsive web applications using
              React.js, TypeScript, Tailwind CSS, and Material-UI. ✅
              Collaborating with design and backend teams to deliver scalable,
              user-friendly solutions. ✅ Optimizing performance and
              implementing best practices for frontend architecture.
            </p>
            <p>Bangalore, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>💼 Experience 2</h3>
            <h4>Full Stack Developer</h4>
            <p>Fortem Biosciences Pvt. Ltd. July 2022 – Jan 2023 (6 months)</p>
            <p>
              ✅ Worked on the Ultraceuticals project, integrating React.js,
                  FastAPI, and MySQL. 
              ✅ Built machine learning prediction modules
                  in Python and REST APIs using FastAPI. 
              ✅ Handled both frontend
                  and backend tasks, improving product features and data flow.
            </p>
            <p>Bangalore, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>💼 Experience 3</h3>
            <h4>IT Support Engineer & Officer HR</h4>
            <p>
              Jobby Engineers Pvt. Ltd. June 2021 – July 2022 (1 year, 1 month){" "}
            </p>
            <p>
              ✅Provided technical support for IT infrastructure and helped
              streamline internal HR processes. ✅ Managed databases and
              supported website maintenance. ✅ Managed and maintained a team of
              5 IT professionals. ✅ Conducted regular system maintenance and
              troubleshooting.
            </p>
            <p>Mumbai, India</p>
          </div>
        </ScrollAnimation>

        

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
          <p>
            Frontend: React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5,
            CSS3, Tailwind CSS, Material-UI, Bootstrap.
            <br />
            Backend: Node.js, Python (Django, FastAPI), ASP.NET (C#).
            <br />
            Databases: MySQL, MongoDB, SQL Server, Supabase.
            <br />
            Tools & Libraries: Redux, React Router, Axios, React Query, Git,
            GitHub, npm, Netlify.
          </p>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>

          
  
 

        </div>
      </div>
     <div className="about-image">
  <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
    <img src={Sagar} alt="Sagar Chauhan" />
  </ScrollAnimation>
</div>
    </Container>
  );
}
