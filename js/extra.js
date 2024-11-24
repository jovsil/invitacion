
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