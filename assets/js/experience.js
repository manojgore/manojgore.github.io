AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Krushi Darbar",
    time: "(May, 2020 - August, 2021)",
    desp:"<li>Work as Full Stack Developer</li> <li>It is an farming sector ferm</li> <li>Created a Android applications</li>",
  },
  {
    title: "Reactjs Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Pysber inc",
    time: "(Mar, 2022 - July, 2022)",
    desp: "<li>Worked on ReactJs for developing single page android applications.</li><li>Worked on Wordpress development.</li><li>Integrating Email SMTP API with wordpress</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
