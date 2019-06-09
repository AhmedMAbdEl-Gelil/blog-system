// JavaScript Document

$(document).ready(function(){
	
	$.ajax({
		
		url:"https://jsonplaceholder.typicode.com/posts",
		type: "GET",
		
		success: function(response){
			let data = response;
			
			data.forEach(function(element,index){
				
				const container = document.createElement("section");
				container.classList.add("main");
				document.getElementById("body").appendChild(container);
				
				const Title = document.createElement("section");
				container.appendChild(Title);
				Title.classList.add("Title_content");
				Title.innerHTML= data[index].title;
				
				const Content = document.createElement("section");
				container.appendChild(Content);
				Content.classList.add("Body_content");
				Content.innerHTML= data[index].body;
				
				const action = document.createElement("section");
				action.classList.add("Action_content");
				container.appendChild(action);
				
				const ButtonEdit = document.createElement("button");
				ButtonEdit.classList.add("edit");
				ButtonEdit.innerHTML = "Edit";
				action.appendChild(ButtonEdit);
				
				const ButtonDelete = document.createElement("button");
				ButtonDelete.classList.add("delete");
				ButtonDelete.innerHTML = "Delete";
				action.appendChild(ButtonDelete);
				
 			});
		}
	});
	
	$(document).on("click",".delete",function(){
		
		let result = confirm("Are you want to delete this row !?");
		
		if(result){
			$(this).parent().parent().remove();
		}
	});
	
	$("#body").on("click",".edit",function(){
		localStorage.setItem("EditTitle", $(this).parent().siblings(".Title_content").text());
		localStorage.setItem("EditBody", $(this).parent().siblings(".Body_content").text());
		location.href = "Edit.html"
	})
	
	$("#title").val(localStorage.getItem("EditTitle"));
	$("#body").val(localStorage.getItem("EditBody"));
});
