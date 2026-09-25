// console.log('Inicio');

import type { Hero } from "../data/heroes";
import { getHeroById } from "./imp-exp";

// getHeroById es una función exportada

const getHeoByIdAsync = (id: number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);

            if (hero) {
                resolve(hero);
            } else {
                reject(`Héroe no encontrado #${id}`);
            }
        }, 1500);
    });
};

const prestamo = () => {
    return new Promise((resolve) => {
        // Depués de un segundo podemos llamar a la siguiente función
        // El 1000 equivale a un segundo
        setTimeout(() => {
            // Cuerpo de la promesa
            console.log("Cuerpo de la promesa");
            resolve("Mi amigo cumplió");
        }, 1000);
    })
        .then((message) => console.log(message))
        .catch((errorMessage) => console.log(errorMessage))
        .finally(() => console.log("Fin de la promesa"));
};

prestamo();
getHeoByIdAsync(3)
    .then((hero) => console.log("El nombre es", hero.name))
    .catch((message) => alert(message));

// console.log('Fin');