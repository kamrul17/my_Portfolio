const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Java Developer";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

// Scroll to Bottom
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".scroll-to-bottom").fadeOut("slow");
  } else {
    $(".scroll-to-bottom").fadeIn("slow");
  }
});
