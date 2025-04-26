const b1=document.querySelector(".b1");

if(b1)
{
    b1.addEventListener("click",()=>{

        const sel=document.querySelector(".sel").value;
const opinion=document.querySelector(".opinion").value;



      if(!sel)
      {
        alert("please select your rating");
        return;
      }
      alert("review submitted successfully");
      window.location.href='project.html';

    });
}

const items=document.querySelectorAll('select,button,textarea');
items.forEach((ele,ind)=>{
    ele.addEventListener("keydown",(e)=>{
        if(e.key=='ArrowDown')
        {
            e.preventDefault();
            const n=items[ind+1];
            if(n)
            {
                n.focus();
            }
        }
        if(e.key=='ArrowUp')
            {
                e.preventDefault();
                const n=items[ind-1];
                if(n)
                {
                    n.focus();
                }
            }
     if(e.key=='Enter'&& e.target.tagName =="BUTTON" && sel)
     {
        e.preventDefault();
        alert("review submitted");
        window.location.href='project.html';
     }
    });
});
