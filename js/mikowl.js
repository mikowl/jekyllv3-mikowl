/* jshint esversion: 6 */

document.body.classList.add("js");

window.addEventListener('scroll', function () {
  var fromTopPx = 75,
    scrolledFromtop = window.pageYOffset,
    scrollopacity = window.pageYOffset / 2,
    body = document.body;
  if (scrolledFromtop > fromTopPx) {
    body.classList.add('lighten');
  } else {
    body.classList.remove('lighten');
  }
});

const mlink = document.querySelector('.navicon'),
      m = document.getElementById('menu');

mlink.addEventListener("click", function (e) {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    m.classList.remove('active');
  } else {
    this.classList.add('active');
    m.classList.add('active');
  }
  e.preventDefault();
});

// Try to chill out email spam https://gist.github.com/mathiasbynens/286824

const mail = [...document.querySelectorAll('a[href^="mailto:"]')];

for (var email in mail) {
  var heaintgonemailyou = mail[email].getAttribute("href").replace('(at)', '@').replace(/\(dot\)/g, '.');
  mail[email].setAttribute("href", heaintgonemailyou);
}