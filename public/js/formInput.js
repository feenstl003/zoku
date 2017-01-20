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
    if (profiles.values) {
        member = profiles.values[0];
        console.log(member);
        document.getElementById('profiles').innerHTML = `
        <h4 id='${member.id}'>Hello ${member.firstName} ${member.lastName}</h4>
        <img class="profile-img" src='${member.pictureUrl}' alt='${member.firstName}'/>
        <div class="profile-headline">
        <p>${member.headline}</p>
        </div>
        `
    }else{
        var {username} = profiles
        console.log(profiles);
        document.getElementById('profiles').innerHTML = `
        <h4 id='${username.value}'>Hello ${username.value}</h4>
        <img style="width:80px; height:80px" class="profile-img" src='./images/user-placeholder.png' alt='no-image'/>
        <div class="profile-headline">
        </div>
        `
    }
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
