function validate(loginform){
		var name=loginform.user.value;
		var pwd=loginform.password.value;
		
		if(name.length==0){
			alert("enter u r name");
			loginform.user.focus();
			return false;
		}
		if(pwd.length==0){
			alert("enter password");
			loginform.password.focus();
			return false;
			
		}
		if(name.length>=1&&pwd.length>=1){
			alert("login successfull");
		}
}