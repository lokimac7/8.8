var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.",
	animal = "Zielone slonie";

var animalUpperCase = animal.toUpperCase();

var textReplace = text.replace("Papugi", animalUpperCase);

console.log(textReplace.substr(0, (textReplace.length / 2)));
