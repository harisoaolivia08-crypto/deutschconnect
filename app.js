// ============================================================
// DEUTSCHCONNECT 🇩🇪
// A1 - UNE SEULE PAGE AVEC INHALT + 11 LEÇONS
// Deutsch = explications leicht
// Deutsch → Français = vocabulaire
// ============================================================

(function () {
  "use strict";

  // ------------------------------------------------------------
  // RÉCUPÉRER LES LEÇONS
  // ------------------------------------------------------------

  function getA1Lessons() {
    if (typeof lessons !== "undefined" && Array.isArray(lessons)) {
      return lessons.filter(function (lesson) {
        return lesson.level === "A1";
      });
    }

    if (typeof a1Lessons !== "undefined" && Array.isArray(a1Lessons)) {
      return a1Lessons;
    }

    if (typeof lernzettel !== "undefined" && Array.isArray(lernzettel)) {
      return lernzettel.filter(function (lesson) {
        return lesson.level === "A1";
      });
    }

    console.error("Aucune donnée A1 trouvée dans data.js");
    return [];
  }

  // ------------------------------------------------------------
  // OUTILS
  // ------------------------------------------------------------

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
    if (!text) return "";

    return escapeHTML(text)
      .trim()
      .split(/\n\s*\n/)
      .map(function (paragraph) {
        return "<p>" + paragraph.replace(/\n/g, "<br>") + "</p>";
      })
      .join("");
  }

  function getApp() {
    return document.getElementById("app");
  }

  // ------------------------------------------------------------
  // PROGRESSION
  // ------------------------------------------------------------

  function getCompleted() {
    try {
      return JSON.parse(
        localStorage.getItem("deutschconnect_completed") || "[]"
      );
    } catch (error) {
      return [];
    }
  }

  function saveCompleted(id) {
    const completed = getCompleted();

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
      localStorage.getItem("deutschconnect_xp") || 0
    );
  }

  function addXP(amount) {
    localStorage.setItem(
      "deutschconnect_xp",
      getXP() + amount
    );
  }

  // ------------------------------------------------------------
  // NAVIGATION
  // ------------------------------------------------------------

  function accueil() {
    window.location.hash = "";
    renderHome();
  }

  function apprendre() {
    window.location.hash = "a1";
    renderA1();
  }

  // ------------------------------------------------------------
  // NAVBAR
  // ------------------------------------------------------------

  function navbar() {
    return `
      <nav class="navbar">

        <div
          class="logo"
          onclick="DeutschConnect.accueil()"
        >
          🇩🇪 DeutschConnect
        </div>

        <div class="nav-links">

          <button onclick="DeutschConnect.accueil()">
            Accueil
          </button>

          <button onclick="DeutschConnect.apprendre()">
            Apprendre
          </button>

          <button onclick="DeutschConnect.apprendre()">
            Quiz
          </button>

          <button onclick="alert('Communauté : bientôt disponible')">
            Communauté
          </button>

          <button onclick="alert('Profil : bientôt disponible')">
            Profil
          </button>

        </div>

      </nav>
    `;
  }

  // ------------------------------------------------------------
  // ACCUEIL
  // ------------------------------------------------------------

  function renderHome() {
    const app = getApp();

    if (!app) return;

    const lessons = getA1Lessons();
    const completed = getCompleted();

    const progress =
      lessons.length > 0
        ? Math.round(
            (completed.length / lessons.length) * 100
          )
        : 0;

    app.innerHTML = `

      ${navbar()}

      <main class="container">

        <section class="hero">

          <div class="hero-badge">
            🇫🇷 Français → 🇩🇪 Deutsch
          </div>

          <h1>
            Apprends l'allemand.<br>
            Chaque jour.
          </h1>

          <p>
            DeutschConnect t'aide à apprendre
            l'allemand de A1 jusqu'à C2.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.apprendre()"
          >
            Commencer
          </button>

        </section>


        <section class="progress-card">

          <h2>📊 Ta progression</h2>

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
            ${completed.length} / ${lessons.length}
            leçons terminées
          </p>

        </section>


        <section class="stats-grid">

          <div class="stat-card">
            <span>📚</span>
            <strong>${lessons.length}</strong>
            <small>Leçons A1</small>
          </div>

          <div class="stat-card">
            <span>⭐</span>
            <strong>${getXP()}</strong>
            <small>XP</small>
          </div>

          <div class="stat-card">
            <span>🔥</span>
            <strong>0</strong>
            <small>Série</small>
          </div>

        </section>


        <section class="learn-section">

          <h2>📖 Apprendre</h2>

          <p>
            Commence avec le niveau A1.
          </p>

          <div class="levels">

            <button
              class="level active"
              onclick="DeutschConnect.apprendre()"
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

  // ------------------------------------------------------------
  // PAGE A1
  // INHALT + TOUTES LES LEÇONS
  // ------------------------------------------------------------

  function renderA1() {
    const app = getApp();

    const lessons = getA1Lessons();

    if (!app) return;

    if (lessons.length === 0) {

      app.innerHTML = `

        ${navbar()}

        <main class="container">

          <section class="error-card">

            <h1>⚠️ Aucune leçon A1 trouvée</h1>

            <p>
              Vérifie que les données A1 sont bien présentes
              dans data.js.
            </p>

          </section>

        </main>

      `;

      return;
    }

    // Trier les leçons par numéro
    lessons.sort(function (a, b) {
      return Number(a.number || 0) - Number(b.number || 0);
    });


    // ----------------------------------------------------------
    // INHALT
    // ----------------------------------------------------------

    let inhaltHTML = "";

    lessons.forEach(function (lesson, index) {

      inhaltHTML += `
        <li>
          <a href="#lektion-${index + 1}">
            <span>
              ${String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              ${escapeHTML(lesson.title)}
            </strong>

            ${
              lesson.frenchTitle
                ? `
                  <small>
                    ${escapeHTML(lesson.frenchTitle)}
                  </small>
                `
                : ""
            }

          </a>
        </li>
      `;
    });


    // ----------------------------------------------------------
    // TOUTES LES LEÇONS
    // ----------------------------------------------------------

    let lessonsHTML = "";

    lessons.forEach(function (lesson, index) {

      lessonsHTML += renderOneLesson(
        lesson,
        index
      );

    });


    // ----------------------------------------------------------
    // AFFICHAGE
    // ----------------------------------------------------------

    app.innerHTML = `

      ${navbar()}

      <main class="container a1-page">

        <section class="a1-header">

          <div class="a1-badge">
            🇩🇪 NIVEAU A1
          </div>

          <h1>
            Deutsch lernen
          </h1>

          <p>
            Deutsch lernen mit einfachen Erklärungen.
          </p>

          <p>
            🇩🇪 Erklärung auf leichtem Deutsch
            <br>
            🇫🇷 Wortschatz Deutsch → Français
          </p>

        </section>


        <!-- ==================================================
             INHALT
             ================================================== -->

        <section class="inhalt-card">

          <h2>📑 Inhalt</h2>

          <p>
            Diese Themen lernst du im Niveau A1.
          </p>

          <ol class="inhalt-list">

            ${inhaltHTML}

          </ol>

        </section>


        <!-- ==================================================
             LEÇONS
             ================================================== -->

        <section class="all-lessons">

          ${lessonsHTML}

        </section>


        <!-- FIN A1 -->

        <section class="a1-finish">

          <div>
            🎉
          </div>

          <h2>
            A1 geschafft!
          </h2>

          <p>
            Sehr gut! Du hast alle A1-Themen gelernt.
          </p>

          <p>
            Der nächste Schritt ist A2.
          </p>

        </section>

      </main>

      ${footer()}
    `;
  }

  // ------------------------------------------------------------
  // UNE LEÇON
  // ------------------------------------------------------------

  function renderOneLesson(lesson, index) {

    const number =
      String(index + 1).padStart(2, "0");

    let html = `

      <article
        class="full-lesson"
        id="lektion-${index + 1}"
      >

        <div class="lesson-top">

          <div class="lesson-number-big">
            ${number}
          </div>

          <div>

            <div class="lesson-label">
              LEKTION ${index + 1}
            </div>

            <h2>
              ${escapeHTML(lesson.title)}
            </h2>

            ${
              lesson.frenchTitle
                ? `
                  <h3>
                    ${escapeHTML(lesson.frenchTitle)}
                  </h3>
                `
                : ""
            }

          </div>

        </div>


        ${
          lesson.lernziel
            ? `
              <div class="lernziel-box">

                <strong>
                  🎯 Lernziel
                </strong>

                <p>
                  ${escapeHTML(lesson.lernziel)}
                </p>

              </div>
            `
            : ""
        }


        ${
          lesson.erklaerung
            ? `
              <section class="lesson-block">

                <h3>
                  📖 Erklärung
                </h3>

                <div class="lesson-text">
                  ${formatText(lesson.erklaerung)}
                </div>

              </section>
            `
            : ""
        }


        ${
          lesson.wortschatz
            ? renderVocabulary(
                lesson.wortschatz
              )
            : ""
        }


        ${
          lesson.kategorien
            ? renderCategories(
                lesson.kategorien
              )
            : ""
        }


        ${
          lesson.pronomen
            ? renderPronomen(
                lesson.pronomen
              )
            : ""
        }


        ${
          lesson.konjugation
            ? renderKonjugation(
                lesson.konjugation
              )
            : ""
        }


        ${
          lesson.beispiele
            ? renderExamples(
                lesson.beispiele
              )
            : ""
        }


        ${
          lesson.merke
            ? renderMerke(
                lesson.merke
              )
            : ""
        }


        ${
          lesson.miniTest
            ? renderMiniTestInfo(
                lesson.miniTest,
                lesson.id
              )
            : ""
        }

      </article>

    `;

    return html;
  }

  // ------------------------------------------------------------
  // VOCABULAIRE
  // ------------------------------------------------------------

  function renderVocabulary(words) {

    if (!Array.isArray(words)) {
      return "";
    }

    return `

      <section class="lesson-block">

        <h3>
          📚 Wortschatz
        </h3>

        <div class="vocabulary-grid">

          ${words.map(function (word) {

            return `

              <div class="word-card">

                <strong>
                  ${escapeHTML(
                    word.de || word.german || ""
                  )}
                </strong>

                <span>
                  ${escapeHTML(
                    word.fr || word.french || ""
                  )}
                </span>

              </div>

            `;

          }).join("")}

        </div>

      </section>

    `;
  }

  // ------------------------------------------------------------
  // CATÉGORIES
  // ------------------------------------------------------------

  function renderCategories(categories) {

    if (!Array.isArray(categories)) {
      return "";
    }

    return `

      <section class="lesson-block">

        <h3>
          📚 Wortschatz
        </h3>

        ${categories.map(function (category) {

          return `

            <div class="category-card">

              <h4>
                ${escapeHTML(
                  category.name || ""
                )}
              </h4>

              ${
                Array.isArray(category.words)
                  ? `
                    <div class="vocabulary-grid">

                      ${category.words.map(function (word) {

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

                      }).join("")}

                    </div>
                  `
                  : ""
              }

            </div>

          `;

        }).join("")}

      </section>

    `;
  }

  // ------------------------------------------------------------
  // PRONOMS
  // ------------------------------------------------------------

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
                <th>Deutsch</th>
                <th>Français</th>
              </tr>

            </thead>

            <tbody>

              ${rows.map(function (row) {

                return `

                  <tr>

                    <td>
                      <strong>
                        ${escapeHTML(
                          row.person || row.de || ""
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

              }).join("")}

            </tbody>

          </table>

        </div>

      </section>

    `;
  }

  // ------------------------------------------------------------
  // CONJUGAISON
  // ------------------------------------------------------------

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
                <th>Person</th>
                <th>Deutsch</th>
                <th>Français</th>
              </tr>

            </thead>

            <tbody>

              ${rows.map(function (row) {

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
                          row.form || row.de || ""
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

              }).join("")}

            </tbody>

          </table>

        </div>

      </section>

    `;
  }

  // ------------------------------------------------------------
  // EXEMPLES
  // ------------------------------------------------------------

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

          ${examples.map(function (example) {

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

          }).join("")}

        </div>

      </section>

    `;
  }

  // ------------------------------------------------------------
  // MERKE
  // ------------------------------------------------------------

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

          ${items.map(function (item) {

            return `
              <li>
                ${escapeHTML(item)}
              </li>
            `;

          }).join("")}

        </ul>

      </section>

    `;
  }

  // ------------------------------------------------------------
  // MINI TEST
  // ------------------------------------------------------------

  function renderMiniTestInfo(questions, lessonId) {

    if (!Array.isArray(questions) || questions.length === 0) {
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
          onclick="DeutschConnect.startTest('${lessonId}')"
        >
          Mini-Test starten
        </button>

      </section>

    `;
  }

  // ------------------------------------------------------------
  // MINI TEST
  // ------------------------------------------------------------

  let testLesson = null;
  let testQuestions = [];
  let testIndex = 0;
  let testScore = 0;


  function startTest(lessonId) {

    const lessons = getA1Lessons();

    testLesson = lessons.find(function (lesson) {
      return lesson.id === lessonId;
    });

    if (
      !testLesson ||
      !Array.isArray(testLesson.miniTest)
    ) {
      alert(
        "Dieser Mini-Test ist noch nicht verfügbar."
      );

      return;
    }

    testQuestions = testLesson.miniTest;
    testIndex = 0;
    testScore = 0;

    showQuestion();
  }


  function showQuestion() {

    const app = getApp();

    if (testIndex >= testQuestions.length) {
      finishTest();
      return;
    }

    const question =
      testQuestions[testIndex];


    app.innerHTML = `

      ${navbar()}

      <main class="container quiz-page">

        <section class="quiz-container">

          <div class="quiz-progress">

            Frage
            ${testIndex + 1}
            /
            ${testQuestions.length}

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill"
              style="
                width:${
                  (testIndex /
                    testQuestions.length) *
                  100
                }%
              "
            ></div>

          </div>

          <h1>
            ${escapeHTML(
              question.question || ""
            )}
          </h1>

          <div class="quiz-options">

            ${
              Array.isArray(question.options)
                ? question.options.map(
                    function (option, index) {

                      return `

                        <button
                          class="quiz-option"
                          onclick="DeutschConnect.answer(${index})"
                        >
                          ${escapeHTML(option)}
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


  function answer(answerIndex) {

    const question =
      testQuestions[testIndex];

    const buttons =
      document.querySelectorAll(
        ".quiz-option"
      );

    buttons.forEach(function (button) {
      button.disabled = true;
    });


    if (
      answerIndex ===
      Number(question.correct)
    ) {

      testScore++;

      if (buttons[answerIndex]) {
        buttons[
          answerIndex
        ].classList.add("correct");
      }

    } else {

      if (buttons[answerIndex]) {
        buttons[
          answerIndex
        ].classList.add("wrong");
      }

      if (
        buttons[question.correct]
      ) {
        buttons[
          question.correct
        ].classList.add("correct");
      }

    }


    setTimeout(function () {

      testIndex++;

      showQuestion();

    }, 800);
  }


  function finishTest() {

    const total =
      testQuestions.length;

    const percent =
      Math.round(
        (testScore / total) * 100
      );


    if (percent >= 60) {

      saveCompleted(
        testLesson.id
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

          <div class="result-score">
            ${testScore} / ${total}
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
                  Versuche den Test noch einmal.
                </p>
              `
          }

          <button
            class="primary-btn"
            onclick="DeutschConnect.apprendre()"
          >
            Zurück zu A1
          </button>

        </section>

      </main>

      ${footer()}
    `;
  }

  // ------------------------------------------------------------
  // FOOTER
  // ------------------------------------------------------------

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

  // ------------------------------------------------------------
  // ROUTEUR
  // ------------------------------------------------------------

  function router() {

    const hash =
      window.location.hash
        .replace("#", "")
        .trim();

    if (
      hash === "a1" ||
      hash === "learn"
    ) {

      renderA1();

    } else {

      renderHome();

    }
  }

  // ------------------------------------------------------------
  // FONCTIONS PUBLIQUES
  // ------------------------------------------------------------

  window.DeutschConnect = {

    accueil: accueil,

    apprendre: apprendre,

    startTest: startTest,

    answer: answer

  };


  // ------------------------------------------------------------
  // DÉMARRAGE
  // ------------------------------------------------------------

  window.addEventListener(
    "hashchange",
    router
  );

  document.addEventListener(
    "DOMContentLoaded",
    router
  );

})();
