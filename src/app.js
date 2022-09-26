import "./app.css";
import nyancat from "./nyancat.jpeg";
import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  document.body.innerHTML = `
    <img src="${nyancat}" />
    <div class='user_container'></div>
  `;
  const container = document.querySelector(".user_container");
  container.style.color = "white";
  container.innerHTML = (res.data || [])
    .map((user) => {
      return `<div>${user.id}: ${user.name}</div>`;
    })
    .join("");
});
