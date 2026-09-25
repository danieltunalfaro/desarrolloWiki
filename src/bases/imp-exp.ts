import heroes, { type Hero, type Owner } from "../data/heroes";

export const getHeroById = (id: number): Hero | undefined => {
    return heroes.find((hero) => hero.id === id);
};

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroById(5));
console.log(getHeroesByOwner("DC"));
console.log(getHeroesByOwner("Marvel"));