var slider = document.querySelector('.slider')
var a = document.querySelector('a')
var products = document.querySelector('.products')
var solution = document.querySelector('.solutions')
var service = document.querySelector('.service')
var integrations = document.querySelector('.integrations')
var partner = document.querySelector('.partner')
var company = document.querySelector('.company')

var navs = document.querySelector('.navs')

var prod = document.querySelector('.product')
var sol = document.querySelector('.Solution')
var serve = document.querySelector('.Service')
var integrate = document.querySelector('.Integrations')
var part = document.querySelector('.Partner')
var comp = document.querySelector('.Company')
// var items6 = document.querySelector('.six')


// div = document.querySelector('.header ')
slider.addEventListener('mouseover', modify)
slider.addEventListener('mouseleave', remove)


navs.addEventListener('mouseover', modify)
navs.addEventListener('mouseleave', remove)

company.addEventListener('mouseover', modify)
company.addEventListener('mouseleave', remove)

partner.addEventListener('mouseover', modify)
partner.addEventListener('mouseleave', remove)

integrations.addEventListener('mouseover', modify)
integrations.addEventListener('mouseleave', remove)

service.addEventListener('mouseover', modify)
service.addEventListener('mouseleave', remove)

products.addEventListener('mouseover', modify)
products.addEventListener('mouseleave', remove)

solution.addEventListener('mouseover', modify)
solution.addEventListener('mouseleave', remove)
// nested ifs
var option;

function modify(e){
    
    // console.log(e.target.className)
    slider.style.minHeight = '45vh'
    slider.style.pointerEvents = 'inherit'
    if(e.target.className == 'solutions' ){
        // slider.style.minHeight = '45vh'
        option = 'solutions'
        sol.style.setProperty('opacity', '100');
        sol.style.setProperty('pointer-events', 'inherit')
    }

    else if(e.target.className == 'slider' && option == 'solutions' ){
        sol.style.setProperty('opacity', '100');
        sol.style.setProperty('pointer-events', 'inherit')
    }

    if(e.target.className == 'products'){
        // slider.style.minHeight = '45vh'
        option = 'products'
        prod.style.setProperty('opacity', '100');
        prod.style.setProperty('pointer-events', 'inherit')
    }

    else if(e.target.className == 'slider' && option == 'products'){
        prod.style.setProperty('opacity', '100');
        prod.style.setProperty('pointer-events', 'inherit')
    }



    if(e.target.className == 'service' ){
        // slider.style.minHeight = '45vh'
        option = 'service'
        serve.style.setProperty('opacity', '100');
        serve.style.setProperty('pointer-events', 'inherit')
    }
    else if(e.target.className == 'slider' && option == 'service'){
        serve.style.setProperty('opacity', '100');
        serve.style.setProperty('pointer-events', 'inherit')
    }


    if(e.target.className == 'integrations'){
        // slider.style.minHeight = '45vh'
        option = 'integrations'
        integrate.style.setProperty('opacity', '100');
        integrate.style.setProperty('pointer-events', 'inherit')
    }

    else if(e.target.className == 'slider' && option == 'integrations'){
        integrate.style.setProperty('opacity', '100');
        integrate.style.setProperty('pointer-events', 'inherit')
    }




    if(e.target.className == 'partner'){
        // slider.style.minHeight = '45vh'
        option = 'partner'
        part.style.setProperty('opacity', '100');
        part.style.setProperty('pointer-events', 'inherit')
    }


    else if(e.target.className == 'slider' && option == 'partner'){
        part.style.setProperty('opacity', '100');
        part.style.setProperty('pointer-events', 'inherit')
    }




    if(e.target.className == 'company'){
        // slider.style.minHeight = '45vh'
        option = 'company'
        comp.style.setProperty('opacity', '100');
        comp.style.setProperty('pointer-events', 'inherit')
    }

    else if(e.target.className == 'slider' && option == 'company'){
        comp.style.setProperty('opacity', '100');
        comp.style.setProperty('pointer-events', 'inherit')
    }



    
    // e.preventDefault()
    // slider.style.minHeight = '45vh'
    // slider
    // slider.createElement('div');

    // slider.style = 'transition: 1s;'
    // div = document.createElement('.header ::after')
    // div.addClass = '.slider'
    // div.style = 'height:1000px; width:100%'
    // slider.style.width = '300px'
}

function remove(e){
    
    if(e.target.className == 'solutions'){
        // slider.style.minHeight = '0vh'
        sol.style.setProperty('opacity', '0');
        sol.style.setProperty('pointer-events', 'none')
    }
    else if (e.target.className == 'slider'){
        sol.style.setProperty('opacity', '0');
        sol.style.setProperty('pointer-events', 'none')
    }

    if(e.target.className == 'products'){
        // slider.style.minHeight = '0vh'
        prod.style.setProperty('opacity', '0');
        prod.style.setProperty('pointer-events', 'none')
    }

    else if (e.target.className == 'slider'){
        prod.style.setProperty('opacity', '0');
        prod.style.setProperty('pointer-events', 'none')
    }

    if(e.target.className == 'service' ){
        // slider.style.minHeight = '0vh'
        serve.style.setProperty('opacity', '0');
        serve.style.setProperty('pointer-events', 'none')
    }
    else if (e.target.className == 'slider'){
        serve.style.setProperty('opacity', '0');
        serve.style.setProperty('pointer-events', 'none')
    }

    if(e.target.className == 'integrations'){
        // slider.style.minHeight = '0vh'
        integrate.style.setProperty('opacity', '0');
        integrate.style.setProperty('pointer-events', 'none')
    }
    else if (e.target.className == 'slider'){
        integrate.style.setProperty('opacity', '0');
        integrate.style.setProperty('pointer-events', 'none')
    }

    if(e.target.className == 'partner' ){
        // slider.style.minHeight = '0vh'
        part.style.setProperty('opacity', '0');
        part.style.setProperty('pointer-events', 'none')
    }

    else if (e.target.className == 'slider'){
        part.style.setProperty('opacity', '0');
        part.style.setProperty('pointer-events', 'none')
    }

    if(e.target.className == 'company' || e.target.className == 'slider'){
        // slider.style.minHeight = '0vh'
        comp.style.setProperty('opacity', '0');
        comp.style.setProperty('pointer-events', 'none')
    }

    else if (e.target.className == 'slider'){
        comp.style.setProperty('opacity', '0');
        comp.style.setProperty('pointer-events', 'none')
    }
    slider.style.minHeight = '0vh'
    slider.style.pointerEvents = 'none'

}







