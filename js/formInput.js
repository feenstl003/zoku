// Create workshop
var submit = document.getElementById('add-event')
var title = document.getElementById('workshop-name')
var date = document.getElementById('workshop-date')
var time = document.getElementById('workshop-time')
var description = document.getElementById('workshop-description')

var contentPlaceholder = document.querySelector('.eventList');

// Login
var login = document.getElementById('login')
var username = document.getElementById('username')
var password = document.getElementById('password')

if (submit) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log(e);
        var formInput = [ title, date, time, description ]

        for (var i = 0; i < formInput.length; i++) {
            localStorage.setItem(formInput[i].id , formInput[i].value);
        }

        window.location= "profile.html"
    })
}


if (localStorage.length > 0 && (window.location.pathname == "/profile.html" || window.location.pathname == "/zokuinspire/profile.html")) {
    // console.log(contentPlaceholder);
        addElement(localStorage)

}


function addElement (storedEvent) {
    // This is the title
    var h4 = document.createElement("h4")
    var h4Content = document.createTextNode("CREATED WORKSHOPS");
    h4.appendChild(h4Content)

    //Div container for the list
    var parent = document.createElement("div");
    parent.className = "create-events"

        // Workshop title
        var h5 = document.createElement("h5")
            var h5Content = document.createTextNode(storedEvent["workshop-name"]);
        h5.appendChild(h5Content)

        // Workshop description
        var p = document.createElement("p")
            var pContent = document.createTextNode(storedEvent["workshop-description"]);
        p.appendChild(pContent)

        // Workshop date and time
        var small = document.createElement("small")
            var smallContent = document.createTextNode(`${storedEvent["workshop-date"]} | ${storedEvent["workshop-time"]}`);
        small.appendChild(smallContent)
        small.className = "metaData"

    parent.appendChild(h5); //add the text node to the newly created div.
    parent.appendChild(p); //add the text node to the newly created div.
    parent.appendChild(small); //add the text node to the newly created div.

    console.log(parent);
    //
    // add the newly created element and its content into the DOM
    contentPlaceholder.appendChild(h4)
    contentPlaceholder.appendChild(parent)
}



