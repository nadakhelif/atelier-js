  function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("demo").style.fontStyle = listValue;
  }
  
function myFunction1(hiii){
    var fontSize= document.getElementById("fontSize").value;
    document.getElementById("demo").style.fontSize=fontSize+"px";
}
function myFunction2(hello){
    var color=document.getElementById("color").value;
    document.getElementById("demo").style.color = color;

}