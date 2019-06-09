// JavaScript Document

$(document).ready(function(){
	$(".save").on("click",function(){
		const titlevalue = $("#title").val();
		
		if(titlevalue == ""){
			$(".error-1").show();
		}
		
		else if (titlevalue != ""){
			$(".error-1").hide();
		}
	});
	
	$(".save").on("click",function(){
		const bodyvalue = $("#body").val();
		
		if(bodyvalue == ""){
			$(".error").show();
		}
		
		else if (bodyvalue != ""){
			$(".error").hide();
		}
	});
	
	$(".save").on("click",function(){
		const titlevalue = $("#title").val();
		const bodyvalue = $("#body").val();
		
		if (titlevalue != "" && bodyvalue != ""){
			$(".succ").show();
			setTimeout(() => {
				location.href="Dashborad.html";
			}, 1200);
		}
	});
	
	$(".cancel").on("click",function(){
		let result = confirm("Are you sure you want to cancel !?");
		
		if(result){
			location.href="Dashborad.html";
		}
	});
});