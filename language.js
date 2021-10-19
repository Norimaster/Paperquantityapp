//define language reload anchors
var dataReload = document.querySelectorAll('[data-reload]')

// define language reload onclick illetaration

for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function () {
    setTimeout(function () {
      location.reload(true)
    }, 150)
  }
}
