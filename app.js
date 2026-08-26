let xp = Number(localStorage.getItem("xp")) || 0;
let streak = Number(localStorage.getItem("streak")) || 0;
let selectedLevel = localStorage.getItem("level") || "A1";


function saveData() {

  localStorage.setItem("xp", xp);
  localStorage.setItem("streak", streak);
  localStorage.setItem("level", selectedLevel);

}


function updateUI() {

  document.getElementById("xpHome").textContent = xp;
  document.getElementById("streakHome").textContent = streak;

  document.getElementById("profileXP").textContent = xp;
  document.getElementById("profileStreak").textContent = streak;
  document.getElementById("profileLevel").textContent = selectedLevel;

  const progress = Math.min(xp, 100);

  document.getElementById("homeProgress").style.width =
    progress + "%";

  document.getElementById("progressText").textContent =
    progress + "%";

}


function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function selectLevel(level) {

  selectedLevel = level;

  saveData();

  const data = levels[level];

  document.getElementById("levelContent").innerHTML = `

    <h2>🇩🇪 ${level} — ${data.title}</h2>

    <p>${data.description}</p>

    <br>

    <button class="primary" onclick="startVocabulary()">
      Commencer la leçon
    </button>

  `;

  updateUI();

}


function addXP(amount) {

  xp += amount;

  saveData();

  updateUI();

}


function answerQuiz(button, correct) {

  const result = document.getElementById("quizResult");

  if (correct) {

    result.textContent =
      "✅ Correct ! +10 XP 🎉";

    addXP(10);

  } else {

    result.textContent =
      "❌ Pas encore. Essaie encore !";

  }

}


function startVocabulary() {

  showPage("quiz");

  document.getElementById("quizQuestion").innerHTML = `

    <h2>
      Comment dit-on « Merci » en allemand ?
    </h2>

    <div class="answers">

      <button onclick="answerQuiz(this,false)">
        Bitte
      </button>

      <button onclick="answerQuiz(this,true)">
        Danke
      </button>

      <button onclick="answerQuiz(this,false)">
        Hallo
      </button>

      <button onclick="answerQuiz(this,false)">
        Tschüss
      </button>

    </div>

  `;

}


function startGrammar() {

  showPage("quiz");

  document.getElementById("quizQuestion").innerHTML = `

    <h2>
      Quel article correspond à « Tisch » ?
    </h2>

    <div class="answers">

      <button onclick="answerQuiz(this,true)">
        der Tisch
      </button>

      <button onclick="answerQuiz(this,false)">
        die Tisch
      </button>

      <button onclick="answerQuiz(this,false)">
        das Tisch
      </button>

    </div>

  `;

}


function startListening() {

  alert(
    "🎧 Module de compréhension audio : prochaine étape."
  );

}


function startSpeaking() {

  alert(
    "🗣️ Module de conversation : prochaine étape."
  );

}


function quiz() {

  showPage("quiz");

}


function login() {

  alert(
    "👤 Le système de création de compte sera ajouté avec le backend."
  );

}


function start() {

  showPage("learn");

}


updateUI();
selectLevel(selectedLevel);
