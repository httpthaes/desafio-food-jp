const comentarios = [
    {
        foto: "profile-1.png",
        nome: "Daniele Almeida",
        comentario: "Ótimo serviço! Encantada com a qualidade dos pratos.",
        nota: 5,
    },
    {
        foto: "profile-2.png",
        nome: "Ricardo França",
        comentario: "Não é apenas a comida excelente, o serviço torna a experiência especial.",
        nota: 4,
    },
];

const container = document.querySelector('.cards-comentarios');

function exibirComentarios(lista = comentarios) {
    container.innerHTML = '';

    lista.forEach((comentario) => {
    
        const divComentario = document.createElement('div')
        divComentario.classList.add('comentario')

        const img = document.createElement('img')
        img.src = `img/${comentario.foto}`
        img.alt = comentario.nome
        img.classList.add('s-comentarios-profile')

        const nome = document.createElement('h3')
        nome.textContent = comentario.nome

        const texto = document.createElement('p')
        texto.textContent = comentario.comentario

        const avaliacao = document.createElement('div')
        avaliacao.classList.add('avaliacao')

        for (let i = 0; i < comentario.nota; i++) {
            const estrela = document.createElement('img')
            estrela.src = 'img/star.svg'
            avaliacao.appendChild(estrela)
        }

        divComentario.appendChild(img)
        divComentario.appendChild(nome)
        divComentario.appendChild(texto)
        divComentario.appendChild(avaliacao)

        container.appendChild(divComentario)
    })
}

exibirComentarios();