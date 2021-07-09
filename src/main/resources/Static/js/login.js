var attemp = 0;
var apiLogin = (function () {
    function autenticarUsuario() {

        var username = document.getElementById("username").value;
        var password = document.getElementById("contraseña").value;
        if (username === "" || password === "") {
            alert("Todos los campos son requeridos.");
        } else {
            const options = {
                method: 'GET',

            };
            axios.request(options).then(function (response) {
                console.log(response);
                if (response.data.rol === "usuario") {
                    window.location.href = "/Deportes.html.html?id=" + response.data.id;
                }
                if (response.data.rol === "administrador") {
                    window.location.href = "/Deportes.html?id=" + response.data.id;
                }

            }).catch(function (error) {
                alert("Este usuario no se encuentra registrado o la contraseña es incorrecta");
            });

        }
    }
    return {
        autenticarUsuario: autenticarUsuario,


    }
})();