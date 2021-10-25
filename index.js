import pageRender from './js/pageRender.js'
import startRender from './js/startRender.js';

const root = document.querySelector("#root");
const startPage = localStorage.getItem("currentPage");

const startMarkup = startRender(startPage);

root.innerHTML = startMarkup;

const onClick = (e) => {
    e.preventDefault();

    const target = e.target;
    const tankMarkup = pageRender(target);

    if (tankMarkup) {
        root.innerHTML = tankMarkup;
    }
}

root.addEventListener("click", onClick)