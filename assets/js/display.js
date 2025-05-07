document.addEventListener("DOMContentLoaded", function() {
  let largeBook = document.querySelector('.largeBook');
  let smallBook = document.querySelector('.smallBook');
  
  function updateBookDisplay() {
    if (window.innerWidth >= 800) {
      largeBook.style.display = "block";
      smallBook.style.display = "none";
      largeBook.classList.add("on");
      smallBook.classList.remove("on");
    } else {
      smallBook.style.display = "block";
      largeBook.style.display = "none";
      largeBook.classList.remove("on");
      smallBook.classList.add("on");
    }
  }

  // Initial check
  updateBookDisplay();

  // Check on window resize
  window.addEventListener('resize', updateBookDisplay);
});
