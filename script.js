document.addEventListener("DOMContentLoaded", () => {
});

var low_picks = [];
var high_picks = [];

var gm_view_on = false;

function draw_cards() {
    let tome = document.getElementById("tome");
    let ravenkind = document.getElementById("ravenkind");
    let sunsword = document.getElementById("sunsword");

    let ally = document.getElementById("ally");
    let strahd = document.getElementById("strahd");

    try {
        tome.removeChild(tome.lastChild)
        ravenkind.removeChild(ravenkind.lastChild)
        sunsword.removeChild(sunsword.lastChild)
        ally.removeChild(ally.lastChild)
        strahd.removeChild(strahd.lastChild)

        let low_details = document.getElementById("low_details");
        while(low_details.lastChild) {
            low_details.removeChild(low_details.lastChild);
        }
        let high_details = document.getElementById("high_details");
        while(high_details.lastChild) {
            high_details.removeChild(high_details.lastChild);
        }
    } catch {
        // shrug
    }

    //low picks
    low_picks = [];
    low_picks.push(draw_low_deck(low_picks));
    let element = document.createElement("img");
    element.addEventListener("click", (event) => {
        reveal_card('low', 0, event.target);
    });
    element.setAttribute("src", "cards/back.png");
    element.setAttribute("title", "This card tells of history. Knowledge of the ancient will help you better understand your enemy.");
    element.classList.add("card-image")
    tome.appendChild(element);

    low_picks.push(draw_low_deck(low_picks));
    element = document.createElement('img');
    element.addEventListener("click", (event) => {
        reveal_card('low', 1, event.target);
    });
    element.setAttribute("src", "cards/back.png");
    element.setAttribute("title", "This card tells of a powerful force for good and protection, a holy symbol of great hope.");
    element.classList.add("card-image")
    ravenkind.appendChild(element);

    low_picks.push(draw_low_deck(low_picks));
    element = document.createElement('img');
    element.addEventListener("click", (event) => {
        reveal_card('low', 2, event.target);
    });
    element.setAttribute("src", "cards/back.png");
    element.setAttribute("title", "This is a card of power and strength. It tells of a weapon of vengeance: a sword of sunlight.");
    element.classList.add("card-image")
    sunsword.appendChild(element);

    //high picks
    high_picks = [];
    high_picks.push(draw_high_deck(high_picks));
    element = document.createElement('img');
    element.addEventListener("click", (event) => {
        reveal_card('high', 0, event.target);
    });
    element.setAttribute("src", "cards/back.png");
    element.setAttribute("title", "This card sheds light on one who will help you greatly in the battle against darkness.");
    element.classList.add("card-image")
    ally.appendChild(element);

    high_picks.push(draw_high_deck(high_picks));
    element = document.createElement('img');
    element.addEventListener("click", (event) => {
        reveal_card('high', 1, event.target);
    });
    element.setAttribute("src", "cards/back.png");
    element.setAttribute("title", "Your enemy is a creature of darkness, whose powers are beyond mortality. This card will lead you to him!");
    element.classList.add("card-image")
    strahd.appendChild(element);

    //setup the GM view
    for(let i = 0; i < low_picks.length; ++i) {
        let bold = document.createElement("b");
        bold.appendChild(document.createTextNode(cards_data.low[low_picks[i]].name));
        low_details.appendChild(bold);
        low_details.appendChild(document.createElement("br"));
        if (cards_data.low[low_picks[i]].value != 10) {
            low_details.appendChild(document.createTextNode(cards_data.low[low_picks[i]].value));
        } else {
            low_details.appendChild(document.createTextNode("Master"));
        }
        low_details.appendChild(document.createTextNode(" - "));
        low_details.appendChild(document.createTextNode(cards_data.low[low_picks[i]].suit));
        low_details.appendChild(document.createElement("br"));
        low_details.appendChild(document.createTextNode(cards_data.low[low_picks[i]].text));
        low_details.appendChild(document.createElement("br"));
        let italics = document.createElement("i");
        italics.appendChild(document.createTextNode(cards_data.low[low_picks[i]].gm_text));
        low_details.appendChild(italics);
        low_details.appendChild(document.createElement("br"));
        low_details.appendChild(document.createElement("br"));
    }

    for(let i = 0; i < high_picks.length; ++i) {
        let bold = document.createElement("b");
        bold.appendChild(document.createTextNode(cards_data.high[high_picks[i]].name));
        high_details.appendChild(bold);
        high_details.appendChild(document.createElement("br"));
        high_details.appendChild(document.createTextNode(cards_data.high[high_picks[i]].ally_text));
        high_details.appendChild(document.createElement("br"));
        let italics = document.createElement("i");
        italics.appendChild(document.createTextNode(cards_data.high[high_picks[i]].gm_ally_text));
        high_details.appendChild(italics);
        high_details.appendChild(document.createElement("br"));
        high_details.appendChild(document.createTextNode(cards_data.high[high_picks[i]].strahd_text));
        high_details.appendChild(document.createElement("br"));
        italics = document.createElement("i");
        italics.appendChild(document.createTextNode(cards_data.high[high_picks[i]].gm_strahd_text));
        high_details.appendChild(italics);
        high_details.appendChild(document.createElement("br"));
        high_details.appendChild(document.createElement("br"));
    }
}

function reveal_card(deck, card, target) {
    if (deck === 'high') {
        target.setAttribute("src", cards_data.high[card].file);
    } else {
        target.setAttribute("src", cards_data.low[card].file);
    }
}

function draw_high_deck(picked_cards) {
    let card = -1;
    let okay = false;
    while(!okay) {
        okay = true;
        card = Math.floor(Math.random() * 14);
        for(let i = 0; i < picked_cards.length; ++i){
            if(card == picked_cards[i]){
                okay = false;
            }
        }
    }
    return card;
}

function draw_low_deck(picked_cards) {
    let card = -1;
    let okay = false;
    while(!okay) {
        okay = true;
        card = Math.floor(Math.random() * 40);
        for(let i = 0; i < picked_cards.length; ++i){
            if(card == picked_cards[i]){
                okay = false;
            }
        }
    }
    return card;
}

function gm_view() {
    gm_hidden_elements = document.getElementsByClassName("gm-hidden");
    for(let i = 0; i < gm_hidden_elements.length; ++i) {
        if (gm_view_on) {
            gm_hidden_elements[i].style.display = "none";
        } else {
            gm_hidden_elements[i].style.display = "block";
        }
    }
    
    gm_view_on = !gm_view_on;
}