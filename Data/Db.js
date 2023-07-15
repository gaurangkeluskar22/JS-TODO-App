var retArr=[]
var retString = localStorage.getItem("todoarr");
retArr = JSON.parse(retString);
if(retArr==null){
    retArr=[]
}


