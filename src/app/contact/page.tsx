import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>Hyderbad</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call me On</h4>
              <p>+91 9121438662 </p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>govindmukhiya9963@email.com</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          <div className="row">
          <form
  className="contact-form padd-15"
  action="https://formspree.io/f/mbljkele"
  method="POST"
>
  <div className="row">
    <div className="form-item col-6 padd-15">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Name*"
          name="name"
          required
        />
      </div>
    </div>
    <div className="form-item col-6 padd-15">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email*"
          name="email"
          required
        />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="form-item col-12 padd-15">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Subject*"
          name="subject"
          required
        />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="form-item col-12 padd-15">
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Your Message*"
          name="message"
          required
        />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-12 padd-15">
      <button type="submit" className="btn">
        Send Message
      </button>
    </div>
  </div>
</form>

          </div>
          
          
          {/* Contact Form Ended */}
        </div>
        
      </section>
    </>
  );
};

export default Contact;
