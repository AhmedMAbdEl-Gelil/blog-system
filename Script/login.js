// JavaScript Document

$(document).ready(function(){
	$("button").on("click",function(){
		const emailvalue = $(".email").val();
		const emailrequird = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		const emailresult = emailrequird.test(emailvalue);
		
		if(emailvalue == ""){
			$(".email-error").show();
			$(".email-vaild").hide();
		}
		
		else if(emailresult == false){
			$(".email-error").hide();
			$(".email-vaild").show();
		}
		
		else if (emailresult){
			$(".email-error").hide();
			$(".email-vaild").hide();
		}
	});
	
	$("button").on("click",function(){
		const passvalue = $(".password").val();
		const passrequird = /(?=^.{6,12}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
		const passresult = passrequird.test(passvalue);
		
		if(passvalue == ""){
			$(".pass-error").show();
			$(".pass-match").hide();
		}
		
		else if(passresult == false){
			$(".pass-error").hide();
			$(".pass-match").show();
		}
		
		else if (passresult){
			$(".pass-error").hide();
			$(".pass-match").hide();
		}
	});
	
	$("button").on("click",function(){
		const emailvalue = $(".email").val();
		const passvalue = $(".password").val();
		const emailrequird = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		const passrequird = /(?=^.{6,12}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
		const emailresult = emailrequird.test(emailvalue);
		const passresult = passrequird.test(passvalue);
		
		if (emailresult && passresult){
			location.href="Dashborad.html";
		}
	});
});