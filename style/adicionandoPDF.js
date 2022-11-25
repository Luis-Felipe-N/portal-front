const inputDocumento = document.querySelector('#id_documento')

inputDocumento.addEventListener('change', (e) => {
    const nameFile = e.currentTarget.files[0].name
    document.querySelector('#nomeDoArquivo').textContent = nameFile
})
