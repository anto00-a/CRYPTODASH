
export const hamburger = () => {
    let x = document.querySelector('.line1');
    let y = document.querySelector('.line2');
    let z = document.querySelector('.line3');
    let sidebarR = document.querySelector('.sidebar_r');
    let chart = document.querySelector('.chart_container');
    let open_hamb= document.querySelector('.hamburger');
    let nav = document.querySelector('.nav_title');
    let fav = document.querySelector('.card_container');


    open_hamb.classList.toggle('hamburger_open')
    chart.classList.toggle('overlay')
    nav.classList.toggle('overlay')
    fav.classList.toggle('overlay')
    sidebarR.classList.toggle('sidebar_r_open')
    x.classList.toggle("change1");
    y.classList.toggle("change2");
    z.classList.toggle("change3");
    

}
export const hamburger_close = () => {
    let x = document.querySelector('.line1');
    let y = document.querySelector('.line2');
    let z = document.querySelector('.line3');
    let sidebarR = document.querySelector('.sidebar_r')
    let chart = document.querySelector('.chart_container')
    let open_hamb= document.querySelector('.hamburger');
    let nav = document.querySelector('.nav_title')
    let fav = document.querySelector('.card_container')

    open_hamb.classList.remove('hamburger_open')
    chart.classList.remove('overlay')
    fav.classList.remove('overlay')
    nav.classList.remove('overlay')
    sidebarR.classList.remove('sidebar_r_open')
    x.classList.remove("change1");
    y.classList.remove("change2");
    z.classList.remove("change3");    
}
