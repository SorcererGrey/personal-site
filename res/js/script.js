var body, github, email, twitter;
body = document.getElementById("page");
github = document.getElementById("github");
email = document.getElementById("email");
twitter = document.getElementById("twitter");

github.addEventListener("mouseenter", function (event) {
    body.style.backgroundColor = "#757575";
    github.style.backgroundColor = "#757575";
    email.style.backgroundColor = "#757575";
    twitter.style.backgroundColor = "#757575";
    email.style.color = "#757575";
    twitter.style.color = "#757575";
    email.style.boxShadow = "0 0 0 0 #757575";
    github.style.boxShadow = "0 0 0 0 #757575";
    twitter.style.boxShadow = "0 0 0 0 #757575";
});
github.addEventListener("mouseleave", function (event) {
    body.style.backgroundColor = "#FFF";
    github.style.backgroundColor = "#BDBDBD";
    email.style.backgroundColor = "#BDBDBD";
    twitter.style.backgroundColor = "#BDBDBD";
    email.style.color = "#FFF";
    twitter.style.color = "#FFF";
    github.style.boxShadow = "0 0 2px 3px #b9b9b9";
    email.style.boxShadow = "0 0 2px 3px #b9b9b9";
    twitter.style.boxShadow = "0 0 2px 3px #b9b9b9";
});

email.addEventListener("mouseenter", function (event) {
    body.style.backgroundColor = "#FF9800";
    github.style.backgroundColor = "#FF9800";
    twitter.style.backgroundColor = "#FF9800";
    email.style.backgroundColor = "#FF9800";
    github.style.color = "#FF9800";
    twitter.style.color = "#FF9800";
    email.style.boxShadow = "0 0 0 0 #FF9800";
    github.style.boxShadow = "0 0 0 0 #FF9800";
    twitter.style.boxShadow = "0 0 0 0 #FF9800";
});
email.addEventListener("mouseleave", function (event) {
    body.style.backgroundColor = "#FFF";
    github.style.backgroundColor = "#BDBDBD";
    email.style.backgroundColor = "#BDBDBD";
    twitter.style.backgroundColor = "#BDBDBD";
    github.style.color = "#FFF";
    twitter.style.color = "#FFF";
    github.style.boxShadow = "0 0 2px 3px #b9b9b9";
    email.style.boxShadow = "0 0 2px 3px #b9b9b9";
    twitter.style.boxShadow = "0 0 2px 3px #b9b9b9";
});

twitter.addEventListener("mouseenter", function (event) {
    body.style.backgroundColor = "#81D4FA";
    email.style.backgroundColor = "#81D4FA";
    github.style.backgroundColor = "#81D4FA";
    twitter.style.backgroundColor = "#81D4FA";
    email.style.color = "#81D4FA";
    github.style.color = "#81D4FA";
    email.style.boxShadow = "0 0 0 0 #81D4FA";
    github.style.boxShadow = "0 0 0 0 #81D4FA";
    twitter.style.boxShadow = "0 0 0 0 #81D4FA";
});
twitter.addEventListener("mouseleave", function (event) {
    body.style.backgroundColor = "#FFF";
    github.style.backgroundColor = "#BDBDBD";
    email.style.backgroundColor = "#BDBDBD";
    twitter.style.backgroundColor = "#BDBDBD";
    email.style.color = "#FFF";
    github.style.color = "#FFF";
    github.style.boxShadow = "0 0 2px 3px #b9b9b9";
    email.style.boxShadow = "0 0 2px 3px #b9b9b9";
    twitter.style.boxShadow = "0 0 2px 3px #b9b9b9";
});