first = document.querySelector('.first')
second = document.querySelector('.second')
third = document.querySelector('.third')
fourth = document.querySelector('.fourth')
















// 1400px
// -300
// first = 10

// first.style.left = '0px'

// setInterval(moveFirst, 500)
setTimeout (move1, 1000)
setTimeout (move2, 3000)
setTimeout (move3, 5000)
// setTimeout (move4, 7000)

function move1(){
    setInterval(moveFirst, 1000)
}

function move2(){
    setInterval(moveSecond, 1000)
}
function move3(){
    setInterval(moveThird, 1000)
}
function move4(){
    setInterval(moveFourth, 1000)
}
// setInterval(moveThird, 500)
// setInterval(moveFourth, 500)
// var first = -300
var i = 0
var j = 0
function moveFirst(){
    first.style.display = 'block'
    console.log(i)
    first.style.left = `${i}`+'%'
    i += 30

    // if (i == 20){
    //     // i=-300
       
    // }

    if (i == 150 || i ==140){
        i=-40
        first.style.display = 'none'
        // setInterval(moveSecond, 500)
    }
    
}



//900px
//-700

function moveSecond(){
    // console.log(j)
    second.style.display = 'block'
    second.style.left = `${j}`+'%'
    j+=30
    if (j==150 || j ==140){
        second.style.display = 'none'
        j=-40
    }
    // if (j == 1100){
    //     j=-600
    // }
}











//700px
//-1000
// third.style.left = '0px'


var k = 0
function moveThird(){
    third.style.display = 'block'
    // console.log(k)
    third.style.left = `${k}`+'%'
    k+=30
    if (k == 150 || k ==140){
        third.style.display = 'none'
        k=-40
    }
}













// 300px
// -1400
// fourth.style.left = '0px'



// var l = 0
// function moveFourth(){
//     // console.log(l)
//     fourth.style.display = 'block'
//     fourth.style.left = `${l}`+'%'
//     l+=30
//     if (l == 150){
//         fourth.style.display = 'none'
//         l=-60
//     }
// }





A = document.querySelector('.A')
B = document.querySelector('.B')
C = document.querySelector('.C')
D = document.querySelector('.D')
E = document.querySelector('.E')


// E.style.left = '-20px'


setTimeout (moveA, 1000)
setTimeout (moveB, 3000)
setTimeout (moveC, 5000)
setTimeout (moveD, 7000)
setTimeout (moveE, 9000)
// setTimeout (move4, 7000)

function moveA(){
    setInterval(shiftA, 1000)
}

function moveB(){
    setInterval(shiftB, 1000)
}
function moveC(){
    setInterval(shiftC, 1000)
}
function moveD(){
    setInterval(shiftD, 1000)
}
function moveE(){
    setInterval(shiftE, 1000)
}


var a = 0
var b = 0
var c = 0
var d = 0
var e = 10

function shiftA(){
    A.style.display = 'block'
    // console.log(a)
    A.style.right = `${a}`+'%'
    a += 20

    // if (i == 20){
    //     // i=-300
       
    // }

    if (a == 140){
        a=-40
        A.style.display = 'none'
        // setInterval(moveSecond, 500)
    }
    
}

function shiftB(){
    B.style.display = 'block'
    // console.log(b)
    B.style.right = `${b}`+'%'
    b += 20

    // if (i == 20){
    //     // i=-300
       
    // }

    if (b == 140){
        b=-40
        B.style.display = 'none'
        // setInterval(moveSecond, 500)
    }
    
}

function shiftC(){
    C.style.display = 'block'
    // console.log(b)
    C.style.right = `${c}`+'%'
    c += 20

    // if (i == 20){
    //     // i=-300
       
    // }

    if (c == 140){
        c=-40
        C.style.display = 'none'
        // setInterval(moveSecond, 500)
    }
    
}

function shiftD(){
    D.style.display = 'block'
    // console.log(b)
    D.style.right = `${d}`+'%'
    d += 20

    // if (i == 20){
    //     // i=-300
       
    // }

    if (d == 140){
        d=-40
        D.style.display = 'none'
        // setInterval(moveSecond, 500)
    }
    
}

function shiftE(){
    E.style.display = 'block'
    // console.log(b)
    E.style.right = `${e}`+'%'
    e += 20

    // if (i == 20){
    //     // i=-300
       
    // }

    if (e == 140 || e == 150){
        e=-30
        E.style.display = 'none'
        // setInterval(moveSecond, 500)
    }
    
}