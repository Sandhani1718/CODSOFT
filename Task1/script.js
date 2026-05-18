// Smooth Scroll

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        section.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// Typing Effect

const text = "B.Tech Student | Web Developer";

let index = 0;

function typing(){

    document.querySelector(".typing-text").innerHTML =
    text.slice(0,index);

    index++;

    if(index <= text.length){

        setTimeout(typing,100);

    }

}

typing();