var apiCanchas = (function () {

function hacerReserva() {
    axios.request(options).then(function (response) {
        console.log(response.data);
        alert("La reserva ha sido realizada satisfactoriamente");
    }).catch(function (error) {
        alert("La cancha ya está reservada en este horario.");
    });
}
return {
    hacerReserva: hacerReserva
}
})();