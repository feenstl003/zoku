var h4 = document.querySelector('h4.name');
var img = document.querySelector('img.avatar');
var pEmail = document.querySelector('p.email');
var pPhone = document.querySelector('p.phone');

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      const  { name, picture, email, phone }  =data.results[0]
      console.log(data.results[0]);
      h4.innerHTML=`${name.first} ${name.last}`
      img.src= picture.large
      pEmail.innerHTML = `<i class="fa fa-envelope-o"></i> ${email}`
      pPhone.innerHTML = `<i class="fa fa-phone"></i> ${phone}`
  },
  error: function(err) {
    console.log(err);
  }
});
