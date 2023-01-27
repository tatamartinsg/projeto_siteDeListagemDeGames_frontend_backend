class Validacoes{
    validarUsername(username){
        const tamanhoUsername = username.length

        if(tamanhoUsername < 5){
            return { error: true, message: "Username possui menos que 5 caracteres." }
        }

        //verifica se todos os caracteres são apenas números
        if(!isNaN(parseFloat(username)) && isFinite(username)){
            return { error: true, message: "Username com apenas números." }
        }
        return {error: false}
    }
    validarEmail(email){
        const dominio = email.substring(email.indexOf("@") + 1, email.length); //after '@'
        const user = email.substring(0, email.indexOf("@")); //before @
    
        const afterDot = dominio.substring(dominio.indexOf(".") + 1, dominio.length) // after '.'
        const beforeDot = dominio.substring(0, dominio.indexOf(".")) //before '.'
    
        // verificar se o dominio é hotmail, gmail ou ufv - se nao for um desse, o email é invalido
        const emails = ['hotmail', 'gmail', 'ufv','outlook']
        const result = emails.find(resultado => resultado == beforeDot)
        
        if ((email.length < 10) || (email.length == 0) || (user.length < 4) || (dominio.length < 7) || (afterDot.length < 2) || (!result)){
            return {
                error: true,
                message: "Domínios de email que aceitamos: hotmail, gmail, ufv e outlook."
            };
        }
        //email valido
        return {error: false};
    }

    validarPassword(password){
        const tamanhoSenha = password.length
        if (tamanhoSenha < 6) {
            return { error: true, message: "Senha menor que 6 caracteres, por favor, digite outra senha." };
        }
        return {error: false}
        // const letrasMaiusculas = /[A-Z]/;
        // const letrasMinusculas = /[a-z]/;
        // const numeros = /[0-9]/;
        
        // let minuscula = 0
        // let maiuscula = 0
        // let num = 0

        // var passSplit = passwordValue.split('')
    
        // for (var i = 0; i < tamanhoSenha; i++){
        //     if (letrasMaiusculas.test(passSplit[i])) {
        //         maiuscula++
        //     }
        //     else if (letrasMinusculas.test(passSplit[i])) {
        //         minuscula++
        //     }
        //     else if (numeros.test(passSplit[i])) {
        //         num++
        //     }
        // }

        // if ((maiuscula > 0) && (minuscula > 0) && (num > 0)) {
        //     return 1;
        // }
        // else {
        //     return 0;
        // }
    }
}

export default new Validacoes()