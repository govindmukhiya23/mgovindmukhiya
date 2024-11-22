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
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Govind a <span>Software Engineer</span>
                  </h2>
                  <p>
                    I am a dedicated and results-driven professional with proven experience in device testing and artificial intelligence. During my tenure as an intern, I have successfully completed rigorous testing protocols for OnePlus and OPPO devices, ensuring top-notch quality and performance. My passion for technology led me to dive deep into the field of Artificial Intelligence, culminating in a rewarding internship where I applied my skills to real-world challenges. My achievements are backed by an array of certifications that reflect my ongoing commitment to professional growth and excellence. An eye for detail and a problem-solving mindset defines my approach, making me a valuable asset to any forward-thinking team. 🚀📱🤖
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">

                    <div className="info-item padd-15">
                      <p>
                        Email : <span>govindmukhiya9963@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Btech</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9121438662</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Hyderabad</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Entry leve : <span>Yes</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            <strong>Btech-</strong> Computer Science and Engineering Artificial Intelligence and Machine Learning <strong>CSE(AI&ML)</strong>
                          </h4>
                          <h3>Vidya Jyothi Institute of Technology</h3>
                          <p className="timeline-text">
                            <strong>Address:</strong> Aziznagar Gate, Chilkur Balaji Road, Himayat Sagar Rd, Hyderabad, Telangana 500075
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            <strong>Diploma -</strong> Computer Science and Engineering- <strong>(CSE)</strong>
                          </h4>
                          <h3>Bandari Srinivas Institute Of Technology</h3>
                          <p className="timeline-text">
                            <strong>Address: </strong> Gollapally (V), Chevella Mandal M, Dist, Hyderabad, Telangana 501503
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2015 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <h3>Government High School</h3>
                          <p className="timeline-text">
                            <strong>Address: </strong> CC65+FPM, Road#86, Film Nagar, Hyderabad, Telangana 500096
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item: OPPO Android Tester Intern */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> May 2024 to sep 2024
                          </h6>
                          <h4 className="timeline-title">Android Tester Intern - OPPO</h4>
                          <ul className="timeline-text">
                            <li>Contributed to testing the <strong>OPPO A3x 5G</strong> device under the project <strong>"Avatar B5"</strong>.</li>
                            <li>Identified several valid bugs during the testing phase, improving overall device quality.</li>
                            <li><strong>Stipend:</strong> ₹8,000+.</li>
                            <li>Recognized for my dedication to ensuring performance and quality.</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item: ONEPLUS Android Tester Intern */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Dec 2023 to May 2024
                          </h6>
                          <h4 className="timeline-title">Android Tester Intern - ONEPLUS</h4>
                          <ul className="timeline-text">
                            <li>Participated in testing the <strong>OnePlus Nord CE 4</strong> device under the project <strong>"Bens"</strong>.</li>
                            <li>Identified and reported several critical bugs to enhance device performance.</li>
                            <li><strong>Stipend:</strong> ₹2,500.</li>
                            <li>Recognized for my attention to detail and commitment to quality.</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item: AI Intern - Adverk */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2024 to June 2024
                          </h6>
                          <h4 className="timeline-title">Artificial Intelligence Intern - Adverk</h4>
                          <ul className="timeline-text">
                            <li>Completed an internship specializing in <strong>Artificial Intelligence</strong>, gaining hands-on experience in AI technologies.</li>
                            <li>Contributed to innovative projects that leveraged AI to solve real-world challenges.</li>
                            <li>Received a Completion Certificate.</li>
                            
                          </ul>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item: AI-ML Virtual Internship - EduSkills */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2024 to June 2024
                          </h6>
                          <h4 className="timeline-title">AI-ML Virtual Internship - EduSkills</h4>
                          <ul className="timeline-text">
                            <li>Completed an internship specializing in <strong>AI-ML</strong>, gaining practical experience with machine learning algorithms.</li>
                            <li>Contributed to innovative projects that involved real-world applications of AI and ML technologies.</li>
                            <li>Received a Completion Certificate.</li>
                            
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                      </div>
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
