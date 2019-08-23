const Scramble = config => {
  let e = document.getElementById(config.element);
  let string = config.string;
  let speed = config.speed;
  let scramString = "";
  let indices = [];

  if (scramString.length == 0) {
    for (let i = 0; i < string.length; i++) {
      scramString += randomChar();
    }
    e.innerText = scramString;
  }

  const scramble = setInterval(() => {
    let newScram = "";
    if (scramString == string) {
      config.onComplete ? config.onComplete(config) : null;
      clearInterval(scramble);
    }
    for (let i = 0; i < string.length; i++) {
      if (scramString.charAt(i) == string.charAt(i)) {
        newScram += string.charAt(i);
      } else {
        if (!indices[i]) {
          indices[i] = [];
        }
        let newChar = randomChar();
        while (indices[i].includes(newChar)) {
          newChar = randomChar();
        }
        indices[i].push(newChar);
        newScram += newChar;
      }
    }
    scramString = newScram;
    e.innerText = scramString;
  }, speed);
};

const randomChar = () => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let char = characters.charAt(Math.floor(Math.random() * characters.length));
  return char;
};

const StartScramble = config => {
  config.elements.forEach(el => {
    config.element = el.id;
    config.string = el.string;
    Scramble(config);
  });
};

module.exports = StartScramble;
