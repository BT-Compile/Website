function hover(id) {
    document.getElementById(id).style.background = "white";
    document.getElementById(id).style.color = "black";
  }
  
  function offhover(id) {
    document.getElementById(id).style.background = "";
    document.getElementById(id).style.color = "";
  }
  
  function footer() {
    var update = new Date(document.lastModified)
    var modMonth = update.getMonth() + 1
    var modDate = update.getDate()
    var modYear = update.getFullYear()
    document.write("Benjamin Trang &#169; " + modMonth + "/" + modDate + "/" + modYear);
  }