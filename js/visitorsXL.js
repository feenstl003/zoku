var userData = []
var userData2 = []
var userData3 = []

$.ajax({
  url: 'https://randomuser.me/api/?results=9',
  dataType: 'json',
  success: function(data) {
    for (var i = 0; i < 3; i++) {
      data.results[i].attended = Math.floor(Math.random() * 20)
      data.results[i].hosted = Math.floor(Math.random() * 10)
      userData.push(data.results[i])
    }
    for (var i = 3; i < 6; i++) {
      data.results[i].attended = Math.floor(Math.random() * 20)
      data.results[i].hosted = Math.floor(Math.random() * 10)
      userData2.push(data.results[i])
    }
    for (var i = 6; i < 9; i++) {
      data.results[i].attended = Math.floor(Math.random() * 20)
      data.results[i].hosted = Math.floor(Math.random() * 10)
      userData3.push(data.results[i])
    }
    buildItems(userData)
    buildItems(userData2)
    buildItems(userData3)
  },
  error: function(err) {
    console.log(err);
  }
});

var divs = document.getElementById('userlistContainer');

function buildItems(data) {
  var parent = buildParentDiv(),
    children = [];

  for (var i = 0; i < data.length; i++) {
    children[i] = buildDivChilds(data[i])
  }
  uniteFamily(parent, children)
}

function buildParentDiv() {

  var parentDiv = document.createElement('div');
  parentDiv.className = "four columns event-container userlist"

  return parentDiv

}

function buildDivChilds(child) {
  console.log(child);
  var container = document.createElement('div');
  container.className =`visitor`

  // event-img
  var innerDiv1 = document.createElement('div');
  innerDiv1.className = `event-img circle_img`
  var innerFirstImg = document.createElement('img');
  innerFirstImg.src = child.picture.large
  innerFirstImg.alt = `${child.first_name} ${child.last_name}`
  innerFirstImg.style.width = "100%"

  // event-info
  var innerDiv2 = document.createElement('div');
  innerDiv2.className = `event-info`
  var innerHeader = document.createElement('h5');
  innerHeader.innerHTML = `${child.name.first} ${child.name.last}`
      var innerDiv3 = document.createElement('div');
      var innerSpan1 = document.createElement('span');
      innerSpan1.innerHTML = `<i class="fa fa-users"></i> ${child.attended} attended`
      var innerSpan2 = document.createElement('span');
      innerSpan2.innerHTML = `<i class="fa fa-user"></i> ${child.hosted} hosted`

  var innerButton = document.createElement('a')
  innerButton.className ="button"
  innerButton.href = location.pathname === "/zokuinspire/big-visitors.html"?  "/zokuinspire/big-visitor.html" : "/big-visitor.html"

  innerButton.innerHTML = "View"

  innerDiv3.appendChild(innerSpan1)
  innerDiv3.appendChild(innerSpan2)

  var grandChildrenDiv1 = [innerFirstImg]
  var grandChildrenDiv2 = [innerHeader, innerDiv3]

  for (var i = 0; i < grandChildrenDiv2.length; i++) {
    innerDiv2.appendChild(grandChildrenDiv2[i])
  }

  for (var i = 0; i < grandChildrenDiv1.length; i++) {
    innerDiv1.appendChild(grandChildrenDiv1[i])
  }
  container.appendChild(innerDiv1)
  container.appendChild(innerDiv2)
  container.appendChild(innerButton)

  var newChild = container
  return newChild

}

function uniteFamily(parent, children) {
    console.log(parent);
    console.log(children);
  for (var i = 0; i < children.length; i++) {
  //   for (var j = 0; j < children[i].length; j++) {
      parent.appendChild(children[i])
  //   }
  }
  divs.appendChild(parent)
}
