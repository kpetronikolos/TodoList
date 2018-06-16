let counter = 0;
  
$( "body" ).delegate( ".list-item", "click", function() {
  let selectedElement = $(this);

  selectedElement.hide();

  $('#done-list')
    .append($('<li class="list-item1"></li>')
    .text(selectedElement.text()));

  counter--;

  $('#counter')
    .text(counter).append(' items left.');

});

$( "body" ).delegate( ".list-item1", "click", function() {
  let selectedElement2 = $(this);

  selectedElement2.hide();

  $('#todo-list')
    .append($('<li class="list-item"></li>')
    .text(selectedElement2.text()));

  counter++;
  
  $('#counter')
    .text(counter).append(' items left.');

});

$('#btn1').on('click', function() {
  let input = $('#textid').val();

  if (input == ""){
    $('#validate').text('Invalid');
  }  
  else{
    $('#validate').text('');

    $('#todo-list')
      .append($('<li class="list-item"></li>')
      .text(input));

    counter++;

    $('#counter')
      .text(counter).append(' items left.');
  }
  
});