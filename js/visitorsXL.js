var userData = [{
  "id": 1,
  "first_name": "Sara",
  "last_name": "Lynch",
  "email": "slynch0@discovery.com",
  "gender": "Female",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 17,
  "hosted": 5
}, {
  "id": 2,
  "first_name": "Betty",
  "last_name": "Diaz",
  "email": "bdiaz1@icio.us",
  "gender": "Female",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 17,
  "hosted": 9
}, {
  "id": 3,
  "first_name": "Terry",
  "last_name": "Oliver",
  "email": "toliver2@epa.gov",
  "gender": "Male",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 20,
  "hosted": 5
}]
var userData2 = [{
  "id": 4,
  "first_name": "Clarence",
  "last_name": "Mcdonald",
  "email": "cmcdonald3@jimdo.com",
  "gender": "Male",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 4,
  "hosted": 5
}, {
  "id": 5,
  "first_name": "Lillian",
  "last_name": "Jenkins",
  "email": "ljenkins4@salon.com",
  "gender": "Female",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 8,
  "hosted": 7
}, {
  "id": 6,
  "first_name": "Martin",
  "last_name": "Hernandez",
  "email": "mhernandez5@seattletimes.com",
  "gender": "Male",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 21,
  "hosted": 10
}]
var userData3 =  [{
  "id": 7,
  "first_name": "Robert",
  "last_name": "Allen",
  "email": "rallen6@360.cn",
  "gender": "Male",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 25,
  "hosted": 10
}, {
  "id": 8,
  "first_name": "Christine",
  "last_name": "Wilson",
  "email": "cwilson7@webs.com",
  "gender": "Female",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 8,
  "hosted": 6
}, {
  "id": 9,
  "first_name": "Thomas",
  "last_name": "Russell",
  "email": "trussell8@msu.edu",
  "gender": "Male",
  "picture": "https://unsplash.it/240/151?random",
  "attended": 9,
  "hosted": 5
}
]

var divs = document.getElementById('userlistContainer');
buildItems(userData)
buildItems(userData2)
buildItems(userData3)
function buildItems(data){
    var parent = buildParentDiv()
    ,   children = [];

    for (var i = 0; i < data.length; i++) {
        children[i] = buildDivChilds(data[i])
    }
    uniteFamily(parent,children)
}

function buildParentDiv(){

    var parentDiv = document.createElement('div');
    parentDiv.className = "four columns event-container userlist"

    return parentDiv

}
function buildDivChilds(child) {

    // var mappedUser = userData.map((user)=>{
        var innerDiv1 = document.createElement('div');
            innerDiv1.className = `event-img`
            var innerFirstImg = document.createElement('img');
            innerFirstImg.src = child.picture
            innerFirstImg.alt = `${child.first_name} ${child.last_name}`
            innerFirstImg.style.width =  "100%"

        var innerDiv2 = document.createElement('div');
            innerDiv2.className = `event-info`
            var innerHeader = document.createElement('h5');
            innerHeader.innerHTML = `${child.first_name} ${child.last_name}`
            var innerSpan1 = document.createElement('span');
            innerSpan1.innerHTML = `<i class="fa fa-users"></i> ${child.attended} attended`
            var innerSpan2 = document.createElement('span');
            innerSpan2.innerHTML = `<i class="fa fa-user"></i> ${child.hosted} hosted`

            var innerButton = document.createElement('button')
            innerButton.innerHTML = "View"

        var grandChildrenDiv1 = [innerFirstImg]
        var grandChildrenDiv2 = [innerHeader, innerSpan1, innerSpan2, innerButton]



        for (var i = 0; i < grandChildrenDiv2.length; i++) {
            innerDiv2.appendChild(grandChildrenDiv2[i])
        }

        for (var i = 0; i < grandChildrenDiv1.length; i++) {
            innerDiv1.appendChild(grandChildrenDiv1[i])
        }
    //
    //
    //
    var newChild = [innerDiv1, innerDiv2]
        return newChild
    //
    // })
    // return mappedUser

}
function uniteFamily(parent, children) {
    console.log(children);
    for (var i = 0; i < children.length; i++) {
        for (var j = 0; j < children[i].length; j++) {
            parent.appendChild(children[i][j])
        }
    }
    divs.appendChild(parent)
}
