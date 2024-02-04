function rozdelitNaPismena(text) {
    return text.split('');
}

function reverzeRetezce(text) {
    return text.split('').reverse().join('');
}

document.querySelector('.searchbutton').addEventListener('click', function() {
    var text = document.querySelector('.userInput').value;
    var operace = document.querySelector('#dropdown').value;
    var vysledek;

    if (operace === 'rezervace') {
        vysledek = reverzeRetezce(text);
    } else if (operace === 'rozdělení') {
        vysledek = rozdelitNaPismena(text);
        vysledek = vysledek.join(', ');
    }

    document.querySelector('.output').textContent = vysledek;
});

document.querySelector('.searchbutton').addEventListener('click', function() {
    let text = document.querySelector('.userInput').value;
    let slovo = document.querySelector('.slovo').value;
    let vybranaMoznost = document.querySelector('#dropdown').value;

    if (vybranaMoznost === 'počet') {
        let pocetVyskytu = pocetVyskytuSlova(text, slovo);
        document.querySelector('.output').textContent = 'Slovo "' + slovo + '" se vyskytuje ' + pocetVyskytu + ' krát.';
    }

});

function pocetVyskytuSlova(text, slovo) {
    let slova = text.split(' ');
    let pocetVyskytu = 0;

    for (let i = 0; i < slova.length; i++) {
        if (slova[i] === slovo) {
            pocetVyskytu++;
        }
    }

    return pocetVyskytu;
}

document.querySelector('.searchbutton').addEventListener('click', function() {
    let text = document.querySelector('.userInput').value;
    let slovo = document.querySelector('.slovo').value;
    let vybranaMoznost = document.querySelector('#dropdown').value;

    if (vybranaMoznost === 'počet') {
        let pocetVyskytu = pocetVyskytuSlova(text, slovo);
        document.querySelector('.output').textContent = 'Slovo "' + slovo + '" se vyskytuje ' + pocetVyskytu + ' krát.';
    } else if (vybranaMoznost === 'změna') {
        let slova = slovo.split('=');
        let stareSlovo = slova[0].trim();
        let noveSlovo = slova[1].trim();
        let novyText = zmenaPismen(text, stareSlovo, noveSlovo);
        document.querySelector('.output').textContent = 'Nový text: ' + novyText;
    }

});

function pocetVyskytuSlova(text, slovo) {
    let slova = text.split(' ');
    let pocetVyskytu = 0;

    for (let i = 0; i < slova.length; i++) {
        if (slova[i] === slovo) {
            pocetVyskytu++;
        }
    }

    return pocetVyskytu;
}

function zmenaPismen(text, stareSlovo, noveSlovo) {
    let novyText = text.replace(new RegExp(stareSlovo, 'g'), noveSlovo);
    return novyText;
}

document.querySelector('.searchbutton').addEventListener('click', function() {
    let text = document.querySelector('.userInput').value;
    let slovo = document.querySelector('.slovo').value;
    let vybranaMoznost = document.querySelector('#dropdown').value;

    if (vybranaMoznost === 'počet') {
        let pocetVyskytu = pocetVyskytuSlova(text, slovo);
        document.querySelector('.output').textContent = 'Slovo "' + slovo + '" se vyskytuje ' + pocetVyskytu + ' krát.';
    } else if (vybranaMoznost === 'změna') {
        let slova = slovo.split('=');
        let stareSlovo = slova[0].trim();
        let noveSlovo = slova[1].trim();
        let novyText = zmenaPismen(text, stareSlovo, noveSlovo);
        document.querySelector('.output').textContent = 'Nový text: ' + novyText;
    } else if (vybranaMoznost === 'hledání') {
        let pozice = hledaniTextu(text, slovo);
        pozice = pozice.map(p => p + 1); // Přidáme 1 k pozicím, aby odpovídaly očekávání uživatele
        document.querySelector('.output').textContent = 'Pozice hledaného textu: ' + pozice.join(', ');
    }

});

function pocetVyskytuSlova(text, slovo) {
    let slova = text.split(' ');
    let pocetVyskytu = 0;

    for (let i = 0; i < slova.length; i++) {
        if (slova[i] === slovo) {
            pocetVyskytu++;
        }
    }

    return pocetVyskytu;
}

function zmenaPismen(text, stareSlovo, noveSlovo) {
    let novyText = text.replace(new RegExp(stareSlovo, 'g'), noveSlovo);
    return novyText;
}

function hledaniTextu(text, hledanyText) {
    let pozice = [];
    let i = -1;
    while ((i = text.indexOf(hledanyText, i+1)) >= 0) {
        pozice.push(i);
    }
    return pozice;
}




