document.addEventListener("DOMContentLoaded",function(){
  let skillConts = document.querySelectorAll(".skillCont");

  skillConts.forEach(function(skillCont){
    skillCont.addEventListener('mouseover',function(){
      let percent = (this.querySelector(".number").textContent);
      let width = percent * 4;
      this.querySelector(".number").style.width = percent;
      this.querySelector(".number").style.transition="width 0.5s ease";
      this.querySelector(".number").style.color = "#fff";
    });

    skillCont.addEventListener("mouseout",function(){
      this.querySelector(".number").style.width = "0";
      this.querySelector(".number").style.color = "#000";
    })
  })
})