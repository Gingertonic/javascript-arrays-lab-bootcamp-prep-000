const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kitten.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kitten.shift();
  return kittens;
}
