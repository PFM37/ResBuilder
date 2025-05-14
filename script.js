document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  document.getElementById("resumePreview").innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;
});

function downloadPDF() {
  window.print(); // simplest way to allow PDF download
}
