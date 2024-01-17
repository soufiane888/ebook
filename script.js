// Add a class to the body when the page is scrolled
window.addEventListener('scroll', function() {
	document.body.classList.toggle('scrolled', window.scrollY > 0);
});

// Add a smooth scrolling effect to links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		var target = document.querySelector(link.getAttribute('href'));
		target.scrollIntoView({ behavior: 'smooth' });
	});
});