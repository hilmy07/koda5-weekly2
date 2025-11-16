/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";

console.log("===========================================");
// Use IIFE here
(function taskFakhri() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const fahrenheit = fakhri.celciusToFahrenheit(10);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const fahrenheit = fakhri.celciusToFahrenheit("10", 30);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const changes = fakhri.cashier(250_000, 375_000);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const changes = fakhri.cashier("250_000", "375_000");
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");

/**
 * Task Hilmy
 */
import hilmy from "./tasks/hilmy/index.js";

console.log("\n===========================================\n");
(function taskHilmy() {
  try {
    // Triangle of Numbers
    const triangle = hilmy.triangle(5);
    // hilmy.triangle(5);
    console.log(triangle);
  } catch (error) {
    console.log(error.message);
  }

  try {
    // Range of Numbers
    const rentang = hilmy.buatRentang(1, 5);
    console.log(rentang);
  } catch (error) {
    console.log(error.message);
  }

  try {
    // Process Numbers
    const processedNumbers = hilmy.processNumbers([1, 2, 3, 4, 5]);
    console.log(processedNumbers);
  } catch (error) {
    console.log(error.message);
  }

  try {
    // fetch async await
    const asyncAwait = hilmy.getDataSatu(true);
    console.log(asyncAwait);
  } catch (error) {
    console.log(error.message);
  }

  try {
    // fetch then catch
    const asyncAwait = hilmy.getDataDua(true);
    console.log(asyncAwait);
  } catch (error) {
    console.log(error.message);
  }

  try {
    // fetch data
    const getData = hilmy.getDataFromServer(true, hilmy.processData);
    console.log(getData);
  } catch (error) {
    console.log(error.message);
  }

})();
// console.log("===========================================");

