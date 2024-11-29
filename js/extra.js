
$(document).ready(function(){
	$('.sidenav').sidenav();
	});
$(document).ready(function(){
	$('.parallax').parallax();
  });
$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

$(document).ready(function(){
    $('.sidenav').sidenav({
    	 edge: 'right',
    	 dragable:'true',
    });
  });
 $(document).ready(function(){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
        $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1')); 
  });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
  const audio = document.getElementById('miAudio');
  let audioReproducido = false; // Evita múltiples reproducciones

  const activarAudio = () => {
    if (!audioReproducido) {
      audio.muted = false; // Activa el sonido
      audio.play().then(() => {
        console.log("Audio reproducido");
        audioReproducido = true; // Marca que ya se reprodujo
        // Remueve todos los listeners después de la primera reproducción
        document.removeEventListener('scroll', activarAudio);
        document.removeEventListener('click', activarAudio);
        document.removeEventListener('mousemove', activarAudio);
      }).catch(error => {
        console.error('Error al intentar reproducir el audio:', error);
      });
    }
  };

  // Escucha varios eventos para asegurar interacción del usuario
  document.addEventListener('scroll', activarAudio);
  document.addEventListener('click', activarAudio);
  document.addEventListener('mousemove', activarAudio);