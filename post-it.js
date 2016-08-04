
var counter_board = 1
var Board = function( selector, id ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  // counter_board = counter_board + 1
  this.new_board_html =  "<div id=\"board_" + counter_board + "\" class = \"board\"> <div id=\"master\"  class=\"post-it\"><div class=\"header\"><div class=\"close\">X</div></div><div class=\"content\" contenteditable=\"true\">...</div></div></div>"
  this.id_board = counter_board
  this.name_board = ""
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $(selector);
  console.log("This is the selector",selector);
  counter_board = counter_board + 1

  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
    // $elem.dblclick(function(event) {
    //   console.log("Entre a initialize-dbclick",selector,$elem)
    //   var complete_width = $( "body" ).outerWidth( true )
    //   var width_10 =  complete_width * .1
    //   // console.log(width_10)
    //   var positionX = event.pageX
    //   var positionY = event.pageY
    //   positionX = positionX - width_10
    //   console.log(positionX);
    //   console.log(positionY);
    //   counter_post = counter_post + 1
    //   post_it = new PostIt(positionX, positionY);
    //   post_it.num_post = counter_post
    //   console.log(post_it);

    //   $elem.append(post_it.new_post_it);
    //   $(".post-it").draggable({
    //      handle: ".header"
    //   });


    //   $(".close").click(function(){
    //     $( this ).parent().parent().remove()
    //   });

      
    // });
  };
  initialize();
};

var counter_post = 0

var PostIt = function(positionX, positionY, selector) {
  // Aquí va el código relacionado con un post-it
  this.new_post_it = "<div id=\"master" + counter_post + "\" style=\" top:" + positionY + "; left:" + positionX + "; \" class=\"post-it\"><div class=\"header\"><div class=\"close\">X</div></div><div class=\"content\" contenteditable=\"true\">...</div></div>"

  this.num_post = 0

  var $elem_post = $( selector );

};

$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
// $("#board_0").remove();
  $( "#button_add" ).click(function(){

    $(".board").hide()
    var new_board_title = prompt("Give me the new board name")
    console.log(new_board_title)
    console.log(counter_board)
    var selector_board = '#board_' + counter_board
    var new_board = new Board(selector_board, counter_board);
    new_board.name_board = new_board_title
    console.log(new_board)

    var counter_link = counter_board - 1
    $( "#names_board_barra" ).append(  "<button id=\"link_" + counter_link + "\" class = \"boards_names\">" + new_board_title +  "</button> <br> <br>")
    var link_selector = "#link_" + counter_link
    var new_selector_board = "#board_" + counter_link
      console.log(link_selector)
      console.log(new_selector_board)

    $(link_selector).click(function(){
      console.log("Test link")

      $(".board").hide();
      $(new_selector_board).show();

    });

    $( "body" ).append(new_board.new_board_html)




    $(selector_board).dblclick(function(event) {

      // console.log("Entre a initialize-dbclick",selector,$elem)
      var complete_width = $( "body" ).outerWidth( true )
      var width_10 =  complete_width * .1
      // console.log(width_10)
      var positionX = event.pageX
      var positionY = event.pageY
      positionX = positionX - width_10
      console.log(positionX);
      console.log(positionY);
      counter_post = counter_post + 1
      post_it = new PostIt(positionX, positionY);
      post_it.num_post = counter_post
      console.log(post_it);

      $(selector_board).append(post_it.new_post_it);
      $(".post-it").draggable({
         handle: ".header" 
      });


      $(".close").click(function(){
        $( this ).parent().parent().remove()
      });

      $(".post-it").dblclick(function(event){
          console.log("Stop doble click")
            event.stopPropagation();
       });
          
      $(".post-it").click(function(event){
          var selector = $(this).parent().attr("id");
          var object = $(this);
          // var board_id = 
         $("#" + selector + " > .post-it").css("zIndex", "1");
         $(this).css("zIndex", "2");
      });
     });


  });

  
  
});
