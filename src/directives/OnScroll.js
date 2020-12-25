
const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        entry.target.classList.add('scroll');
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export default {
  bind(el) {  
    animatedScrollObserver.observe(el);
  }
}