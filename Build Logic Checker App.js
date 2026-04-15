// AI Used: Claude 

// Steps 1-3: Truthy values
let truthyOrFalsy = true;
console.log(Boolean(truthyOrFalsy)); // true

truthyOrFalsy = "freeCodeCamp";
console.log(Boolean(truthyOrFalsy)); // true

// Step 4: Falsy value - empty string
truthyOrFalsy = "";
console.log(Boolean(truthyOrFalsy)); // false

// Step 5: Remove variable and console.log (done - cleared below)

// Step 6: Declare hasDeveloperJob
let hasDeveloperJob = true;

// Step 7: if statement - truthy condition
if (hasDeveloperJob) {
  console.log("Godofredo is employed as a developer.");
}

// Step 8: Declare isTimmyAGamer
let isGodofrediAGamer = false;

// Step 9: if statement - falsy condition (nothing logs)
if (isGodofrediAGamer) {
  console.log("Godofredo loves to play World of Warcraft.");
}

// Steps 10-12: GodofrediAge with >= operator and else clause
let GodofrediAge = 20;

if (GodofrediAge >= 16) {
  console.log("Godofredo is old enough to drive.");
} else {
  console.log("Godofredo is not old enough to drive.");
}

// Step 13: Change GodofrediAge to less than 16
GodofrediAge = 14;

if (GodofrediAge >= 16) {
  console.log("Godofredo is old enough to drive.");
} else {
  console.log("Godofredo is not old enough to drive.");
}