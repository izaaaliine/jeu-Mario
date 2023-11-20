document.addEventListener('DOMContentLoaded', function () {
  let gameContainer = document.querySelector('.viesJ1');
  let champignonOriginal = document.querySelector('.champignonJ1');

  // Ajouter l'image ".champignonJ1" 10 fois au début du jeu
  for (var i = 0; i < 10; i++) {
    // Cloner l'élément champignon
    let champignonClone = champignonOriginal.cloneNode(true);

    // Ajouter la copie à la div gameContainer
    gameContainer.appendChild(champignonClone);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let gameContainer2 = document.querySelector('.viesJ2');
  let champignonOriginal2 = document.querySelector('.champignonJ2');

  // Ajouter l'image ".champignonJ1" 10 fois au début du jeu
  for (var i = 0; i < 10; i++) {
    // Cloner l'élément champignon
    let champignonClone2 = champignonOriginal2.cloneNode(true);

    // Ajouter la copie à la div gameContainer
    gameContainer2.appendChild(champignonClone2);
  }
});
