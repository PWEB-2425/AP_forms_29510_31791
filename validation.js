document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    let valid = true;
    let messages = [];

    // First Name
    const firstName = document.getElementById('first-name').value.trim();
    if (firstName === "") {
      valid = false;
      messages.push("First name is required.");
    }

    // Last Name
    const lastName = document.getElementById('last-name').value.trim();
    if (lastName === "") {
      valid = false;
      messages.push("Last name is required.");
    }

    // Email
    const email = document.getElementById('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      valid = false;
      messages.push("Email must be valid.");
    }

    // Postal Code
    const postal = document.getElementById('postal-code').value.trim();
    if (!/^\d{4}-\d{3}$/.test(postal)) {
      valid = false;
      messages.push("Postal code must be in the format DDDD-DDD.");
    }

    // Country
    const country = document.getElementById('country').value;
    if (country === "" || country === "Select country") {
      valid = false;
      messages.push("Country must be selected.");
    }

    // Card Type (radio)
    if (![...document.getElementsByName('card-type')].some(e => e.checked)) {
      valid = false;
      messages.push("Please select a credit card type.");
    }

    // Card Number
    const card = document.getElementById('card-number').value.trim();
    if (!/^\d{13,19}$/.test(card)) {
      valid = false;
      messages.push("Card number must be between 13 and 19 digits.");
    }

    // Expiry Month and Year
    const expiryMonth = document.getElementById('expiry-month').value;
    const expiryYear = document.getElementById('expiry-year').value;
    if (expiryMonth === "" || expiryYear === "") {
      valid = false;
      messages.push("Expiry month and year are required.");
    } else {
      // Validação se a data não é no passado
      const today = new Date();
      const selectedExpiry = new Date(expiryYear, expiryMonth - 1); // mês começa em 0

      if (selectedExpiry < new Date(today.getFullYear(), today.getMonth())) {
        valid = false;
        messages.push("Expiry date cannot be in the past.");
      }
    }

    // CVV
    const cvv = document.getElementById('cvv').value.trim();
    if (!/^\d{3,4}$/.test(cvv)) {
      valid = false;
      messages.push("CVV must be 3 or 4 digits.");
    }

    // Terms and Conditions
    if (!document.getElementById('terms').checked) {
      valid = false;
      messages.push("You must agree to the terms and conditions.");
    }

    // If not valid, cancel submit and show messages
    if (!valid) {
      event.preventDefault();
      alert(messages.join('\n'));
    }
  });
});
