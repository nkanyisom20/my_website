$(document).ready(function(){
	$('.reset_student_no').click(function(e){
	   e.preventDefault();
	   var empid = $(this).attr('data-emp-id');
	   var parent = $(this).parent("td").parent("tr");
	   bootbox.dialog({
			message: "Do you want to reset password ?",
			title: "<i class='glyphicon glyphicon-edit'></i> Reset",
			buttons: {
				success: {
					  label: "<i class='glyphicon glyphicon-remove-sign'></i>Not Yet",
					  className: "btn-default",
					  callback: function() {
					  $('.bootbox').modal('hide');
				  }
				},
				danger: {
				  label: "<i class='glyphicon glyphicon-edit'></i>Reset",
				  className: "btn-success",
				  callback: function() {
				   $.ajax({
						type: 'POST',
						url: 'include_lf/resetRecords.php',
						data: 'empid='+empid
				   })
				   .done(function(response){
						bootbox.alert(response);
						parent.fadeOut('slow');
				   })
				   .fail(function(){
						bootbox.alert('Error....');
				   })
				  }
				}
			}
	   });
	});
 });
