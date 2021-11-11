//home page

const gameContainer = document.querySelector(".connect_four_container");
const soloPlayerGame = document.querySelector('.one_player');
const twoPlayerGame = document.querySelector('.two_player');

//gaming logic

const cells = document.querySelectorAll('.cells');
const col1 = document.querySelectorAll('.col1');
const col2 = document.querySelectorAll('.col2');
const col3 = document.querySelectorAll('.col3');
const col4 = document.querySelectorAll('.col4');
const col5 = document.querySelectorAll('.col5');
const col6 = document.querySelectorAll('.col6');
const col7 = document.querySelectorAll('.col7');

//adding active class to buttons
soloPlayerGame.addEventListener("click", () => {
    soloPlayerGame.classList.add('active');
    // solo();
    if(twoPlayerGame.classList.contains('active')){
        twoPlayerGame.classList.remove('active');
    }
})
twoPlayerGame.addEventListener("click", () => {
    twoPlayerGame.classList.add('active');
    if(soloPlayerGame.classList.contains('active')){
        soloPlayerGame.classList.remove('active');
    }
})

//gaming logic
function alternatingColor(){

    let redYellow = false;
    
    col1.forEach((item, i) => {
        let count = 5;

        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)

        })
    })
    col2.forEach((item, i) => {
        let count = 5
        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)

        })
    })
    col3.forEach((item, i) => {
        let count = 5
        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)

        })
    })
    col4.forEach((item, i) => {
        let count = 5
        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)

        })
    })
    col5.forEach((item, i) => {
        let count = 5;
        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)

        })
    })
    col6.forEach((item, i) => {
        let count = 5
        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)

        })
    })
    col7.forEach((item, i) => {
        let count = 5
        item.addEventListener('click', function(){
            if(redYellow === false){
                item.children[count].classList.add('marked_yellow')
                redYellow = true;
            } else if(redYellow === true){
                item.children[count].classList.add('marked_red')
                redYellow = false;
            }
            count--;
            console.log(count)
        })
    })
}

alternatingColor()