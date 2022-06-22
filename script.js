const ball = document.querySelector("[data-js='ball']");

window.addEventListener("mousemove", (e)=>{
    ball.style.cssText = `
        top: ${e.pageY - 35}px;
        left: ${e.pageX - 40}px;
    `
})