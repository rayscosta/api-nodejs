/*
0 Obter um usuário
1 Obter o numero de telefone de um usuário a partir de seu Id
2 Obter o endereço do usuário pelo Id
*/

function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        });
    }, 1000)
}

function obterTelefone(idUsuario){
    setTimeout(() => {
        return {
            telefone: '972726130',
            ddd: 21
        }
    }, 1000);
}

function obterEndereco(idUsuario){

}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario);
    
}

obterUsuario(resolverUsuario);
// const telefone = obterTelefone(usuario.id);

// console.log('telefone', telefone);