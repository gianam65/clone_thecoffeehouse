// Back to top
var goTop = document.getElementById('box-go-to-top');
goTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
}