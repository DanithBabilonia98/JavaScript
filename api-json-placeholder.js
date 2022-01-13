function listarUsuarios() {
  let listadoUsuarios = document.getElementById('usuarios');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (respuesta) {
      respuesta.json().then(function (datos) {
        let usuarioHTML = '';
        for (let i = 0; i < datos.length; i++) {
          let usuarioActual = datos[i];
          usuarioHTML += `
            <tr>
              <th scope="row">${usuarioActual.id}</th>
              <td>${usuarioActual.name}</td>
              <td>${usuarioActual.username}</td>
              <td>${usuarioActual.email}</td>
              <td>${usuarioActual.phone}</td>
              <td>${usuarioActual.website}</td>
              <td>${usuarioActual.address.street}</td>
              <td>${usuarioActual.company.name}</td>
            </tr>
          `;
        }
        listadoUsuarios.innerHTML = usuarioHTML;
      });
    })
    .catch(function (error) {
      alert('Estoy en el error!');
      console.log(error);
    });
}

function listarComentarios() {
  let contenidoComentarios = document.getElementById('contenido-comentarios');

  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(function (respuesta) {
      respuesta.json().then(function (datos) {
        let comentariosHTML = '';
        for (let i = 0; i < datos.slice(0, 10).length; i++) {
          let comentarioActual = datos[i];
          comentariosHTML += `
          <div class="col-sm-3 mb-1">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${comentarioActual.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${comentarioActual.email}</h6>
                <p class="card-text">
                  ${comentarioActual.body}
                </p>
              </div>
            </div>
          </div>`;
        }
        contenidoComentarios.innerHTML = comentariosHTML;
      });
    })
    .catch(function (error) {
      alert('Estoy en el error dentro de listado de comentarios!');
      console.log(error);
    });
}

function listarFotos() {
  let ContenidoGaleria = document.getElementById('contenido_imagenes');
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function (respuesta) {
      respuesta.json().then(function (datos) {
        let galeriaHTML = '';
        for (let i = 1; i < datos.slice(0, 20).length; i++) {
          let imagenActual = datos[i];
          galeriaHTML += `
        <div class="col-sm-3 mb-1" >
            <div class="card-body">
                  <p class="card-text">${imagenActual.albumId}</p>
                  <p class="card-text mb-3">${imagenActual.title}</p>
            </div>
            <div class="card "" style="width: 14rem">
              <img
                  src="${imagenActual.url}"
                  alt="..." class = "mb-2"
                />   
                <img 
                  src="${imagenActual.thumbnailUrl}"
                  alt="..."
                />          
              </div>                          
          </div>
        `;
        }
        ContenidoGaleria.innerHTML = galeriaHTML;
      })
    })
    .catch(function (error) {
      alert('Estoy en el error dentro de listado de imágenes !');
      console.log(error);
    });
}

listarUsuarios();
listarComentarios();
listarFotos();
