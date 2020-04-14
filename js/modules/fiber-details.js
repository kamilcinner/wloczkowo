import {FIBERS} from "./assets.js";

function fiberDetails(fiber) {
    var content = document.getElementById('content');
    var id = fiber.getAttribute('id');
    id = parseInt(id[id.length-1]);
    alert(id);
    content.innerHTML =
        '<div class="card">\n' +
        '  <figure>\n' +
        '    <img src="' + FIBERS[id]['image-path'] + '" alt="' + FIBERS[id]['title'] + '">\n' +
        '    <figcaption>' + FIBERS[id]['title'] + '</figcaption>\n' +
        '  </figure>\n' +
        '  <p>' + FIBERS[id]['description'] + '</p>\n' +
        '</div>';
}

export {fiberDetails};
