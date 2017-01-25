var navClose = document.querySelector(".closebtn")
var navOpen = document.querySelector(".openbtn")
var sideMenu = document.getElementById("mySidenav")
var main = document.querySelector("div.body")
var joinButton = document.getElementById('join-button')
var formHeaderUpload = document.querySelector(".header-img.placeholder #workshop-header")

/* Set the width of the side navigation to 0 */
if (navClose) {
    navClose.addEventListener("click", function(){
        sideMenu.classList.remove("open")
        sideMenu.classList.add("closed")

    })
}
/* Set the width of the side navigation to 0 */
if (main) {
    main.addEventListener("click", function(){
        sideMenu.classList.remove("open")
        sideMenu.classList.add("closed")

    })
}

if (navOpen) {
    navOpen.addEventListener("click", function(){
        sideMenu.classList.remove("closed")
        sideMenu.classList.add("open")
    })
}

if (formHeaderUpload) {
  formHeaderUpload.addEventListener("change", function () {
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      document.getElementById("placeholder-img").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  })
}



if (joinButton) {
  var msg = `
    <div style="text-align:left" class="container">
      <h4>Please confirm that you will attend the following workshop</h4>
      <section style="text-align:left">
        <hr>
        <h5>WORKSHOP CODING</h5>
        <h6>DATE AND TIME</h6>
        <p>zo, 22 jan. 2017, 16:00 CET</p>
        <a style="color:#EE5250" href="#">Add to calendar</a>
        <hr>
        <h6>LOCATION</h6>
        <p>Zoku Lounge</p>
      </section>
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
      <img style="height: 13em; width:100%" src="images/coding.jpg"/>
      <p>Inspired by all these workshops? Why not create your own?</p>
    </div>`


    alertify
      .okBtn(`<a href="create-workshop.html">CREATE WORKSHOP</a>`)
      .confirm(msg, ()=>{
        alertify.success("A event has been created")
      })
  }, 10000)
}


if(location.pathname == "/join.html" || location.pathname == "/zokuinspire/join.html"){

    function showLocation() {
        var msg = `
        <div>
          <img style="width:100%" src="images/map.jpg"/>
        </div>`
        alertify.alert(msg, function() {}, 'popup1');

    }
}
