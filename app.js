  //Declaracion del peso de cada producto

    const productos = {

        "PIEZA POLLO CRYSPY": 0.120,
        "PIEZA POLLO RECETA SECRETA": 0.120,
        "NUGGET": 0.020,
        "STRIP": 0.040,
        "FILETE CHICKEN SANDWICH MARINADO": 0.110,
        "FILETE KRUNCHY": 0.110,
        "HOT WINGS": 0.060,
        "TENDERS": 0.060,
        "POP CORN": 0.020,

    };

    //Calcular el Peso del Producto

    function calcularPeso(){

        const producto = document.getElementById("producto").value;
        const cantidad = parseFloat(document.getElementById("cantidad").value);

        if(isNaN(cantidad) || cantidad <= 0){
            alert("Ingrese una cantidad válida")
            return;
        }

        const pesoUnitario = productos[producto];
        const pesoTotal = cantidad * pesoUnitario;

        document.getElementById("resultado").innerText = "Peso Aproximado " + pesoTotal.toFixed(2) + "KG";
    }

    //Calcular la cantidad del Producto

    function calcularCantidad(){

        const producto = document.getElementById("producto").value;
        const peso = parseFloat(document.getElementById("peso").value);

        if(isNaN(peso) || peso <= 0){
            alert("Ingrese un peso válido");
            return;
        }

        const pesoUnitario = productos[producto];
        const cantidad = peso / pesoUnitario;

        document.getElementById("resultado").innerText = "Cantidad Aproximada " + Math.round(cantidad) + " Unidades";
    }

    document.getElementById("cantidad").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            calcularPeso();
        }
    });

    document.getElementById("peso").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            calcularCantidad();
        }
    });