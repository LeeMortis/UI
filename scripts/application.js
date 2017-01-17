$(document).ready(function(){

	var obj = $(".upload-box");

	obj.on('dragenter', function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	    $(this).css('border', '2px solid #7f23d3');
	});

	obj.on('dragover', function (e) {
	     e.stopPropagation();
	     e.preventDefault();
	});

	obj.on('drop', function (e) {
	 
	     $(this).css('border', 'none');
	     $('#upload-progress').css('display', 'block');
	     $('.upload-box, .temp-btn').css('display', 'none');

	     e.preventDefault();
	     var files = e.originalEvent.dataTransfer.files;
	 
	     //We need to send dropped files to Server
	     handleFileUpload(files,obj);
	});

	//Closes the pop-up on click of exit button

	$('#upload-progress .col-md-12 img').on('click', function (e) {
		$('#upload-progress').css('display', 'none');
		$('.upload-box').css('display', 'block');
		$('.temp-btn').css('display', 'inline');
	});

	//Goes back to Step 1 upon clicking of Step 1 tab

	$('#upload-progress div').find('div').first().on('click', function (e) {
		$('#upload-progress div').find('div').first().next().removeClass('active');
		$('#upload-progress div').find('div').first().next().next().removeClass('active');
		$('#up-completed-files, #up-login').css('display', 'none');
		$('#upload-progress-box, #upload-files').css('display', 'block');
		$('#up-send-files').css('display', 'none');
	});

	//Goes back to Step 2 upon clicking of Step 2 tab

	$('#upload-progress div').find('div').first().next().on('click', function (e) {
		$(this).addClass('active');
		$('#upload-progress div').find('div').first().next().next().removeClass('active');
		$('#up-completed-files, #up-login').css('display', 'block');
		$('#upload-progress-box, #upload-files').css('display', 'none');
		$('#up-send-files').css('display', 'none');
		$('#up-completed-files').css('border-right', '1px solid #ebebeb');
	});

	//Goes back to Step 3 upon clicking of Step 3 tab

	$('#upload-progress div').find('div').first().next().next().on('click', function (e) {
		$(this).addClass('active');
		$('#upload-progress div').find('div').first().next().addClass('active');
		$('#up-login').css('display', 'none');
		$('#upload-progress-box, #upload-files').css('display', 'none');
		$('#up-completed-files, #up-send-files').css('display', 'block');
		$('#up-completed-files').css('border', 'none');
	});

	//Hide step 1 and show step 2 on click of the button

	$('#upload-files button').on('click', function (e) {
		$('#upload-progress div').find('div').first().next().addClass('active');
		$('#upload-progress-box').css('display', 'none');
		$('#upload-files').css('display', 'none');
		$('#up-completed-files, #up-login').css('display', 'block');
		$('#up-completed-files').css('border-right', '1px solid #ebebeb');
	});

	//Hide step 2 on click of the button

	$('#up-signup button, #up-login button').on('click', function (e) {
		$('#upload-progress div').find('div').first().next().next().addClass('active');
		$('#up-login').css('display', 'none');
		$('#up-send-files').css('display', 'block');
		$('#up-completed-files').css('border', 'none');
	});

	//Hide Upload Progress and Show Send Success Message on Click of Send Button

	$('#up-send-files button').last().on('click', function (e) {
		$('#upload-progress').css('display', 'none');
		$('.upload-box').css('display', 'block');
		$('.temp-btn').css('display', 'inline');
		$('#sent-success-overlay').css('opacity', 1).css('visibility', 'visible');
	});

	//Close Success Message on click of Exit Button

	$('#sent-success').find('img').first().on('click', function (e) {
		$('#sent-success-overlay').css('opacity', 0).css('visibility', 'hidden');
	});

	//Prevents Drag & Drop Function when files were dropped outside the Upload Box

	$(document).on('dragenter', function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	});

	$(document).on('dragover', function (e) {
	  e.stopPropagation();
	  e.preventDefault();
	  obj.css('border', 'none');
	});

	$(document).on('drop', function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	});

	$(".navbar-toggle").click(function (e) {
        $("#side-nav").toggle('fast', 'linear');
        e.preventDefault();
    });

    $('#dashboard-upload').find('span').last().find('button').click(function () {
    	$("input[type='file']").trigger('click');
	})

	$('#dashboard-divider').find('button').first().click(function () {
    	$("input[type='file']").trigger('click');
	})

	$('#my-files').find('button').click(function () {
    	$("input[type='file']").trigger('click');
	})

});