// Funcao para os baloes
function mostrarDetalhes(id) {
    const elemento = document.getElementById(id);
    
    // Se estiver escondido, mostra. Se estiver visivel, esconde.
    if (elemento.classList.contains('hidden')) {
        elemento.classList.remove('hidden');
    } else {
        elemento.classList.add('hidden');
    }
}

// Funcao para o botao Saiba Mais
const btn = document.getElementById('btnSaibaMais');
const info = document.getElementById('infoExtras');

btn.addEventListener('click', function() {
    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
        btn.innerText = "FECHAR INFO";
    } else {
        info.classList.add('hidden');
        btn.innerText = "SAIBA MAIS..";
    }
});