/*
fetch (endereçoAPI, {dados e caracteristicas do request});

>> PADRÕES DO FETCH:
    Método: GET;
    Corpo (body): vazio;

>> API REST: formato json

>>FETCH
    o fetch devolve imediatamente uma promessa (que os dados virão)
    fetch("").then(promessa => promessa.json())

fetch ("https://endereço.do.get").then(promessa => promessa.json()).then(dados => {
    o.que.fazer.com.os.dados};
});

*/


//>> RETIRAR DUAS CARTAS

const imagem = document.querySelector("#carta > img");
//FETCH para GET
fetch("https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2").then(promessa => promessa.json()).then(dados => {
    console.log(imagem);
    console.log(dados.cards[0].image);
    imagem.src = dados.cards[0].image;
});


//FETCH para POST
fetch("https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2",
    headers:{"Content-Type":"application/json"},
    method:"POST",
    body: JSON.strignify(seu_objeto_de_body);
    }).then(promessa => promessa.json()).then(dados => {
        //O que fazer com os dados
    });


