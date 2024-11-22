import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-mobile" /></div>
          <h4>Device Testing</h4>
          <p>This portfolio highlights my experience as an Android Tester Intern, where I contributed to testing high-end devices from leading brands like OPPO and OnePlus. I specialize in identifying and reporting bugs, ensuring top-notch quality, and improving device performance. Through rigorous testing processes, I’ve developed a keen eye for detail, which allows me to contribute meaningfully to enhancing user experiences. My work in various testing projects reflects my commitment to excellence in technology and my passion for delivering high-quality results</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Custom Web Design</h4>
          <p>Create a stunning online presence with our custom web design services. Wel will tailor a website that
            not only
            looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-wordpress" /></div>
          <h4>WordPress Development</h4>
          <p>Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable
            WordPress site that empowers you to manage content effortlessly and stay ahead in the digital
            landscape.</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Web Development</h4>
          <p>Turn your digital ideas into reality with our web development solutions. We specialize in crafting
            robust
            and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-film" /></div>
          <h4>Professional Video Editing</h4>
          <p>Enhance your video content with our professional video editing services. We will transform your raw
            footage
            into polished, engaging videos that captivate your audience and convey your message effectively.</p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>SEO Optimization</h4>
          <p>Boost your online visibility and drive organic traffic to your website with our SEO optimization
            services.
            Our experts employ proven strategies to improve your search engine rankings and grow your online
            presence.
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
