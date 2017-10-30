$(function() {
 $("input,textarea").jqBootstrapValidation({
 preventSubmit: true,
 submitError: function($form, event, errors) {
 // additional error messages or events
 },
 submitSuccess: function($form, event) {
 event.preventDefault(); // prevent default submit behaviour
 // get values from FORM
 var name = $("input#user-name").val();
  var phone = $("input#user-phone").val();
 var time = $("input#user-time").val();
 var message = $("textarea#user-message").val();
 var firstName = name; // For Success/Failure Message
 // Check for white space in name for Success/Fail message
 if (firstName.indexOf(' ') >= 0) {
 firstName = name.split(' ').slice(0, -1).join(' ');
 }
 $.ajax({
 url: "././mail/contact_me.php",
 type: "POST",
 dataType: 'json',
 data: {
 name: name,
 phone: phone,
 time: time,
 message: message
 },
 cache: false,
 success: function(data) {
 if(data.error){
 // Fail message
 $('#success').html("<div class='alert alert-danger'>");
 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-danger').append("<strong>Возникла ошибка. Попробуйте отправить еще раз.");
 $('#success > .alert-danger').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 }
 else if(data.success){
 // Success message
 $('#success').html("<div class='alert alert-success'>");
 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-success').append("<strong>Заявка успешно отправлена!</strong>");
 $('#success > .alert-success').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 }
 }
 })
 },
 filter: function() {
 return $(this).is(":visible");
 },
 });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
 $('#success').html('');
});
