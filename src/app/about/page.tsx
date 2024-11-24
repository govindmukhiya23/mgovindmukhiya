import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              {/* About Text */}
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Govind, a <span>Software Engineer</span>
                  </h2>
                  <p>
                    I am a dedicated and results-driven professional with proven
                    experience in device testing and artificial intelligence.
                    During my tenure as an intern, I have successfully completed
                    rigorous testing protocols for OnePlus and OPPO devices,
                    ensuring top-notch quality and performance. My passion for
                    technology led me to dive deep into the field of Artificial
                    Intelligence, culminating in a rewarding internship where I
                    applied my skills to real-world challenges. My achievements
                    are backed by certifications reflecting my ongoing
                    commitment to professional growth and excellence.
                  </p>
                </div>
              </div>

              {/* Personal Info */}
              <div className="row">
                <div className="personal-info padd-15">
                  {[
                    { label: "Email", value: "govindmukhiya9963@email.com" },
                    { label: "Degree", value: "Btech" },
                    { label: "Phone", value: "+91 9121438662" },
                    { label: "City", value: "Hyderabad" },
                    { label: "Entry level", value: "Yes" },
                  ].map((info, index) => (
                    <div key={index} className="info-item padd-15">
                      <p>
                        {info.label}: <span>{info.value}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="skills padd-15">
                <div className="row">
                  {[
                    { skill: "HTML5", percent: 80 },
                    { skill: "CSS3", percent: 60 },
                    { skill: "JavaScript", percent: 50 },
                    { skill: "Bootstrap", percent: 70 },
                  ].map((skill, index) => (
                    <div key={index} className="skill-item padd-15">
                      <h5>{skill.skill}</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: `${skill.percent}%` }}
                        />
                        <div className="skill-percent">{skill.percent}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {[
                        {
                          date: "2023 to Present",
                          degree:
                            "Btech - Computer Science and Engineering (AI & ML)",
                          institution: "Vidya Jyothi Institute of Technology",
                          address:
                            "Aziznagar Gate, Chilkur Balaji Road, Hyderabad",
                        },
                        {
                          date: "2020 to 2023",
                          degree: "Diploma - Computer Science and Engineering",
                          institution: "Bandari Srinivas Institute of Technology",
                          address:
                            "Gollapally (V), Chevella Mandal, Hyderabad",
                        },
                        {
                          date: "2015 to 2020",
                          degree: "Secondary School Certificate",
                          institution: "Government High School",
                          address: "Film Nagar, Hyderabad",
                        },
                      ].map((edu, index) => (
                        <div key={index} className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> {edu.date}
                          </h6>
                          <h4 className="timeline-title">{edu.degree}</h4>
                          <h3>{edu.institution}</h3>
                          <p className="timeline-text">
                            <strong>Address:</strong> {edu.address}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {[
                        {
                          date: "May 2024 to Sep 2024",
                          title: "Android Tester Intern - OPPO",
                          details: [
                            "Contributed to testing the OPPO A3x 5G device under the project 'Avatar B5'.",
                            "Identified several valid bugs during the testing phase.",
                            "Stipend: ₹8,000+.",
                          ],
                        },
                        {
                          date: "Dec 2023 to May 2024",
                          title: "Android Tester Intern - ONEPLUS",
                          details: [
                            "Participated in testing OnePlus Nord CE 4 device under the project 'Bens'.",
                            "Identified and reported critical bugs.",
                            "Stipend: ₹2,500.",
                          ],
                        },
                        {
                          date: "April 2024 to June 2024",
                          title: "AI Intern - Adverk",
                          details: [
                            "Specialized in Artificial Intelligence.",
                            "Contributed to innovative AI projects.",
                            "Received a Completion Certificate.",
                          ],
                        },
                      ].map((exp, index) => (
                        <div key={index} className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> {exp.date}
                          </h6>
                          <h4 className="timeline-title">{exp.title}</h4>
                          <ul className="timeline-text">
                            {exp.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
