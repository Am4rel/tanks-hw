import tanks from '../tanks-mock.js';
import tankDetailsPage from './tankDetailsTemplate.js';
import tankPreviewPage from './tankPreviewTemplate.js';

const pageRender = (target) => {
    const id = target.dataset.id;
    const tank = tanks.filter(tank => tank.id.toString() === id)[0];


    if (target.classList[0].indexOf("tank") !== -1){
        localStorage.setItem("currentPage", id);
        return tankDetailsPage(tank);
    }else if (target.classList[0] === "details-btn"){
        localStorage.setItem("currentPage", "preview");
        return tankPreviewPage(tanks);
    };
}

export default pageRender;