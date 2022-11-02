var typed = new Typed(".dynamic-txt",{
    strings:["Human Being","Programmer","Full Stack Developer","Tech Geek"],
    typeSpeed: 150,
    backSpeed:150,
    loop: true
})


//optional if you want to add dynamic sentece or subtitle
// var typed_sent = new Typed(".dynamic-sen",{
//     strings:["A focused Java Backend Developer, passionate about implementing technical knowledge in real time projects. "],
//     typeSpeed: 300,
//     backSpeed:300,
//     loop: true
// })


function showAutoTyping() {
    document.querySelector(".intro-box").style.display = "none";
    document.querySelector(".container").style.display = "inline";
}


setTimeout(() => {
    showAutoTyping();
}, 5000);


