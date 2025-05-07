class Book {
  constructor(id) {
    this.id = id;
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.book = document.querySelector('.book.on');
    this.papers = this.book.querySelectorAll('.paper');
    this.currentLocation = 0;
    this.isMobile = window.innerWidth <= 800;
  }
  papersZIndex() {
    for (let i = 0; i < this.papers.length; i++) {
      this.papers[i].style.zIndex = this.papers.length - i;
    }
  }
  openBook() {
    this.book.style.transform = "translateX(50%)";
    this.prevBtn.style.transform = "translateX(-500px)";
    this.nextBtn.style.transform = "translateX(500px)";
  }
  closeBook(isBeginning) {
    this.book.style.transform = isBeginning ? "translateX(0%)" : "translateX(100%)";
    this.prevBtn.style.transform = "translateX(-300px)";
    this.nextBtn.style.transform = "translateX(300px)";
  }
  goNextPage() {
    this.nextBtn.addEventListener("click", () => {
      if (this.currentLocation < this.papers.length) {
        this.currentLocation++;
        if(!this.isMobile){
          this.openBook();
        }
        for (let i = 1; i <= this.papers.length; i++) {
          const paper = this.book.querySelector(`#p${i}`);
          const front = paper.querySelector('.front');
          const back = paper.querySelector('.back');
          if (i <= this.currentLocation) {
            paper.classList.add("flipped");
            paper.style.zIndex = i;
            // front.style.zIndex = 1;
            front.style.display = "none";
            if(back){
              back.style.display = "flex";
              // back.style.zIndex = 2;
            }
            
          } else {
            paper.classList.remove("flipped");
            // front.style.zIndex = 2;
            // back.style.zIndex = 1;
            front.style.display = "flex";
            if(back){
              back.style.display = "none";
            }
            
          }
        }
      }
      if (this.currentLocation === this.papers.length) {
        if(!this.isMobile){
          this.closeBook();
        }
        this.nextBtn.style.display = "none";
      } else {
        this.prevBtn.style.display = "block";
      }
    });
  }
  goPrevPage() {
    this.prevBtn.addEventListener("click", () => {
      if (this.currentLocation > 0) {
        this.currentLocation--;
        if (!this.isMobile) {
          this.openBook();
        }
        this.papers.forEach((paper, index) => {
          const front = paper.querySelector('.front');
          const back = paper.querySelector('.back');
          if (index < this.currentLocation) {
            paper.classList.add("flipped");
            front.style.display = "none";
            if (back) {
              back.style.display = "flex";
            }
          } else {
            paper.classList.remove("flipped");
            front.style.zIndex = 2;
            front.style.display = "flex";
            if (back) {
              back.style.display = "none";
            }
            paper.style.zIndex = this.papers.length - index;
          }
        });
  
        if (this.currentLocation === 0) {
          if (!this.isMobile) {
            this.closeBook(true);
          }
          this.prevBtn.style.display = "none";
        } else {
          this.nextBtn.style.display = "block";
        }
      }
    });
  }
}
document.addEventListener("DOMContentLoaded",()=>{
  const myBook = new Book('myBook');
  myBook.papersZIndex();
  myBook.goPrevPage();
  myBook.goNextPage();
})
