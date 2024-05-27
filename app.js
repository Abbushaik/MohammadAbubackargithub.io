/*Pre loader Code Starts */
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
window.addEventListener("load",function(){
    setInterval(loader,1500);
});
/*Pre loader ends */


/*Hamburger Code Starts*/
const openMenu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");
const closeMenu =document.querySelector("#closeMenu");
openMenu.addEventListener("click",()=>
{
    navbar.classList.toggle("nav-toggle");
    openMenu.style.display="none";
    closeMenu.style.display="block";
});
closeMenu.addEventListener("click",()=>
{
    navbar.classList.toggle("nav-toggle");
    openMenu.style.display="block";
    closeMenu.style.display="none";
});

/*Hamburger Code Ends*/

/*Typing Text Code Starts*/
var typed = new Typed(".typing-text", {
    strings: ["Competitive Programming", "Full Stack Web Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
/*Typing Text Code Ends*/

/*Sending Email*/
var submit = document.querySelector(".contact .button-area button");
submit.addEventListener("click",(event)=>
{
    event.preventDefault();
    var params={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_ttdipjf","template_4hnur9v",params)
    .then(function (res)
    {        
        alert("Success! "+res.status);
    });
});

