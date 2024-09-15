let container = document.getElementById('container');
let url = "https://rickandmortyapi.com/api/character";

fetch(url)
    .then(response => response.json())
    .then(data => {
        let characters = data.results;
        characters.forEach(character => {
            let card = document.createElement('div');
            let cardBody = document.createElement('div');
            let image = document.createElement('img');
            let title = document.createElement('h5');
            let text = document.createElement('p');

         
            card.className = 'card col-md-4 col-lg-2 col-sm-6 col-xs-12 m-2 shadow-lg  border border-secondary'; 
            cardBody.className = 'card-body';
            title.className = 'card-header';
             

            
            title.textContent = character.name;
            image.src = character.image;
            

         
            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(title);
           
            container.appendChild(card);
        });
    })
    