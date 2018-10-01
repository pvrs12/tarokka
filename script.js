document.addEventListener("DOMContentLoaded", () => {
});

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
    } catch {
        // shrug
    }

    low_picks = [];
    low_picks.push(draw_low_deck(low_picks));
    let element = document.createElement("img");
    element.setAttribute("src", "cards/low/" + low_picks[low_picks.length - 1] + ".png");
    element.classList.add("card-image")
    tome.appendChild(element);

    low_picks.push(draw_low_deck(low_picks));
    element = document.createElement('img');
    element.setAttribute("src", "cards/low/" + low_picks[low_picks.length - 1] + ".png");
    element.classList.add("card-image")
    ravenkind.appendChild(element);

    low_picks.push(draw_low_deck(low_picks));
    element = document.createElement('img');
    element.setAttribute("src", "cards/low/" + low_picks[low_picks.length - 1] + ".png");
    element.classList.add("card-image")
    sunsword.appendChild(element);

    high_picks = [];
    high_picks.push(draw_high_deck(high_picks));
    element = document.createElement('img');
    element.setAttribute("src", "cards/high/" + high_picks[high_picks.length - 1] + ".png");
    element.classList.add("card-image")
    ally.appendChild(element);


    high_picks.push(draw_high_deck(high_picks));
    element = document.createElement('img');
    element.setAttribute("src", "cards/high/" + high_picks[high_picks.length - 1] + ".png");
    element.classList.add("card-image")
    strahd.appendChild(element);
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