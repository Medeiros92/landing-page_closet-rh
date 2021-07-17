//=====Const sr recebe função ScrollReveal=====
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

// Recebe as classes HTML para a animação
sr.reveal(`.divtitulo, .titulo, .subtitulo, #bt1, .divimgblackfriday`,{
    origin: 'top',
    interval: 200
});

sr.reveal(`.divform, .contador`,{
    origin: 'right',
    interval: 200
});

sr.reveal(`.divprodutos`,{
    interval: 200
});

sr.reveal(`.divclientes`,{
    origin: 'top',
    interval: 200
});

// Mostra Menu


// Função botão Form
function submitform(){
    var Eemail = document.getElementById('inputemail');
    var email = Eemail.value;
        if(email !== "" ){

            
            localStorage.setItem('email', email);
           
      
            alert('CADASTRO REALIZADO COM SUCESSO!');
        }else {
         alert('PREENCHA O CAMPO CORRETAMENTE');
        }

        //Limpa campos ao enviar o formulario
        Eemail = document.getElementById('inputemail').value='';
}


