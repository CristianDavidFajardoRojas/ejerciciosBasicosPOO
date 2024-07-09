// class Persona {
//     constructor(nombre, edad, sexo){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sexo = sexo;
//     }

//     saludar(){
//         console.log(`¡Hola!, ${this.nombre}`)
//     }
// }

// let persona1 = new Persona("Miguel", 24, "Hombre");

//persona1.saludar();



////////////////////////////////////////////////////////////////



// class Estudiante extends Persona {
//     constructor(nombre, edad, sexo, carrera){
//         super(nombre, edad, sexo);
//         this.carrera = carrera;
//     }

//     estudiar(){
//         console.log(`Actualmente, ${this.carrera} es la carrera que está estudiando.`)
//     }
// }

// let estudiante1 = new Estudiante("Cristian", 18, "Hombre", "Programación");

//estudiante1.saludar();
//estudiante1.estudiar();



////////////////////////////////////////////////////////////////



// class Persona {
//     constructor(nombre, edad, sexo){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sexo = sexo;
//     }

//     saludar(){
//         console.log(`¡Hola!, ${this.nombre}`)
//     }

//     static esMayorDeEdad(persona){
//         if(persona.edad >= 18){
//             console.log(`${persona.nombre} es mayor de edad.`);
//             return true;
//         } else {
//             console.log(`${persona.nombre} no es mayor de edad.`);
//             return false;
//         }
//     }
// }

// let persona1 = new Persona("Miguel", 24, "Hombre");
// let persona2 = new Persona("Juan", 16, "Hombre");
// let persona3 = new Persona("Cristian", 15, "Hombre");

// Persona.esMayorDeEdad(persona2);



/////////////////////////////////////////////////////////////////////



// class Animal{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     hacerSonido(){
//         console.log(`${this.nombre} hace un sonido.`);
//     }
// }

// let animal1 = new Animal("Perla", 3);

// animal1.hacerSonido();

// class Perro extends Animal {
//     constructor(nombre, edad, raza){
//         super(nombre, edad);
//         this.raza = raza;
//     }

//     moverCola(){
//         console.log(`El perro ${this.nombre} está moviendo la cola.`)
//     }
// }

// let animal2 = new Perro("Toby", 4, "Pincher");

// animal2.moverCola();



///////////////////////////////////////////////////////////////////////



// let areaHTML = document.querySelector(".areaHTML")

// class Figura{
//     constructor(color, area){
//         this.color = color;
//         this.area = area;
//     }

//     calcularArea(){
//         return this.area;
//     }
// }

// let figura1 = new Figura("VinoTinto", "16cm2")

// areaHTML.textContent = figura1.calcularArea();

// class Circulo extends Figura{
//     constructor(color, area, radio){
//         super(color);
//         this.area = area;
//         this.radio = radio;
//     }

//     calcularArea(){
//         return `El area del circulo es ${Math.PI * this.radio * this.radio}`
//     }
// }

// let circulo1 = new Circulo("VinoTinto", 0, 2);

// areaHTML.textContent = circulo1.calcularArea();