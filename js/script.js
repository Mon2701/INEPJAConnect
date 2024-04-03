$(document).ready(function(){
  // Ocultar todas las secciones excepto la del enlace de inicio
  $('section').not('#inicio').hide();

  $('#menu a').click(function(e){
      e.preventDefault();
      var target = $(this).attr('href');
      $('section').fadeOut(300);
      $(target).delay(300).fadeIn(300);
  });
});
  /*---------------------------SERVICIOS Y TRAMITES-----------------------------------------*/

  const tabsContainer = document.querySelector(".servicios-tabs"),
  serviciosSection = document.querySelector(".servicios-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        serviciosSection.querySelector(".tab-content.active").classList.remove("active");
        serviciosSection.querySelector(target).classList.add("active");
    }
});

