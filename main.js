//API documentation : https://pokeapi.co/docs/v2

const pokemonDiv = document.querySelector(".pokemon");
const APIData = {
    url: 'https://pokeapi.co/api/v2/', // website : https://pokeapi.co/
    type: 'pokemon',
    id: '250',
};

//destructuring object
const { url, type, id } = APIData;
//generate usrl
const apiUrl = `${url}${type}/${id}`;

//using fetch to get data
fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateDOM(pokemon));

const generateDOM = (data) => {
    const html = `
        <div class="name"> ${data.name} </div>
        <img src="${data.sprites.front_default}" alt="${data.name} default img !"></img>
        <div class="details">
            <span> Height : ${data.height}</span>
            <span> Weight : ${data.weight}</span>
        </div>
    `;
    pokemonDiv.innerHTML = html;
}