// ============================================================
// DEUTSCHCONNECT 🇩🇪
// A1 - COURS
// Erklärung = Leichtes Deutsch
// Wortschatz = Deutsch → Français
// ============================================================

window.A1_LESSONS = [

  // ==========================================================
  // A1.01 - BEGRÜSSUNGEN
  // ==========================================================

  {
    id: "a1-01",
    level: "A1",
    number: 1,
    title: "Begrüßungen",
    frenchTitle: "Salutations",

    lernziel:
      "Du kannst andere Menschen begrüßen und verabschieden.",

    erklaerung: `
Wenn wir eine Person treffen, begrüßen wir sie.

Am Morgen sagen wir „Guten Morgen“.
Am Tag sagen wir „Guten Tag“.
Am Abend sagen wir „Guten Abend“.

Bei Freunden können wir „Hallo“ oder „Tschüss“ sagen.

In einer formellen Situation können wir
„Auf Wiedersehen“ sagen.
    `,

    wortschatz: [
      { de: "Hallo", fr: "Salut / Bonjour" },
      { de: "Guten Morgen", fr: "Bonjour (matin)" },
      { de: "Guten Tag", fr: "Bonjour" },
      { de: "Guten Abend", fr: "Bonsoir" },
      { de: "Gute Nacht", fr: "Bonne nuit" },
      { de: "Tschüss", fr: "Salut / Au revoir" },
      { de: "Auf Wiedersehen", fr: "Au revoir (formel)" },
      { de: "Danke", fr: "Merci" },
      { de: "Bitte", fr: "S'il te plaît / De rien" },
      { de: "Entschuldigung", fr: "Excusez-moi / Pardon" }
    ],

    beispiele: [
      {
        de: "Hallo! Wie geht es dir?",
        fr: "Salut ! Comment vas-tu ?"
      },
      {
        de: "Guten Morgen!",
        fr: "Bonjour !"
      },
      {
        de: "Tschüss! Bis morgen!",
        fr: "Salut ! À demain !"
      }
    ],

    merke: [
      "Hallo ist informell.",
      "Auf Wiedersehen ist formeller.",
      "Danke = Merci.",
      "Bitte kann „S'il te plaît“ oder „De rien“ bedeuten."
    ],

    miniTest: [
      {
        question: "Wie sagt man „Merci“ auf Deutsch?",
        options: ["Bitte", "Danke", "Tschüss", "Hallo"],
        correct: 1
      },
      {
        question: "Was sagt man am Morgen?",
        options: [
          "Gute Nacht",
          "Guten Morgen",
          "Guten Abend",
          "Tschüss"
        ],
        correct: 1
      },
      {
        question: "Was bedeutet „Tschüss“?",
        options: [
          "Bonjour",
          "Merci",
          "Au revoir",
          "Pardon"
        ],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.02 - SICH VORSTELLEN
  // ==========================================================

  {
    id: "a1-02",
    level: "A1",
    number: 2,
    title: "Sich vorstellen",
    frenchTitle: "Se présenter",

    lernziel:
      "Du kannst dich einfach vorstellen.",

    erklaerung: `
Wenn wir eine neue Person treffen, können wir etwas
über uns sagen.

Wir können unseren Namen, unser Alter,
unser Land und unseren Wohnort nennen.

Wir benutzen zum Beispiel:

„Ich heiße ...“
„Ich bin ... Jahre alt.“
„Ich komme aus ...“
„Ich wohne in ...“
    `,

    wortschatz: [
      { de: "heißen", fr: "s'appeler" },
      { de: "sein", fr: "être" },
      { de: "kommen", fr: "venir" },
      { de: "wohnen", fr: "habiter" },
      { de: "sprechen", fr: "parler" },
      { de: "lernen", fr: "apprendre" },
      { de: "das Land", fr: "le pays" },
      { de: "die Stadt", fr: "la ville" },
      { de: "der Name", fr: "le nom" },
      { de: "das Alter", fr: "l'âge" }
    ],

    beispiele: [
      {
        de: "Ich heiße Anna.",
        fr: "Je m'appelle Anna."
      },
      {
        de: "Ich bin 20 Jahre alt.",
        fr: "J'ai 20 ans."
      },
      {
        de: "Ich komme aus Frankreich.",
        fr: "Je viens de France."
      },
      {
        de: "Ich wohne in Berlin.",
        fr: "J'habite à Berlin."
      },
      {
        de: "Ich lerne Deutsch.",
        fr: "J'apprends l'allemand."
      }
    ],

    merke: [
      "Ich heiße ... = Je m'appelle ...",
      "Ich komme aus ... = Je viens de ...",
      "Ich wohne in ... = J'habite à ...",
      "Ich bin ... Jahre alt = J'ai ... ans."
    ],

    miniTest: [
      {
        question: "Wie sagt man „Je m'appelle Anna“?",
        options: [
          "Ich bin Anna.",
          "Ich heiße Anna.",
          "Ich wohne Anna.",
          "Ich komme Anna."
        ],
        correct: 1
      },
      {
        question: "Was bedeutet „Ich komme aus Frankreich“?",
        options: [
          "J'habite en France.",
          "Je parle français.",
          "Je viens de France.",
          "J'apprends le français."
        ],
        correct: 2
      },
      {
        question: "Wie sagt man „J'ai 20 ans“?",
        options: [
          "Ich habe 20 Jahre.",
          "Ich bin 20 Jahre alt.",
          "Ich heiße 20.",
          "Ich wohne 20."
        ],
        correct: 1
      }
    ]
  },


  // ==========================================================
  // A1.03 - PERSONALPRONOMEN
  // ==========================================================

  {
    id: "a1-03",
    level: "A1",
    number: 3,
    title: "Personalpronomen",
    frenchTitle: "Pronoms personnels",

    lernziel:
      "Du kannst die wichtigsten Personalpronomen benutzen.",

    erklaerung: `
Personalpronomen ersetzen Personen oder Dinge.

Wir benutzen:

ich, du, er, sie, es, wir, ihr, sie und Sie.

„Sie“ mit großem S ist die höfliche Form.
    `,

    pronomen: [
      { person: "ich", fr: "je" },
      { person: "du", fr: "tu" },
      { person: "er", fr: "il" },
      { person: "sie", fr: "elle" },
      { person: "es", fr: "il / elle (objet)" },
      { person: "wir", fr: "nous" },
      { person: "ihr", fr: "vous (pluriel informel)" },
      { person: "sie", fr: "ils / elles" },
      { person: "Sie", fr: "vous (formel)" }
    ],

    beispiele: [
      {
        de: "Ich lerne Deutsch.",
        fr: "J'apprends l'allemand."
      },
      {
        de: "Du bist nett.",
        fr: "Tu es gentil(le)."
      },
      {
        de: "Wir lernen zusammen.",
        fr: "Nous apprenons ensemble."
      },
      {
        de: "Sie sind Lehrer.",
        fr: "Vous êtes professeur."
      }
    ],

    merke: [
      "ich = je",
      "du = tu",
      "wir = nous",
      "ihr = vous (plusieurs personnes, informel)",
      "Sie = vous (formel)"
    ],

    miniTest: [
      {
        question: "Was bedeutet „ich“?",
        options: ["tu", "je", "nous", "il"],
        correct: 1
      },
      {
        question: "Was bedeutet „wir“?",
        options: ["je", "tu", "nous", "ils"],
        correct: 2
      },
      {
        question: "Welche Form ist höflich?",
        options: ["du", "ihr", "Sie", "ich"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.04 - SEIN
  // ==========================================================

  {
    id: "a1-04",
    level: "A1",
    number: 4,
    title: "Das Verb sein",
    frenchTitle: "Le verbe être",

    lernziel:
      "Du kannst das Verb „sein“ im Präsens benutzen.",

    erklaerung: `
„sein“ bedeutet auf Französisch „être“.

Das Verb ist unregelmäßig.
Deshalb muss man die Formen lernen.
    `,

    konjugation: [
      { person: "ich", form: "bin", fr: "je suis" },
      { person: "du", form: "bist", fr: "tu es" },
      { person: "er / sie / es", form: "ist", fr: "il / elle est" },
      { person: "wir", form: "sind", fr: "nous sommes" },
      { person: "ihr", form: "seid", fr: "vous êtes" },
      { person: "sie / Sie", form: "sind", fr: "ils sont / vous êtes" }
    ],

    beispiele: [
      {
        de: "Ich bin müde.",
        fr: "Je suis fatigué(e)."
      },
      {
        de: "Du bist nett.",
        fr: "Tu es gentil(le)."
      },
      {
        de: "Wir sind Freunde.",
        fr: "Nous sommes amis."
      }
    ],

    merke: [
      "ich bin",
      "du bist",
      "er / sie / es ist",
      "wir sind",
      "ihr seid",
      "sie / Sie sind"
    ],

    miniTest: [
      {
        question: "Ich ___ müde.",
        options: ["bist", "ist", "bin", "sind"],
        correct: 2
      },
      {
        question: "Du ___ nett.",
        options: ["bin", "bist", "ist", "seid"],
        correct: 1
      },
      {
        question: "Wir ___ Freunde.",
        options: ["sind", "seid", "ist", "bin"],
        correct: 0
      }
    ]
  },


  // ==========================================================
  // A1.05 - HABEN
  // ==========================================================

  {
    id: "a1-05",
    level: "A1",
    number: 5,
    title: "Das Verb haben",
    frenchTitle: "Le verbe avoir",

    lernziel:
      "Du kannst das Verb „haben“ im Präsens benutzen.",

    erklaerung: `
„haben“ bedeutet auf Französisch „avoir“.

Wir benutzen „haben“, wenn wir sagen,
dass wir etwas besitzen oder etwas haben.
    `,

    konjugation: [
      { person: "ich", form: "habe", fr: "j'ai" },
      { person: "du", form: "hast", fr: "tu as" },
      { person: "er / sie / es", form: "hat", fr: "il / elle a" },
      { person: "wir", form: "haben", fr: "nous avons" },
      { person: "ihr", form: "habt", fr: "vous avez" },
      { person: "sie / Sie", form: "haben", fr: "ils ont / vous avez" }
    ],

    wortschatz: [
      { de: "das Buch", fr: "le livre" },
      { de: "das Auto", fr: "la voiture" },
      { de: "die Zeit", fr: "le temps" },
      { de: "das Geld", fr: "l'argent" },
      { de: "der Bruder", fr: "le frère" },
      { de: "die Schwester", fr: "la sœur" }
    ],

    beispiele: [
      {
        de: "Ich habe ein Buch.",
        fr: "J'ai un livre."
      },
      {
        de: "Wir haben Zeit.",
        fr: "Nous avons du temps."
      },
      {
        de: "Sie hat ein Auto.",
        fr: "Elle a une voiture."
      }
    ],

    merke: [
      "ich habe",
      "du hast",
      "er / sie / es hat",
      "wir haben",
      "ihr habt",
      "sie / Sie haben"
    ],

    miniTest: [
      {
        question: "Ich ___ ein Buch.",
        options: ["hast", "hat", "habe", "haben"],
        correct: 2
      },
      {
        question: "Du ___ ein Auto.",
        options: ["habe", "hast", "habt", "haben"],
        correct: 1
      },
      {
        question: "Wir ___ Zeit.",
        options: ["hat", "habt", "haben", "hast"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.06 - ARTIKEL
  // ==========================================================

  {
    id: "a1-06",
    level: "A1",
    number: 6,
    title: "Artikel",
    frenchTitle: "Articles",

    lernziel:
      "Du kannst der, die und das erkennen.",

    erklaerung: `
Im Deutschen haben Nomen ein grammatisches Geschlecht.

Maskulin: der
Feminin: die
Neutrum: das

Im Plural benutzen wir normalerweise „die“.

Der Artikel gehört zum Nomen.
Deshalb ist es wichtig, das Nomen mit seinem Artikel zu lernen.
    `,

    wortschatz: [
      { de: "der Mann", fr: "l'homme" },
      { de: "die Frau", fr: "la femme" },
      { de: "das Kind", fr: "l'enfant" },
      { de: "der Tisch", fr: "la table" },
      { de: "die Tür", fr: "la porte" },
      { de: "das Fenster", fr: "la fenêtre" },
      { de: "die Bücher", fr: "les livres" }
    ],

    beispiele: [
      {
        de: "Der Mann ist hier.",
        fr: "L'homme est ici."
      },
      {
        de: "Die Frau lernt Deutsch.",
        fr: "La femme apprend l'allemand."
      },
      {
        de: "Das Kind spielt.",
        fr: "L'enfant joue."
      }
    ],

    merke: [
      "der = masculin",
      "die = féminin",
      "das = neutre",
      "die = pluriel"
    ],

    miniTest: [
      {
        question: "___ Mann",
        options: ["der", "die", "das", "den"],
        correct: 0
      },
      {
        question: "___ Frau",
        options: ["der", "die", "das", "den"],
        correct: 1
      },
      {
        question: "___ Kind",
        options: ["der", "die", "das", "den"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.07 - VERBEN IM PRÄSENS
  // ==========================================================

  {
    id: "a1-07",
    level: "A1",
    number: 7,
    title: "Verben im Präsens",
    frenchTitle: "Conjugaison des verbes au présent",

    lernziel:
      "Du kannst regelmäßige Verben im Präsens konjugieren.",

    erklaerung: `
Bei regelmäßigen Verben haben die Personen bestimmte Endungen.

ich → -e
du → -st
er / sie / es → -t
wir → -en
ihr → -t
sie / Sie → -en

Beispiel: lernen

ich lerne
du lernst
er lernt
wir lernen
ihr lernt
sie lernen
    `,

    konjugation: [
      { person: "ich", form: "lerne", fr: "j'apprends" },
      { person: "du", form: "lernst", fr: "tu apprends" },
      { person: "er / sie / es", form: "lernt", fr: "il / elle apprend" },
      { person: "wir", form: "lernen", fr: "nous apprenons" },
      { person: "ihr", form: "lernt", fr: "vous apprenez" },
      { person: "sie / Sie", form: "lernen", fr: "ils apprennent / vous apprenez" }
    ],

    wortschatz: [
      { de: "lernen", fr: "apprendre" },
      { de: "machen", fr: "faire" },
      { de: "wohnen", fr: "habiter" },
      { de: "arbeiten", fr: "travailler" },
      { de: "spielen", fr: "jouer" },
      { de: "fragen", fr: "demander" }
    ],

    beispiele: [
      {
        de: "Ich lerne Deutsch.",
        fr: "J'apprends l'allemand."
      },
      {
        de: "Du arbeitest heute.",
        fr: "Tu travailles aujourd'hui."
      },
      {
        de: "Wir wohnen in Heidelberg.",
        fr: "Nous habitons à Heidelberg."
      }
    ],

    merke: [
      "ich → -e",
      "du → -st",
      "er / sie / es → -t",
      "wir → -en",
      "ihr → -t",
      "sie / Sie → -en"
    ],

    miniTest: [
      {
        question: "Ich ___ Deutsch.",
        options: ["lernst", "lerne", "lernen", "lernt"],
        correct: 1
      },
      {
        question: "Du ___ in Berlin.",
        options: ["wohne", "wohnt", "wohnst", "wohnen"],
        correct: 2
      },
      {
        question: "Wir ___ zusammen.",
        options: ["lernen", "lernt", "lernst", "lerne"],
        correct: 0
      }
    ]
  },


  // ==========================================================
  // A1.08 - WORTSCHATZ DES ALLTAGS
  // ==========================================================

  {
    id: "a1-08",
    level: "A1",
    number: 8,
    title: "Wörter des Alltags",
    frenchTitle: "Vocabulaire quotidien",

    lernziel:
      "Du kannst wichtige Wörter aus dem Alltag verstehen.",

    erklaerung: `
Jeden Tag benutzen wir viele einfache Wörter.

Wir lernen Wörter für die Wohnung,
die Familie, das Essen, die Schule und die Arbeit.

Lerne ein Nomen immer mit seinem Artikel.
    `,

    kategorien: [
      {
        name: "🏠 Zuhause",
        words: [
          { de: "das Haus", fr: "la maison" },
          { de: "das Zimmer", fr: "la chambre / la pièce" },
          { de: "die Küche", fr: "la cuisine" },
          { de: "das Bad", fr: "la salle de bain" },
          { de: "das Wohnzimmer", fr: "le salon" },
          { de: "das Bett", fr: "le lit" },
          { de: "der Tisch", fr: "la table" },
          { de: "der Stuhl", fr: "la chaise" },
          { de: "die Tür", fr: "la porte" },
          { de: "das Fenster", fr: "la fenêtre" }
        ]
      },

      {
        name: "👨‍👩‍👧 Familie",
        words: [
          { de: "die Mutter", fr: "la mère" },
          { de: "der Vater", fr: "le père" },
          { de: "die Eltern", fr: "les parents" },
          { de: "der Bruder", fr: "le frère" },
          { de: "die Schwester", fr: "la sœur" },
          { de: "das Kind", fr: "l'enfant" },
          { de: "die Oma", fr: "la grand-mère" },
          { de: "der Opa", fr: "le grand-père" }
        ]
      },

      {
        name: "🍎 Essen",
        words: [
          { de: "das Brot", fr: "le pain" },
          { de: "das Wasser", fr: "l'eau" },
          { de: "die Milch", fr: "le lait" },
          { de: "der Kaffee", fr: "le café" },
          { de: "der Tee", fr: "le thé" },
          { de: "der Apfel", fr: "la pomme" },
          { de: "die Banane", fr: "la banane" },
          { de: "das Fleisch", fr: "la viande" },
          { de: "der Reis", fr: "le riz" },
          { de: "das Gemüse", fr: "les légumes" }
        ]
      },

      {
        name: "🏫 Schule und Arbeit",
        words: [
          { de: "die Schule", fr: "l'école" },
          { de: "der Lehrer", fr: "le professeur" },
          { de: "der Schüler", fr: "l'élève" },
          { de: "die Arbeit", fr: "le travail" },
          { de: "der Beruf", fr: "le métier" },
          { de: "das Büro", fr: "le bureau" },
          { de: "der Kollege", fr: "le collègue" }
        ]
      }
    ],

    beispiele: [
      {
        de: "Ich trinke Wasser.",
        fr: "Je bois de l'eau."
      },
      {
        de: "Ich esse Brot.",
        fr: "Je mange du pain."
      },
      {
        de: "Meine Mutter ist zu Hause.",
        fr: "Ma mère est à la maison."
      }
    ],

    merke: [
      "Lerne Nomen immer mit dem Artikel.",
      "das Wasser = l'eau",
      "das Brot = le pain",
      "die Schule = l'école"
    ],

    miniTest: [
      {
        question: "Was bedeutet „das Brot“?",
        options: ["le lait", "le pain", "le riz", "la pomme"],
        correct: 1
      },
      {
        question: "Was bedeutet „die Mutter“?",
        options: ["la sœur", "la mère", "la grand-mère", "la fille"],
        correct: 1
      },
      {
        question: "Was bedeutet „die Schule“?",
        options: ["le bureau", "le métier", "l'école", "le travail"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.09 - W-FRAGEN
  // ==========================================================

  {
    id: "a1-09",
    level: "A1",
    number: 9,
    title: "W-Fragen",
    frenchTitle: "Questions en W",

    lernziel:
      "Du kannst einfache Fragen mit W-Fragewörtern stellen.",

    erklaerung: `
W-Fragen beginnen mit einem Fragewort.

Wer? = eine Person
Was? = eine Sache
Wo? = ein Ort
Wohin? = Richtung
Woher? = Herkunft
Wann? = Zeit
Warum? = Grund
Wie? = Art und Weise
Wie viel? = Menge

Das Verb steht bei einer normalen W-Frage
meistens auf Position 2.
    `,

    wortschatz: [
      { de: "Wer?", fr: "Qui ?" },
      { de: "Was?", fr: "Quoi ? / Que ?" },
      { de: "Wo?", fr: "Où ?" },
      { de: "Wohin?", fr: "Vers où ?" },
      { de: "Woher?", fr: "D'où ?" },
      { de: "Wann?", fr: "Quand ?" },
      { de: "Warum?", fr: "Pourquoi ?" },
      { de: "Wie?", fr: "Comment ?" },
      { de: "Wie viel?", fr: "Combien ?" }
    ],

    beispiele: [
      {
        de: "Wo wohnst du?",
        fr: "Où habites-tu ?"
      },
      {
        de: "Wie heißt du?",
        fr: "Comment t'appelles-tu ?"
      },
      {
        de: "Woher kommst du?",
        fr: "D'où viens-tu ?"
      },
      {
        de: "Wann lernst du Deutsch?",
        fr: "Quand apprends-tu l'allemand ?"
      }
    ],

    merke: [
      "Wer? fragt nach einer Person.",
      "Wo? fragt nach einem Ort.",
      "Wann? fragt nach einer Zeit.",
      "Warum? fragt nach einem Grund.",
      "Wie? fragt nach der Art und Weise."
    ],

    miniTest: [
      {
        question: "___ wohnst du?",
        options: ["Wer", "Wo", "Wann", "Warum"],
        correct: 1
      },
      {
        question: "___ heißt du?",
        options: ["Wie", "Wo", "Wer", "Was"],
        correct: 0
      },
      {
        question: "___ kommst du?",
        options: ["Wann", "Warum", "Woher", "Wie viel"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.10 - NEGATION
  // ==========================================================

  {
    id: "a1-10",
    level: "A1",
    number: 10,
    title: "Negation",
    frenchTitle: "La négation",

    lernziel:
      "Du kannst einfache Sätze verneinen.",

    erklaerung: `
Im Deutschen gibt es zwei wichtige Formen der Negation:

„nicht“
und
„kein / keine“.

„nicht“ benutzen wir oft für Verben,
Adjektive oder bestimmte Satzteile.

„kein / keine“ benutzen wir oft vor Nomen
mit unbestimmtem Artikel.
    `,

    wortschatz: [
      { de: "nicht", fr: "ne ... pas" },
      { de: "kein", fr: "pas de / aucun" },
      { de: "keine", fr: "pas de / aucune" }
    ],

    beispiele: [
      {
        de: "Ich komme nicht.",
        fr: "Je ne viens pas."
      },
      {
        de: "Ich habe kein Auto.",
        fr: "Je n'ai pas de voiture."
      },
      {
        de: "Ich habe keine Zeit.",
        fr: "Je n'ai pas de temps."
      },
      {
        de: "Das ist nicht gut.",
        fr: "Ce n'est pas bien."
      }
    ],

    merke: [
      "nicht = ne ... pas",
      "kein = pas de / aucun",
      "keine = pas de / aucune",
      "Lerne die Negation mit einfachen Beispielen."
    ],

    miniTest: [
      {
        question: "Ich komme ___.",
        options: ["kein", "keine", "nicht", "nein"],
        correct: 2
      },
      {
        question: "Ich habe ___ Auto.",
        options: ["nicht", "kein", "keine", "nein"],
        correct: 1
      },
      {
        question: "Ich habe ___ Zeit.",
        options: ["kein", "nicht", "keine", "nein"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.11 - PRÄPOSITIONEN UND ALLTAG
  // ==========================================================

  {
    id: "a1-11",
    level: "A1",
    number: 11,
    title: "Präpositionen und Alltag",
    frenchTitle: "Prépositions et vie quotidienne",

    lernziel:
      "Du kannst wichtige Präpositionen und einfache Alltagssätze verstehen.",

    erklaerung: `
Präpositionen zeigen oft einen Ort,
eine Richtung oder eine Beziehung.

Wichtige Präpositionen auf A1 sind:

in = dans
auf = sur
unter = sous
über = au-dessus de
neben = à côté de
zwischen = entre
vor = devant
hinter = derrière
mit = avec
ohne = sans
aus = de / en provenance de
nach = vers / à

Lerne die Präpositionen mit Beispielsätzen.
    `,

    wortschatz: [
      { de: "in", fr: "dans / en" },
      { de: "auf", fr: "sur" },
      { de: "unter", fr: "sous" },
      { de: "über", fr: "au-dessus de" },
      { de: "neben", fr: "à côté de" },
      { de: "zwischen", fr: "entre" },
      { de: "vor", fr: "devant" },
      { de: "hinter", fr: "derrière" },
      { de: "mit", fr: "avec" },
      { de: "ohne", fr: "sans" },
      { de: "aus", fr: "de / en provenance de" },
      { de: "nach", fr: "vers / à" }
    ],

    beispiele: [
      {
        de: "Ich gehe in die Schule.",
        fr: "Je vais à l'école."
      },
      {
        de: "Ich bin zu Hause.",
        fr: "Je suis à la maison."
      },
      {
        de: "Das Buch liegt auf dem Tisch.",
        fr: "Le livre est sur la table."
      },
      {
        de: "Er kommt aus Deutschland.",
        fr: "Il vient d'Allemagne."
      },
      {
        de: "Ich fahre mit dem Bus.",
        fr: "Je vais en bus."
      }
    ],

    merke: [
      "in = dans",
      "auf = sur",
      "mit = avec",
      "ohne = sans",
      "aus = de / en provenance de",
      "nach = vers / à"
    ],

    miniTest: [
      {
        question: "Das Buch liegt ___ dem Tisch.",
        options: ["auf", "mit", "ohne", "nach"],
        correct: 0
      },
      {
        question: "Ich fahre ___ dem Bus.",
        options: ["ohne", "mit", "hinter", "unter"],
        correct: 1
      },
      {
        question: "Er kommt ___ Deutschland.",
        options: ["auf", "zwischen", "aus", "vor"],
        correct: 2
      }
    ]
  }

];


// ============================================================
// VÉRIFICATION
// ============================================================

console.log(
  "✅ DeutschConnect data.js chargé"
);

console.log(
  "📚 Nombre de leçons A1 :",
  window.A1_LESSONS.length
);
