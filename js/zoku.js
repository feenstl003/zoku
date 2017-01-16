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
  var msg = `
  <div>
    <div style="text-align:left" class="container">
    <h4>Please confirm that you will attend the following workshop</h4>
      <section style="text-align:left">
        <h5>WORKSHOP CODING</h5>
        <h6>DATE EN TIME</h6>
        <p>zo, 22 jan. 2017, 16:00 CET</p>
        <hr>
        <h6>DATUM EN TIJD</h6>
        <p>zo, 22 jan. 2017, 16:00 CET</p>
        <a style="color:#EE5250" href="#">Add to calendar</a>
        <hr>
        <h6>LOCATION</h6>
        <p>Zoku Lounge</p>
      </section>
    </div>
  </div>`


  joinButton.addEventListener("click", ()=>{
    // confirm dialog
    alertify
    .okBtn("ATTEND")
    .confirm(msg, function () {
      alertify.success("A seat has been reserved")
    }, function() {
    });
  } )
}

if (!joinButton) {
  setTimeout(()=>{

    var msg = `
    <div>
      <img style="height: 14em" src="/images/coding.jpg"/>
      <p>Inspired by all these workshops? Why not create your own?</p>
    </div>`


    alertify
      .okBtn("CREATE A WORKSHOP")
      .confirm(msg, ()=>{
        alertify.success("A event has been created")
      })
  }, 10000)
}
