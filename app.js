// ============================================================
// DEUTSCHCONNECT 🇩🇪
// APP.JS
// Compatible avec data.js contenant A1_LESSONS
// ============================================================

(function () {
  "use strict";

  // ==========================================================
  // DONNÉES
  // ==========================================================

  function getLessons() {
    if (
      typeof A1_LESSONS !== "undefined" &&
      Array.isArray(A1_LESSONS)
    ) {
      return A1_LESSONS;
    }

    console.error("A1_LESSONS n'existe pas dans data.js");
    return [];
  }


  // ==========================================================
  // OUTILS
  // ==========================================================

  function escapeHTML(text) {
    if (text === undefined || text === null) {
      return "";
    }

    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function formatText(text) {
    if (!text) {
      return "";
    }

    return escapeHTML(text)
      .trim()
      .split(/\n\s*\n/)
      .map(function (paragraph) {
        return "<p>" +
          paragraph.replace(/\n/g, "<br>") +
          "</p>";
      })
      .join("");
  }


  function getApp() {
    return document.getElementById("app");
  }


  // ==========================================================
  // PROGRESSION
  // ==========================================================

  function getCompletedLessons() {

    try {

      return JSON.parse(
        localStorage.getItem(
          "deutschconnect_completed"
        ) || "[]"
      );

    } catch (error) {

      return [];

    }
  }


  function saveCompletedLesson(id) {

    const completed =
      getCompletedLessons();

    if (!completed.includes(id)) {

      completed.push(id);

      localStorage.setItem(
        "deutschconnect_completed",
        JSON.stringify(completed)
      );

    }
  }


  function getXP() {

    return Number(
      localStorage.getItem(
        "deutschconnect_xp"
      ) || 0
    );

  }


  function addXP(amount) {

    localStorage.setItem(
      "deutschconnect_xp",
      getXP() + amount
    );

  }


  function getProgress() {

    const lessons = getLessons();

    const completed =
      getCompletedLessons();

    if (lessons.length === 0) {
      return 0;
    }

    return Math.round(
      (completed.length / lessons.length) * 100
    );

  }


  // ==========================================================
  // NAVIGATION
  // ==========================================================

  function showPage(page) {

    if (page === "home") {

      window.location.hash = "home";

      renderHome();

      return;
    }


    if (page === "learn") {

      window.location.hash = "a1";

      renderA1();

      return;
    }


    if (page === "quiz") {

      window.location.hash = "quiz";

      renderQuiz();

      return;
    }


    if (page === "community") {

      window.location.hash = "community";

      renderCommunity();

      return;
    }


    if (page === "profile") {

      window.location.hash = "profile";

      renderProfile();

      return;
    }

  }


  // ==========================================================
  // NAVBAR
  // ==========================================================

  function navbar() {

    return `

      <header class="navbar">

        <div
          class="logo"
          onclick="DeutschConnect.showPage('home')"
        >
          🇩🇪 DeutschConnect
        </div>


        <nav class="nav-links">

          <button
            onclick="DeutschConnect.showPage('home')"
          >
            Accueil
          </button>

          <button
            onclick="DeutschConnect.showPage('learn')"
          >
            Apprendre
          </button>

          <button
            onclick="DeutschConnect.showPage('quiz')"
          >
            Quiz
          </button>

          <button
            onclick="DeutschConnect.showPage('community')"
          >
            Communauté
          </button>

          <button
            onclick="DeutschConnect.showPage('profile')"
          >
            Profil
          </button>

        </nav>


        <button
          class="login-btn"
          onclick="DeutschConnect.login()"
        >
          Connexion
        </button>

      </header>

    `;
  }


  // ==========================================================
  // FOOTER
  // ==========================================================

  function footer() {

    return `

      <footer class="footer">

        <strong>
          DeutschConnect 🇩🇪
        </strong>

        <p>
          Français 🇫🇷 · Deutsch 🇩🇪
        </p>

        <p>
          A1 → A2 → B1 → B2 → C1 → C2
        </p>

      </footer>

    `;
  }


  // ==========================================================
  // ACCUEIL
  // ==========================================================

  function renderHome() {

    const app = getApp();

    if (!app) {
      return;
    }

    const lessons = getLessons();

    const completed =
      getCompletedLessons();

    const progress =
      getProgress();


    app.innerHTML = `

      ${navbar()}

      <main class="container">


        <!-- HERO -->

        <section class="hero">

          <div class="hero-badge">
            🇫🇷 Français → 🇩🇪 Deutsch
          </div>


          <h1>
            Apprends l'allemand.
            <br>
            <span>Chaque jour.</span>
          </h1>


          <p>
            DeutschConnect t'aide à apprendre
            l'allemand de A1 jusqu'à C2 avec
            des cours simples, des exemples
            et des mini-tests.
          </p>


          <button
            class="primary-btn"
            onclick="DeutschConnect.showPage('learn')"
          >
            Commencer
          </button>

        </section>


        <!-- PROGRESSION -->

        <section class="progress-card">

          <h2>
            📊 Ta progression
          </h2>


          <div class="progress-number">
            ${progress}%
          </div>


          <div class="progress-bar">

            <div
              class="progress-fill"
              style="width:${progress}%"
            ></div>

          </div>


          <p>
            ${completed.length}
            /
            ${lessons.length}
            leçons terminées
          </p>

        </section>


        <!-- STATISTIQUES -->

        <section class="stats-grid">

          <div class="stat-card">

            <span>📚</span>

            <strong>
              ${lessons.length}
            </strong>

            <small>
              Leçons A1
            </small>

          </div>


          <div class="stat-card">

            <span>⭐</span>

            <strong>
              ${getXP()}
            </strong>

            <small>
              XP
            </small>

          </div>


          <div class="stat-card">

            <span>🔥</span>

            <strong>
              0
            </strong>

            <small>
              Série
            </small>

          </div>

        </section>


        <!-- APPRENDRE -->

        <section class="learn-section">

          <h2>
            📖 Apprendre
          </h2>

          <p>
            Commence avec le niveau A1.
          </p>


          <div class="levels">

            <button
              class="level active"
              onclick="DeutschConnect.showPage('learn')"
            >
              A1
            </button>


            <button class="level locked">
              A2 🔒
            </button>


            <button class="level locked">
              B1 🔒
            </button>


            <button class="level locked">
              B2 🔒
            </button>


            <button class="level locked">
              C1 🔒
            </button>


            <button class="level locked">
              C2 🔒
            </button>

          </div>

        </section>

      </main>

      ${footer()}

    `;

  }


  // ==========================================================
  // PAGE A1
  // INHALT + TOUTES LES LEÇONS
  // ==========================================================

  function renderA1() {

    const app = getApp();

    if (!app) {
      return;
    }


    const lessons =
      getLessons().slice().sort(
        function (a, b) {

          return Number(a.number || 0) -
                 Number(b.number || 0);

        }
      );


    if (lessons.length === 0) {

      app.innerHTML = `

        ${navbar()}

        <main class="container">

          <section class="error-card">

            <h1>
              ⚠️ Aucune leçon A1
            </h1>

            <p>
              Vérifie ton fichier data.js.
            </p>

          </section>

        </main>

        ${footer()}

      `;

      return;
    }


    // ========================================================
    // INHALT
    // ========================================================

    let inhaltHTML = "";


    lessons.forEach(
      function (lesson, index) {

        inhaltHTML += `

          <li>

            <a href="#lektion-${index + 1}">

              <span class="inhalt-number">
                ${index + 1}
              </span>


              <div>

                <strong>
                  ${escapeHTML(
                    lesson.title
                  )}
                </strong>


                ${
                  lesson.frenchTitle
                    ? `
                      <small>
                        ${escapeHTML(
                          lesson.frenchTitle
                        )}
                      </small>
                    `
                    : ""
                }

              </div>

            </a>

          </li>

        `;

      }
    );


    // ========================================================
    // LEÇONS
    // ========================================================

    let lessonsHTML = "";


    lessons.forEach(
      function (lesson, index) {

        lessonsHTML +=
          renderLesson(
            lesson,
            index
          );

      }
    );


    // ========================================================
    // AFFICHAGE
    // ========================================================

    app.innerHTML = `

      ${navbar()}


      <main class="container a1-page">


        <!-- TITRE A1 -->

        <section class="a1-header">

          <div class="a1-badge">
            🇩🇪 NIVEAU A1
          </div>


          <h1>
            Deutsch lernen
          </h1>


          <p>
            Apprends les bases de l'allemand
            avec des explications simples.
          </p>


          <div class="language-info">

            🇩🇪 Erklärung:
            leichtes Deutsch

            <br>

            🇫🇷 Wortschatz:
            Deutsch → Français

          </div>

        </section>


        <!-- =================================================
             INHALT
             ================================================= -->

        <section class="inhalt-card">

          <h2>
            📑 Inhalt
          </h2>


          <p>
            Voici les thèmes du niveau A1.
          </p>


          <ol class="inhalt-list">

            ${inhaltHTML}

          </ol>

        </section>


        <!-- =================================================
             LES LEÇONS
             ================================================= -->

        <section class="all-lessons">

          ${lessonsHTML}

        </section>


        <!-- FIN A1 -->

        <section class="a1-finish">

          <div class="finish-icon">
            🎉
          </div>


          <h2>
            A1 geschafft!
          </h2>


          <p>
            Sehr gut!
            Du hast alle A1-Themen gelernt.
          </p>


          <button
            class="primary-btn"
            onclick="DeutschConnect.showPage('home')"
          >
            Zurück zur Startseite
          </button>

        </section>

      </main>


      ${footer()}

    `;

  }


  // ==========================================================
  // UNE LEÇON
  // ==========================================================

  function renderLesson(
    lesson,
    index
  ) {

    const number =
      index + 1;


    let html = `

      <article
        class="full-lesson"
        id="lektion-${number}"
      >


        <!-- TITRE -->

        <div class="lesson-top">

          <div class="lesson-number-big">
            ${number}
          </div>


          <div class="lesson-title-area">

            <div class="lesson-label">
              LEKTION ${number}
            </div>


            <h2>
              ${escapeHTML(
                lesson.title
              )}
            </h2>


            ${
              lesson.frenchTitle
                ? `
                  <h3>
                    ${escapeHTML(
                      lesson.frenchTitle
                    )}
                  </h3>
                `
                : ""
            }

          </div>

        </div>


        <!-- LERNZIEL -->

        ${
          lesson.lernziel
            ? `

              <div class="lernziel-box">

                <strong>
                  🎯 Ziel
                </strong>

                <p>
                  ${escapeHTML(
                    lesson.lernziel
                  )}
                </p>

              </div>

            `
            : ""
        }


        <!-- ERKLÄRUNG -->

        ${
          lesson.erklaerung
            ? `

              <section class="lesson-block">

                <h3>
                  📖 Erklärung
                </h3>


                <div class="lesson-text">

                  ${formatText(
                    lesson.erklaerung
                  )}

                </div>

              </section>

            `
            : ""
        }


        <!-- WORTSCHATZ -->

        ${
          lesson.wortschatz
            ? renderVocabulary(
                lesson.wortschatz
              )
            : ""
        }


        <!-- KATEGORIEN -->

        ${
          lesson.kategorien
            ? renderCategories(
                lesson.kategorien
              )
            : ""
        }


        <!-- PRONOMEN -->

        ${
          lesson.pronomen
            ? renderPronomen(
                lesson.pronomen
              )
            : ""
        }


        <!-- KONJUGATION -->

        ${
          lesson.konjugation
            ? renderKonjugation(
                lesson.konjugation
              )
            : ""
        }


        <!-- BEISPIELE -->

        ${
          lesson.beispiele
            ? renderExamples(
                lesson.beispiele
              )
            : ""
        }


        <!-- MERKE -->

        ${
          lesson.merke
            ? renderMerke(
                lesson.merke
              )
            : ""
        }


        <!-- MINI TEST -->

        ${
          lesson.miniTest
            ? renderMiniTestButton(
                lesson
              )
            : ""
        }


      </article>

    `;


    return html;

  }


  // ==========================================================
  // WORTSCHATZ
  // ==========================================================

  function renderVocabulary(words) {

    if (!Array.isArray(words)) {
      return "";
    }


    return `

      <section class="lesson-block">

        <h3>
          📚 Wortschatz
        </h3>


        <p class="section-description">
          Deutsch → Français
        </p>


        <div class="vocabulary-grid">

          ${
            words.map(
              function (word) {

                return `

                  <div class="word-card">

                    <strong>
                      ${escapeHTML(
                        word.de ||
                        word.german ||
                        ""
                      )}
                    </strong>


                    <span>
                      ${escapeHTML(
                        word.fr ||
                        word.french ||
                        ""
                      )}
                    </span>

                  </div>

                `;

              }
            ).join("")
          }

        </div>

      </section>

    `;

  }


  // ==========================================================
  // CATÉGORIES
  // ==========================================================

  function renderCategories(categories) {

    if (!Array.isArray(categories)) {
      return "";
    }


    return `

      <section class="lesson-block">

        <h3>
          📚 Wortschatz
        </h3>


        <p class="section-description">
          Deutsch → Français
        </p>


        ${
          categories.map(
            function (category) {

              return `

                <div class="category-card">

                  <h4>
                    ${escapeHTML(
                      category.name || ""
                    )}
                  </h4>


                  ${
                    Array.isArray(
                      category.words
                    )
                      ? `

                        <div class="vocabulary-grid">

                          ${
                            category.words.map(
                              function (word) {

                                return `

                                  <div class="word-card">

                                    <strong>
                                      ${escapeHTML(
                                        word.de || ""
                                      )}
                                    </strong>

                                    <span>
                                      ${escapeHTML(
                                        word.fr || ""
                                      )}
                                    </span>

                                  </div>

                                `;

                              }
                            ).join("")
                          }

                        </div>

                      `
                      : ""
                  }

                </div>

              `;

            }
          ).join("")
        }

      </section>

    `;

  }


  // ==========================================================
  // PRONOMEN
  // ==========================================================

  function renderPronomen(rows) {

    if (!Array.isArray(rows)) {
      return "";
    }


    return `

      <section class="lesson-block">

        <h3>
          👤 Personalpronomen
        </h3>


        <div class="table-wrapper">

          <table class="lesson-table">

            <thead>

              <tr>

                <th>
                  Deutsch
                </th>

                <th>
                  Français
                </th>

              </tr>

            </thead>


            <tbody>

              ${
                rows.map(
                  function (row) {

                    return `

                      <tr>

                        <td>
                          <strong>
                            ${escapeHTML(
                              row.person ||
                              row.de ||
                              ""
                            )}
                          </strong>
                        </td>


                        <td>
                          ${escapeHTML(
                            row.fr || ""
                          )}
                        </td>

                      </tr>

                    `;

                  }
                ).join("")
              }

            </tbody>

          </table>

        </div>

      </section>

    `;

  }


  // ==========================================================
  // KONJUGATION
  // ==========================================================

  function renderKonjugation(rows) {

    if (!Array.isArray(rows)) {
      return "";
    }


    return `

      <section class="lesson-block">

        <h3>
          🔤 Konjugation
        </h3>


        <div class="table-wrapper">

          <table class="lesson-table">

            <thead>

              <tr>

                <th>
                  Person
                </th>

                <th>
                  Deutsch
                </th>

                <th>
                  Français
                </th>

              </tr>

            </thead>


            <tbody>

              ${
                rows.map(
                  function (row) {

                    return `

                      <tr>

                        <td>
                          ${escapeHTML(
                            row.person || ""
                          )}
                        </td>


                        <td>

                          <strong>
                            ${escapeHTML(
                              row.form ||
                              row.de ||
                              ""
                            )}
                          </strong>

                        </td>


                        <td>
                          ${escapeHTML(
                            row.fr || ""
                          )}
                        </td>

                      </tr>

                    `;

                  }
                ).join("")
              }

            </tbody>

          </table>

        </div>

      </section>

    `;

  }


  // ==========================================================
  // EXEMPLES
  // ==========================================================

  function renderExamples(examples) {

    if (!Array.isArray(examples)) {
      return "";
    }


    return `

      <section class="lesson-block">

        <h3>
          💬 Beispiele
        </h3>


        <div class="examples">

          ${
            examples.map(
              function (example) {

                return `

                  <div class="example-card">

                    <div class="example-de">

                      🇩🇪

                      ${escapeHTML(
                        example.de || ""
                      )}

                    </div>


                    <div class="example-fr">

                      🇫🇷

                      ${escapeHTML(
                        example.fr || ""
                      )}

                    </div>

                  </div>

                `;

              }
            ).join("")
          }

        </div>

      </section>

    `;

  }


  // ==========================================================
  // MERKE
  // ==========================================================

  function renderMerke(items) {

    if (!Array.isArray(items)) {
      return "";
    }


    return `

      <section class="lesson-block merke">

        <h3>
          💡 Merke
        </h3>


        <ul>

          ${
            items.map(
              function (item) {

                return `

                  <li>
                    ${escapeHTML(item)}
                  </li>

                `;

              }
            ).join("")
          }

        </ul>

      </section>

    `;

  }


  // ==========================================================
  // BOUTON MINI TEST
  // ==========================================================

  function renderMiniTestButton(lesson) {

    if (
      !Array.isArray(
        lesson.miniTest
      ) ||
      lesson.miniTest.length === 0
    ) {

      return "";

    }


    return `

      <section class="lesson-test">

        <h3>
          📝 Mini-Test
        </h3>


        <p>
          Teste dein Wissen über diese Lektion.
        </p>


        <button
          class="primary-btn"
          onclick="
            DeutschConnect.startTest(
              '${escapeHTML(lesson.id)}'
            )
          "
        >
          Mini-Test starten
        </button>

      </section>

    `;

  }


  // ==========================================================
  // QUIZ GLOBAL
  // ==========================================================

  function renderQuiz() {

    const app = getApp();

    if (!app) {
      return;
    }


    const lessons = getLessons();


    let questions = [];


    lessons.forEach(
      function (lesson) {

        if (
          Array.isArray(
            lesson.miniTest
          )
        ) {

          lesson.miniTest.forEach(
            function (question) {

              questions.push(
                question
              );

            }
          );

        }

      }
    );


    app.innerHTML = `

      ${navbar()}

      <main class="container">


        <section class="section-title">

          <span>
            QUIZ
          </span>


          <h1>
            📝 Teste ton allemand
          </h1>


          <p>
            Fais les petits tests des leçons A1.
          </p>

        </section>


        <section class="quiz-menu-card">

          <h2>
            🇩🇪 Quiz A1
          </h2>


          <p>
            ${questions.length}
            questions disponibles.
          </p>


          <button
            class="primary-btn"
            onclick="
              DeutschConnect.startRandomQuiz()
            "
          >
            Commencer
          </button>

        </section>

      </main>


      ${footer()}

    `;

  }


  // ==========================================================
  // QUIZ ALÉATOIRE
  // ==========================================================

  let globalQuestions = [];

  let globalQuestionIndex = 0;

  let globalScore = 0;


  function startRandomQuiz() {

    const lessons = getLessons();

    globalQuestions = [];


    lessons.forEach(
      function (lesson) {

        if (
          Array.isArray(
            lesson.miniTest
          )
        ) {

          lesson.miniTest.forEach(
            function (question) {

              globalQuestions.push(
                question
              );

            }
          );

        }

      }
    );


    if (
      globalQuestions.length === 0
    ) {

      alert(
        "Aucune question disponible."
      );

      return;

    }


    globalQuestionIndex = 0;

    globalScore = 0;

    showGlobalQuestion();

  }


  function showGlobalQuestion() {

    const app = getApp();

    const question =
      globalQuestions[
        globalQuestionIndex
      ];


    if (!question) {

      finishGlobalQuiz();

      return;

    }


    app.innerHTML = `

      ${navbar()}

      <main class="container quiz-page">

        <section class="quiz-container">


          <div class="quiz-progress">

            Question
            ${globalQuestionIndex + 1}
            /
            ${globalQuestions.length}

          </div>


          <div class="progress-bar">

            <div
              class="progress-fill"
              style="
                width:${
                  (
                    globalQuestionIndex /
                    globalQuestions.length
                  ) * 100
                }%
              "
            ></div>

          </div>


          <h1>
            ${escapeHTML(
              question.question
            )}
          </h1>


          <div class="quiz-options">

            ${
              Array.isArray(
                question.options
              )
                ? question.options.map(
                    function (
                      option,
                      index
                    ) {

                      return `

                        <button
                          class="quiz-option"
                          onclick="
                            DeutschConnect.answerGlobal(
                              ${index}
                            )
                          "
                        >
                          ${escapeHTML(
                            option
                          )}
                        </button>

                      `;

                    }
                  ).join("")
                : ""
            }

          </div>

        </section>

      </main>

    `;

  }


  function answerGlobal(
    answerIndex
  ) {

    const question =
      globalQuestions[
        globalQuestionIndex
      ];


    const buttons =
      document.querySelectorAll(
        ".quiz-option"
      );


    buttons.forEach(
      function (button) {

        button.disabled = true;

      }
    );


    if (
      answerIndex ===
      Number(question.correct)
    ) {

      globalScore++;


      if (buttons[answerIndex]) {

        buttons[
          answerIndex
        ].classList.add(
          "correct"
        );

      }

    } else {

      if (buttons[answerIndex]) {

        buttons[
          answerIndex
        ].classList.add(
          "wrong"
        );

      }


      if (
        buttons[question.correct]
      ) {

        buttons[
          question.correct
        ].classList.add(
          "correct"
        );

      }

    }


    setTimeout(
      function () {

        globalQuestionIndex++;

        showGlobalQuestion();

      },
      800
    );

  }


  function finishGlobalQuiz() {

    const total =
      globalQuestions.length;


    const percent =
      Math.round(
        (globalScore / total) *
        100
      );


    if (percent >= 60) {

      addXP(10);

    }


    const app = getApp();


    app.innerHTML = `

      ${navbar()}


      <main class="container">

        <section class="result-card">

          <div class="result-icon">

            ${
              percent >= 60
                ? "🎉"
                : "📚"
            }

          </div>


          <h1>

            ${
              percent >= 60
                ? "Sehr gut!"
                : "Weiter üben!"
            }

          </h1>


          <div class="result-score">

            ${globalScore}
            /
            ${total}

          </div>


          <p>
            ${percent}% richtig
          </p>


          ${
            percent >= 60
              ? `
                <p>
                  ⭐ +10 XP
                </p>
              `
              : `
                <p>
                  Versuche es noch einmal.
                </p>
              `
          }


          <button
            class="primary-btn"
            onclick="
              DeutschConnect.showPage('quiz')
            "
          >
            Zurück zum Quiz
          </button>

        </section>

      </main>


      ${footer()}

    `;

  }


  // ==========================================================
  // MINI TEST D'UNE LEÇON
  // ==========================================================

  let currentLesson = null;

  let currentQuestions = [];

  let currentQuestionIndex = 0;

  let currentScore = 0;


  function startTest(
    lessonId
  ) {

    const lesson =
      getLessons().find(
        function (item) {

          return item.id === lessonId;

        }
      );


    if (!lesson) {

      alert(
        "Leçon introuvable."
      );

      return;

    }


    if (
      !Array.isArray(
        lesson.miniTest
      )
    ) {

      alert(
        "Ce test n'est pas disponible."
      );

      return;

    }


    currentLesson = lesson;

    currentQuestions =
      lesson.miniTest;

    currentQuestionIndex = 0;

    currentScore = 0;


    showLessonQuestion();

  }


  function showLessonQuestion() {

    const app = getApp();


    if (
      currentQuestionIndex >=
      currentQuestions.length
    ) {

      finishLessonTest();

      return;

    }


    const question =
      currentQuestions[
        currentQuestionIndex
      ];


    app.innerHTML = `

      ${navbar()}


      <main class="container quiz-page">


        <section class="quiz-container">


          <div class="quiz-progress">

            ${escapeHTML(
              currentLesson.title
            )}

            <br>

            Question
            ${currentQuestionIndex + 1}
            /
            ${currentQuestions.length}

          </div>


          <div class="progress-bar">

            <div
              class="progress-fill"
              style="
                width:${
                  (
                    currentQuestionIndex /
                    currentQuestions.length
                  ) * 100
                }%
              "
            ></div>

          </div>


          <h1>
            ${escapeHTML(
              question.question
            )}
          </h1>


          <div class="quiz-options">

            ${
              question.options.map(
                function (
                  option,
                  index
                ) {

                  return `

                    <button
                      class="quiz-option"
                      onclick="
                        DeutschConnect.answerLesson(
                          ${index}
                        )
                      "
                    >
                      ${escapeHTML(
                        option
                      )}
                    </button>

                  `;

                }
              ).join("")
            }

          </div>

        </section>

      </main>

    `;

  }


  function answerLesson(
    answerIndex
  ) {

    const question =
      currentQuestions[
        currentQuestionIndex
      ];


    const buttons =
      document.querySelectorAll(
        ".quiz-option"
      );


    buttons.forEach(
      function (button) {

        button.disabled = true;

      }
    );


    if (
      answerIndex ===
      Number(question.correct)
    ) {

      currentScore++;


      if (buttons[answerIndex]) {

        buttons[
          answerIndex
        ].classList.add(
          "correct"
        );

      }

    } else {

      if (buttons[answerIndex]) {

        buttons[
          answerIndex
        ].classList.add(
          "wrong"
        );

      }


      if (
        buttons[question.correct]
      ) {

        buttons[
          question.correct
        ].classList.add(
          "correct"
        );

      }

    }


    setTimeout(
      function () {

        currentQuestionIndex++;

        showLessonQuestion();

      },
      800
    );

  }


  function finishLessonTest() {

    const total =
      currentQuestions.length;


    const percent =
      Math.round(
        (currentScore / total) *
        100
      );


    if (
      percent >= 60
    ) {

      saveCompletedLesson(
        currentLesson.id
      );

      addXP(10);

    }


    const app = getApp();


    app.innerHTML = `

      ${navbar()}


      <main class="container">

        <section class="result-card">

          <div class="result-icon">

            ${
              percent >= 60
                ? "🎉"
                : "📚"
            }

          </div>


          <h1>

            ${
              percent >= 60
                ? "Sehr gut!"
                : "Weiter üben!"
            }

          </h1>


          <h2>
            ${escapeHTML(
              currentLesson.title
            )}
          </h2>


          <div class="result-score">

            ${currentScore}
            /
            ${total}

          </div>


          <p>
            ${percent}% richtig
          </p>


          ${
            percent >= 60
              ? `
                <p>
                  ⭐ +10 XP
                </p>
              `
              : `
                <p>
                  Du kannst den Test
                  noch einmal machen.
                </p>
              `
          }


          <button
            class="primary-btn"
            onclick="
              DeutschConnect.showPage('learn')
            "
          >
            Zurück aux leçons
          </button>

        </section>

      </main>


      ${footer()}

    `;

  }


  // ==========================================================
  // COMMUNAUTÉ
  // ==========================================================

  function renderCommunity() {

    const app = getApp();

    if (!app) {
      return;
    }


    app.innerHTML = `

      ${navbar()}


      <main class="container">


        <section class="section-title">

          <span>
            COMMUNAUTÉ
          </span>


          <h1>
            👥 Apprendre ensemble
          </h1>


          <p>
            Cette partie sera bientôt disponible.
          </p>

        </section>


        <section class="community-grid">

          <article>

            👥

            <h3>
              Amis
            </h3>

            <p>
              Ajoute d'autres apprenants.
            </p>

          </article>


          <article>

            💬

            <h3>
              Messages
            </h3>

            <p>
              Discute avec d'autres apprenants.
            </p>

          </article>


          <article>

            🏆

            <h3>
              Classement
            </h3>

            <p>
              Compare tes XP.
            </p>

          </article>


          <article>

            🎯

            <h3>
              Défis
            </h3>

            <p>
              Relève des défis.
            </p>

          </article>

        </section>

      </main>


      ${footer()}

    `;

  }


  // ==========================================================
  // PROFIL
  // ==========================================================

  function renderProfile() {

    const app = getApp();

    if (!app) {
      return;
    }


    const progress =
      getProgress();


    app.innerHTML = `

      ${navbar()}


      <main class="container">


        <section class="profile-card">

          <div class="avatar">
            👤
          </div>


          <h1>
            Mon profil
          </h1>


          <p>
            Apprenant DeutschConnect
          </p>


          <div class="profile-stats">


            <div>

              <strong>
                ${getXP()}
              </strong>

              <span>
                XP
              </span>

            </div>


            <div>

              <strong>
                ${progress}%
              </strong>

              <span>
                Progression
              </span>

            </div>


            <div>

              <strong>
                A1
              </strong>

              <span>
                Niveau
              </span>

            </div>


          </div>

        </section>

      </main>


      ${footer()}

    `;

  }


  // ==========================================================
  // CONNEXION
  // ==========================================================

  function login() {

    alert(
      "La connexion sera disponible prochainement."
    );

  }


  // ==========================================================
  // ROUTEUR
  // ==========================================================

  function router() {

    const hash =
      window.location.hash
        .replace("#", "")
        .trim();


    switch (hash) {

      case "a1":
      case "learn":

        renderA1();

        break;


      case "quiz":

        renderQuiz();

        break;


      case "community":

        renderCommunity();

        break;


      case "profile":

        renderProfile();

        break;


      case "home":
      case "":

      default:

        renderHome();

        break;

    }

  }


  // ==========================================================
  // FONCTIONS PUBLIQUES
  // ==========================================================

  window.DeutschConnect = {

    showPage: showPage,

    accueil: function () {
      showPage("home");
    },

    apprendre: function () {
      showPage("learn");
    },

    login: login,

    startTest: startTest,

    answerLesson: answerLesson,

    startRandomQuiz: startRandomQuiz,

    answerGlobal: answerGlobal

  };


  // ==========================================================
  // DÉMARRAGE
  // ==========================================================

  window.addEventListener(
    "hashchange",
    router
  );


  document.addEventListener(
    "DOMContentLoaded",
    router
  );

})();
