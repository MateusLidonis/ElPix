window.onload = function () {
  // Posicione o botão "Não" no centro da tela quando a página for carregada
  var x = (window.innerWidth - document.getElementById("Nao").offsetWidth) / 2;
  var y =
    (window.innerHeight - document.getElementById("Nao").offsetHeight) / 2;
  document.getElementById("NaoWrapper").style.left = x + "px";
  document.getElementById("NaoWrapper").style.top = y + "px";
  i = 0;
  move = 0;
};

document.getElementById("Sim").onclick = function () {
  alert("PIX realizado!");
};

document.getElementById("Nao").onclick = function () {
  if (move == 1) {
    alert("Realizei o PIX mesmo assim kkkkkkkkkkkk");
  }
  moveButton();
  move = 1;
};

if (window.screen.width <= 625) {
  document.getElementById("Nao").onclick = function () {
    moveButton();
    audio();
  };
} else {
  document.getElementById("Nao").onmouseover = function () {
    if (move == 1) {
      moveButton();
      audio();
    }
  };
}

function moveButton() {
  var x = Math.floor(
    Math.random() *
      (window.innerWidth - document.getElementById("Nao").offsetWidth)
  );
  var y = Math.floor(
    Math.random() *
      (window.innerHeight - document.getElementById("Nao").offsetHeight)
  );
  document.getElementById("NaoWrapper").style.left = x + "px";
  document.getElementById("NaoWrapper").style.top = y + "px";
  i++;
}

function audio() {
  if (i == 5) {
    const audio = new Audio("pix.mp3");
    audio.play();
    i = 0;
  }
}
