/**
 * Author: Bianca Bertinato
 * Version: 1.0.0
 * Date: 2025-11-15
 * This program calculates 
 */

// Input
const bolts = Number(prompt("How many bolts would you like to purchase:") || "10");
const nuts = Number(prompt("How many nuts would you like to purchase:") || "5");
const washers = Number(prompt("How many washers would you like to purchase:") || "10")

const BOLT_COST = 10;
const NUT_COST = 5;
const WASHER_COST = 3;

// Processing
const totalCost = 
  bolts * BOLT_COST +
  nuts * NUT_COST +
  washers * WASHER_COST;

// Output
console.log("Number of bolts:         ", bolts);
console.log("Number of nuts:          ", nuts);
console.log("Number of washers:       ", washers);

if (bolts > nuts) {
  console.log("Check the Order - not enough nuts for the bolts you purchased.");
} else if (washers < bolts) {
  console.log("Check the Order - not enough washers for the bolts you purchased.");
} else {
  console.log("Order is OK.");
}

console.log("Your total cost of the order is", totalCost, "cents.");

console.log("\nDone.");