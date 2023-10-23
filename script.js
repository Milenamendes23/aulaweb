function verificarIdade(){
    var idade = parseInt(document.getElementById("idade").value);
    var status = document.getElementById("status");

    if (idade < 16) {
        document.getElementById("resultado").textContent = "Você não pode votar e não pode dirgir.";
        status.style.backgroundImage = "url('imgs/triste.png')";
    
    }else if (idade < 18){
        document.getElementById("resultado").textContent= "Você pode votar, mas não pode dirigir.";

    } else{ 
        document.getElementById("resultado").textContent= "parabéns! VOcê pode votar e dirigir.";

    }

}