function displayProfiles(profiles){
    console.log(profiles);
    var attendBtn = document.getElementById('attended-btn')
    var hostedBtn = document.getElementById('hosted-btn')
    var attendCont = document.querySelectorAll('.attended');
    var hostCont = document.querySelectorAll('.hosted');
    var {username} = profiles


    if (profiles.values) {
        member = profiles.values[0];
        console.log(member);
        document.getElementById('profiles').innerHTML = `
        <h4 id='${member.id}'>Hello ${member.firstName} ${member.lastName}</h4>
        <img class="profile-img" src='${member.pictureUrl}' alt='${member.firstName}'/>
        <div class="profile-headline">
        <p>${member.headline}</p>
        <small>Zoku guest since November 2016</small>
        </div>
        <div style="margin-top: 20%" class="workshop-toggle">
            <h4>Workshops</h4>

            <div class="row user-content">
                <div class="buttons">
                    <a href="create-workshop.html"><button style="background-color: #354C68; margin-bottom:10%;">Create workshop</button></a>
                    <button class="small-btn" id="attended-btn" type="button" name="button">Attending (2)</button>
                    <button class="small-btn btn-inactive" id="hosted-btn" type="button" name="button">Hosted (1)</button>

                </div>
                    <div class="twelve columns">

                        <div class="workshop attended">
                            <h5>Workshop Coding</h5>
                            <img src="images/coding.jpg" style="width: 100%; margin-bottom: 3%;">
                            <p>31 Januari 2017</p>
                            <a href="workshop.html">View</a>
                        </div>

                        <div class="workshop hosted hidden">
                            <h5>Workshop How to Speak in Public</h5>
                            <img src="images/speaking.jpg" style="width: 100%; margin-bottom: 3%;">
                            <p><span style="color: #ee5250">Attended:</span> 12 December 2016</p>
                            <a href="workshop.html">View</a>
                        </div>

                        <div class="workshop attended">
                            <h5>Workshop Tech & Money</h5>
                            <img src="images/tech.jpg" style="width: 100%; margin-bottom: 3%;">
                            <p><span style="color: #ee5250">Attended:</span> 21 November 2016</p>
                            <a href="workshop.html">View</a>
                        </div>

                    </div>
                </div>
            </div>
        `
    }else{
        var {username} = profiles
        console.log(profiles);
        document.getElementById('profiles').innerHTML = `
        <h4 id='${username.value}'>Hello ${username.value}</h4>
        <img style="width:80px; height:80px" class="profile-img" src='./images/user-placeholder.png' alt='no-image'/>
        <div class="profile-headline">
            <small>Zoku guest since November 2016</small>
        </div>
        <div style="margin-top: 20%" class="workshop-toggle">
            <h4>Workshops</h4>

            <div class="row user-content">
                <div class="buttons">
                    <a href="create-workshop.html"><button style="background-color: #354C68; margin-bottom:10%;">Create workshop</button></a>
                    <button class="small-btn" id="attended-btn" type="button" name="button">Attending (2)</button>
                    <button class="small-btn btn-inactive" id="hosted-btn" type="button" name="button">Hosted (1)</button>

                </div>
                    <div class="twelve columns">

                        <div class="workshop attended">
                            <h5>Workshop Coding</h5>
                            <img src="images/coding.jpg" style="width: 100%; margin-bottom: 3%;">
                            <p>31 Januari 2017</p>
                            <a href="workshop.html">View</a>
                        </div>

                        <div class="workshop hosted hidden">
                            <h5>Workshop How to Speak in Public</h5>
                            <img src="images/speaking.jpg" style="width: 100%; margin-bottom: 3%;">
                            <p><span style="color: #ee5250">Attended:</span> 12 December 2016</p>
                            <a href="workshop.html">View</a>
                        </div>

                        <div class="workshop attended">
                            <h5>Workshop Tech & Money</h5>
                            <img src="images/tech.jpg" style="width: 100%; margin-bottom: 3%;">
                            <p><span style="color: #ee5250">Attended:</span> 21 November 2016</p>
                            <a href="workshop.html">View</a>
                        </div>

                    </div>
                </div>
            </div>
        `
    }
    var attendBtn = document.getElementById('attended-btn')
    var hostedBtn = document.getElementById('hosted-btn')
    var attendCont = document.querySelectorAll('.attended');
    var hostCont = document.querySelectorAll('.hosted');

    attendBtn.addEventListener("click",()=>{
        console.log(hostedBtn.classList)
        if (attendBtn.classList.contains("btn-inactive")) {
            attendBtn.classList.remove("btn-inactive")
            hostedBtn.classList.add("btn-inactive")
        }

        // attendBtn.classList.toggle("btn-inactive")
        for (var i = 0; i < attendCont.length; i++) {
            attendCont[i].classList.remove("hidden")
        }
        for (var i = 0; i < hostCont.length; i++) {
            hostCont[i].classList.add("hidden")
        }
    })

    hostedBtn.addEventListener("click",()=>{
        if (hostedBtn.classList.contains("btn-inactive")) {
            hostedBtn.classList.remove("btn-inactive")
            attendBtn.classList.add("btn-inactive")
        }

        // hostedBtn.classList.toggle("btn-inactive")
        for (var i = 0; i < hostCont.length; i++) {
            hostCont[i].classList.remove("hidden")
        }
        for (var i = 0; i < attendCont.length; i++) {
            attendCont[i].classList.add("hidden")
        }
    })

}

if(login){

    login.addEventListener("click", (e)=>{
        e.preventDefault()
        var login = {username, password}
        if(username.value == null || username.value == ""  ){
            errorBorder(username, password)
        }else{
            succesBorder(username,password)
            displayProfiles(login)
        }
    })
}

function succesBorder(item1, item2){

    if (!item1.value == null || !item1.value == "") {
        item1.style.border= "1px solid #27ae60"
    }
    if (!item2.value == null || !item2.value == "") {
        item2.style.border= "1px solid #27ae60"
    }
}
function errorBorder(item1, item2){
    if (item1.value == null || item1.value == "") {
        item1.style.border= "1px solid #ee5250"
    }
    if (item2.value == null || item2.value == "") {
        item2.style.border= "1px solid #ee5250"
    }
}
