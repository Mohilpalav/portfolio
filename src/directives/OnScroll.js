
const scrollObserver = new IntersectionObserver(
  (events, scrollObserver) => {
    events.forEach((event) => {
   
      if(event.isIntersecting) {
        event.target.classList.add('scroll');
        scrollObserver.unobserve(event.target);
      }
    });
  }
);

export default {
  bind(element) {
    element.classList.add('before-scroll');
    scrollObserver.observe(element);
  }
}