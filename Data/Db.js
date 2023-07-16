var retArr=[]
var searchDataArr=[]
var retString = localStorage.getItem("todoarr");
retArr = JSON.parse(retString);
if(retArr==null){
    retArr=[]
}
var retString = localStorage.getItem("searcharr");
searchDataArr = JSON.parse(retString);
if(searchDataArr==null){
    searchDataArr=[]
}

function setDbData(Arr){
    let string = JSON.stringify(Arr);
    localStorage.setItem("todoarr", string);
}


function setDbSearchResultsData(Arr){
    let string = JSON.stringify(Arr);
    localStorage.setItem("searcharr",string);
}