// ============================================================
// DEUTSCHCONNECT 🇩🇪
// APP.JS
// A1 - 11 LEÇONS
// Deutsch : Erklärung in leichtem Deutsch
// Deutsch → Français : Wortschatz
// ============================================================

(function () {

  "use strict";


  // ==========================================================
  // VÉRIFICATION DATA.JS
  // ==========================================================

  function getA1Lessons() {

    if (
      typeof A1_LESSONS !== "undefined" &&
      Array.isArray(A1_LESSONS)
    ) {

      return A1_LESSONS;

    }

    console.error(
      "A1_LESSONS wurde nicht gefunden."
    );

    return [];

  }


  // ==========================================================
  // HTML SÉCURISÉ
  // ==========================================================

  function escapeHTML(value) {

    if (
      value === undefined ||
      value === null
    ) {

      return "";

    }

    return String(value)

      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  // ==========================================================
  // TEXTE
  // ==========================================================

  function formatText(text) {

    if (!text) {
      return "";
    }

    return escapeHTML(text)

      .trim()

      .split(/\n\s*\n/)

      .map(function (paragraph) {

        return `
          <p>
            ${paragraph.replace(/\n/g, "<br>")}
          </p>
        `;

      })

      .join("");

  }


  // ==========================================================
  // LOCAL STORAGE
  // ==========================================================

  function getCompleted() {

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


  function saveCompleted(id) {

    const completed =
      getCompleted();

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


  // ==========================================================
  // NAVIGATION
  // ==========================================================

  function showHome() {

    window.location.hash = "";

    renderHome();

  }


  function showA1() {

    window.location.hash = "a1";

    renderA1();

  }


  // ==========================================================
  // NAVBAR
  // ==========================================================

  function renderNavbar() {

    return `

      <header class="navbar">

        <div
          class="logo"
          onclick="DeutschConnect.home()"
        >
          🇩🇪 DeutschConnect
        </div>

        <nav class="nav-links">

          <button
            onclick="DeutschConnect.home()"
          >
            Accueil
          </button>

          <button
            onclick="DeutschConnect.a1()"
          >
            Apprendre
          </button>

          <button
            onclick="DeutschConnect.a1()"
          >
            Quiz
          </button>

          <button
            onclick="DeutschConnect.community()"
          >
            Communauté
          </button>

          <button
            onclick="DeutschConnect.profile()"
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
  // ACCUEIL
  // ==========================================================

  function renderHome() {

    const app =
      document.getElementById("app");

    if (!app) {
      return;
    }

    const lessons =
      getA1Lessons();

    const completed =
      getCompleted();

    const progress =
      lessons.length > 0

        ? Math.round(
            (
              completed.filter(function (id) {

                return lessons.some(
                  function (lesson) {

                    return lesson.id === id;

                  }
                );

              }).length
              /
              lessons.length
            ) * 100
          )

        : 0;


    app.innerHTML = `

      ${renderNavbar()}

      <main class="container">

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
            l'allemand de A1 jusqu'à C2
            avec des cours simples et pratiques.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.a1()"
          >
            Commencer
          </button>

        </section>


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
              onclick="DeutschConnect.a1()"
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


      ${renderFooter()}

    `;

  }


  // ==========================================================
  // PAGE A1
  // INHALT + 11 LEÇONS
  // ==========================================================

  function renderA1() {

    const app =
      document.getElementById("app");

    if (!app) {
      return;
    }


    const lessons =
      getA1Lessons().slice().sort(
        function (a, b) {

          return Number(a.number || 0)
            -
            Number(b.number || 0);

        }
      );


    // --------------------------------------------------------
    // ERREUR
    // --------------------------------------------------------

    if (lessons.length === 0) {

      app.innerHTML = `

        ${renderNavbar()}

        <main class="container">

          <section class="error-card">

            <h1>
              ⚠️ Keine A1-Lektionen
            </h1>

            <p>
              Die A1-Lektionen wurden nicht gefunden.
            </p>

            <p>
              Kontrolliere bitte die Datei
              <strong>data.js</strong>.
            </p>

          </section>

        </main>

      `;

      return;

    }


    // --------------------------------------------------------
    // INHALT
    // --------------------------------------------------------

    let inhaltHTML = "";


    lessons.forEach(function (lesson, index) {

      inhaltHTML += `

        <li>

          <a href="#lektion-${index + 1}">

            <span class="inhalt-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <div>

              <strong>
                ${escapeHTML(lesson.title)}
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

    });


    // --------------------------------------------------------
    // LEÇONS
    // --------------------------------------------------------

    let lessonsHTML = "";


    lessons.forEach(function (lesson, index) {

      lessonsHTML +=
        renderLesson(
          lesson,
          index
        );

    });


    // --------------------------------------------------------
    // AFFICHAGE
    // --------------------------------------------------------

    app.innerHTML = `

      ${renderNavbar()}


      <main class="container a1-page">


        <!-- EN-TÊTE A1 -->

        <section class="a1-header">

          <div class="a1-badge">
            🇩🇪 NIVEAU A1
          </div>

          <h1>
            Deutsch lernen
          </h1>

          <p>
            Einfache Erklärungen und wichtige Wörter.
          </p>

          <div class="language-info">

            🇩🇪 Erklärung:
            leichtes Deutsch

            <br>

            🇫🇷 Wortschatz:
            Deutsch → Français

          </div>

        </section>


        <!-- INHALT -->

        <section class="inhalt-card">

          <h2>
            📑 Inhalt
          </h2>

          <p>
            Das lernst du in A1:
          </p>

          <ol class="inhalt-list">

            ${inhaltHTML}

          </ol>

        </section>


        <!-- 11 LEÇONS -->

        <section class="all-lessons">

          ${lessonsHTML}

        </section>


        <!-- FIN -->

        <section class="a1-finish">

          <div class="finish-icon">
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


      ${renderFooter()}

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
      String(index + 1).padStart(2, "0");


    return `

      <article
        class="full-lesson"
        id="lektion-${index + 1}"
      >


        <!-- TITRE -->

        <div class="lesson-top">

          <div class="lesson-number-big">
            ${number}
          </div>

          <div>

            <div class="lesson-label">
              LEÇON ${index + 1}
            </div>

            <h2>
              ${escapeHTML(lesson.title)}
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


        <!-- OBJECTIF -->

        ${
          lesson.lernziel

            ? `

              <div class="lernziel-box">

                <strong>
                  🎯 Lernziel
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


        <!-- TEST -->

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

        <div class="vocabulary-grid">

          ${
            words.map(function (word) {

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

            }).join("")
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
                rows.map(function (row) {

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

                }).join("")
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
                rows.map(function (row) {

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

                }).join("")
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
            examples.map(function (example) {

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

            }).join("")
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
            items.map(function (item) {

              return `

                <li>
                  ${escapeHTML(item)}
                </li>

              `;

            }).join("")
          }

        </ul>

      </section>

    `;

  }


  // ==========================================================
  // MINI TEST
  // ==========================================================

  function renderMiniTestInfo(
    questions,
    lessonId
  ) {

    if (
      !Array.isArray(questions) ||
      questions.length === 0
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
              '${lessonId}'
            )
          "
        >
          Mini-Test starten
        </button>

      </section>

    `;

  }


  // ==========================================================
  // QUIZ
  // ==========================================================

  let testLesson = null;

  let testQuestions = [];

  let testIndex = 0;

  let testScore = 0;


  function startTest(lessonId) {

    const lessons =
      getA1Lessons();


    testLesson =
      lessons.find(
        function (lesson) {

          return lesson.id === lessonId;

        }
      );


    if (
      !testLesson ||
      !Array.isArray(
        testLesson.miniTest
      )
    ) {

      alert(
        "Dieser Mini-Test ist nicht verfügbar."
      );

      return;

    }


    testQuestions =
      testLesson.miniTest;

    testIndex = 0;

    testScore = 0;

    showQuestion();

  }


  function showQuestion() {

    const app =
      document.getElementById("app");


    if (
      !app ||
      testIndex >= testQuestions.length
    ) {

      finishTest();

      return;

    }


    const question =
      testQuestions[testIndex];


    const progress =
      Math.round(
        (
          testIndex
          /
          testQuestions.length
        ) * 100
      );


    app.innerHTML = `

      ${renderNavbar()}


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
              style="width:${progress}%"
            ></div>

          </div>


          <h1>
            ${escapeHTML(
              question.question || ""
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
                            DeutschConnect.answer(
                              ${index}
                            )
                          "
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


    buttons.forEach(
      function (button) {

        button.disabled = true;

      }
    );


    if (
      answerIndex ===
      Number(question.correct)
    ) {

      testScore++;


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

        testIndex++;

        showQuestion();

      },
      800
    );

  }


  // ==========================================================
  // FIN TEST
  // ==========================================================

  function finishTest() {

    const total =
      testQuestions.length;


    const percent =
      total > 0

        ? Math.round(
            (
              testScore
              /
              total
            ) * 100
          )

        : 0;


    if (percent >= 60) {

      saveCompleted(
        testLesson.id
      );

      addXP(10);

    }


    const app =
      document.getElementById("app");


    app.innerHTML = `

      ${renderNavbar()}


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

            ${testScore}
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
                  Versuche den Test noch einmal.
                </p>
              `
          }


          <button
            class="primary-btn"
            onclick="DeutschConnect.a1()"
          >
            Zurück zu A1
          </button>


        </section>

      </main>


      ${renderFooter()}

    `;

  }


  // ==========================================================
  // FOOTER
  // ==========================================================

  function renderFooter() {

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
  // PAGES TEMPORAIRES
  // ==========================================================

  function community() {

    alert(
      "La communauté sera disponible bientôt."
    );

  }


  function profile() {

    alert(
      "Le profil sera disponible bientôt."
    );

  }


  function login() {

    alert(
      "La connexion sera disponible bientôt."
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


    if (
      hash === "a1" ||
      hash === "learn"
    ) {

      renderA1();

    } else {

      renderHome();

    }

  }


  // ==========================================================
  // API PUBLIQUE
  // ==========================================================

  window.DeutschConnect = {

    home: showHome,

    a1: showA1,

    startTest: startTest,

    answer: answer,

    community: community,

    profile: profile,

    login: login

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


  // Vérification dans la console

  console.log(
    "🇩🇪 DeutschConnect chargé."
  );

  console.log(
    "📚 Nombre de leçons A1 :",
    getA1Lessons().length
  );


})();
