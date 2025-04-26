const b1=document.querySelector(".b1");


const b1n=document.querySelector(".b1n");
if(b1n){

   b1n.addEventListener("click",()=>{
      window.location.href='review.html';
   });
}
function logout() {
    if(confirm('Are you sure you want to logout?')) {
        window.close();
    }
}