// Função para abrir o modal
function abrirModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector(".modal-content");
    modal.style.display = "block";
    if (modalContent) {
    modalContent.scrollTop = 0;
  }
}
  
  // Função para fechar o modal
  function fecharModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  // Fechar o modal ao pressionar a tecla "Esc"
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        var modais = document.getElementsByClassName('modal');
        for (var i = 0; i < modais.length; i++) {
          modais[i].style.display = "none";
        }
    }
});

  // Fechar o modal quando clicar fora dele
  window.onclick = function(event) {
    var modais = document.getElementsByClassName('modal');
    for (var i = 0; i < modais.length; i++) {
      if (event.target == modais[i]) {
        modais[i].style.display = "none";
      }
    }      
  }
  