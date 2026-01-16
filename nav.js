export function Nav(){

    return `
      <nav>
        <div class="logo">
            <a href="#">
                Quiz App
            </a>
        </div>

        <ul>
          <li><a href="./view/edit/edit.html" id="edit" class="btn">Edit Quiz</a></li>
          <li><a href="./view/play/play.html" id="play" class="btn">Play</a></li>
        </ul>
      </nav>

    `

}

document.getElementById("root").innerHTML = Nav();