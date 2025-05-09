
function cambiarContenido() {
    let div = document.getElementById('miDiv');
    div.innerHTML = '<strong>Contenido cambiado</strong>';
  }

  document.getElementById('miBoton').addEventListener('click', function () {
    document.getElementById('miDiv').style.backgroundColor = 'blue';
  });


  
  function cambiarImagen() {
    let img = document.getElementById('miImagen');
    let actual = img.getAttribute('src');
  
    if (actual.includes('bbb1.png')) {
      img.setAttribute('src', 'img/nav.jpg'); 
    } else {
      img.setAttribute('src', 'img/bbb1.png');
    }
  }
  
  

  function alertaClick() {
    alert('Evento ejecutado');
  }
  
  document.getElementById('btnEvento').addEventListener('click', alertaClick);
  
  function eliminarEvento() {
    document.getElementById('btnEvento').removeEventListener('click', alertaClick);
    alert('Evento eliminado');
  }
  