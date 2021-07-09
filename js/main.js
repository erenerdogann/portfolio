const DateNow = new Date;
let outputArea = document.getElementById("outputArea");
let w = "50%";
let h = "65%";
if (window.screen.width < 750) {
    w = "100%";
    h = "65%";
    console.log("Small");
}

window.onload = function () {
    document.getElementById("inputBox").focus()
    start();
}

function fFocus() {
    document.getElementById("inputBox").focus();
}

let commands = ["help", "projects", "pomodoro", "pokedex", "simon says",
"drum kit", "skills", "about", "contact", "stack overflow", "github",
"fiverr", "upwork", "clear", "goto", "source"];
document.getElementById("inputBox").addEventListener("keydown", (e) =>{
    if (e.keyCode === 9){
        e.preventDefault();
        inpt = document.getElementById("inputBox").value.toLowerCase();
        inptArr = inpt.split(" ");
        inpt = inptArr[inptArr.length - 1];
        for(i = 0; i < commands.length; i++){
            if(commands[i].substr(0, inpt.length) == inpt){
               document.getElementById("inputBox").value += commands[i].substr(inpt.length, commands[i].length);
               break;
            }
        }
        focus();
    }
})

function start() {
    outputArea.innerHTML = "> Hello dear, {$user}! Today is " +
        (DateNow.getDate()) + "/" + (DateNow.getMonth() + 1) + "/" + DateNow.getFullYear() +
        ". Welcome to my Terminal! </br></br>" + '> Type "help" to get more help. If you know what you' +
        " are doing, please do go ahead! </br> </br>";

}

function exit() {
    window.close();
}

function getInput() {
    let InputText = document.getElementById("inputBox");
    switch (InputText.value.toLowerCase()) {
        case "help":
            getHelp();
            break;

        case "lorem":
            getLorem();
            break;

        case "clear":
            start();
            break;

        case "contact":
            contact();
            break;

        case "stack overflow":
        case "stackoverflow":
        case "goto stack overflow":
        case "go to stack overflow":
        case "goto stackoverflow":
        case "go to stackoverflow":
            window.open("https://stackoverflow.com/users/8119488/eren");
            break;

        case "github":
        case "go to github":
        case "goto github":
            window.open("https://github.com/erenerdogann");
            break;

        case "fiver":
        case "fiverr":
        case "goto fiver":
        case "goto fiverr":
        case "go to fiver":
        case "go to fiverr":
            window.open("https://www.fiverr.com/erenerdogann");
            break;

        case "upwork":
        case "goto upwork":
        case "go to upwork":
            window.open("https://www.upwork.com/freelancers/~01a06a04e25553b2f1");
            break;

        case "projects":
        case "project":
        case "proje":
            projects();
            break;

        case "pomodoro":
        case "pomodoro timer":
        case "pomodorotimer":
        case "goto pomodoro":
        case "goto pomodoro timer":
        case "goto pomodorotimer":
        case "go to pomodoro":
        case "go to pomodoro timer":
        case "go to pomodorotimer":
            window.open("https://erenerdogann.github.io/PomodoroTimer/");
            break;

        case "pomodoro":
        case "pomodoro timer":
        case "pomodorotimer":
        case "source pomodoro":
        case "source pomodoro timer":
        case "source pomodorotimer":
            window.open("https://github.com/erenerdogann/PomodoroTimer");
            break;

        case "simon":
        case "simonsays":
        case "simon says":
        case "simon game":
        case "simongame":
        case "goto simon":
        case "goto simonsays":
        case "goto simon says":
        case "goto simon game":
        case "goto simongame":
        case "go to simon":
        case "go to simonsays":
        case "go to simon says":
        case "go to simon game":
        case "go to simongame":
            window.open("https://erenerdogann.github.io/SimonGame/");
            break;

        case "simon":
        case "simonsays":
        case "simon says":
        case "simon game":
        case "simongame":
        case "source simon":
        case "source simonsays":
        case "source simon says":
        case "source simon game":
        case "source simongame":
            window.open("https://github.com/erenerdogann/SimonGame");
            break;

        case "drum":
        case "drum kit":
        case "drumkit":
        case "goto drum":
        case "goto drum kit":
        case "goto drumkit":
        case "go to drum":
        case "go to drum kit":
        case "go to drumkit":
            window.open("https://erenerdogann.github.io/BasicWebDrumKit/");
            break;

        case "drum":
        case "drum kit":
        case "drumkit":
        case "source drum":
        case "source drum kit":
        case "source drumkit":
            window.open("https://github.com/erenerdogann/BasicWebDrumKit");
            break;

        case "pokedex":
        case "go to pokedex":
        case "goto pokedex":
            window.open("https://he3x3.csb.app");
            break;

        case "pokedex":
        case "source pokedex":
        case "source pokedex":
            window.open("https://codesandbox.io/s/he3x3");
            break;

        case "skills":
        case "skill":
            skills();
            break;

        case "about":
            about();
            break;

        case "exit":
            exit();
            break;

        default:
            defCase();
            break;
    }
    InputText.value = "";
    InputText.scrollIntoView();
}

