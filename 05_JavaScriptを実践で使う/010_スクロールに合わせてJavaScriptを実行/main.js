const child = document.querySelector('.child');
const cb = function(entries, ofserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            ofserver.unobserve(entry.target);
        } else {
            entry.target.classList.add('inview');
        }
    });
}
const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);