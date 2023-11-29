const inputVar=document.getElementById("input-box");
const listVar=document.getElementById("list-container");
function addTask()
{
    if(inputVar.value==='')
    {
     alert("Please Add Tasks");
    }
    else
        {
            let li=document.createElement("li");
            li.innerHTML=inputVar.value;
            listVar.append(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.append(span);
        }
        inputVar.value="";
        savData();

}
listVar.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        savData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savData();
    }
},false);

function savData(){
    localStorage.setItem("data",listVar.innerHTML);
}

function showData()
{
listVar.innerHTML=localStorage.getItem("data");
}
showData();