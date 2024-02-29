let themeBtn = document.getElementById("theme");
let counter = 0;

function changeTheme(counter) {
    header = document.querySelector('h1');
    header3 = document.querySelector('h3');
    a = document.querySelectorAll('a');
    pre = document.querySelector('pre');

    if (counter % 3 == 0) {
        document.body.style.background = "#fdbb7e";
        header.style.color = "#6601e6e";
        header3.style.color = "#6601e6";
        a.forEach(element => {
            element.style.color = "#0073ed";
        });
        if (pre) {
            pre.style.color = "#6601e6";
        }
    } else if (counter % 3 == 1) {
        document.body.style.background = "#e57429";
        header.style.color = "#144096";
        header3.style.color = "#144096";
        a.forEach(element => {
            element.style.color = "#0073ed";
        });
        if (pre) {
            pre.style.color = "#144096";
        }
    } else if (counter % 3 == 2) {
        document.body.style.background = "#f1937f";
        header.style.color = "#433275";
        header3.style.color = "#433275";
        a.forEach(element => {
            element.style.color = "#0073ed";
        });
        if (pre) {
            pre.style.color = "#433275";
        }
    }
}

themeBtn.addEventListener('click', function() {
    counter += 1;
    changeTheme(counter);
});

window.onload = function() {
    changeTheme(counter);
}