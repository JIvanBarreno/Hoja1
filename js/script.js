async function getDataSwapi(index) {
    try {
        const url = "https://swapi.dev/api/people/" + index + "/";
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('There was a problem with de conextion');
        }
        
        const data = await response.json();
        console.log(data);
        let htmlText = "";

        htmlText = htmlText +  `
                <li class="list-group-item list-group-item-action"><b>Nombre: </b>${data.name}</li>
                <li class="list-group-item list-group-item-action"><b>Altura: </b>${data.height}</li>
                <li class="list-group-item list-group-item-action"><b>Peso: </b>${data.mass}</li>
                <li class="list-group-item list-group-item-action"><b>Color de Cabello: </b>${data.hair_color}</li>
                <li class="list-group-item list-group-item-action"><b>Color de Piel: </b>${data.skin_color}</li>
                <li class="list-group-item list-group-item-action"><b>Color de Ojos: </b>${data.eye_color}</li>
            `;
        document.getElementById('h1-final-result').innerHTML = htmlText;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

const resultButton = document.getElementById("h1-result");

resultButton.addEventListener("click", (event) => {
    let valueInput = document.getElementById("h1-index").value;

    getDataSwapi(valueInput);
});