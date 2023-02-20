function carga() {
      const url = "https://randomuser.me/api/";


      fetch(url)
            .then(response => response.json())
            .then(data => MostrarDatos(data))
            .catch(error => { console.error('Error al obtener los datos:', error); });


      const MostrarDatos = (data) => {
            console.log(data)
            let valor = data.results[0];

            const img = document.createElement("img");
            img.src = valor.picture.large;
            const contenedor = document.getElementById("Foto");
            contenedor.appendChild(img);

            document.getElementById('name').innerHTML = valor.name.title + " " + valor.name.first + " " + valor.name.last;
            document.getElementById('mail').innerHTML = "e-mail:" + " " + valor.email;
            document.getElementById('Tel').innerHTML = "teléfono:" + " " + valor.phone;


      }
}
carga()

function mostrarDiv(id) {
      var div1 = document.getElementById("home");
      var div2 = document.getElementById("Experiencia");
      var div3 = document.getElementById("Formacion");
      var div4 = document.getElementById("Redes");
      var seleccionado = document.getElementById(id);
      

      if (seleccionado === div1) {
            div1.style.display = "block";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";
      }
      if (seleccionado === div2) {
            div1.style.display = "none";
            div2.style.display = "block";
            div3.style.display = "none";
            div4.style.display = "none";
      }
      if (seleccionado === div3) {
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "block";
            div4.style.display = "none";
      }
      if (seleccionado === div4) {
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "block";
      }
}