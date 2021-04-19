const banner = document.querySelector('#banner');
let i = 1;
setInterval(()=>{
    const bannerStyles = {
    backgroundImage: `url('./img/boom${i}.jpg')`,
    minHeight: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
Object.assign(banner.style, bannerStyles)
i++
if(i > 3){
    i=1
}
},3000)
let accesParent = document.querySelector('#parent')
let aumentar = accesParent.children[0]
let disminuir = accesParent.children[1]
let espaciado = accesParent.children[2]
let vinculos = accesParent.children[3]
let titulos = accesParent.children[4]
let invertir = accesParent.children[5]
let bn = accesParent.children[6]
let normal = accesParent.children[7]
let j = 1
aumentar.addEventListener("click", ()=>{
    j++
    let p = document.getElementsByTagName('P')
    let h1 = document.getElementsByTagName('H1')
    let a = document.getElementsByTagName('A')
    let li = document.getElementsByTagName('LI')
    for(let x = 0; x<p.length;x++){
        p[x].classList.remove('h3')
        p[x].classList.remove('h1')
        p[x].style.fontSize=`${j}rem`
        }
    for(let x = 0; x<h1.length;x++){
        h1[x].classList.remove('h1')
        h1[x].classList.remove('h3')
        h1[x].style.fontSize=`${j}rem`
        }
    for(let x = 0; x<a.length;x++){
        a[x].classList.remove('h3')
        a[x].style.fontSize=`${j}rem`
        }
    for(let x = 0; x<li.length;x++){
        li[x].classList.remove('h3')
        li[x].style.fontSize=`${j}rem`
    }
})
disminuir.addEventListener("click", ()=>{
    j--
    let p = document.getElementsByTagName('P')
    let h1 = document.getElementsByTagName('H1')
    let a = document.getElementsByTagName('A')
    let li = document.getElementsByTagName('LI')
    if(j>0){
       for(let x = 0; x<p.length;x++){
        p[x].style.fontSize=`${j}rem`
        }
        for(let x = 0; x<h1.length;x++){
        h1[x].style.fontSize=`${j}rem`
        }
        for(let x = 0; x<a.length;x++){
        a[x].style.fontSize=`${j}rem`
        }
        for(let x = 0; x<li.length;x++){
        li[x].style.fontSize=`${j}rem`
        }
    }
})
let k = 0
espaciado.addEventListener("click", ()=>{
    k++
    let p = document.getElementsByTagName('P')
    for(let x = 0; x < p.length; x++){
        p[x].style.lineHeight="4rem"
    }
    if(k>=2){
        for(let x = 0; x < p.length; x++){
        p[x].style.lineHeight="initial"
    }
    k=0
    }
})
let v = 0
vinculos.addEventListener("click", ()=>{
    v++
    let a = document.getElementsByTagName('A')
    for(let x = 0; x < a.length; x++){
        a[x].style.textDecoration="underline"
    }
    if(v>=2){
        for(let x = 0; x < a.length; x++){
        a[x].style.textDecoration="none"
    }
    v=0
    }
})
let t = 0
titulos.addEventListener("click", ()=>{
    t++
    let h1 = document.getElementsByTagName('H1')
    let h2 = document.getElementsByTagName('H2')
    let h3 = document.getElementsByTagName('H3')
    let h4 = document.getElementsByTagName('H4')
    let h5 = document.getElementsByTagName('H5')
    let h6 = document.getElementsByTagName('H6')
    for(let x = 0; x < h1.length; x++){
        h1[x].style.textDecoration="underline"
    }
    for(let x = 0; x < h1.length; x++){
        h1[x].style.textDecoration="underline"
    }
    for(let x = 0; x < h2.length; x++){
        h2[x].style.textDecoration="underline"
    }
    for(let x = 0; x < h3.length; x++){
        h3[x].style.textDecoration="underline"
    }
    for(let x = 0; x < h4.length; x++){
        h4[x].style.textDecoration="underline"
    }
    for(let x = 0; x < h5.length; x++){
        h5[x].style.textDecoration="underline"
    }
    for(let x = 0; x < h6.length; x++){
        h6[x].style.textDecoration="underline"
    }
    if(t>=2){
        for(let x = 0; x < h1.length; x++){
        h1[x].style.textDecoration="none"
    }
    for(let x = 0; x < h1.length; x++){
        h1[x].style.textDecoration="none"
    }
    for(let x = 0; x < h2.length; x++){
        h2[x].style.textDecoration="none"
    }
    for(let x = 0; x < h3.length; x++){
        h3[x].style.textDecoration="none"
    }
    for(let x = 0; x < h4.length; x++){
        h4[x].style.textDecoration="none"
    }
    for(let x = 0; x < h5.length; x++){
        h5[x].style.textDecoration="none"
    }
    for(let x = 0; x < h6.length; x++){
        h6[x].style.textDecoration="none"
    }
    t=0
    }
})
invertir.addEventListener("click", ()=>{
    let html = document.getElementsByTagName("html")
        html[0].style.filter = "invert(100%)"
})
bn.addEventListener("click", ()=>{
    let html= document.getElementsByTagName("html")
        html[0].style.filter = "grayscale(100%)"
})
normal.addEventListener("click", ()=>{
    let html= document.getElementsByTagName("html")
        html[0].style.filter = "none"
})