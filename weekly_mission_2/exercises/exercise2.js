// Ejercicio 2

/* 
Sobre esta lista, realiza lo siguiente:
    Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
    Imprime el stack de cada explorer, usa FOR EACH
    Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
    Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
    Busca el primer explorer que sea de la CDMX, usa FIND
    Obtén la suma de todos los exercises_completed, usa REDUCE
    Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
    Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
*/

const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },

  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },

  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
       
]

console.log("Imprimiendo el nombre de cada explorer en la lista usando forEach")
explorers.forEach(explorer => console.log(explorer.name))

console.log("Imprimiendo el stack de cada explorer usando forEach")
explorers.forEach(stacks => console.log(stacks.stack))

console.log("Imprimiendo una nueva lista con las listas de stacks de cada explorer usando MAP")
//explorers.map(stacksLists => console.log(stacksLists.stack))  --> otra alternativa
const stacksLists = explorers.map((stacks) => stacks.stack)
console.log(stacksLists)

console.log("Imprimiendo lista de explorers que tengan en su stack 'js' usando FILTER")
const stackListJS = explorers.filter((stackJS) => stackJS.stack.includes("js")) 
console.log(stackListJS)

console.log("Imprimiendo el primer explorer que sea de la CDMX usando FIND")
const cityExplorer = explorers.find((cityExplorer) => cityExplorer.city === "CDMX")
console.log(cityExplorer)

console.log("Imprimiendo la suma de todos los exercises_completed usando REDUCE")
const result_exercises_completed = explorers.reduce((acc, result_exercises_completed) => acc + result_exercises_completed.exercises_completed, 0)
console.log(result_exercises_completed)

console.log("Imprimiendo la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true usando SOME")
const areSomeTrue = explorers.some((val_exercisesFinished) => val_exercisesFinished.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)

console.log("Imprimiendo la validación si todos los explorers tienen la propiedad isFinished del onboarding como true usando EVERY")
const areEveryTrue = explorers.every((val_isFinished) => val_isFinished.missions.onboarding.isFinished === true)
console.log(areEveryTrue)
