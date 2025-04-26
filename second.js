const b1=document.querySelector(".b1");

b1.addEventListener("click",()=>{
      
    window.location.href= 'signdriver.html';
}
);

const pick=document.querySelector(".in");
const dest=document.querySelector(".intwo");
const b2=document.querySelector(".b2");
if(b2)
{
    b2.addEventListener("click",()=>{
      

        if(pick.value!=""&&dest.value!="")
        {
            alert(`booking a ride from ${pick.value} to ${dest.value}`);
        }
        else
        {
            alert("please enter both pickup and destination location");
            return;
        }

        window.location.href='book.html';
    });
}