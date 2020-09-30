var likeArr = document.getElementsByClassName('js-profile-header-vote'); 

function func() {
  for(var i=0;i<likeArr.length;i++){ 
    likeArr[i].click(); 
	
  }
}

setInterval(func, 3000);

