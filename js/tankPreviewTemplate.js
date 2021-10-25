const tankPreviewPage = (tanksArray) => {
    let html = `<h2 class="tank-title">Most popular tanks</h2><div class="thumbnails">`
    
    const htmlArray = tanksArray.map(({id,name,level,country,tank_image,country_flag}) => {
        return `
        <div class="tank-thumb" title="Click to details" data-id="${id}">
            <img class="tank-preview" src="${tank_image}" alt="${name}" data-id="${id}"/>
            <div class="tank-preview-info-thumb">
                <img class="tank-flag" title="Country: ${country}" src="${country_flag}" alt="${country}" data-id="${id}"/>
                <p class="tank-level" data-id="${id}">${level}</p>
                <p class="tank-name" title="${name.toString().toUpperCase()}" data-id="${id}">${name.toString().toUpperCase()}</p>
            </div>
        </div>
        `
    });

    return html + htmlArray.join("") + "</div>"
};

export default tankPreviewPage;