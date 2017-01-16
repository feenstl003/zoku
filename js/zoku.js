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

if (joinButton) {
  joinButton.addEventListener("click", ()=>{
    // confirm dialog
    alertify.confirm("Message", function () {
      alertify.success("You've clicked OK and typed")
    }, function() {
      alertify.error("You've clicked Cancel and typed")
    });
  } )
}

if (!joinButton) {
  setTimeout(()=>{

    var msg = `
    <div>
      <img style="height: 15em" src="/images/coding.jpg"/>
      <p>Inspired by all these workshops? Why not create your own?</p>
      <ol>
        <li>Go to the digital screen in the Living Room at Zoku.</li>
        <li>Tap on the workshop you like the most and click to <strong>join</strong>.</li>
        <li>Last but not least, think about your talents. Maybe someday others can <strong>join</strong> you in a workshop you create yourself.</li>
      </ol>
    </div>`


    alertify
      .okBtn("CREATE A WORKSHOP")
      .alert(msg)
  }, 10000)
}
