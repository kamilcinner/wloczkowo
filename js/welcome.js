function welcome() {
    var content = document.getElementById('content');
    content.innerHTML = '<p>Welcome to my blog!</p>';
}

document.getElementById('welcome').addEventListener('click', welcome);
