
const b1=document.querySelector(".b1");
if(b1)
{


    b1.addEventListener("click",()=>{

        const type=document.getElementById("type").value;
        const i=document.getElementById("i").checked;
        const ii=document.getElementById("ii").checked;
        const name=document.getElementById("one").value;
        const fullname=document.getElementById("two").value;
        const licenseID=document.getElementById("three").value;
        const contactnumber=document.getElementById("four").value;
        const userID=document.getElementById("five").value;
        const usermail=document.getElementById("six").value;
        
        
  

    if(!name)
    {
        alert("please enter your name");
        return;
    }
    if(!fullname)
        {
            alert("please enter your fullname");
            return;
        }
    if(!licenseID)
        {
            alert("please enter your licenseID");
            return;
        }
       
            if(!contactnumber)
                {
                    alert("please enter your contactnumber");
                    return;
                }
                if(!userID)
                    {
                        alert("please enter your userID");
                        return;
                    }
                    if(!usermail)
                        {
                            alert("please enter your usermail");
                            return;
                        }
                        if(!ii)
                            {
                                alert("please accept terms and conditions");
                                return;
                            }
                            if(!type)
                                {
                                    alert("please enter your vehicle type");
                                    return;
                                }

            alert("form submitted successfully");
            window.location.href= 'project.html';

    });

    
}
const elements=document.querySelectorAll('input,button,select');
elements.forEach((ele,ind)=>{

    ele.addEventListener("keydown",(e)=>{
        if(e.key=='ArrowDown')
        {
            e.preventDefault();
            const n=elements[ind+1];
            if(n)
            {
                n.focus();
            }
        }
        else if(e.key=='ArrowUp')
        {
            e.preventDefault();
            const n=elements[ind-1];
            if(n)
            {
                n.focus();
            }
        }

       else if(e.key=='Enter'&& e.target.tagName=='BUTTON')
        {
            e.preventDefault();
            const type=document.getElementById("type").value;
        const i=document.getElementById("i").checked;
        const ii=document.getElementById("ii").checked;
        const name=document.getElementById("one").value;
        const fullname=document.getElementById("two").value;
        const licenseID=document.getElementById("three").value;
        const contactnumber=document.getElementById("four").value;
        const userID=document.getElementById("five").value;
        const usermail=document.getElementById("six").value;
        if(!i||!ii||!name||!fullname||!userID||!usermail||!licenseID||!contactnumber)
        {
            alert("Please fill all the required fields and accept terms.");
            return;
        }
            alert("form submitted successfully");
            window.location.href= 'project.html';
        }
    });
});



