// 10 vies J1
document.addEventListener('DOMContentLoaded', function () {
  let gameContainer = document.querySelector('.viesJ1');
  let champignonOriginal = document.querySelector('.champignonJ1');

  for (var i = 0; i < 9; i++) {
    let champignonClone = champignonOriginal.cloneNode(true);
    gameContainer.appendChild(champignonClone);
  }
});
// 10 vies J2
document.addEventListener('DOMContentLoaded', function () {
  let gameContainer2 = document.querySelector('.viesJ2');
  let champignonOriginal2 = document.querySelector('.champignonJ2');

  for (var i = 0; i < 9; i++) {
    let champignonClone2 = champignonOriginal2.cloneNode(true);
    gameContainer2.appendChild(champignonClone2);
  }
});

// créer tour par tour

let nombreTour = 1;
let cardsJ1 = document.querySelectorAll('#cardsJ1');
let cardsJ2 = document.querySelectorAll('#cardsJ2');
let boutonGO = document.querySelector('.go');
let btnNext = document.querySelectorAll('#next');
let btnNextJ2 = document.querySelectorAll('#nextJ2');

// click sur bouton lance le jeu et cacher le bouton

document.addEventListener('DOMContentLoaded', function () {
  boutonGO.addEventListener('click', startGame);
});

function startGame() {
  boutonGO.style.display = 'none';
  jeuTour();
}
btnNext.forEach((bouton) => {
  bouton.addEventListener('click', function () {
    nombreTour++;
    jeuTour();
  });
});
btnNextJ2.forEach((bouton) => {
  bouton.addEventListener('click', function () {
    nombreTour++;
    jeuTour();
  });
});
// lancement boucle while
function jeuTour() {
  if (nombreTour % 2 !== 0) {
    console.log('J1 joue');
    cardsJ2.forEach((card) => card.classList.add('grise'));
    cardsJ1.forEach((card) => card.classList.remove('grise'));
  } else {
    console.log('J2 joue');
    cardsJ1.forEach((card) => card.classList.add('grise'));
    cardsJ2.forEach((card) => card.classList.remove('grise'));
  }
}
// ATTAQUES J1
let attaqueMario = document.querySelector('.btnAttaque1J1');
let specialeMario = document.querySelector('.btnSpeciale1J1');
let attaqueLuigi = document.querySelector('.btnAttaque2J1');
let specialeLuigi = document.querySelector('.btnSpeciale2J1');
let attaquePeach = document.querySelector('.btnAttaque3J1');
let specialePeach = document.querySelector('.btnSpeciale3J1');
let attaqueKemek = document.querySelector('.btnAttaque4J1');
let specialeKemek = document.querySelector('.btnSpeciale4J1');
let gameContainer2 = document.querySelector('.viesJ2');

