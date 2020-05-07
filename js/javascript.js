jQuery(document).ready(function($){

    $('#welcome-form').on('submit', function(e){
       
        e.preventDefault();
        console.log('Submission detected.');
        var name = $('#food').val(); //return or sets val, we want to return in paragraph
        var para = $('<p></p>');        
        $("#display").prepend(para, name);
      
    });
});