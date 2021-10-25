const tankDetailsPage = ({name,level,armor_penetration,damage,attack_speed,time_of_targeting,ammunition,country,tank_image,country_flag,id}) => {
    return `
    <div class="tank-details" data-id="${id}">
        <div class="title-thumb">
            <img class="details-flag" title="Country: ${country}" src="${country_flag}" alt="${country}" data-id="${id}"/>
            <h2 class="details-title" data-id="${id}">${name.toString().toUpperCase()} (level ${level})</h2>
        </div>
        <div class="details-thumb">
            <div class="details-image-thumb">
                <h4 class="details-caption" data-id="${id}">Preview</h4>
                <img class="details-preview" src="${tank_image}" alt="${name}" data-id="${id}"/>
            </div>
            <div class="details-table-thumb">
                <h4 class="details-caption" data-id="${id}">Characteristics</h4>
                <table class="details-table" data-id="${id}">
                    <tr class="details-row" data-id="${id}">
                        <td class="details-cell" data-id="${id}">damage</td>
                        <td class="details-cell" data-id="${id}">${damage}</td>
                    </tr>
                    <tr class="details-row" data-id="${id}">
                        <td class="details-cell" data-id="${id}">breoning</td>
                        <td class="details-cell" data-id="${id}">${armor_penetration}</td>
                    </tr>
                    <tr class="details-row" data-id="${id}">
                        <td class="details-cell" data-id="${id}">attack speed</td>
                        <td class="details-cell" data-id="${id}">${attack_speed}</td>
                    </tr>
                    <tr class="details-row" data-id="${id}">
                        <td class="details-cell" data-id="${id}">time of tarfeting</td>
                        <td class="details-cell" data-id="${id}">${time_of_targeting}</td>
                    </tr>
                    <tr class="details-row" data-id="${id}">
                        <td class="details-cell" data-id="${id}">ammunition</td>
                        <td class="details-cell" data-id="${id}">${ammunition}</td>
                    </tr>
                </table>
            </div>
        </div>

        <button class="details-btn" type="button">Back to list view</button>
    </div>`
};

export default tankDetailsPage;