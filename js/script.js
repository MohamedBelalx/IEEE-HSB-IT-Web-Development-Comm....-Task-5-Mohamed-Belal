$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

/*$(document).ready(function(){
	$('#6').on('click', function (){
		$('#6').addClass('active');
		$('#1').removeClass('active');
		$('#1').on('click', function(){
		$('#6').removeClass('active');
		$('#1').addClass('active');
		});
	});
});*/
$('#sidebar li').click(function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
});
