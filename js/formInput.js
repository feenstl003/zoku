var submit = document.getElementById('add-event')
var title = document.getElementById('workshop-name')
var date = document.getElementById('workshop-date')
var time = document.getElementById('workshop-time')
var description = document.getElementById('workshop-description')

var contentPlaceholder = document.querySelector('.eventList');

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
