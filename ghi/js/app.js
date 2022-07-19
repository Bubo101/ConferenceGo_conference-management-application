function createCard(name, description, pictureUrl,newStartDate,newEndDate,location) {
    return `
    <div class = "col">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
            <p class="card-text">${description}</p>
            </div>
            <div class="card-footer">${newStartDate} - ${newEndDate}
            </div>
        </div>
    </div>
    `;
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Response not ok');
            
        } else {
            const data = await response.json();
            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const name = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    let startDate = details.conference.starts;
                    let d1 = new Date(startDate)
                    //new creates a date object
                    let newStartDate = (d1.getMonth()+1) + "/" + d1.getDate() + "/" + d1.getFullYear()
                    let endDate = details.conference.ends;
                    let d2 = new Date(endDate)
                    //new creates a date object
                    let newEndDate = (d2.getMonth()+1) + "/" + d2.getDate() + "/" + d2.getFullYear()
                    let location = details.conference.location.name
                    const html = createCard(name, description, pictureUrl, newStartDate, newEndDate, location);
                    const column = document.querySelector(`.row`);
                    column.innerHTML += html;
                }
            }

        }
    } catch (e) {
        const alertBox = document.getElementById('alert');
        let wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-primary alert-dismissible" role="alert">Unable to retrieve some information.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alertBox.append(wrapper)
        //injects code into alert box 
        // console.error('error', e)
    }

});
