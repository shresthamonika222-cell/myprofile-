document.addEventListener("DOMContentLoaded", function() {
  
  // FAQ Accordion
  var questions = document.querySelectorAll('.openclose2');
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
      var answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  }

  // Smooth Scrolling for Navigation
  var links = document.querySelectorAll('a[href^="#"]');
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

});