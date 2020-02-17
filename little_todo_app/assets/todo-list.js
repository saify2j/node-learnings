$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('.del_icon').on('click', function(){
      var item = $(this).prev().text().replace(/ /g, "-");
      console.log(item);
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

  $('.ok_icon').on('click', function(){
    $(this).prev().prev().css("text-decoration","line-through");

  });

  // $('.del_icon').on('click', function(){
  //   var text =  $('.del_icon').prev().text(); 
  //   console.log(text)
  // })

});
