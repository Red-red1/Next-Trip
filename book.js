const b1=document.querySelector(".b1");

b1.addEventListener("click",()=>{
    const i=document.querySelector("#sel").value;
    const ii=document.querySelector("#sell").value;
    if(!i||!ii)
    {
        alert("please select all the options");
        return;
    }
    else
    {
        alert("booking confirmed");
        window.location.href='project.html';
    }
});