// $('#email').blur(function() {
//     $('#email').email();
// });
// $('#username').blur(function() {
//     $('#username').username();
// });
// $('#phone').blur(function() {
//     $('#phone').phone();
// });
// $('#zip').blur(function() {
//     $('#zip').zip();
// });

$('#button').click(e => {
    if ($('#email').email() && $('#username').username() && $('#phone').phone() && $('#zip').zip()) {
        $('#brand-text').text('You are a Genius:-)');
    }
    e.preventDefault();
});