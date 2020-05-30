"use strict";
$(document).ready(function(){
  $("form, nav").hide();

  $("#emailtoggle").click(function(){
    $("form").toggle();
  })

  $("#navtoggle").click(function(){
    $("nav").toggle();
  })
})