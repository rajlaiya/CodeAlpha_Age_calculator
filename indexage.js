document.addEventListener('DOMContentLoaded', () => {
  // Refresh Button
  document.getElementById('refresh').addEventListener('click', () => {
    location.reload();
  });

  // Users Counter Animation
  let counter = 0;
  const counterElement = document.getElementById('userCounter');
  const interval = setInterval(() => {
    counter++;
    counterElement.innerText = counter;
    if (counter >= 1000) {
      clearInterval(interval);
    }
  }, 10);

  // Age Calculator Functionality
  document.getElementById('ageCalculatorForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    const diff = now - dob;

    const ageInSeconds = Math.floor(diff / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.4375);
    const ageInYears = Math.floor(ageInMonths / 12);

    document.getElementById('ageResult').innerHTML = `
      You are ${ageInYears} years old.<br>
      You are ${ageInMonths} months old.<br>
      You are ${ageInWeeks} weeks old.<br>
      You are ${ageInDays} days old.<br>
      You are ${ageInHours} hours old.<br>
      You are ${ageInMinutes} minutes old.<br>
      You are ${ageInSeconds} seconds old.
    `;
  });

  // Download PDF Functionality
  document.getElementById('downloadPdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const ageResult = document.getElementById('ageResult').innerHTML.replace(/<br>/g, '\n');

    doc.text(ageResult, 10, 10);
    doc.save('age_calculation.pdf');
  });
});