const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
kittens.push(element)
return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop(element)
  return kittens
}

function prependKitten(element) {
  return[element, ...kittens]
} 

function appendKitten(element) {
  return[...kittens, element]
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift(element)
}

function removeLastKitten(element) {
  kittens.pop(element)
}