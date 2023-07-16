var retArr=[]
var retString = localStorage.getItem("todoarr");
retArr = JSON.parse(retString);
if(retArr==null){
    retArr=[]
}


function setDbData(Arr){
    let string = JSON.stringify(Arr);
    localStorage.setItem("todoarr", string);
}
