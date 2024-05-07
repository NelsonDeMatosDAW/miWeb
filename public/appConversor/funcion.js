
//Adquirimos el campo para imprimir y error
let imprimir = document.getElementById("imprimir");
let error = document.getElementById("error");

//Creamos la variable tipoCambio para poder acceder desde cualquier lugar
let tipoCambio;

function prueba() {
    //Borramos el campo error e imprimir
    error.innerHTML = "";
    imprimir.innerHTML = "";

    //Adquirimos el campo importe
    let importe = document.getElementById("importe").value;
    //Adquirimos el valor de los select y recojemos unicamente la nomenglatura de la moneda
    let de = document.getElementById("de").value;
    let entrada = de.substring(0, 3);
    let monedaEntrada = de.substring(4, de.length);

    let a = document.getElementById("a").value;
    let salida = a.substring(0, 3);
    let monedaSalida = a.substring(4, a.length);

    if (importe <= 0) {
        error.innerHTML = "El importe debe ser positivo y superior a cero.";
    }else{
        //Creamos la url
        let url = `https://exchange-rates.abstractapi.com/v1/live/?api_key=ffbc07a2d5bd48208f53adf8fa468661&base=${entrada}&target=${salida}`

        //Creamos un nuevo XMLHttpRequest
        var xhttp = new XMLHttpRequest();

        //Funcion que se ejecuta al finalizar la llamada
        xhttp.onreadystatechange = function () {
            //Si se devuelve readyState = 4 y status 200 SIN ERROR
            if(this.readyState == 4 && this.status == 200){
                let respuesta = JSON.parse(this.responseText); //Guardamos lo devuelto en JSON

                tipoCambio = respuesta.exchange_rates[salida];

                //Calculamos el resultado y lo imprimimos
                let total = importe * tipoCambio;
                imprimir.innerHTML = importe+" "+monedaEntrada+" son: "+total+" "+monedaSalida+"<br>";

            }else if (this.readyState == 4 && this.status != 200) {
                //Adquirimos el campo para imprimir
                let textError = respuesta.error.message;
                error.innerHTML = " "+textError+"<br>";
                error.innerHTML += "Ha ocurrido un error, consulte con el administrador.";
            }
        };

        //Endpoint de la API y método que se va a usar para la llamada
        xhttp.open("GET", url, true);

        //Si queremos pasar parámetros a nuestra API, podemos hacerlo en el método send
        xhttp.send(null);
    } //Final del else de la comprobación de importe positivo


} //Final función prueba



//Adquirimos el botón
let boton = document.getElementById("convertir");

boton.addEventListener("click", prueba);

