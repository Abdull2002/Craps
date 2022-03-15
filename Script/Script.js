let Color = document.getElementById("Color-post");
let btnCreate = document.getElementById("btn-Create");
let backColor = document.getElementById("BackColor-post")
let Display = document.getElementById("Display")
let TheDate = document.getElementById("Date")
let txtDisplay = document.getElementById("txt-Display")
let txtTitle = document.getElementById("txt-Title")

btnCreate.addEventListener('click', function() {
    var div = document.createElement("div");
    div.classList.add("blog-post");
    div.style.backgroundColor = backColor.value;

    var Title = document.createElement("h1");
    var titlenode = document.createTextNode(txtTitle.value);
    Title.style.color = Color.value;
    Title.appendChild(titlenode);
    Title.classList.add("Title");
    div.appendChild(Title);

    var DateTime = document.createElement("h1");
    var Datenode = document.createTextNode(TheDate.value);
    DateTime.style.color = Color.value;
    DateTime.appendChild(Datenode);
    DateTime.classList.add("DateTime");
    div.appendChild(DateTime);

    var Txt = document.createElement("h1");
    var txtnode = document.createTextNode(txtDisplay.value);
    Txt.style.color = Color.value;
    Txt.appendChild(txtnode);
    Txt.classList.add("txt");
    div.appendChild(Txt);

    var element = document.getElementById("Display");
    element.appendChild(div);
})



