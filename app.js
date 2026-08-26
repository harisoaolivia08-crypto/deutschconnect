// ============================================================
// DEUTSCHCONNECT 🇩🇪
// APP.JS - A1
// Compatible avec data.js
// ============================================================

(function () {
  "use strict";

  // ----------------------------------------------------------
  // ÉTAT DE L'APPLICATION
  // ----------------------------------------------------------

  let currentLesson = null;
  let currentQuestion = 0;
  let score = 0;

  // ----------------------------------------------------------
  // UTILITAIRES
  // ----------------------------------------------------------

  function getApp() {
    return document.getElementById("app");
  }

  function escapeHTML(text) {
    if (text === undefined || text === null) return "";

    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getProgress() {
    const completed =
      JSON.parse(localStorage.getItem("deutschconnect_completed") || "[]");

    return completed;
  }

  function saveCompletedLesson(id) {
    const completed = getProgress();

    if (!completed.includes(id)) {
      completed.push(id);
      localStorage.setItem(
        "deutschconnect_completed",
        JSON.stringify(completed)
      );
    }
  }

  function getXP() {
    return Number(localStorage.getItem("deutschconnect_xp") || 0);
  }

  function addXP(amount) {
    const xp = getXP() + amount;
    localStorage.setItem("deutschconnect_xp", xp);
  }

  function getTestsCompleted() {
    return Number(
      localStorage.getItem("deutschconnect_tests") || 0
    );
  }

  function addTestCompleted() {
    const tests = getTestsCompleted() + 1;

    localStorage.setItem(
      "deutschconnect_tests",
      tests
    );
  }

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------

  function goHome() {
    window.location.hash = "";
    renderHome();
  }

  function goLearn() {
    window.location.hash = "learn";
    renderLearn();
  }

  function goA1() {
    window.location.hash = "a1";
    renderA1();
  }

  function goLesson(id) {
    window.location.hash = "lesson/" + id;
    renderLesson(id);
  }

  function goQuiz() {
    window.location.hash = "quiz";
    renderQuizStart();
  }

  // ----------------------------------------------------------
  // NAVBAR
  // ----------------------------------------------------------

  function renderNavbar() {
    return `
      <nav class="navbar">

        <div class="logo" onclick="DeutschConnect.goHome()">
          🇩🇪 DeutschConnect
        </div>

        <div class="nav-links">
          <button onclick="DeutschConnect.goHome()">
            Accueil
          </button>

          <button onclick="DeutschConnect.goLearn()">
            Apprendre
          </button>

          <button onclick="DeutschConnect.goQuiz()">
            Quiz
          </button>

          <button onclick="alert('Communauté : bientôt disponible !')">
            Communauté
          </button>

          <button onclick="alert('Profil : bientôt disponible !')">
            Profil
          </button>
        </div>

      </nav>
    `;
  }

  // ----------------------------------------------------------
  // ACCUEIL
  // ----------------------------------------------------------

  function renderHome() {
    const app = getApp();

    if (!app) {
      console.error("Element #app introuvable.");
      return;
    }

    const lessons = getA1Lessons();
    const completed = getProgress();

    const progress =
      lessons.length > 0
        ? Math.round((completed.length / lessons.length) * 100)
        : 0;

    app.innerHTML = `

      ${renderNavbar()}

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
            DeutschConnect t'aide à apprendre l'allemand
            de A1 jusqu'à C2.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.goLearn()"
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
            Lernzettel terminés
          </p>

        </section>


        <section class="stats-grid">

          <div class="stat-card">
            <span>📚</span>
            <strong>${lessons.length}</strong>
            <small>Lernzettel A1</small>
          </div>

          <div class="stat-card">
            <span>📝</span>
            <strong>${getTestsCompleted()}</strong>
            <small>Tests terminés</small>
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
            Commence avec le niveau A1 et avance étape par étape.
          </p>

          <div class="levels">

            <button
              class="level active"
              onclick="DeutschConnect.goA1()"
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


        <section class="quiz-card">

          <h2>📝 Mini-Test</h2>

          <p>
            Teste tes connaissances avec de petites questions.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.goQuiz()"
          >
            Commencer un test
          </button>

        </section>

      </main>


      ${renderFooter()}
    `;
  }

  // ----------------------------------------------------------
  // PAGE APPRENDRE
  // ----------------------------------------------------------

  function renderLearn() {

    const app = getApp();

    app.innerHTML = `

      ${renderNavbar()}

      <main class="container">

        <section class="page-header">

          <span>📖</span>

          <h1>Apprendre l'allemand</h1>

          <p>
            Choisis ton niveau.
          </p>

        </section>


        <div class="levels large">

          <button
            class="level active"
            onclick="DeutschConnect.goA1()"
          >
            🇩🇪 A1
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


        <section class="info-card">

          <h2>🇩🇪 Niveau A1</h2>

          <p>
            Lerne die Grundlagen der deutschen Sprache.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.goA1()"
          >
            A1 Lernzettel öffnen
          </button>

        </section>

      </main>

      ${renderFooter()}
    `;
  }

  // ----------------------------------------------------------
  // LISTE A1
  // ----------------------------------------------------------

  function renderA1() {

    const app = getApp();

    const lessons = getA1Lessons();
    const completed = getProgress();

    let lessonHTML = "";

    lessons.forEach(function (lesson) {

      const done = completed.includes(lesson.id);

      lessonHTML += `

        <article class="lesson-card">

          <div class="lesson-number">
            ${String(lesson.number).padStart(2, "0")}
          </div>

          <div class="lesson-content">

            <div class="lesson-level">
              A1 · Lernzettel ${lesson.number}
            </div>

            <h3>
              ${escapeHTML(lesson.title)}
            </h3>

            <p class="french-title">
              ${escapeHTML(lesson.frenchTitle)}
            </p>

            <p>
              ${escapeHTML(lesson.lernziel)}
            </p>

            ${
              done
                ? `<span class="completed">✓ Terminé</span>`
                : ""
            }

          </div>

          <button
            class="lesson-button"
            onclick="DeutschConnect.goLesson('${lesson.id}')"
          >
            ${
              done
                ? "Réviser →"
                : "Commencer →"
            }
          </button>

        </article>
      `;
    });


    app.innerHTML = `

      ${renderNavbar()}

      <main class="container">

        <section class="page-header">

          <div class="back-button">
            <button onclick="DeutschConnect.goLearn()">
              ← Retour
            </button>
          </div>

          <span>🇩🇪</span>

          <h1>A1 — Deutsch lernen</h1>

          <p>
            11 Lernzettel für Deutsch-Anfänger.
          </p>

        </section>


        <section class="progress-card">

          <h2>📊 Deine A1-Fortschritt</h2>

          <div class="progress-number">

            ${
              lessons.length > 0
                ? Math.round(
                    (completed.length / lessons.length) * 100
                  )
                : 0
            }%

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill"
              style="width:${
                lessons.length > 0
                  ? Math.round(
                      (completed.length / lessons.length) * 100
                    )
                  : 0
              }%"
            ></div>

          </div>

        </section>


        <section class="lessons-list">

          ${lessonHTML}

        </section>

      </main>

      ${renderFooter()}
    `;
  }

  // ----------------------------------------------------------
  // UNE LEÇON
  // ----------------------------------------------------------

  function renderLesson(id) {

    const app = getApp();

    const lesson = getLessonById(id);

    if (!lesson) {

      app.innerHTML = `

        ${renderNavbar()}

        <main class="container">

          <section class="error-card">

            <h1>❌ Leçon introuvable</h1>

            <p>
              Diese Lektion existiert nicht.
            </p>

            <button
              class="primary-btn"
              onclick="DeutschConnect.goA1()"
            >
              Retour aux leçons
            </button>

          </section>

        </main>

      `;

      return;
    }


    currentLesson = lesson;


    app.innerHTML = `

      ${renderNavbar()}

      <main class="container lesson-page">

        <button
          class="back-link"
          onclick="DeutschConnect.goA1()"
        >
          ← Zurück zu A1
        </button>


        <header class="lesson-header">

          <div class="lesson-badge">
            A1 · ${lesson.number}
          </div>

          <h1>
            ${escapeHTML(lesson.title)}
          </h1>

          <h2>
            ${escapeHTML(lesson.frenchTitle)}
          </h2>

          <p>
            ${escapeHTML(lesson.lernziel)}
          </p>

        </header>


        <section class="lesson-section">

          <h2>📖 Erklärung</h2>

          <div class="explanation">

            ${formatText(lesson.erklaerung)}

          </div>

        </section>


        ${
          lesson.konjugation
            ? renderKonjugation(lesson.konjugation)
            : ""
        }


        ${
          lesson.pronomen
            ? renderPronomen(lesson.pronomen)
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


        <section class="lesson-section test-section">

          <h2>📝 Mini-Test</h2>

          <p>
            Teste dein Wissen.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.startLessonQuiz('${lesson.id}')"
          >
            Mini-Test starten
          </button>

        </section>


        <div class="lesson-navigation">

          ${
            lesson.number > 1
              ? `
                <button
                  onclick="DeutschConnect.goLesson(
                    'a1-${String(
                      lesson.number - 1
                    ).padStart(2, "0")}'
                  )"
                >
                  ← Lektion ${lesson.number - 1}
                </button>
              `
              : "<span></span>"
          }


          ${
            lesson.number < 11
              ? `
                <button
                  onclick="DeutschConnect.goLesson(
                    'a1-${String(
                      lesson.number + 1
                    ).padStart(2, "0")}'
                  )"
                >
                  Lektion ${lesson.number + 1} →
                </button>
              `
              : `
                <button
                  onclick="DeutschConnect.goA1()"
                >
                  ✓ A1 Übersicht
                </button>
              `
          }

        </div>

      </main>

      ${renderFooter()}
    `;
  }

  // ----------------------------------------------------------
  // FORMAT TEXTE
  // ----------------------------------------------------------

  function formatText(text) {

    if (!text) return "";

    return escapeHTML(text)
      .trim()
      .split(/\n\s*\n/)
      .map(function (paragraph) {

        return `<p>${paragraph
          .replace(/\n/g, "<br>")}</p>`;

      })
      .join("");
  }

  // ----------------------------------------------------------
  // VOCABULAIRE
  // ----------------------------------------------------------

  function renderVocabulary(words) {

    return `

      <section class="lesson-section">

        <h2>📚 Wortschatz</h2>

        <div class="vocabulary-grid">

          ${words
            .map(function (word) {

              return `

                <div class="word-card">

                  <strong>
                    ${escapeHTML(word.de)}
                  </strong>

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
  // KATEGORIEN
  // ----------------------------------------------------------

  function renderCategories(categories) {

    return `

      <section class="lesson-section">

        <h2>📚 Wortschatz</h2>

        ${categories
          .map(function (category) {

            return `

              <div class="category-card">

                <h3>
                  ${escapeHTML(category.name)}
                </h3>

                <div class="vocabulary-grid">

                  ${category.words
                    .map(function (word) {

                      return `

                        <div class="word-card">

                          <strong>
                            ${escapeHTML(word.de)}
                          </strong>

                          <span>
                            ${escapeHTML(word.fr)}
                          </span>

                        </div>

                      `;

                    })
                    .join("")}

                </div>

              </div>

            `;

          })
          .join("")}

      </section>

    `;
  }

  // ----------------------------------------------------------
  // KONJUGATION
  // ----------------------------------------------------------

  function renderKonjugation(rows) {

    return `

      <section class="lesson-section">

        <h2>🔤 Konjugation</h2>

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

              ${rows
                .map(function (row) {

                  return `

                    <tr>

                      <td>
                        ${escapeHTML(row.person)}
                      </td>

                      <td>
                        <strong>
                          ${escapeHTML(row.form)}
                        </strong>
                      </td>

                      <td>
                        ${escapeHTML(row.fr)}
                      </td>

                    </tr>

                  `;

                })
                .join("")}

            </tbody>

          </table>

        </div>

      </section>

    `;
  }

  // ----------------------------------------------------------
  // PRONOMS
  // ----------------------------------------------------------

  function renderPronomen(rows) {

    return `

      <section class="lesson-section">

        <h2>👤 Personalpronomen</h2>

        <div class="table-wrapper">

          <table class="lesson-table">

            <thead>

              <tr>
                <th>Deutsch</th>
                <th>Français</th>
              </tr>

            </thead>

            <tbody>

              ${rows
                .map(function (row) {

                  return `

                    <tr>

                      <td>
                        <strong>
                          ${escapeHTML(row.person)}
                        </strong>
                      </td>

                      <td>
                        ${escapeHTML(row.fr)}
                      </td>

                    </tr>

                  `;

                })
                .join("")}

            </tbody>

          </table>

        </div>

      </section>

    `;
  }

  // ----------------------------------------------------------
  // EXEMPLES
  // ----------------------------------------------------------

  function renderExamples(examples) {

    return `

      <section class="lesson-section">

        <h2>💬 Beispiele</h2>

        <div class="examples">

          ${examples
            .map(function (example) {

              return `

                <div class="example-card">

                  <div class="example-de">
                    🇩🇪 ${escapeHTML(example.de)}
                  </div>

                  <div class="example-fr">
                    🇫🇷 ${escapeHTML(example.fr)}
                  </div>

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

  function renderMerke(items) {

    return `

      <section class="lesson-section merke-section">

        <h2>💡 Merke</h2>

        <ul>

          ${items
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
  // QUIZ D'UNE LEÇON
  // ----------------------------------------------------------

  function startLessonQuiz(id) {

    const lesson = getLessonById(id);

    if (!lesson || !lesson.miniTest) {
      alert("Dieser Test ist noch nicht verfügbar.");
      return;
    }

    currentLesson = lesson;
    currentQuestion = 0;
    score = 0;

    renderQuestion();
  }


  function renderQuestion() {

    const app = getApp();

    const questions = currentLesson.miniTest;

    if (currentQuestion >= questions.length) {
      finishLessonQuiz();
      return;
    }

    const question =
      questions[currentQuestion];

    const percent =
      Math.round(
        (currentQuestion / questions.length) * 100
      );


    app.innerHTML = `

      ${renderNavbar()}

      <main class="container quiz-page">

        <button
          class="back-link"
          onclick="DeutschConnect.goLesson('${currentLesson.id}')"
        >
          ← Zurück zur Lektion
        </button>


        <section class="quiz-container">

          <div class="quiz-progress">

            Frage
            ${currentQuestion + 1}
            /
            ${questions.length}

          </div>


          <div class="progress-bar">

            <div
              class="progress-fill"
              style="width:${percent}%"
            ></div>

          </div>


          <h1>
            ${escapeHTML(question.question)}
          </h1>


          <div class="quiz-options">

            ${question.options
              .map(function (option, index) {

                return `

                  <button
                    class="quiz-option"
                    onclick="DeutschConnect.answerQuestion(${index})"
                  >
                    ${escapeHTML(option)}
                  </button>

                `;

              })
              .join("")}

          </div>

        </section>

      </main>

    `;
  }


  function answerQuestion(answer) {

    const question =
      currentLesson.miniTest[currentQuestion];

    const buttons =
      document.querySelectorAll(".quiz-option");

    buttons.forEach(function (button) {
      button.disabled = true;
    });


    if (answer === question.correct) {

      score++;

      buttons[answer].classList.add("correct");

    } else {

      buttons[answer].classList.add("wrong");

      buttons[
        question.correct
      ].classList.add("correct");

    }


    setTimeout(function () {

      currentQuestion++;

      renderQuestion();

    }, 900);
  }


  function finishLessonQuiz() {

    const total =
      currentLesson.miniTest.length;

    const percent =
      Math.round((score / total) * 100);


    if (percent >= 60) {

      saveCompletedLesson(
        currentLesson.id
      );

      addXP(10);
      addTestCompleted();

    }


    const message =
      percent >= 60
        ? "Sehr gut! Lektion geschafft! 🎉"
        : "Weiter üben! Du kannst es schaffen. 💪";


    getApp().innerHTML = `

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
            ${message}
          </h1>

          <div class="result-score">
            ${score} / ${total}
          </div>

          <p>
            ${percent}% richtig
          </p>

          ${
            percent >= 60
              ? `
                <p class="xp-earned">
                  ⭐ +10 XP
                </p>
              `
              : `
                <p>
                  Mindestens 60% sind nötig,
                  um die Lektion abzuschließen.
                </p>
              `
          }


          <div class="result-actions">

            <button
              class="primary-btn"
              onclick="DeutschConnect.goLesson('${currentLesson.id}')"
            >
              Lektion wiederholen
            </button>

            <button
              class="secondary-btn"
              onclick="DeutschConnect.goA1()"
            >
              A1 Übersicht
            </button>

          </div>

        </section>

      </main>

      ${renderFooter()}
    `;
  }

  // ----------------------------------------------------------
  // QUIZ GÉNÉRAL
  // ----------------------------------------------------------

  function renderQuizStart() {

    const app = getApp();

    app.innerHTML = `

      ${renderNavbar()}

      <main class="container">

        <section class="quiz-start">

          <div class="quiz-icon">
            📝
          </div>

          <h1>
            Mini-Test A1
          </h1>

          <p>
            Teste dein Deutsch mit Fragen aus
            den A1-Lernzetteln.
          </p>

          <button
            class="primary-btn"
            onclick="DeutschConnect.startRandomQuiz()"
          >
            Test starten
          </button>

        </section>

      </main>

      ${renderFooter()}
    `;
  }


  function startRandomQuiz() {

    const lessons = getA1Lessons();

    const allQuestions = [];

    lessons.forEach(function (lesson) {

      if (lesson.miniTest) {

        lesson.miniTest.forEach(function (question) {

          allQuestions.push({
            ...question,
            lessonId: lesson.id
          });

        });

      }

    });


    if (allQuestions.length === 0) {

      alert("Keine Fragen verfügbar.");

      return;
    }


    const shuffled =
      allQuestions.sort(
        function () {
          return Math.random() - 0.5;
        }
      );


    window.generalQuiz = {
      questions: shuffled.slice(0, 10),
      current: 0,
      score: 0
    };


    renderGeneralQuestion();
  }


  function renderGeneralQuestion() {

    const quiz =
      window.generalQuiz;

    if (!quiz) return;


    if (quiz.current >= quiz.questions.length) {

      finishGeneralQuiz();

      return;
    }


    const question =
      quiz.questions[quiz.current];


    getApp().innerHTML = `

      ${renderNavbar()}

      <main class="container quiz-page">

        <section class="quiz-container">

          <div class="quiz-progress">

            Frage
            ${quiz.current + 1}
            /
            ${quiz.questions.length}

          </div>


          <h1>
            ${escapeHTML(question.question)}
          </h1>


          <div class="quiz-options">

            ${question.options
              .map(function (option, index) {

                return `

                  <button
                    class="quiz-option"
                    onclick="DeutschConnect.answerGeneral(${index})"
                  >
                    ${escapeHTML(option)}
                  </button>

                `;

              })
              .join("")}

          </div>

        </section>

      </main>

    `;
  }


  function answerGeneral(answer) {

    const quiz =
      window.generalQuiz;

    const question =
      quiz.questions[quiz.current];


    const buttons =
      document.querySelectorAll(".quiz-option");


    buttons.forEach(function (button) {
      button.disabled = true;
    });


    if (answer === question.correct) {

      quiz.score++;

      buttons[answer].classList.add("correct");

    } else {

      buttons[answer].classList.add("wrong");

      buttons[
        question.correct
      ].classList.add("correct");

    }


    setTimeout(function () {

      quiz.current++;

      renderGeneralQuestion();

    }, 800);
  }


  function finishGeneralQuiz() {

    const quiz =
      window.generalQuiz;

    const total =
      quiz.questions.length;

    const percent =
      Math.round(
        (quiz.score / total) * 100
      );


    addTestCompleted();

    if (percent >= 60) {
      addXP(20);
    }


    getApp().innerHTML = `

      ${renderNavbar()}

      <main class="container">

        <section class="result-card">

          <div class="result-icon">
            ${
              percent >= 60
                ? "🏆"
                : "📖"
            }
          </div>

          <h1>
            Ergebnis
          </h1>

          <div class="result-score">
            ${quiz.score} / ${total}
          </div>

          <p>
            ${percent}% richtig
          </p>

          ${
            percent >= 60
              ? `<p>⭐ +20 XP</p>`
              : `<p>Weiter lernen und noch einmal versuchen.</p>`
          }

          <button
            class="primary-btn"
            onclick="DeutschConnect.goQuiz()"
          >
            Noch einmal
          </button>

        </section>

      </main>

      ${renderFooter()}
    `;
  }

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------

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

        <small>
          Deutsch lernen. Jeden Tag.
        </small>

      </footer>

    `;
  }

  // ----------------------------------------------------------
  // ROUTEUR
  // ----------------------------------------------------------

  function router() {

    const hash =
      window.location.hash
        .replace("#", "")
        .trim();


    if (hash === "learn") {

      renderLearn();

      return;
    }


    if (hash === "a1") {

      renderA1();

      return;
    }


    if (hash === "quiz") {

      renderQuizStart();

      return;
    }


    if (hash.startsWith("lesson/")) {

      const id =
        hash.split("/")[1];

      renderLesson(id);

      return;
    }


    renderHome();
  }


  // ----------------------------------------------------------
  // EXPOSER LES FONCTIONS
  // ----------------------------------------------------------

  window.DeutschConnect = {

    goHome: goHome,

    goLearn: goLearn,

    goA1: goA1,

    goLesson: goLesson,

    goQuiz: goQuiz,

    startLessonQuiz: startLessonQuiz,

    answerQuestion: answerQuestion,

    startRandomQuiz: startRandomQuiz,

    answerGeneral: answerGeneral

  };


  // ----------------------------------------------------------
  // DÉMARRAGE
  // ----------------------------------------------------------

  window.addEventListener(
    "hashchange",
    router
  );

  document.addEventListener(
    "DOMContentLoaded",
    router
  );

})();
