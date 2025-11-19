/**
 * Author: Bianca Bertinato
 * Version: 1.0.0
 * Date: 2025-11-15
 * This program calculates the cost of bolts, nuts and washers purchased
 */

// Constants
const BOLT_COST = 10;
const NUT_COST = 5;
const WASHER_COST = 3;

// Declare variables
let bolts: number;
let nuts: number;
let washers: number;
let totalCost: number;

// Input
bolts = Number(prompt("How many bolts would you like to purchase:") || "10");
nuts = Number(prompt("How many nuts would you like to purchase:") || "5");
washers = Number(prompt("How many washers would you like to purchase:") || "10")

// Process
totalCost = bolts * BOLT_COST + nuts * NUT_COST + washers * WASHER_COST;

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
