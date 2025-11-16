/**
 * Author: Bianca Bertinato
 * Version: 1.0.0
 * Date: 2025-11-15
 * This program calculates the cost of bolts, nuts and washers purchased
 */

package main

import (
	"fmt"
)

func main() {
	// Constants
	const BOLT_COST int = 10
	const NUT_COST int = 5
	const WASHER_COST int = 3

	// Inputs
	var bolts int
	var nuts int
	var washers int

	fmt.Print("How many bolts would you like to purchase: ")
	fmt.Scan(&bolts)

	fmt.Print("How many nuts would you like to purchase: ")
	fmt.Scan(&nuts)

	fmt.Print("How many washers would you like to purchase: ")
	fmt.Scan(&washers)

	// Processing
	totalCost := bolts*BOLT_COST + nuts*NUT_COST + washers*WASHER_COST

	// Output
	fmt.Println("Number of bolts:         ", bolts)
	fmt.Println("Number of nuts:          ", nuts)
	fmt.Println("Number of washers:       ", washers)

	// Decision statements
	if bolts > nuts {
		fmt.Println("Check the Order - not enough nuts for the bolts you purchased.")
	} else if washers < bolts {
		fmt.Println("Check the Order - not enough washers for the bolts you purchased.")
	} else {
		fmt.Println("Order is OK.")
	}

	fmt.Println("Your total cost of the order is", totalCost, "cents.")
	fmt.Println("\nDone.")
}