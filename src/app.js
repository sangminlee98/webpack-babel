import "./app.css";
import nyancat from "./nyancat.jpeg";
import axios from "axios";
import form from "./form";
import result from "./result";

let resultEl;
let formEl;

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

  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  //   import(/* webpackChunkName: "result"*/ "./result.js").then(async (m) => {
  //     const result = m.default;
  //     resultEl = document.createElement("div");
  //     resultEl.innerHTML = await result.render();
  //     document.body.appendChild(resultEl);
  //   });
  // });
  resultEl = document.createElement("div");
  resultEl.innerHTML = await result.render();
  document.body.appendChild(resultEl);
});

// if (module.hot) {
//   console.log("핫 모듈 켜짐");

//   module.hot.accept("./result", async () => {
//     console.log("result 모듈 변경됨");
//     resultEl.innerHTML = await result.render();
//   });

//   module.hot.accept("./form", async () => {
//     console.log("form 모듈 변경됨");
//     formEl.innerHTML = form.render();
//   });
// }
