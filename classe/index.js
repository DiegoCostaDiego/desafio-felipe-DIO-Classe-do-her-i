class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar() {
    let ataque = "";
    
    if (this.type === "mago") {
      ataque = "magia";
    } else if (this.type === "guerreiro") {
      ataque = "espada";
    } else if (this.type === "monge") {
      ataque = "artes marciais";
    } else if (this.type === "ninja") {
      ataque = "shuriken";
    }
    console.log(`O ${this.type} atacou usando ${ataque}`);
  }
}

let mago = new Hero("Gandalf o mago sinistrão", 100, "mago");
let guerreiro = new Hero("Robertindo", 32, "guerreiro");
let monge = new Hero("Gandh", 41, "monge");
let ninja = new Hero("Takai", 35, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
