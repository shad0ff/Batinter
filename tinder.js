	// var likeDiv = document.getElementsByClassName('recsGamepad'); recsGamepad__button
    // var likeArr2 = document.getElementsByClassName('recsGamepad__button')[3]; 
	
    function func2() {
      // for(var i=0;i<likeArr2.length;i++){ 
      // likeArr2[i].click(); 
      // }
	  var likeArr2 = document.querySelector('[aria-label="Лайк"]').click();
	  likeArr2.click(); 
    }
    setInterval(func2, 3000);
