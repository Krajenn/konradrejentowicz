let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let maxRadius = 40;

//Tablica z kolorami dla kolek
let colorArray = [
    '#e31b6d',
    '#04B6C9',
    '#0C36F7',
    '#8916E0',
    '#ED4B0C',
];

//obiekt na dane o pozycji myszki (zeby byly globalne)
let mouse = {
    x: undefined,
    y: undefined,
}
//pobieramy pozycje myszki i wpisujemy do obiektu
window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

//resotowanie spawnow na resize
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

//Tworze objekt Circle - przekazuje do niego po jednym zestawie danych z circleArray
function Circle(x, y, dx, dy, radius) {
    //Przypisuje dane, ktore przychodza do Circle
    this.x = x; //this czyli Circle i tworze mu parametr x do ktorego przypisuje x ktory przyszedl
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; //colorArray to zmienna globalna wiec mozna sie do niej odwolac

    //Rysuje kazde kolko po kolei
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    //Dodanie ruchu do kolka
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //INTERAKCJA

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }

}

let circleArray = []; //tablica na obiekty Circle

function init() {
    circleArray = []; //zerowanie tablicy co nowy objekt Circle

    for (let i = 0; i < 800; i++) {
        let radius = Math.random() * 10 + 1; // +1 żeby nigdy radius nie wyszedł 0
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5; //kierunek poruszania sie
        let dy = Math.random() - 0.5; //kierunek poruszania sie

        circleArray.push(new Circle(x, y, dx, dy, radius)); //dodanie do tablicy obiekt ze zmiennymi
    }
}

//Animacja
function animate() {
    requestAnimationFrame(animate); //sama siebie wywoluje caly czas
    c.clearRect(0, 0, innerWidth, innerHeight); // czysci plotno

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update(); // Wywoluje ruch ktory wywoluje rysowanie
    }
}

animate();
init(); //wywoluje funkcje init (tworzy obiekty Circle)