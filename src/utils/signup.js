export const signupHandler = ()=>{
    const container = document.querySelector('.signup');
    const login = document.querySelector('.login_container');
    const description = document.querySelector('.description')
    container.classList.toggle('display');
    login.classList.toggle('overlay');
    description.classList.toggle('overlay');
}