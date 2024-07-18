export default function ContactMe() {
  const email = "vinay2182001@gmail.com";

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--content">
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Got something exciting to share or discuss?
        </p>
        <p className="text-lg">
          I'm all ears!
        </p>
        <a href={`mailto:${email}`} className="contact--link">
          Start by saying hi
        </a>
      </div>
    </section>
  );
}