attaqueMario.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    let dernierChampignon2 = champignons2[champignons2.length - 1];
    gameContainer2.removeChild(dernierChampignon2);
  }
  checkPerdant();
});
specialeMario.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    let dernierChampignon2 = champignons2[champignons2.length - 1];
    let avantDernierChampignon2 = champignons2[champignons2.length - 2];
    gameContainer2.removeChild(dernierChampignon2);
    gameContainer2.removeChild(avantDernierChampignon2);
  }
  specialeMario.disabled = true;
  checkPerdant();
});
attaqueLuigi.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    for (let i = 0; i < 2; i++) {
      let dernierChampignon2 = champignons2[champignons2.length - 1 - i];
      gameContainer2.removeChild(dernierChampignon2);
    }
  }
  checkPerdant();
});
specialeLuigi.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    for (let i = 0; i < 4; i++) {
      let dernierChampignon2 = champignons2[champignons2.length - 1 - i];
      gameContainer2.removeChild(dernierChampignon2);
    }
  }
  specialeLuigi.disabled = true;
  checkPerdant();
});
attaquePeach.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    let dernierChampignon2 = champignons2[champignons2.length - 1];
    gameContainer2.removeChild(dernierChampignon2);
  }
  checkPerdant();
});
specialePeach.addEventListener('click', function () {
  let champignonsJ1 = document.querySelectorAll('.viesJ1 .champignonJ1');
  let nouveauChampignonJ1 = document.createElement('div');
  nouveauChampignonJ1.className = 'champignonJ1';
  document.querySelector('.viesJ1').appendChild(nouveauChampignonJ1);
  specialePeach.disabled = true;
  checkPerdant();
});
attaqueKemek.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    let dernierChampignon2 = champignons2[champignons2.length - 1];
    gameContainer2.removeChild(dernierChampignon2);
  }
  checkPerdant();
});
specialeKemek.addEventListener('click', function () {
  let champignons2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  if (champignons2.length > 0) {
    let dernierChampignon2 = champignons2[champignons2.length - 1];
    let avantDernierChampignon2 = champignons2[champignons2.length - 2];
    gameContainer2.removeChild(dernierChampignon2);
    gameContainer2.removeChild(avantDernierChampignon2);
  }
  specialeKemek.disabled = true;
  checkPerdant();
});
// ATTAQUES J2
let attaqueMarioJ2 = document.querySelector('.btnAttaque1J2');
let specialeMarioJ2 = document.querySelector('.btnSpeciale1J2');
let attaqueLuigiJ2 = document.querySelector('.btnAttaque2J2');
let specialeLuigiJ2 = document.querySelector('.btnSpeciale2J2');
let attaquePeachJ2 = document.querySelector('.btnAttaque3J2');
let specialePeachJ2 = document.querySelector('.btnSpeciale3J2');
let attaqueKemekJ2 = document.querySelector('.btnAttaque4J2');
let specialeKemekJ2 = document.querySelector('.btnSpeciale4J2');
let gameContainer = document.querySelector('.viesJ1');

attaqueMarioJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    let dernierChampignon = champignons[champignons.length - 1];
    gameContainer.removeChild(dernierChampignon);
  }
  checkPerdant();
});
specialeMarioJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    let dernierChampignon = champignons[champignons.length - 1];
    let avantDernierChampignon = champignons[champignons.length - 2];
    gameContainer.removeChild(dernierChampignon);
    gameContainer.removeChild(avantDernierChampignon);
  }
  specialeMarioJ2.disabled = true;
  checkPerdant();
});
attaqueLuigiJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    for (let i = 0; i < 2; i++) {
      let dernierChampignon = champignons[champignons.length - 1 - i];
      gameContainer.removeChild(dernierChampignon);
    }
  }
  checkPerdant();
});
specialeLuigiJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    for (let i = 0; i < 4; i++) {
      let dernierChampignon = champignons[champignons.length - 1 - i];
      gameContainer.removeChild(dernierChampignon);
    }
  }
  specialeLuigiJ2.disabled = true;
  checkPerdant();
});
attaquePeachJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    let dernierChampignon = champignons[champignons.length - 1];
    gameContainer.removeChild(dernierChampignon);
  }
  checkPerdant();
});
specialePeachJ2.addEventListener('click', function () {
  let champignonsJ2 = document.querySelectorAll('.viesJ2 .champignonJ2');
  let nouveauChampignonJ2 = document.createElement('div');
  nouveauChampignonJ2.className = 'champignonJ2';
  document.querySelector('.viesJ2').appendChild(nouveauChampignonJ2);
  specialePeachJ2.disabled = true;
  checkPerdant();
});
attaqueKemekJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    let dernierChampignon = champignons[champignons.length - 1];
    gameContainer.removeChild(dernierChampignon);
  }
  checkPerdant();
});
specialeKemekJ2.addEventListener('click', function () {
  let champignons = document.querySelectorAll('.viesJ1 .champignonJ1');
  if (champignons.length > 0) {
    let dernierChampignon = champignons[champignons.length - 1];
    let avantDernierChampignon = champignons[champignons.length - 2];
    gameContainer.removeChild(dernierChampignon);
    gameContainer.removeChild(avantDernierChampignon);
  }
  specialeKemekJ2.disabled = true;
  checkPerdant();
});

function checkPerdant() {
  let champignonsJ1 = document.querySelectorAll('.viesJ1 .champignonJ1');
  let champignonsJ2 = document.querySelectorAll('.viesJ2 .champignonJ2');

  if (champignonsJ1.length === 0) {
    console.log('Joueur 1 a perdu !');
  }

  if (champignonsJ2.length === 0) {
    console.log('Joueur 2 a perdu !');
  }
}
