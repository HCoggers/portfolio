"use strict";
$(document).ready(function(){
  $("form, nav").hide();

  $("#emailtoggle").click(function(){
    $("form").toggle();
  })

  $("#navtoggle").click(function(){
    $("nav").toggle();
  })

  $(".carouselnav a").click(function(e) {
    var target = this.getAttribute("href");
    var scroll = $('.slides').scrollLeft();
    console.log(target, $(target).position().left);
    $('.slides').animate({
      scrollLeft: scroll + $(target).position().left
    });
    e.preventDefault();
  })
})