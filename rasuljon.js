const fileInput = document.getElementById("fileInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append("file", file);

  fetch(`https://api.escuelajs.co/api/v1/files/upload`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
