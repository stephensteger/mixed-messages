let nouns = ["dog", "man", "pope", "nun", "cowboy", "ninja", "bear", "cat", "zebra", "taxidermist", "rooster", "pilot", "rabbi", "priest", "moth", "psychologist"];
let verbs = ["walk", "run", "jump", "skip", "dosie-do", "line dance", "backflip"];
let punchlines = ["That'll teach you.", "Ouch!", "That's not a knife. This is a knife.", "Thanks. I'll be here all week.", "How\'d you get to be so dumb?"]

let noun1 = nouns[Math.floor(Math.random() * nouns.length)];
let noun2 = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let punchline1 = punchlines[Math.floor(Math.random() * punchlines.length)];
let punchline2 = punchlines[Math.floor(Math.random() * punchlines.length)];

let joke = `A ${noun1} and a ${noun2} ${verb} into a bar. The ${noun1} says \"${punchline1}\" The ${noun2} says \"${punchline2}\"`;

console.log(joke);