const gameContainer = document.querySelector(".connect_four_container");
const oneOrTwoPlayBtn = document.querySelectorAll(".one_or_two_player button")

oneOrTwoPlayBtn.forEach((item) => {
  item.addEventListener('click', function() {
    if(item.firstElementChild.textContent === "1 Player"){
      item.classList.toggle("active");
     // onePlayerGame()
    } else if(item.firstElementChild.textContent === "2 Player"){
        item.classList.toggle("active");
    // twoPlayerGame()
    }
  })
})
