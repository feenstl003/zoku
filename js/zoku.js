var navClose = document.querySelector(".closebtn")
var navOpen = document.querySelector(".openbtn")
var sideMenu = document.getElementById("mySidenav")
var main = document.querySelector("div.body")

/* Set the width of the side navigation to 0 */
navClose.addEventListener("click", function(){
  console.log("close");
    sideMenu.classList.remove("open")
    sideMenu.classList.add("closed")

})
/* Set the width of the side navigation to 0 */
main.addEventListener("click", function(){
  console.log("close");
    sideMenu.classList.remove("open")
    sideMenu.classList.add("closed")

})

/* Set the width of the side navigation to 0 */
navOpen.addEventListener("click", function(){
  console.log("open");
  sideMenu.classList.remove("closed")
  sideMenu.classList.add("open")
})
