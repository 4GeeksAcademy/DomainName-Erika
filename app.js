let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

function generateDomainNames(pronouns, adjectives, nouns) {
  let domainNames = [];

  pronouns.forEach((pronoun) => {
    adjectives.forEach((adj) => {
      nouns.forEach((noun) => {
        const domainName = `${pronoun}${adj}${noun}.com`;
        domainNames.push(domainName);
      });
    });
  });

  return domainNames;
}

const domainNameCombinations = generateDomainNames(pronouns, adjectives, nouns);
console.log(domainNameCombinations);