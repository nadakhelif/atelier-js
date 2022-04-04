function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
     return myRandomColor;
  }
  function getRandomColor(elementid){
      elementid.style.color=generateRandomCode();

  }