async function getDataSwapi(index) {
    try {
        const url = "https://swapi.dev/api/planets/" + index + "/";
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('There was a problem with de conextion');
        }
        
        const data = await response.json();
        console.log(data);
        let htmlText = "";

        htmlText = htmlText +  `<div class="personaje"><img src="${personaje.image}"><h2>${personaje.name}</h2></div>`;
        document.getElementById('resultado').innerHTML = htmlText;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}