function getHelp() {
    outputArea.innerHTML += "</br>" +
        "> You can type theese commands to see about their relative results...</br></br>" +
        "> [ Projects ] --> To see my projects.</br>" +
        "> [ goto + *project name* ] --> Opens the project.</br>" +
        "> [ source + *project name* ] --> Inspect the source code of project.</br>" +
        "> [ Skills ]   --> To see my skill set.</br>" +
        "> [ About ]    --> To learn more about me.</br>" +
        "> [ Contact ]  --> To contact me.</br>" +
        "> [ goto + *contact* ]   --> Goes to desired contact platform."
        + "</br>";
}

function getLorem() {
    outputArea.innerHTML += "</br>> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quibusdam voluptatum alias, similique ratione consequuntur incidunt provident ullam distinctio ab pariatur vel, ipsum rem, veritatis quae doloremque nobis accusantium ut? </br></br>";

}

function contact() {
    outputArea.innerHTML += '> You can type "goto + *name*" to visit the relative site, '
        + "or just click the text itself.</br>"
        + "</br>> "
        + '<a href="mailto:imerenerdogan@gmail.com">E-Mail: imerenerdogan@gmail.com</a>'
        + "</br>"
        + '<a href="https://stackoverflow.com/users/8119488/eren" target="blank">> Stack Overflow</a>'
        + "</br>"
        + '<a href="https://github.com/erenerdogann" target="blank">> GitHub</a>'
        + "</br>"
        + '<a href="https://www.fiverr.com/erenerdogann" target="blank">> Fiverr</a>'
        + "</br>"
        + '<a href="https://www.upwork.com/freelancers/~01a06a04e25553b2f1">> UpWork</a>'
        + "</br>";
}

const skillsContent = document.getElementById("skills-content");
function skills() {
    outputArea.innerHTML += "</br>" + "... opening skills ..." + "</br>";
    const contactBox = new WinBox({
        title: "mySkills.exe",
        background: "#c97200",
        width: w,
        height: h,
        top: 10,
        left: 10,
        bottom: 10,
        right: 10,
        mount: skillsContent
    });
}

const projectsContent = document.getElementById("projects-content");
function projects() {
    outputArea.innerHTML += "</br>" + "... opening projects ..." + "</br>" +
        "You can open a project directly from the terminal if you type 'goto' +' *project name* '"
        + "</br>";
    const contactBox = new WinBox({
        title: "myProjects.exe",
        background: "#c97200",
        width: w,
        height: h,
        top: 10,
        left: 10,
        bottom: 10,
        right: 10,
        mount: projectsContent
    });
}

function about() {
    outputArea.innerHTML += "</br>> "
        + "Hello, my name is Eren. I am a freelance developer / student. I was into computers since"
        + "I was a child, and I have been coding for 8+ years now. </br>> "
        + "I made simple websites and apps for fun, couple of small games too."
        + "Me and my team got the 1st place award on the Global Game Jam Hacettepe in 2016.</br>> "
        + "I love learning new things, constantly seeking for information, espacially about "
        + "programming and tech.";
}

function defCase() {
    outputArea.innerHTML += "</br>> Invalid command, if you are not sure about commands " +
        'please type "help"</br></br>';
}
