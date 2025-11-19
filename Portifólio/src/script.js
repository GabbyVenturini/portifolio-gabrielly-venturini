document.getElementById("formulario").addEventListener("submit", enviarWhatsApp);

function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const telefone = '5551985112537';

    const texto = `Olá! Meu nome é ${nome}.\n\nEstou entrando em contato através do seu portfólio.\n\nMensagem:\n${mensagem}\n\nObrigado pelo seu tempo!`;

    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, '_blank');
}
