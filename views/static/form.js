function searchProduct(){
    const input =  document.getElementById('autocomplete-input').value.toUpperCase();
    console.log(input);
    const cardContainer = document.getElementById('list');
    console.log(cardContainer);
    const cards = cardContainer.getElementsByClassName('card');
    console.log(cards);

    for(let i =0; i < cards.length;i++){
        let title = cards[i].querySelector(".card-content span.card-title ");
        console.log(title);
        
        if(title.innerText.toUpperCase().indexOf(input) >-1 ){
            cards[i].style.display = "";
        }
        else{
            cards[i].style.display = "none";
        }
        
    }
}


function searchProduct1(){
    const input =  document.getElementById('autocomplete-input1').value.toUpperCase();
    console.log(input);
    const cardContainer = document.getElementById('list');
    console.log(cardContainer);
    const cards = cardContainer.getElementsByClassName('card');
    console.log(cards);

    for(let i =0; i < cards.length;i++){
        let title = cards[i].querySelector(".card-content span.card-title ");
        console.log(title);
        
        if(title.innerText.toUpperCase().indexOf(input) >-1 ){
            cards[i].style.display = "";
        }
        else{
            cards[i].style.display = "none";
        }
        
    }
}
