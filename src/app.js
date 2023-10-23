/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

function generateDomainNames(pronouns, adjectives, nouns) {
  let domainNames = [];

  pronouns.forEach(pronoun => {
    adjectives.forEach(adj => {
      nouns.forEach(noun => {
        const domainName = `${pronoun}${adj}${noun}.com`;
        domainNames.push(domainName);
      });
    });
  });

  return domainNames;
}

window.onload = function() {
  //write your code here
  const domainNameCombinations = generateDomainNames(
    pronouns,
    adjectives,
    nouns
  );
  console.log(domainNameCombinations);
};
