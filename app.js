async function enter(){

    try{

        const pokemonName = document.getElementById("inputChar").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log(response);

        if(!response.ok){
            document.getElementById('pokemonName').innerHTML = "No such character existed!";
            throw new Error("Could not fetch resource");
            
        }

        const data = await response.json();
        console.log(data);

        const charName = document.getElementById('pokemonName').innerHTML =  `You pick ${data.name}`;

        const pokemonImage = data.sprites.front_default;
        const imgage = document.getElementById("character");

        imgage.src = pokemonImage;  
        imgage.style.display = "block";
    }
    
    catch(error){
        console.error(error);
    }
    
    }
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
    })
  })
}