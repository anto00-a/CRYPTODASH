

export const dropdown = () => {
    let sidebar_l = document.querySelector('.sidebar_l');
    sidebar_l.classList.toggle('sidebar_l_open')
    
}

export const removeDrop = ()=> {
    let sidebar_l = document.querySelector('.sidebar_l');
    sidebar_l.classList.remove('sidebar_l_open')
}




