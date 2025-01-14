import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  // Variables destructuring
  let {
    includeCover,
    background,
    avatarURL,
    socialMediaPosition,
    twitter,
    github,
    linkedin,
    instagram,
    name,
    lastname,
    role,
    country,
    city
  } = variables;

  // Assigning default values
  const organization = "4geeksacademy";
  name = name || "Your name";
  lastname = lastname || "Your lastname";
  role = role || "Your role";
  city = city || "City";
  country = country || "Country";
  instagram = instagram || organization;
  github = github || organization;
  linkedin = linkedin || organization;
  twitter = twitter || organization;

  // Show/Hide Cover
  let cover = `<div class="cover"><img src="${background}" /></div>`;
  if (includeCover == false) cover = "<div class='cover'></div>";

  // Body for Html
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${socialMediaPosition}">

            <li><a href="https://twitter.com/${twitter
              .replace(/\s/g, "")
              .toLowerCase()}" target="blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}" target="blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${linkedin.replace(
              /\s/g,
              ""
            )}" target="blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/${instagram}/" target="blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
