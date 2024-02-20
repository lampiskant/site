document.querySelector('#menuButton').addEventListener('click', function(){
    document.querySelector('#sideMenu').style.right = '0px'
    document.querySelector('#menuButton').style.display = 'none'
})

document.addEventListener('click',function(event){
    let button = document.querySelector('#menuButton');
    let menu = document.querySelector('#sideMenu');

    if (event.target !== button && event.target !== menu){
        menu.style.right = '-200px';
        document.querySelector('#menuButton').style.display = 'block'
    }
})

// function action(){
//     document.querySelector('#menuButton').style.right = '25px'
// }

