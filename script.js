	const btn = document.querySelector("#myBtn");
	const nav = document.querySelector("#myNav");	
	

		//  This function will get executed when user will click on button
		function openSideBar() {
			nav.style.transition = "all 1s";
			nav.style.marginLeft = "0px";	
		}

		//  This function will get executed when user will click on close icon		
		function closeSideBar() {
		nav.style.marginLeft = "-320px";	
		}
		
		// This function will trigger whenever window will get resized or loaded 

		function toggleSideBar(){
			const screenWidth  = window.innerWidth;
			
			// if screen width will be less than or equal to 768px then it will close the sidebar
			if(screenWidth <= 768){
				btn.style.display = "block";
				nav.style.transition = "none";
				nav.style.marginLeft = "-320px";				
				exit.style.display = "block"; 
				//  when user will click on this button, then openSideBar function will called 
				btn.addEventListener("click", openSideBar);
			} 
			// if screen size is larger than 768px then sideBar will show and button will get hide 
			else{
				btn.style.display = "none";
				nav.style.marginLeft = "0px"; 			
				nav.style.display = "block";
				exit.style.display = "none"; 
			}		
		}
	exit.addEventListener('click', closeSideBar);
	window.addEventListener('load',toggleSideBar);	
	window.addEventListener('resize', toggleSideBar);
