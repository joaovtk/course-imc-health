(() => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let weight = document.getElementById("peso").value;
        let height = document.getElementById("altura").value;
        weight = weight.replace(",", ".");
        height = height.replace(",", ".");
        let imc = Number((weight / height ** 2)).toFixed(1)
        if(!weight || !height){
            alert("Valores invalidos");
        }else {
            if(isNaN(imc)){
                alert("Digite um valor valido");
            }else {
                document.querySelector(".box > h1").textContent = imc + " pontos";
                let words = document.querySelector(".box > p");
                if(imc < 18.5){
                    words.textContent = "Abaixo do peso";
                }else if(imc < 24.9){
                    words.textContent = "Peso Ideal";
                }else if(imc < 29.9){
                    words.textContent = "Lemente acima do peso";
                }else if(imc < 34.9){
                    words.textContent = "Obesidade grau 1";
                }else if(imc < 39.9){
                    words.textContent = "Obsediade 2 severa";
                }else {
                    words.textContent = "Obesidade morbida";
                }
            }
    
            form.reset();
        }
    });
})();