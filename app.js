// ============================================================
// DEUTSCHCONNECT 🇩🇪
// APP.JS - A1 Lernsystem
// ============================================================

(function () {
  "use strict";

  // ----------------------------------------------------------
  // ÉTAT DE L'APPLICATION
  // ----------------------------------------------------------

  let currentLesson = null;
  let currentQuestion = 0;
  let currentScore = 0;
  let answered = false;

  // ----------------------------------------------------------
  // INITIALISATION
  // ----------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    initializeApp();
  });

  function initializeApp() {
    setupNavigation();
    setupLevelButtons();
    showHome();
  }

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------

  function setupNavigation() {
    const links = document.querySelectorAll("nav a, .nav-link");

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const target = link.getAttribute("href");

        if (!target || !target.startsWith("#")) {
          return;
        }

        event.preventDefault();

        const page = target.substring(1);

        if (page === "accueil" || page === "home") {
          showHome();
        }

        if (page === "apprendre") {
          showLearn();
        }

        if (page === "quiz") {
          showQuiz();
        }

        if (page === "communaute") {
          showCommunity();
        }

        if (page === "profil") {
          showProfile();
        }
      });
    });
  }

  // ----------------------------------------------------------
  // BOUTONS DE NIVEAU
  // ----------------------------------------------------------

  function setupLevelButtons() {
    document.addEventListener("click", function (event) {
      const button = event.target.closest("[data-level]");

      if (!button) {
        return;
      }

      const level = button.dataset.level;

      if (level === "A1") {
        showLearn();
      } else {
        showComingSoon(level);
      }
    });
  }

  // ----------------------------------------------------------
  // OUTIL : TROUVER LA ZONE PRINCIPALE
  // ----------------------------------------------------------

  function getMainContainer() {
    let container =
      document.querySelector("main") ||
      document.querySelector("#app") ||
      document.querySelector(".app") ||
      document.querySelector(".container");

    if (!container) {
      container = document.createElement("main");
      document.body.appendChild(container);
    }

    return container;
  }

  // ----------------------------------------------------------
  // ACCUEIL
  // ----------------------------------------------------------

  function showHome() {
    const main = getMainContainer();

    main.innerHTML = `
      <section class="hero">
        <p class="badge">🇲🇬 Français → 🇩🇪 Deutsch</p>

        <h1>Apprends l'allemand. Chaque jour.</h1>

        <p>
          DeutschConnect t'aide à apprendre l'allemand
          de A1 jusqu'à C2.
        </p>

        <button class="primary-btn" id="startLearning">
          Commencer
        </button>
      </section>

      <section class="progress-section">
        <h2>Ta progression</h2>

        <div class="progress-card">
          <strong id="homeProgress">0%</strong>
          <span>terminé</span>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <span>📚</span>
            <strong>11</strong>
            <small>Lernzettel A1</small>
          </div>

          <div class="stat-card">
            <span>📝</span>
            <strong>0</strong>
            <small>Tests terminés</small>
          </div>

          <div class="stat-card">
            <span>⭐</span>
            <strong id="homeXP">0</strong>
            <small>XP</small>
          </div>

          <div class="stat-card">
            <span>🔥</span>
            <strong id="homeStreak">0</strong>
            <small>Série</small>
          </div>
        </div>
      </section>

      <section class="learn-preview">
        <h2>📖 Apprendre</h2>

        <p>
          Commence avec le niveau A1 et avance étape par étape.
        </p>

        <div class="levels">
          ${createLevelButtons()}
        </div>
      </section>

      <section class="daily-test">
        <h2>📝 Mini-Test</h2>

        <p>
          Teste tes connaissances avec de petites questions.
        </p>

        <button class="secondary-btn" id="goQuiz">
          Commencer un test
        </button>
      </section>
    `;

    const startButton = document.getElementById("startLearning");

    if (startButton) {
      startButton.addEventListener("click", showLearn);
    }

    const quizButton = document.getElementById("goQuiz");

    if (quizButton) {
      quizButton.addEventListener("click", showQuiz);
    }

    updateProgressDisplay();
  }

  // ----------------------------------------------------------
  // BOUTONS NIVEAUX
  // ----------------------------------------------------------

  function createLevelButtons() {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

    return levels
      .map(function (level) {
        const active = level === "A1" ? "active" : "locked";

        return `
          <button
            class="level-button ${active}"
            data-level="${level}"
          >
            ${level}
            ${level !== "A1" ? "🔒" : ""}
          </button>
        `;
      })
      .join("");
  }

  // ----------------------------------------------------------
  // PAGE APPRENDRE
  // ----------------------------------------------------------

  function showLearn() {
    const main = getMainContainer();

    const lessons =
      typeof getA1Lessons === "function"
        ? getA1Lessons()
        : typeof A1_LESSONS !== "undefined"
        ? A1_LESSONS
        : [];

    main.innerHTML = `
      <section class="page-header">
        <button class="back-button" id="backHome">
          ← Accueil
        </button>

        <p class="badge">🇩🇪 Niveau A1</p>

        <h1>Apprendre l'allemand</h1>

        <p>
          Wähle eine Lektion und lerne Schritt für Schritt.
        </p>
      </section>

      <section class="lesson-list">

        <h2>📚 A1 — Lernzettel</h2>

        <div class="lesson-grid">

          ${
            lessons.length
              ? lessons.map(createLessonCard).join("")
              : `
                <div class="empty-state">
                  <p>Keine Lektionen gefunden.</p>
                </div>
              `
          }

        </div>
      </section>
    `;

    document
      .getElementById("backHome")
      ?.addEventListener("click", showHome);

    document.querySelectorAll("[data-lesson-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        openLesson(button.dataset.lessonId);
      });
    });
  }

  // ----------------------------------------------------------
  // CARTE LEÇON
  // ----------------------------------------------------------

  function createLessonCard(lesson) {
    return `
      <article class="lesson-card">

        <div class="lesson-number">
          A1.${String(lesson.number).padStart(2, "0")}
        </div>

        <h3>${escapeHTML(lesson.title)}</h3>

        <p class="lesson-french-title">
          ${escapeHTML(lesson.frenchTitle || "")}
        </p>

        <p>
          ${escapeHTML(lesson.lernziel || "")}
        </p>

        <button
          class="primary-btn"
          data-lesson-id="${lesson.id}"
        >
          Lernzettel öffnen →
        </button>

      </article>
    `;
  }

  // ----------------------------------------------------------
  // OUVRIR UNE LEÇON
  // ----------------------------------------------------------

  function openLesson(id) {
    const lesson =
      typeof getLessonById === "function"
        ? getLessonById(id)
        : A1_LESSONS.find(function (item) {
            return item.id === id;
          });

    if (!lesson) {
      showError("Die Lektion wurde nicht gefunden.");
      return;
    }

    currentLesson = lesson;

    const main = getMainContainer();

    main.innerHTML = `
      <section class="lesson-page">

        <button class="back-button" id="backLessons">
          ← Alle A1-Lektionen
        </button>

        <div class="lesson-heading">

          <span class="badge">
            🇩🇪 A1.${String(lesson.number).padStart(2, "0")}
          </span>

          <h1>${escapeHTML(lesson.title)}</h1>

          <p class="french-subtitle">
            ${escapeHTML(lesson.frenchTitle || "")}
          </p>

        </div>

        <div class="lesson-content">

          ${renderLernziel(lesson)}

          ${renderErklaerung(lesson)}

          ${renderVocabulary(lesson)}

          ${renderPronomen(lesson)}

          ${renderKonjugation(lesson)}

          ${renderKategorien(lesson)}

          ${renderDialog(lesson)}

          ${renderExamples(lesson)}

          ${renderMerke(lesson)}

          ${renderMiniTestStart(lesson)}

        </div>

      </section>
    `;

    document
      .getElementById("backLessons")
      ?.addEventListener("click", showLearn);

    document
      .getElementById("startLessonTest")
      ?.addEventListener("click", function () {
        startLessonTest(lesson);
      });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // ----------------------------------------------------------
  // LERNZIEL
  // ----------------------------------------------------------

  function renderLernziel(lesson) {
    if (!lesson.lernziel) {
      return "";
    }

    return `
      <section class="content-card learning-goal">
        <h2>🎯 Lernziel</h2>

        <p>
          ${escapeHTML(lesson.lernziel)}
        </p>
      </section>
    `;
  }

  // ----------------------------------------------------------
  // ERKLÄRUNG
  // ----------------------------------------------------------

  function renderErklaerung(lesson) {
    if (!lesson.erklaerung) {
      return "";
    }

    return `
      <section class="content-card">

        <h2>🧠 Kurz erklärt</h2>

        <div class="simple-german">
          ${formatText(lesson.erklaerung)}
        </div>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // VOCABULAIRE
  // ----------------------------------------------------------

  function renderVocabulary(lesson) {
    if (!lesson.wortschatz || !lesson.wortschatz.length) {
      return "";
    }

    return `
      <section class="content-card">

        <h2>📚 Wortschatz</h2>

        <div class="vocabulary-table">

          <div class="vocabulary-header">
            <strong>Deutsch 🇩🇪</strong>
            <strong>Français 🇫🇷</strong>
          </div>

          ${lesson.wortschatz
            .map(function (word) {
              return `
                <div class="vocabulary-row">

                  <span>
                    ${escapeHTML(word.de)}
                  </span>

                  <span>
                    ${escapeHTML(word.fr)}
                  </span>

                </div>
              `;
            })
            .join("")}

        </div>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // PRONOMEN
  // ----------------------------------------------------------

  function renderPronomen(lesson) {
    if (!lesson.pronomen || !lesson.pronomen.length) {
      return "";
    }

    return `
      <section class="content-card">

        <h2>👤 Personalpronomen</h2>

        <div class="simple-table">

          <div class="table-row table-head">
            <strong>Deutsch</strong>
            <strong>Français</strong>
          </div>

          ${lesson.pronomen
            .map(function (item) {
              return `
                <div class="table-row">
                  <span>${escapeHTML(item.person)}</span>
                  <span>${escapeHTML(item.fr)}</span>
                </div>
              `;
            })
            .join("")}

        </div>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // CONJUGAISON
  // ----------------------------------------------------------

  function renderKonjugation(lesson) {
    if (!lesson.konjugation || !lesson.konjugation.length) {
      return "";
    }

    return `
      <section class="content-card">

        <h2>🔤 Konjugation</h2>

        <div class="simple-table">

          <div class="table-row table-head">
            <strong>Person</strong>
            <strong>Verb</strong>
            <strong>Français</strong>
          </div>

          ${lesson.konjugation
            .map(function (item) {
              return `
                <div class="table-row">

                  <span>
                    ${escapeHTML(item.person)}
                  </span>

                  <strong>
                    ${escapeHTML(item.form)}
                  </strong>

                  <span>
                    ${escapeHTML(item.fr)}
                  </span>

                </div>
              `;
            })
            .join("")}

        </div>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // CATÉGORIES DE VOCABULAIRE
  // ----------------------------------------------------------

  function renderKategorien(lesson) {
    if (!lesson.kategorien || !lesson.kategorien.length) {
      return "";
    }

    return lesson.kategorien
      .map(function (category) {
        return `
          <section class="content-card">

            <h2>
              ${escapeHTML(category.name)}
            </h2>

            <div class="vocabulary-table">

              <div class="vocabulary-header">
                <strong>Deutsch 🇩🇪</strong>
                <strong>Français 🇫🇷</strong>
              </div>

              ${category.words
                .map(function (word) {
                  return `
                    <div class="vocabulary-row">
                      <span>
                        ${escapeHTML(word.de)}
                      </span>

                      <span>
                        ${escapeHTML(word.fr)}
                      </span>
                    </div>
                  `;
                })
                .join("")}

            </div>

          </section>
        `;
      })
      .join("");
  }

  // ----------------------------------------------------------
  // DIALOGUE
  // ----------------------------------------------------------

  function renderDialog(lesson) {
    if (!lesson.dialog || !lesson.dialog.length) {
      return "";
    }

    return `
      <section class="content-card">

        <h2>💬 Dialog</h2>

        <div class="dialog">

          ${lesson.dialog
            .map(function (line) {
              return `
                <div class="dialog-line">

                  <strong>
                    ${escapeHTML(line.person)}
                  </strong>

                  <span>
                    ${escapeHTML(line.text)}
                  </span>

                </div>
              `;
            })
            .join("")}

        </div>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // EXEMPLES
  // ----------------------------------------------------------

  function renderExamples(lesson) {
    if (!lesson.beispiele || !lesson.beispiele.length) {
      return "";
    }

    return `
      <section class="content-card">

        <h2>💬 Beispiele</h2>

        <div class="examples">

          ${lesson.beispiele
            .map(function (example) {

              if (typeof example === "string") {
                return `
                  <div class="example-card">
                    <strong>${escapeHTML(example)}</strong>
                  </div>
                `;
              }

              return `
                <div class="example-card">

                  <strong>
                    🇩🇪 ${escapeHTML(example.de)}
                  </strong>

                  <span>
                    🇫🇷 ${escapeHTML(example.fr)}
                  </span>

                </div>
              `;
            })
            .join("")}

        </div>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // MERKE
  // ----------------------------------------------------------

  function renderMerke(lesson) {
    if (!lesson.merke || !lesson.merke.length) {
      return "";
    }

    return `
      <section class="content-card remember-card">

        <h2>💡 Merke</h2>

        <ul>

          ${lesson.merke
            .map(function (item) {
              return `
                <li>
                  ${escapeHTML(item)}
                </li>
              `;
            })
            .join("")}

        </ul>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // BOUTON MINI TEST
  // ----------------------------------------------------------

  function renderMiniTestStart(lesson) {
    if (!lesson.miniTest || !lesson.miniTest.length) {
      return "";
    }

    return `
      <section class="test-start">

        <div>
          <span class="badge">📝 Mini-Test</span>

          <h2>Teste dein Wissen!</h2>

          <p>
            ${lesson.miniTest.length} Fragen
          </p>
        </div>

        <button
          class="primary-btn"
          id="startLessonTest"
        >
          Test starten
        </button>

      </section>
    `;
  }

  // ----------------------------------------------------------
  // MINI TEST
  // ----------------------------------------------------------

  function startLessonTest(lesson) {
    currentLesson = lesson;
    currentQuestion = 0;
    currentScore = 0;
    answered = false;

    renderQuestion();
  }

  function renderQuestion() {
    const lesson = currentLesson;

    if (!lesson || !lesson.miniTest) {
      return;
    }

    const questions = lesson.miniTest;

    if (currentQuestion >= questions.length) {
      showTestResult();
      return;
    }

    const question = questions[currentQuestion];

    const main = getMainContainer();

    main.innerHTML = `
      <section class="quiz-page">

        <button class="back-button" id="exitQuiz">
          ← Zurück zur Lektion
        </button>

        <div class="quiz-progress">

          <span>
            Frage ${currentQuestion + 1}
            / ${questions.length}
          </span>

          <div class="progress-bar">
            <div
              class="progress-fill"
              style="width:${((currentQuestion) / questions.length) * 100}%"
            ></div>
          </div>

        </div>

        <div class="quiz-card">

          <span class="badge">
            🇩🇪 A1
          </span>

          <h1>
            ${escapeHTML(question.question)}
          </h1>

          <div class="quiz-options">

            ${question.options
              .map(function (option, index) {
                return `
                  <button
                    class="quiz-option"
                    data-option="${index}"
                  >
                    ${escapeHTML(option)}
                  </button>
                `;
              })
              .join("")}

          </div>

          <div
            id="quizFeedback"
            class="quiz-feedback"
          ></div>

          <button
            id="nextQuestion"
            class="primary-btn hidden"
          >
            ${currentQuestion === questions.length - 1
              ? "Ergebnis anzeigen"
              : "Nächste Frage →"}
          </button>

        </div>

      </section>
    `;

    document
      .getElementById("exitQuiz")
      ?.addEventListener("click", function () {
        openLesson(lesson.id);
      });

    document.querySelectorAll("[data-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        answerQuestion(Number(button.dataset.option));
      });
    });

    document
      .getElementById("nextQuestion")
      ?.addEventListener("click", function () {
        currentQuestion++;
        answered = false;
        renderQuestion();
      });
  }

  // ----------------------------------------------------------
  // RÉPONSE QUESTION
  // ----------------------------------------------------------

  function answerQuestion(selectedIndex) {
    if (answered) {
      return;
    }

    answered = true;

    const question = currentLesson.miniTest[currentQuestion];

    const options = document.querySelectorAll(".quiz-option");

    options.forEach(function (button, index) {
      button.disabled = true;

      if (index === question.correct) {
        button.classList.add("correct");
      }

      if (
        index === selectedIndex &&
        selectedIndex !== question.correct
      ) {
        button.classList.add("incorrect");
      }
    });

    const feedback = document.getElementById("quizFeedback");

    if (selectedIndex === question.correct) {
      currentScore++;

      feedback.innerHTML = `
        <div class="correct-feedback">
          ✅ Richtig! Sehr gut!
        </div>
      `;
    } else {
      feedback.innerHTML = `
        <div class="incorrect-feedback">
          ❌ Nicht ganz.
          <br>
          Die richtige Antwort ist:
          <strong>
            ${escapeHTML(question.options[question.correct])}
          </strong>
        </div>
      `;
    }

    const nextButton = document.getElementById("nextQuestion");

    if (nextButton) {
      nextButton.classList.remove("hidden");
    }
  }

  // ----------------------------------------------------------
  // RÉSULTAT TEST
  // ----------------------------------------------------------

  function showTestResult() {
    const total = currentLesson.miniTest.length;

    const percentage = Math.round(
      (currentScore / total) * 100
    );

    saveTestResult(
      currentLesson.id,
      currentScore,
      total
    );

    let message = "";

    if (percentage === 100) {
      message = "Perfekt! 🎉";
    } else if (percentage >= 75) {
      message = "Sehr gut! 👏";
    } else if (percentage >= 50) {
      message = "Gut gemacht! 👍";
    } else {
      message = "Weiter üben! 💪";
    }

    const main = getMainContainer();

    main.innerHTML = `
      <section class="result-page">

        <div class="result-card">

          <span class="result-icon">🏆</span>

          <h1>${message}</h1>

          <p>
            ${escapeHTML(currentLesson.title)}
          </p>

          <div class="score">

            <strong>
              ${currentScore}/${total}
            </strong>

            <span>
              ${percentage}%
            </span>

          </div>

          <p>
            ${
              percentage >= 75
                ? "Du hast die Lektion gut verstanden."
                : "Wiederhole den Lernzettel und versuche es noch einmal."
            }
          </p>

          <div class="result-buttons">

            <button
              class="primary-btn"
              id="retryTest"
            >
              🔄 Noch einmal
            </button>

            <button
              class="secondary-btn"
              id="backToLesson"
            >
              📖 Lernzettel
            </button>

            <button
              class="secondary-btn"
              id="backToLearn"
            >
              📚 Alle Lektionen
            </button>

          </div>

        </div>

      </section>
    `;

    document
      .getElementById("retryTest")
      ?.addEventListener("click", function () {
        startLessonTest(currentLesson);
      });

    document
      .getElementById("backToLesson")
      ?.addEventListener("click", function () {
        openLesson(currentLesson.id);
      });

    document
      .getElementById("backToLearn")
      ?.addEventListener("click", showLearn);

    updateProgressDisplay();
  }

  // ----------------------------------------------------------
  // PAGE QUIZ
  // ----------------------------------------------------------

  function showQuiz() {
    const lessons =
      typeof getA1Lessons === "function"
        ? getA1Lessons()
        : A1_LESSONS;

    const lessonsWithTests = lessons.filter(function (lesson) {
      return lesson.miniTest && lesson.miniTest.length > 0;
    });

    const main = getMainContainer();

    main.innerHTML = `
      <section class="page-header">

        <button class="back-button" id="backHome">
          ← Accueil
        </button>

        <span class="badge">📝 A1</span>

        <h1>Teste ton allemand</h1>

        <p>
          Wähle une leçon et teste tes connaissances.
        </p>

      </section>

      <section class="quiz-selection">

        <div class="lesson-grid">

          ${lessonsWithTests
            .map(function (lesson) {
              return `
                <article class="lesson-card">

                  <span class="lesson-number">
                    A1.${String(lesson.number).padStart(2, "0")}
                  </span>

                  <h3>
                    ${escapeHTML(lesson.title)}
                  </h3>

                  <p>
                    ${lesson.miniTest.length} Fragen
                  </p>

                  <button
                    class="primary-btn"
                    data-quiz-lesson="${lesson.id}"
                  >
                    Test starten
                  </button>

                </article>
              `;
            })
            .join("")}

        </div>

      </section>
    `;

    document
      .getElementById("backHome")
      ?.addEventListener("click", showHome);

    document
      .querySelectorAll("[data-quiz-lesson]")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          const id = button.dataset.quizLesson;

          const lesson =
            typeof getLessonById === "function"
              ? getLessonById(id)
              : A1_LESSONS.find(function (item) {
                  return item.id === id;
                });

          if (lesson) {
            startLessonTest(lesson);
          }
        });
      });
  }

  // ----------------------------------------------------------
  // COMMUNAUTÉ
  // ----------------------------------------------------------

  function showCommunity() {
    const main = getMainContainer();

    main.innerHTML = `
      <section class="empty-page">

        <span class="big-icon">👥</span>

        <h1>Gemeinsam lernen</h1>

        <p>
          Die Community kommt in einer späteren Version.
        </p>

        <p>
          Bald kannst du Freunde hinzufügen,
          Nachrichten schreiben und XP vergleichen.
        </p>

        <button
          class="primary-btn"
          id="communityHome"
        >
          ← Accueil
        </button>

      </section>
    `;

    document
      .getElementById("communityHome")
      ?.addEventListener("click", showHome);
  }

  // ----------------------------------------------------------
  // PROFIL
  // ----------------------------------------------------------

  function showProfile() {
    const stats = getStoredStats();

    const main = getMainContainer();

    main.innerHTML = `
      <section class="profile-page">

        <button class="back-button" id="profileHome">
          ← Accueil
        </button>

        <div class="profile-header">

          <div class="avatar">
            👤
          </div>

          <h1>DeutschConnect Lernender</h1>

          <p>🇩🇪 A1</p>

        </div>

        <div class="stats-grid">

          <div class="stat-card">
            <span>⭐</span>
            <strong>${stats.xp}</strong>
            <small>XP</small>
          </div>

          <div class="stat-card">
            <span>🔥</span>
            <strong>${stats.streak}</strong>
            <small>Série</small>
          </div>

          <div class="stat-card">
            <span>📝</span>
            <strong>${stats.tests}</strong>
            <small>Tests</small>
          </div>

          <div class="stat-card">
            <span>📚</span>
            <strong>${stats.lessons}</strong>
            <small>Leçons</small>
          </div>

        </div>

      </section>
    `;

    document
      .getElementById("profileHome")
      ?.addEventListener("click", showHome);
  }

  // ----------------------------------------------------------
  // NIVEAUX PAS ENCORE DISPONIBLES
  // ----------------------------------------------------------

  function showComingSoon(level) {
    const main = getMainContainer();

    main.innerHTML = `
      <section class="empty-page">

        <span class="big-icon">🔒</span>

        <h1>Niveau ${level}</h1>

        <p>
          Dieser Bereich kommt bald.
        </p>

        <p>
          Pour le moment, DeutschConnect commence avec A1.
        </p>

        <button
          class="primary-btn"
          id="backA1"
        >
          🇩🇪 Apprendre A1
        </button>

      </section>
    `;

    document
      .getElementById("backA1")
      ?.addEventListener("click", showLearn);
  }

  // ----------------------------------------------------------
  // ERREUR
  // ----------------------------------------------------------

  function showError(message) {
    const main = getMainContainer();

    main.innerHTML = `
      <section class="empty-page">

        <span class="big-icon">⚠️</span>

        <h1>Fehler</h1>

        <p>${escapeHTML(message)}</p>

        <button
          class="primary-btn"
          id="errorHome"
        >
          ← Accueil
        </button>

      </section>
    `;

    document
      .getElementById("errorHome")
      ?.addEventListener("click", showHome);
  }

  // ----------------------------------------------------------
  // SAUVEGARDE LOCALE
  // ----------------------------------------------------------

  function getStoredStats() {
    try {
      const saved = localStorage.getItem(
        "deutschconnect_stats"
      );

      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.warn("LocalStorage nicht verfügbar.");
    }

    return {
      xp: 0,
      streak: 0,
      tests: 0,
      lessons: 0,
      completedLessons: []
    };
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(
        "deutschconnect_stats",
        JSON.stringify(stats)
      );
    } catch (error) {
      console.warn("Speichern nicht möglich.");
    }
  }

  function saveTestResult(lessonId, score, total) {
    const stats = getStoredStats();

    stats.tests++;

    stats.xp += score * 10;

    if (!stats.completedLessons.includes(lessonId)) {
      stats.completedLessons.push(lessonId);
      stats.lessons++;
    }

    saveStats(stats);
  }

  // ----------------------------------------------------------
  // PROGRESSION
  // ----------------------------------------------------------

  function updateProgressDisplay() {
    const stats = getStoredStats();

    const lessons =
      typeof getA1Lessons === "function"
        ? getA1Lessons()
        : typeof A1_LESSONS !== "undefined"
        ? A1_LESSONS
        : [];

    const total = lessons.length;

    const completed = stats.completedLessons
      ? stats.completedLessons.length
      : 0;

    const percentage =
      total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    const progress = document.getElementById("homeProgress");

    if (progress) {
      progress.textContent = percentage + "%";
    }

    const xp = document.getElementById("homeXP");

    if (xp) {
      xp.textContent = stats.xp;
    }

    const streak = document.getElementById("homeStreak");

    if (streak) {
      streak.textContent = stats.streak;
    }
  }

  // ----------------------------------------------------------
  // FORMATAGE DU TEXTE
  // ----------------------------------------------------------

  function formatText(text) {
    if (!text) {
      return "";
    }

    return escapeHTML(text)
      .trim()
      .split(/\n\s*\n/)
      .map(function (paragraph) {
        return `<p>${paragraph.replace(/\n/g, "<br>")}</p>`;
      })
      .join("");
  }

  // ----------------------------------------------------------
  // PROTECTION HTML
  // ----------------------------------------------------------

  function escapeHTML(value) {
    if (value === undefined || value === null) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

})();
