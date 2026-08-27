/* =====================================================
   HARYFI
   Application principale
===================================================== */


/* =====================================================
   DONNÉES A1
===================================================== */

const a1Lessons = [

  "Alphabet & Aussprache",

  "Begrüßung & Verabschiedung",

  "Sich vorstellen",

  "Personalpronomen",

  "sein & haben",

  "Artikel: der, die, das",

  "Plural",

  "Verben im Präsens",

  "W-Fragen",

  "Ja-/Nein-Fragen",

  "Negation: nicht / kein",

  "Zahlen",

  "Uhrzeit",

  "Datum & Wochentage",

  "Monate & Jahreszeiten",

  "Familie",

  "Berufe",

  "Wohnen & Wohnung",

  "Möbel & Haushalt",

  "Essen & Trinken",

  "Einkaufen",

  "Kleidung & Farben",

  "Freizeit & Hobbys",

  "Tagesablauf",

  "Schule & Arbeit",

  "Stadt & Orte",

  "Wegbeschreibung",

  "Verkehr & Reisen",

  "Wetter",

  "Körper & Gesundheit",

  "Arzt & Apotheke",

  "Modalverben",

  "Possessivartikel",

  "Akkusativ",

  "Dativ – Grundlagen",

  "Präpositionen",

  "Trennbare Verben",

  "Imperativ",

  "Perfekt – Grundlagen",

  "Adjektive & Vergleiche",

  "Konnektoren",

  "Alltagssituationen",

  "Telefonieren & Nachrichten",

  "Termine & Verabredungen",

  "Schreiben & E-Mail",

  "Hörverstehen",

  "Leseverstehen",

  "Sprechen & Dialoge",

  "A1-Wortschatz",

  "A1-Wiederholung & Prüfungsvorbereitung"

];


/* =====================================================
   ELEMENTS
===================================================== */

const homeScreen =
  document.getElementById("screen-home");

const levelsScreen =
  document.getElementById("screen-levels");

const a1Screen =
  document.getElementById("screen-a1");

const startButton =
  document.getElementById("startButton");

const explosion =
  document.getElementById("explosion");

const lessonList =
  document.getElementById("lessonList");


/* =====================================================
   AFFICHER UNE PAGE
===================================================== */

function showScreen(screen) {

  const screens = [
    homeScreen,
    levelsScreen,
    a1Screen
  ];

  screens.forEach(s => {

    s.classList.add("hidden");

    s.classList.remove("screen-enter");

  });


  screen.classList.remove("hidden");


  void screen.offsetWidth;


  screen.classList.add("screen-enter");

}


/* =====================================================
   PAGE D'ACCUEIL → NIVEAUX
===================================================== */

startButton.addEventListener("click", function(e) {

  createExplosion(
    e.clientX,
    e.clientY
  );

  setTimeout(() => {

    showScreen(levelsScreen);

  }, 400);

});


/* =====================================================
   BOUTONS RETOUR
===================================================== */

document.querySelectorAll(
  ".back-button"
).forEach(button => {

  button.addEventListener("click", () => {

    const destination =
      button.dataset.back;

    if(destination === "home") {

      showScreen(homeScreen);

    }

    if(destination === "levels") {

      showScreen(levelsScreen);

    }

  });

});


/* =====================================================
   CHOIX DU NIVEAU
===================================================== */

document.querySelectorAll(
  ".level-card"
).forEach(card => {

  card.addEventListener("click", function(e) {

    const level =
      this.dataset.level;


    createExplosion(
      e.clientX,
      e.clientY
    );


    /*
      Pour l'instant A1 est disponible.

      Les autres niveaux seront ajoutés
      plus tard.
    */

    if(level === "A1") {

      setTimeout(() => {

        showScreen(a1Screen);

      }, 450);

    }

    else {

      setTimeout(() => {

        alert(
          level +
          " wird bald verfügbar sein."
        );

      }, 450);

    }

  });

});


/* =====================================================
   CRÉER LA LISTE DES 50 LEÇONS
===================================================== */

function createLessons() {

  lessonList.innerHTML = "";


  a1Lessons.forEach(
    (lesson, index) => {

      const card =
        document.createElement("button");


      card.className =
        "lesson-card";


      const number =
        String(index + 1)
        .padStart(2, "0");


      card.innerHTML = `

        <div class="lesson-number">
          ${number}
        </div>

        <div>

          <strong>
            ${lesson}
          </strong>

          <span>
            LEKTION ${number}
          </span>

        </div>

      `;


      card.addEventListener(
        "click",
        () => {

          console.log(
            "Lektion ausgewählt:",
            index + 1,
            lesson
          );

        }
      );


      lessonList.appendChild(card);

    }
  );

}


createLessons();


/* =====================================================
   EXPLOSION EFFECT
===================================================== */

