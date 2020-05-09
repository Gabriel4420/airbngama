const apiUrl = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
const cardsContainer = document.querySelector('#cards');

var data = [];




async function fetchCards() {
    return await fetch(apiUrl)
        .then(async (r) => await r.json())
}

function renderCards(cards) {
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card) {

    let i = 0; 
    
    const div = document.createElement("div");
    div.style.width = "20rem";
    div.style.margin = "2rem";
    div.className = "card";

    
    div.innerHTML = `
        <img src = "${card.photo}" class = "card-img-top" alt="foto do quarto">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>

            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                Saber mais 
            </button>

           

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="card-text">
                          <strong>Tipo:</strong>&nbsp; ${card.property_type}
                        </p>
                        <p class="card-text">
                          <strong>Custo diária:</strong> &nbsp;R$${card.price}, 00
                        </p>
                        
                    </div>
                    
                </div>
            </div>
        </div>



                
        </div>
    `;

    cardsContainer.appendChild(div);
}

async function main(){
    data = await fetchCards();
    for(let i = 0 ; i < 5;i++ ){
            renderCards(data.slice(1,7))
    
    }
}

main();