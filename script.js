let handleUpiCopyClick = document.querySelector("#copy-upi");

handleUpiCopyClick.addEventListener("click", () => {
  let text = "8939384066@paytm";
  navigator.clipboard.writeText(text);

  alert("UPI id copied. Paste it GPay/PhonePe/PayTM/BHIM for transaction");
});

let handleNumberCopyClick = document.querySelector("#copy-number");

handleNumberCopyClick.addEventListener("click", () => {
  let text = "8939384066";
  navigator.clipboard.writeText(text);

  alert(
    "Phone number copied. Paste it GPay/PhonePe/PayTM/BHIM for transaction"
  );
});
