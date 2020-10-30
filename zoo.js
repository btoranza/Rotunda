class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak(dialog) {
    dialog = dialog.trim(); // to avoid more than one sound per word if the string has whitespaces at the beggining or end.
    let dialogArray = dialog.split(" ");
    dialogArray.push(" "); // to insert the sound for the last word of the string.
    dialogArray = dialogArray.join(` ${this.sound} `);
    console.log(dialogArray);
  }
}

const lion = new Animal("lion", "roar");
const tiger = new Animal("tiger", "grrrr");
const bird = new Animal("bird", "tweet");
const cat = new Animal("cat", "meowww");
const bat = new Animal("bat", "squeak");

lion.speak("I'm a lion");
tiger.speak("Lions suck");
bird.speak("I like to sing in your window");
cat.speak("I'm your boss");
bat.speak("Batman rocks!!!");
