var navClose = document.querySelector(".closebtn")
var navOpen = document.querySelector(".openbtn")
var sideMenu = document.getElementById("mySidenav")
var main = document.querySelector("div.body")
var joinButton = document.getElementById('join-button')

/* Set the width of the side navigation to 0 */
navClose.addEventListener("click", function(){
    sideMenu.classList.remove("open")
    sideMenu.classList.add("closed")

})
/* Set the width of the side navigation to 0 */
main.addEventListener("click", function(){
    sideMenu.classList.remove("open")
    sideMenu.classList.add("closed")

})

/* Set the width of the side navigation to 0 */
navOpen.addEventListener("click", function(){
  sideMenu.classList.remove("closed")
  sideMenu.classList.add("open")
})

joinButton.addEventListener("click", ()=>{
  // confirm dialog
  alertify.confirm("Message", function () {
      alertify.success("You've clicked OK and typed")
  }, function() {
      alertify.error("You've clicked Cancel and typed")
  });
} )
