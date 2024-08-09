import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronouns = ["the", "my", "your", "our", "that"];

  let adjectives = [
    "awesome",
    "gorgeous",
    "great",
    "wonderful",
    "unbelievable",
    "amazing",
    "weird",
    "strange",
    "crazy",
    "funny",
    "happy"
  ];

  let nouns = [
    "unicorn",
    "fox",
    "geek",
    "puppy",
    "guitar",
    "place",
    "club",
    "harp",
    "house",
    "cyborg",
    "metalgear"
  ];

  let domains = [".net", ".com", ".org", ".edu", ".biznus", ".info"];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          document.querySelector("#domainGenerator").innerHTML +=
            "<h2>" + pronoun + adjective + noun + domain + "</h2>";
        }
      }
    }
  }
};
