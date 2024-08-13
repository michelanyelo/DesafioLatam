class Pelicula {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Largometraje extends Pelicula {
    constructor(name, runTime) {
        super(name);
        this.runTime = runTime;
    }

    getRuntime() {
        return this.runTime;
    }

    setRuntime() {
        this.runTime = runTime;
    }
}

class Cortometraje extends Largometraje {}

class MyApp {
    play = (Pelicula) => {
        return `La película ${Pelicula.getName()} se está reproduciendo... tiene una duración de ${Pelicula.getRuntime()}`;
    }
}

const largometraje = new Largometraje('Kill Bill', '160min');
const cortometraje = new Cortometraje('El gato', '5min');

const myApp = new MyApp();
const playing = myApp.play(largometraje);
console.log(playing);

const playing2 = myApp.play(cortometraje);
console.log(playing2);