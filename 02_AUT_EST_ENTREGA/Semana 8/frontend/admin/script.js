api = 'http://127.0.0.1:3081'

    $(document).ready(() => { 
        usuarios.list();
    });

    var usuarios = {
        
        list() {
            $.ajax({
                url: api + '/usuarios',
                type: 'GET',
                success: data => {
                    var tx = '';
                    tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                    data.forEach(element => {
                        tx += '<div class="user">';
                        tx += '<div class="title">' + `${element.nome} - ${element.email} - ${element.telefone} ` + '</div>';
                        tx += '<div class="actions">';
                        tx += '<div class="action" onclick="user.update(' + element.cod_usuario + ',\'' + element.cod_usuario + '\')">Editar</div>';
                        tx += '<div class="action" onclick="user.delete(' + element.cod_usuario + ')">Excluir</div>';
                        tx += '</div>';
                        tx += '</div>';
                    });
                    $('#main').html(tx);
                }
            });
            
        }
        
    };

    var user = {

        insert() {
            var nome = prompt('Digite o nome:');
            var email = prompt('Digite o email:');
            var telefone = prompt('Digite o telefone:');
            console.log(`${nome} - ${email} - ${telefone}`);
            if (nome && email && telefone) {
                if (nome.trim() != '' && email.trim() != '' && telefone.trim() != '') { //trim é para tirar espaço do inicio e final
                    $.ajax({
                        type: 'POST',
                        url: api + '/insereUsuario',
                        data: {nome: nome, email: email, telefone: telefone},
                    }).done(function () {
                        usuarios.list();
                    }).fail(function (msg) {
                        console.log('FAIL');
                    }).always(function (msg) {
                        console.log('ALWAYS');
                    });
                }
            }
        },


        update(cod_usuario, oldTitle) {

            var nome = prompt('Digite o novo nome:', oldTitle);
            var email = prompt('Digite o novo email:', oldTitle);
            var telefone = prompt('Digite o novo telefone:', oldTitle);
            if (nome) {
                if (nome.trim() != '') {
                    $.ajax({
                        type: 'POST',
                        url: api + '/atualizaUsuario',
                        data: {nome: nome, cod_usuario: cod_usuario, email: email, telefone: telefone},
                    }).done(function () {
                        usuarios.list();
                    }).fail(function (msg) {
                        console.log('FAIL');
                    }).always(function (msg) {
                        console.log('ALWAYS');
                    });
                }
            }
        },

        delete(cod_usuario) {

            if (confirm('Confirma a exclusão?')) {
                $.ajax({
                    type: 'POST',
                    url: api + '/removeUsuario',
                    data: {cod_usuario: cod_usuario},
                }).done(function () {
                    usuarios.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        },

    }