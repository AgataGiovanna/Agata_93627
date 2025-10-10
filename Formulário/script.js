// Função para validar o formulário

function validateForm(){
    //Obtém os valores dos campos input pelo ID
    let name =document.getElementById('name').value;
    let email =document.getElementById('email').value;
    let password =document.getElementById('password').value;
    let confirmPassword =document.getElementById('confirmPassword').value;

    //Obtém o elemento para exibir mensagens de erro
    let errorMessage = document.getElementById('error-message');

    //Limpa qualquer mensagem de erro anterior
    errorMessage.textContent ='';

    //Verifica se o campo "Nome" está vazio
    if(name === '') {
        //Exibe ums mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira seu nome.';
        return false; //Retorna falso para impedir o envio do formulário
    }

    //Verifica se o campo "E-mail" está vazio
    if(email === '') {
        //Exibe ums mensagem de erro e interromepe o envio do formulário
        errorMessage.textContent = 'Por favor, insira seu e-mail.';
        return false; //Retorna falso para impedir o envio do formulário
    }

    //Verifica se o campo "Nome" está vazio
    if(password === '') {
        //Exibe ums mensagem de erro e interromepe o envio do formulário
        errorMessage.textContent = 'Por favor, insira sua senha.';
        return false; //Retorna falso para impedir o envio do formulário
    }

    //Verifica se o campo "Nome" está vazio
    if(password !== confirmPassword) {
        //Exibe ums mensagem de erro e interromepe o envio do formulário
        errorMessage.textContent = 'As senhas não coincidem';
        return false; //Retorna falso para impedir o envio do formulário
    }

    //Se todas as verificções forem bem-secedidas, o formulário pode ser enviado
    return true; //Permite envio do formulário
}