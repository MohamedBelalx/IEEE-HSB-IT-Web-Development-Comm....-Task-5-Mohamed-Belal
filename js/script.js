/*$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});*/

$('#sidebar li').click(function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
});
