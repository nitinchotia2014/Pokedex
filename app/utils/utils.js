export function extractSpeciesUrls(evolutionChain) {
  const speciesUrls = [];

  function traverseChain(chain) {
    // Add the current species URL
    speciesUrls.push({
      name: chain.species.name,
      id: chain.species.url.split("/")[6].padStart(3, "0"),
    });

    // Recursively traverse the evolves_to list
    chain.evolves_to.forEach((evolution) => {
      traverseChain(evolution);
    });
  }

  // Start traversal from the root of the chain
  traverseChain(evolutionChain.chain);

  return speciesUrls;
}
