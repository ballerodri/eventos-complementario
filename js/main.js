// funcion para disponibilizar dias (Domingo exceptuado) en los cuales se puede reservar turno
function cargaSemana() {
    var fecha = new Date;
    var dianum = [];
    var dia = [];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    for (let i = 0; i < 6 + 1; i++) {
        dianum[i] = fecha.getDate() + i;
        const d = new Date(meses[fecha.getMonth()] + dianum[i] + "," + fecha.getUTCFullYear());
        dia[i] = (dias[d.getDay()] + ', ' + dianum[i] + ' de ' + meses[fecha.getMonth()]);
    } 

    var domingo = dia.filter(d => d.includes("Domingo"));
    var sindomingo = dia.filter(d => d != domingo);

    $(document).ready(function(){
        var dropdown = $("#listaDias");
        $.each(sindomingo, function(index, value){
            $("<option/>", {
                value: value,
                text: value
            }).appendTo(dropdown);
        });
    });
}

// Listener para que se complete la lista de dias cuando el usuario hace click en la flecha del campo Dia
const lista = document.getElementById('flecha');
lista.addEventListener('click',cargaSemana()); 

//Listener para que muestre un alert con la reserva la cual esta formada por los datos del formulario
 const btnSubmit = document.getElementById('submit');
 btnSubmit.addEventListener('click', () => {
     let nombre = document.getElementById('nombre').value;
     let dia = document.getElementById("listaDias").value;
     let hora = document.getElementById("hora").value;
     let email = document.getElementById('email').value;
     let tel = document.getElementById('tel').value;

     Reserva(nombre, dia, hora, email, tel);
 });

 function Reserva(nombre, dia, hora, email, tel) {
     alert(`Hola, ${nombre}! \n\nemail: ${email} \ntelefono: ${tel} \n\nConfirmamos su reserva para el día ${dia} a las ${hora} \n\nGracias por su reserva!`);
 }

 let inputAControlar = document.querySelector('#submit');
 inputAControlar.addEventListener('keypress',(e)=>{
     let codCaracter = e.charCode;
     if(codCaracter==13){
         e.preventDefault();
         alert("Presionaste la tecla enter");
     }
 });
