import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Work Experience</p>
          <h2 className="sections--heading">Employment History</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
          <p className="text-md">
            <span className="job-title">
              <a 
                href={item.description === "Quality Lab Technician" ? "https://drive.google.com/file/d/18rxehcax3NWyMaGJV1lXkSl9TEV9RZ48/view" : "https://drive.google.com/file/d/18tViIESwRRqTK6Gtomgb_Jpppgs7P9VA/view"} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {item.description}
              </a>
            </span>
          </p>
          <div className="testimonial--section--card--author--detail">
            <div>
              <p className="text-md testimonial--author--name">
                {item.author_name}
              </p>
              <p className="text-md testimonial--author--designation">
                {item.author_designation}
              </p>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
}