function createExplosion(x, y) {

  explosion.style.left =
    x + "px";

  explosion.style.top =
    y + "px";


  explosion.classList.remove(
    "explosion-active"
  );


  void explosion.offsetWidth;


  explosion.classList.add(
    "explosion-active"
  );

}


/* =====================================================
   CANVAS – MOTS ALLEMANDS
===================================================== */

const canvas =
  document.getElementById(
    "wordCanvas"
  );

const ctx =
  canvas.getContext("2d");


let width = 0;
let height = 0;


const words = [

  "DEUTSCH",

  "LERNEN",

  "SPRECHEN",

  "VERSTEHEN",

  "WILLKOMMEN",

  "HALLO",

  "DANKE",

  "BITTE",

  "GUTEN MORGEN",

  "GUTEN TAG",

  "GUTEN ABEND",

  "AUF WIEDERSEHEN",

  "FREUNDSCHAFT",

  "ZUKUNFT",

  "REISE",

  "SPRACHE",

  "WORT",

  "SATZ",

  "DIALOG",

  "SCHULE",

  "ARBEIT",

  "FAMILIE",

  "LIEBE",

  "GLÜCK",

  "MOTIVATION",

  "ERFOLG",

  "WUNDERBAR",

  "JETZT",

  "START",

  "ZIEL",

  "BILDUNG",

  "WISSEN",

  "MUT",

  "CHANCE",

  "IDEEN",

  "TRAUM",

  "LEBEN",

  "HEUTE",

  "MORGEN",

  "ZUSAMMEN",

  "LOS",

  "KOMM",

  "JA",

  "NEIN",

  "WARUM",

  "WAS",

  "WO",

  "WER",

  "WIE",

  "ICH",

  "DU",

  "WIR",

  "SIE",

  "FREUDE",

  "Hoffnung",

  "STARK",

  "NEU",

  "ENTDECKEN",

  "ERLEBEN"

];


const colors = [

  "#ffffff",

  "#111111",

  "#ff0055",

  "#0066ff",

  "#7a00ff",

  "#00a86b",

  "#fff000",

  "#00cfff",

  "#ff6a00",

  "#ff00cc"

];


let particles = [];


/* =====================================================
   RESIZE
===================================================== */

function resizeCanvas() {

  width =
    canvas.width =
    window.innerWidth;

  height =
    canvas.height =
    window.innerHeight;


  createParticles();

}


window.addEventListener(
  "resize",
  resizeCanvas
);


/* =====================================================
   PARTICULE
===================================================== */

class WordParticle {

  constructor() {

    this.word =
      words[
        Math.floor(
          Math.random() *
          words.length
        )
      ];


    this.x =
      Math.random() *
      width;


    this.y =
      Math.random() *
      height;


    this.size =
      12 +
      Math.random() * 35;


    this.vx =
      (Math.random() - .5) *
      1.1;


    this.vy =
      (Math.random() - .5) *
      1.1;


    this.angle =
      Math.random() *
      Math.PI *
      2;


    this.rotation =
      (Math.random() - .5) *
      .012;


    this.color =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    this.opacity =
      .18 +
      Math.random() * .45;

  }


  update() {

    this.x += this.vx;

    this.y += this.vy;

    this.angle +=
      this.rotation;


    if(this.x < -150)
      this.x = width + 150;

    if(this.x > width + 150)
      this.x = -150;


    if(this.y < -100)
      this.y = height + 100;

    if(this.y > height + 100)
      this.y = -100;

  }


  draw() {

    ctx.save();


    ctx.translate(
      this.x,
      this.y
    );


    ctx.rotate(
      this.angle
    );


    ctx.font =
      `900 ${this.size}px Plus Jakarta Sans, sans-serif`;


    ctx.textAlign =
      "center";


    ctx.textBaseline =
      "middle";


    ctx.globalAlpha =
      this.opacity;


    ctx.fillStyle =
      this.color;


    ctx.fillText(
      this.word,
      0,
      0
    );


    ctx.restore();

  }

}


/* =====================================================
   CRÉER PARTICULES
===================================================== */

function createParticles() {

  particles = [];


  /*
    Maximum 45 mots pour éviter
    les ralentissements sur téléphone.
  */

  const count =
    Math.min(
      45,
      Math.max(
        20,
        Math.floor(
          width / 25
        )
      )
    );


  for(
    let i = 0;
    i < count;
    i++
  ) {

    particles.push(
      new WordParticle()
    );

  }

}


/* =====================================================
   ANIMATION
===================================================== */

function animateCanvas() {

  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  particles.forEach(
    particle => {

      particle.update();

      particle.draw();

    }
  );


  requestAnimationFrame(
    animateCanvas
  );

}


/* =====================================================
   INITIALISATION
===================================================== */

resizeCanvas();

animateCanvas();
