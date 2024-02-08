$(document).ready(function(){
    
    /*** Funcionalidades da certificação ***/
    if($("form").hasClass("certificacao")){

        /*** Verificar se há dados gravados ***/
        if(sessionStorage.getItem("nome") !== null){
            $(".dados-disponiveis").slideDown(1500);
        }

        /*** Carregar dados gravados ***/
        $(".dados-disponiveis a").on("click", function(e){
            e.preventDefault;
            $("form.certificacao input, form.certificacao textarea").each(function(){
                var nome = this.name;
                this.value = sessionStorage.getItem(nome);
            });
        });
        

        /*** Replicar valor em frente ao campo do formulário ***/
        $("form.certificacao input, form.certificacao textarea").on("input", function(){
            var valor = this.value;
            
            $(this).siblings(".valor").html(nl2br(valor));
        });


        /*** Armazenar valor na sessionStorage ***/
        $("form.certificacao input, form.certificacao textarea").on("blur", function(){
            var nome = this.name;
            var valor = this.value;

            sessionStorage.setItem(nome,valor);
        });


        /*** Validações do formulário ***/
        $('.ui.form').form({
            fields:{
                nome: {
                        identifier: 'nome',
                        rules:  [
                                    {
                                        type   : 'empty',
                                        prompt : 'Por favor, preencha seu nome.'
                                    }
                                ]
                },
                email: {
                    identifier: 'email',
                    rules:  [
                                {
                                    type   : 'empty',
                                    prompt : 'Por favor, preencha seu e-mail.'
                                },
                                {
                                    type   : 'email',
                                    prompt : 'Por favor, preencha um e-mail válido.'
                                }
                            ]
                    },
                telefone: {
                        identifier: 'telefone',
                        rules:  [
                                    {
                                        type   : 'empty',
                                        prompt : 'Por favor, preencha seu telefone.'
                                    },
                                    {
                                        type   : 'regExp[\\([0-9]{2}\\) 9?[0-9]{4}-[0-9]{4}]',
                                        prompt : 'Por favor, preencha um telefone válido.'
                                    }
                                ]
                        },
                assunto: {
                        identifier: 'assunto',
                        rules:  [
                                    {
                                        type   : 'empty',
                                        prompt : 'Por favor, preencha o assunto da sua mensagem.'
                                    }
                                ]
                        },
                mensagem: {
                        identifier: 'mensagem',
                        rules:  [
                                    {
                                        type   : 'empty',
                                        prompt : 'Por favor, preencha sua mensagem.'
                                    }
                                ]
                        },
            }
        });


        /* Função de quebra de linha para o valor do Textarea */
        function nl2br (str){
            if(typeof str === 'undefined' || str === null){ return ''; }
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2');
        }
    }
});