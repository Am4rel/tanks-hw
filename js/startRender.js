import tanks from '../tanks-mock.js';
import tankDetailsPage from './tankDetailsTemplate.js';
import tankPreviewPage from './tankPreviewTemplate.js';

const startRender = (startPage) => {
    if (!startPage || startPage === "preview"){
        return tankPreviewPage(tanks);
    }else{
        const tank = tanks.filter(tank => tank.id.toString() === startPage)[0];
        return tankDetailsPage(tank);
    }
};

export default startRender;