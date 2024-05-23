export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Vinay K</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Information Science</span>{" "}
              <br />
              Engineer
            </h1>
            <p className="hero--section-description">
            Empowering the future through innovative solutions
              <br /> and strategic engineering prowess
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  