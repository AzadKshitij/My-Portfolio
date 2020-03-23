document.getElementById('Subscribe').addEventListener('click', sendMail);
function sendMail() {
  console.log("mail sent")
  var link = "mailto:" + document.getElementById('txtemail').value
    + "?cc=kshitj08302001@gmail.com"
    + "&subject=" + escape("This is my subject")
    + "&body=" + escape("Hello I am Kshitij and thanks for Subscribing");

  window.location.href = link;
}
