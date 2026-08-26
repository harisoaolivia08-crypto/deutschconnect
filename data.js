// ============================================================
// DEUTSCHCONNECT 🇩🇪
// A1 - Lernzettel
// Erklärungen: Leichtes Deutsch
// Wortschatz: Deutsch → Français
// ============================================================

const A1_LESSONS = [

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
      "Du kannst andere Menschen begrüßen, verabschieden und höflich sein.",

    erklaerung: `
      Wenn wir eine Person treffen, begrüßen wir sie.
      Am Morgen sagen wir zum Beispiel „Guten Morgen“.
      Am Abend sagen wir „Guten Abend“.

      Bei Freunden und Bekannten können wir „Hallo“ oder „Tschüss“ sagen.
      In einer formellen Situation benutzen wir „Guten Tag“ oder
      „Auf Wiedersehen“.
    `,

    wortschatz: [
      { de: "Hallo", fr: "Bonjour / Salut" },
      { de: "Guten Morgen", fr: "Bonjour, le matin" },
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
        fr: "Bonjour ! Comment vas-tu ?"
      },
      {
        de: "Guten Morgen, Frau Müller.",
        fr: "Bonjour, Madame Müller."
      },
      {
        de: "Danke!",
        fr: "Merci !"
      },
      {
        de: "Bitte!",
        fr: "De rien !"
      },
      {
        de: "Auf Wiedersehen!",
        fr: "Au revoir !"
      }
    ],

    merke: [
      "Hallo = informell.",
      "Tschüss = informell.",
      "Auf Wiedersehen = formell.",
      "Guten Morgen sagt man am Morgen.",
      "Guten Abend sagt man am Abend."
    ],

    miniTest: [
      {
        question: "Was sagt man am Morgen?",
        options: [
          "Gute Nacht",
          "Guten Morgen",
          "Tschüss",
          "Auf Wiedersehen"
        ],
        correct: 1
      },
      {
        question: "Was bedeutet „Danke“?",
        options: [
          "Bonjour",
          "Merci",
          "Au revoir",
          "Pardon"
        ],
        correct: 1
      },
      {
        question: "Was sagt man beim formellen Abschied?",
        options: [
          "Hallo",
          "Tschüss",
          "Auf Wiedersehen",
          "Danke"
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
      "Du kannst dich vorstellen und einfache Informationen über dich geben.",

    erklaerung: `
      Wenn wir eine neue Person treffen, können wir uns vorstellen.

      Wir sagen unseren Namen, unser Alter, unser Land, unsere Stadt
      und welche Sprachen wir sprechen.

      Wir benutzen dafür einfache Sätze.
    `,

    wortschatz: [
      { de: "heißen", fr: "s'appeler" },
      { de: "der Name", fr: "le nom" },
      { de: "das Alter", fr: "l'âge" },
      { de: "Jahre alt", fr: "ans" },
      { de: "kommen aus", fr: "venir de" },
      { de: "wohnen", fr: "habiter" },
      { de: "sprechen", fr: "parler" },
      { de: "lernen", fr: "apprendre" },
      { de: "die Sprache", fr: "la langue" },
      { de: "Deutschland", fr: "Allemagne" },
      { de: "Frankreich", fr: "France" }
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
        de: "Ich spreche Deutsch und Französisch.",
        fr: "Je parle allemand et français."
      },
      {
        de: "Ich lerne Deutsch.",
        fr: "J'apprends l'allemand."
      }
    ],

    dialog: [
      {
        person: "Anna",
        text: "Hallo! Ich heiße Anna. Wie heißt du?"
      },
      {
        person: "Paul",
        text: "Hallo Anna! Ich heiße Paul."
      },
      {
        person: "Anna",
        text: "Woher kommst du?"
      },
      {
        person: "Paul",
        text: "Ich komme aus Deutschland."
      }
    ],

    merke: [
      "Ich heiße ... = Je m'appelle ...",
      "Ich bin ... Jahre alt. = J'ai ... ans.",
      "Ich komme aus ... = Je viens de ...",
      "Ich wohne in ... = J'habite à ...",
      "Ich spreche ... = Je parle ..."
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
        question: "Wie sagt man „J'ai 20 ans“?",
        options: [
          "Ich habe 20 Jahre.",
          "Ich bin 20 Jahre alt.",
          "Ich heiße 20.",
          "Ich wohne 20 Jahre."
        ],
        correct: 1
      },
      {
        question: "Was bedeutet „Woher kommst du?“?",
        options: [
          "Où habites-tu ?",
          "Quel âge as-tu ?",
          "D'où viens-tu ?",
          "Comment t'appelles-tu ?"
        ],
        correct: 2
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
      "Du kennst die wichtigsten Personalpronomen auf Deutsch.",

    erklaerung: `
      Ein Personalpronomen steht für eine Person oder eine Sache.

      Zum Beispiel:
      Anna ist hier. → Sie ist hier.

      Paul ist hier. → Er ist hier.

      Wir benutzen „Sie“ mit einem großen S, wenn wir eine Person
      formell ansprechen.
    `,

    wortschatz: [
      { de: "ich", fr: "je" },
      { de: "du", fr: "tu" },
      { de: "er", fr: "il" },
      { de: "sie", fr: "elle / ils / elles" },
      { de: "es", fr: "il / elle pour une chose ou un neutre" },
      { de: "wir", fr: "nous" },
      { de: "ihr", fr: "vous (pluriel informel)" },
      { de: "Sie", fr: "vous (formel)" }
    ],

    pronomen: [
      { person: "ich", fr: "je" },
      { person: "du", fr: "tu" },
      { person: "er", fr: "il" },
      { person: "sie", fr: "elle / ils / elles" },
      { person: "es", fr: "il / elle pour une chose" },
      { person: "wir", fr: "nous" },
      { person: "ihr", fr: "vous, pluriel informel" },
      { person: "sie", fr: "ils / elles" },
      { person: "Sie", fr: "vous, formel" }
    ],

    beispiele: [
      {
        de: "Ich bin Anna.",
        fr: "Je suis Anna."
      },
      {
        de: "Du bist Peter.",
        fr: "Tu es Peter."
      },
      {
        de: "Er ist mein Bruder.",
        fr: "Il est mon frère."
      },
      {
        de: "Sie ist meine Schwester.",
        fr: "Elle est ma sœur."
      },
      {
        de: "Wir sind Freunde.",
        fr: "Nous sommes amis."
      },
      {
        de: "Ihr seid Schüler.",
        fr: "Vous êtes des élèves."
      },
      {
        de: "Sie sind meine Eltern.",
        fr: "Ils sont mes parents."
      }
    ],

    merke: [
      "ich = je",
      "du = tu",
      "er = il",
      "sie = elle / ils / elles",
      "wir = nous",
      "ihr = vous, informel pluriel",
      "Sie = vous, formel"
    ],

    miniTest: [
      {
        question: "Anna ist meine Freundin. ___ ist nett.",
        options: ["Er", "Sie", "Wir", "Ihr"],
        correct: 1
      },
      {
        question: "Paul und ich sind Freunde. ___ sind Freunde.",
        options: ["Ihr", "Sie", "Wir", "Er"],
        correct: 2
      },
      {
        question: "Paul ist mein Bruder. ___ ist 20 Jahre alt.",
        options: ["Sie", "Wir", "Er", "Ihr"],
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
    title: "Das Verb „sein“",
    frenchTitle: "Le verbe être",

    lernziel:
      "Du kannst das Verb „sein“ im Präsens benutzen.",

    erklaerung: `
      Das Verb „sein“ ist sehr wichtig.

      Wir benutzen „sein“ zum Beispiel für Namen, Alter, Berufe,
      Personen und Eigenschaften.

      Das Verb verändert sich je nach Person.
    `,

    wortschatz: [
      { de: "sein", fr: "être" },
      { de: "alt", fr: "âgé / vieux" },
      { de: "jung", fr: "jeune" },
      { de: "nett", fr: "gentil / aimable" },
      { de: "müde", fr: "fatigué" },
      { de: "krank", fr: "malade" },
      { de: "gesund", fr: "en bonne santé" },
      { de: "Student / Studentin", fr: "étudiant / étudiante" },
      { de: "Lehrer / Lehrerin", fr: "professeur / enseignante" }
    ],

    konjugation: [
      { person: "ich", form: "bin", fr: "je suis" },
      { person: "du", form: "bist", fr: "tu es" },
      { person: "er", form: "ist", fr: "il est" },
      { person: "sie", form: "ist", fr: "elle est" },
      { person: "es", form: "ist", fr: "c'est / il est" },
      { person: "wir", form: "sind", fr: "nous sommes" },
      { person: "ihr", form: "seid", fr: "vous êtes" },
      { person: "sie", form: "sind", fr: "ils / elles sont" },
      { person: "Sie", form: "sind", fr: "vous êtes, formel" }
    ],

    beispiele: [
      {
        de: "Ich bin Anna.",
        fr: "Je suis Anna."
      },
      {
        de: "Ich bin 20 Jahre alt.",
        fr: "J'ai 20 ans."
      },
      {
        de: "Du bist nett.",
        fr: "Tu es gentil."
      },
      {
        de: "Er ist Lehrer.",
        fr: "Il est professeur."
      },
      {
        de: "Wir sind in Deutschland.",
        fr: "Nous sommes en Allemagne."
      },
      {
        de: "Ihr seid müde.",
        fr: "Vous êtes fatigués."
      }
    ],

    merke: [
      "ich → bin",
      "du → bist",
      "er / sie / es → ist",
      "wir → sind",
      "ihr → seid",
      "sie / Sie → sind"
    ],

    miniTest: [
      {
        question: "Ich ___ Anna.",
        options: ["bist", "bin", "ist", "sind"],
        correct: 1
      },
      {
        question: "Du ___ nett.",
        options: ["bin", "ist", "bist", "seid"],
        correct: 2
      },
      {
        question: "Wir ___ in Deutschland.",
        options: ["ist", "sind", "seid", "bin"],
        correct: 1
      },
      {
        question: "Ihr ___ müde.",
        options: ["seid", "sind", "bist", "ist"],
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
    title: "Das Verb „haben“",
    frenchTitle: "Le verbe avoir",

    lernziel:
      "Du kannst das Verb „haben“ benutzen und einfache Dinge beschreiben.",

    erklaerung: `
      Das Verb „haben“ bedeutet, dass eine Person etwas besitzt
      oder etwas hat.

      Wir benutzen „haben“ auch bei bestimmten Ausdrücken,
      zum Beispiel beim Alter.
    `,

    wortschatz: [
      { de: "haben", fr: "avoir" },
      { de: "das Auto", fr: "la voiture" },
      { de: "das Buch", fr: "le livre" },
      { de: "das Handy", fr: "le téléphone portable" },
      { de: "die Zeit", fr: "le temps" },
      { de: "die Familie", fr: "la famille" },
      { de: "der Bruder", fr: "le frère" },
      { de: "die Schwester", fr: "la sœur" },
      { de: "ein", fr: "un" },
      { de: "eine", fr: "une" }
    ],

    konjugation: [
      { person: "ich", form: "habe", fr: "j'ai" },
      { person: "du", form: "hast", fr: "tu as" },
      { person: "er", form: "hat", fr: "il a" },
      { person: "sie", form: "hat", fr: "elle a" },
      { person: "es", form: "hat", fr: "il / elle a" },
      { person: "wir", form: "haben", fr: "nous avons" },
      { person: "ihr", form: "habt", fr: "vous avez" },
      { person: "sie", form: "haben", fr: "ils / elles ont" },
      { person: "Sie", form: "haben", fr: "vous avez, formel" }
    ],

    beispiele: [
      {
        de: "Ich habe ein Auto.",
        fr: "J'ai une voiture."
      },
      {
        de: "Du hast ein Buch.",
        fr: "Tu as un livre."
      },
      {
        de: "Er hat ein Handy.",
        fr: "Il a un téléphone."
      },
      {
        de: "Wir haben Zeit.",
        fr: "Nous avons du temps."
      },
      {
        de: "Ihr habt eine Familie.",
        fr: "Vous avez une famille."
      }
    ],

    merke: [
      "ich → habe",
      "du → hast",
      "er / sie / es → hat",
      "wir → haben",
      "ihr → habt",
      "sie / Sie → haben"
    ],

    miniTest: [
      {
        question: "Ich ___ ein Auto.",
        options: ["hat", "hast", "habe", "haben"],
        correct: 2
      },
      {
        question: "Du ___ ein Buch.",
        options: ["habe", "hast", "hat", "haben"],
        correct: 1
      },
      {
        question: "Wir ___ Zeit.",
        options: ["haben", "habt", "hat", "hast"],
        correct: 0
      },
      {
        question: "Er ___ ein Handy.",
        options: ["haben", "habe", "hat", "hast"],
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
    title: "Artikel: der, die, das",
    frenchTitle: "Les articles",

    lernziel:
      "Du kennst die bestimmten und unbestimmten Artikel.",

    erklaerung: `
      Nomen haben im Deutschen ein grammatisches Geschlecht.

      Es gibt drei bestimmte Artikel:

      der → maskulin
      die → feminin
      das → neutrum

      Im Plural benutzen wir immer „die“.

      Es gibt auch unbestimmte Artikel:

      ein → maskulin und neutrum
      eine → feminin
    `,

    wortschatz: [
      { de: "der Mann", fr: "l'homme" },
      { de: "die Frau", fr: "la femme" },
      { de: "das Kind", fr: "l'enfant" },
      { de: "der Tisch", fr: "la table" },
      { de: "die Tür", fr: "la porte" },
      { de: "das Fenster", fr: "la fenêtre" },
      { de: "der Stuhl", fr: "la chaise" },
      { de: "die Schule", fr: "l'école" },
      { de: "das Buch", fr: "le livre" }
    ],

    artikel: [
      {
        artikel: "der",
        typ: "maskulin",
        beispiel: "der Mann",
        fr: "l'homme"
      },
      {
        artikel: "die",
        typ: "feminin",
        beispiel: "die Frau",
        fr: "la femme"
      },
      {
        artikel: "das",
        typ: "neutrum",
        beispiel: "das Kind",
        fr: "l'enfant"
      },
      {
        artikel: "die",
        typ: "Plural",
        beispiel: "die Kinder",
        fr: "les enfants"
      }
    ],

    beispiele: [
      {
        de: "Der Mann ist hier.",
        fr: "L'homme est ici."
      },
      {
        de: "Die Frau ist nett.",
        fr: "La femme est gentille."
      },
      {
        de: "Das Kind ist klein.",
        fr: "L'enfant est petit."
      },
      {
        de: "Die Kinder sind in der Schule.",
        fr: "Les enfants sont à l'école."
      }
    ],

    merke: [
      "der = masculin",
      "die = féminin",
      "das = neutre",
      "die = pluriel",
      "Apprends toujours le nom avec son article."
    ],

    miniTest: [
      {
        question: "___ Mann",
        options: ["der", "die", "das", "ein"],
        correct: 0
      },
      {
        question: "___ Frau",
        options: ["der", "die", "das", "ein"],
        correct: 1
      },
      {
        question: "___ Kind",
        options: ["der", "die", "das", "eine"],
        correct: 2
      },
      {
        question: "___ Kinder",
        options: ["der", "die", "das", "ein"],
        correct: 1
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
    frenchTitle: "Les verbes au présent",

    lernziel:
      "Du kannst regelmäßige Verben im Präsens konjugieren.",

    erklaerung: `
      Im Deutschen verändern regelmäßige Verben ihre Endung.

      Beispiel: lernen

      Der Stamm ist „lern“.

      ich → -e
      du → -st
      er / sie / es → -t
      wir → -en
      ihr → -t
      sie / Sie → -en

      Das Verb steht in einem einfachen Hauptsatz meistens an
      der zweiten Position.
    `,

    wortschatz: [
      { de: "lernen", fr: "apprendre" },
      { de: "machen", fr: "faire" },
      { de: "wohnen", fr: "habiter" },
      { de: "arbeiten", fr: "travailler" },
      { de: "spielen", fr: "jouer" },
      { de: "kaufen", fr: "acheter" },
      { de: "fragen", fr: "demander" },
      { de: "sagen", fr: "dire" },
      { de: "leben", fr: "vivre" },
      { de: "machen", fr: "faire" }
    ],

    konjugation: [
      { person: "ich", form: "lerne", fr: "j'apprends" },
      { person: "du", form: "lernst", fr: "tu apprends" },
      { person: "er/sie/es", form: "lernt", fr: "il/elle apprend" },
      { person: "wir", form: "lernen", fr: "nous apprenons" },
      { person: "ihr", form: "lernt", fr: "vous apprenez" },
      { person: "sie/Sie", form: "lernen", fr: "ils/vous apprennent" }
    ],

    beispiele: [
      {
        de: "Ich lerne Deutsch.",
        fr: "J'apprends l'allemand."
      },
      {
        de: "Du wohnst in Berlin.",
        fr: "Tu habites à Berlin."
      },
      {
        de: "Er arbeitet in Deutschland.",
        fr: "Il travaille en Allemagne."
      },
      {
        de: "Wir lernen zusammen.",
        fr: "Nous apprenons ensemble."
      },
      {
        de: "Ihr spielt Fußball.",
        fr: "Vous jouez au football."
      }
    ],

    merke: [
      "ich → -e",
      "du → -st",
      "er / sie / es → -t",
      "wir → -en",
      "ihr → -t",
      "sie / Sie → -en",
      "Im Hauptsatz steht das konjugierte Verb meistens an Position 2."
    ],

    miniTest: [
      {
        question: "Ich ___ Deutsch.",
        options: ["lernst", "lernen", "lerne", "lernt"],
        correct: 2
      },
      {
        question: "Du ___ in Berlin.",
        options: ["wohne", "wohnst", "wohnen", "wohnt"],
        correct: 1
      },
      {
        question: "Wir ___ zusammen.",
        options: ["lernt", "lernen", "lerne", "lernst"],
        correct: 1
      },
      {
        question: "Er ___ in Deutschland.",
        options: ["arbeiten", "arbeitet", "arbeitest", "arbeite"],
        correct: 1
      }
    ]
  },


  // ==========================================================
  // A1.08 - W-FRAGEN
  // ==========================================================

  {
    id: "a1-08",
    level: "A1",
    number: 8,
    title: "W-Fragen",
    frenchTitle: "Questions en W",

    lernziel:
      "Du kannst einfache Fragen mit W-Fragewörtern stellen und verstehen.",

    erklaerung: `
      W-Fragen beginnen mit einem Fragewort.

      Das Fragewort steht meistens am Anfang.
      Danach kommt das Verb und dann die Person oder die Sache.

      Beispiel:

      Wo wohnst du?

      Wo = Fragewort
      wohnst = Verb
      du = Person
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
      { de: "Wie viel?", fr: "Combien ?" },
      { de: "Wie alt?", fr: "Quel âge ?" }
    ],

    beispiele: [
      {
        de: "Wer bist du?",
        fr: "Qui es-tu ?"
      },
      {
        de: "Was machst du?",
        fr: "Qu'est-ce que tu fais ?"
      },
      {
        de: "Wo wohnst du?",
        fr: "Où habites-tu ?"
      },
      {
        de: "Woher kommst du?",
        fr: "D'où viens-tu ?"
      },
      {
        de: "Wohin gehst du?",
        fr: "Où vas-tu ?"
      },
      {
        de: "Wann kommst du?",
        fr: "Quand viens-tu ?"
      },
      {
        de: "Warum lernst du Deutsch?",
        fr: "Pourquoi apprends-tu l'allemand ?"
      },
      {
        de: "Wie heißt du?",
        fr: "Comment t'appelles-tu ?"
      },
      {
        de: "Wie viel kostet das?",
        fr: "Combien cela coûte-t-il ?"
      }
    ],

    merke: [
      "Wer? → Person",
      "Was? → Sache oder Handlung",
      "Wo? → Ort",
      "Wohin? → Richtung",
      "Woher? → Herkunft",
      "Wann? → Zeit",
      "Warum? → Grund",
      "Wie? → Art oder Weise",
      "Wie viel? → Menge oder Preis"
    ],

    miniTest: [
      {
        question: "___ wohnst du?",
        options: ["Wer", "Wo", "Wann", "Warum"],
        correct: 1
      },
      {
        question: "___ kommst du?",
        options: ["Woher", "Was", "Wer", "Wie viel"],
        correct: 0
      },
      {
        question: "___ heißt du?",
        options: ["Wo", "Warum", "Wie", "Wann"],
        correct: 2
      },
      {
        question: "___ kostet das?",
        options: ["Wer", "Wie viel", "Woher", "Warum"],
        correct: 1
      }
    ]
  },


  // ==========================================================
  // A1.09 - NEGATION
  // ==========================================================

  {
    id: "a1-09",
    level: "A1",
    number: 9,
    title: "Negation: nicht und kein",
    frenchTitle: "La négation",

    lernziel:
      "Du kannst einfache Sätze auf Deutsch verneinen.",

    erklaerung: `
      Wir benutzen „nicht“ und „kein“, um etwas zu verneinen.

      „nicht“ benutzt man oft bei Verben, Adjektiven oder bestimmten
      Informationen.

      „kein“ benutzt man bei einem Nomen mit „ein/eine“ oder ohne Artikel.

      Beispiele:

      Ich komme nicht.
      Ich bin nicht müde.
      Ich habe kein Auto.
      Ich habe keine Zeit.
    `,

    wortschatz: [
      { de: "nicht", fr: "ne ... pas" },
      { de: "kein", fr: "aucun / pas de (masculin / neutre)" },
      { de: "keine", fr: "aucune / pas de (féminin / pluriel)" },
      { de: "nichts", fr: "rien" },
      { de: "müde", fr: "fatigué" },
      { de: "Zeit", fr: "temps" },
      { de: "Auto", fr: "voiture" },
      { de: "Geld", fr: "argent" }
    ],

    beispiele: [
      {
        de: "Ich komme nicht.",
        fr: "Je ne viens pas."
      },
      {
        de: "Ich bin nicht müde.",
        fr: "Je ne suis pas fatigué."
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
        fr: "Ce n'est pas bon."
      }
    ],

    merke: [
      "nicht = ne ... pas",
      "kein = pas de / aucun",
      "keine = pas de / aucune au féminin et au pluriel",
      "Ich habe kein Auto.",
      "Ich bin nicht müde."
    ],

    miniTest: [
      {
        question: "Ich komme ___.",
        options: ["kein", "keine", "nicht", "nichts"],
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
      },
      {
        question: "Ich bin ___ müde.",
        options: ["kein", "keine", "nicht", "nichts"],
        correct: 2
      }
    ]
  },


  // ==========================================================
  // A1.10 - PRÄPOSITIONEN
  // ==========================================================

  {
    id: "a1-10",
    level: "A1",
    number: 10,
    title: "Präpositionen",
    frenchTitle: "Les prépositions",

    lernziel:
      "Du kannst wichtige Präpositionen verstehen und in einfachen Sätzen benutzen.",

    erklaerung: `
      Präpositionen zeigen oft einen Ort, eine Richtung oder eine Verbindung.

      Wichtige Präpositionen auf A1:

      in = dans
      auf = sur
      mit = avec
      ohne = sans
      vor = devant / avant
      hinter = derrière
      neben = à côté de
      unter = sous
      über = au-dessus de
      zwischen = entre
      aus = de / depuis
      nach = vers / après
      von = de / depuis
      zu = chez / vers
    `,

    wortschatz: [
      { de: "in", fr: "dans / en" },
      { de: "auf", fr: "sur" },
      { de: "mit", fr: "avec" },
      { de: "ohne", fr: "sans" },
      { de: "vor", fr: "devant / avant" },
      { de: "hinter", fr: "derrière" },
      { de: "neben", fr: "à côté de" },
      { de: "unter", fr: "sous" },
      { de: "über", fr: "au-dessus de" },
      { de: "zwischen", fr: "entre" },
      { de: "aus", fr: "de / depuis" },
      { de: "nach", fr: "vers / après" },
      { de: "von", fr: "de / depuis" },
      { de: "zu", fr: "chez / vers" }
    ],

    beispiele: [
      {
        de: "Ich bin zu Hause.",
        fr: "Je suis à la maison."
      },
      {
        de: "Ich gehe in die Schule.",
        fr: "Je vais à l'école."
      },
      {
        de: "Das Buch liegt auf dem Tisch.",
        fr: "Le livre est sur la table."
      },
      {
        de: "Der Hund ist unter dem Tisch.",
        fr: "Le chien est sous la table."
      },
      {
        de: "Ich gehe mit meiner Freundin.",
        fr: "Je vais avec mon amie."
      },
      {
        de: "Ich komme aus Deutschland.",
        fr: "Je viens d'Allemagne."
      },
      {
        de: "Ich fahre nach Berlin.",
        fr: "Je vais à Berlin."
      }
    ],

    merke: [
      "in = dans",
      "auf = sur",
      "mit = avec",
      "ohne = sans",
      "aus = de / depuis",
      "nach = vers, surtout pour les villes et pays sans article",
      "zu = chez / vers",
      "Die Präposition steht vor dem Nomen."
    ],

    miniTest: [
      {
        question: "Das Buch liegt ___ dem Tisch.",
        options: ["mit", "auf", "ohne", "aus"],
        correct: 1
      },
      {
        question: "Ich komme ___ Deutschland.",
        options: ["auf", "mit", "aus", "ohne"],
        correct: 2
      },
      {
        question: "Ich gehe ___ die Schule.",
        options: ["in", "ohne", "aus", "mit"],
        correct: 0
      },
      {
        question: "Ich fahre ___ Berlin.",
        options: ["mit", "nach", "unter", "hinter"],
        correct: 1
      }
    ]
  },


  // ==========================================================
  // A1.11 - WÖRTER DES ALLTAGS
  // ==========================================================

  {
    id: "a1-11",
    level: "A1",
    number: 11,
    title: "Wörter des Alltags",
    frenchTitle: "Vocabulaire quotidien",

    lernziel:
      "Du kennst wichtige Wörter aus dem Alltag.",

    erklaerung: `
      Im Alltag brauchen wir viele einfache Wörter.

      Wir lernen Wörter aus verschiedenen Bereichen:
      Zuhause, Familie, Essen, Schule und Arbeit,
      Verkehr, Zeit, Farben und wichtige Adjektive.

      Lerne Nomen immer mit dem Artikel.
      Zum Beispiel: der Tisch, die Tür, das Haus.
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
          { de: "die Lehrerin", fr: "la professeure" },
          { de: "der Schüler", fr: "l'élève" },
          { de: "die Schülerin", fr: "l'élève (fille)" },
          { de: "die Arbeit", fr: "le travail" },
          { de: "der Beruf", fr: "le métier / la profession" },
          { de: "das Büro", fr: "le bureau" },
          { de: "der Kollege", fr: "le collègue" },
          { de: "die Kollegin", fr: "la collègue" }
        ]
      },

      {
        name: "🚆 Verkehr",
        words: [
          { de: "das Auto", fr: "la voiture" },
          { de: "der Bus", fr: "le bus" },
          { de: "der Zug", fr: "le train" },
          { de: "das Fahrrad", fr: "le vélo" },
          { de: "die Straße", fr: "la rue" },
          { de: "der Bahnhof", fr: "la gare" },
          { de: "die Haltestelle", fr: "l'arrêt" },
          { de: "der Flughafen", fr: "l'aéroport" }
        ]
      },

      {
        name: "⏰ Zeit",
        words: [
          { de: "heute", fr: "aujourd'hui" },
          { de: "morgen", fr: "demain" },
          { de: "gestern", fr: "hier" },
          { de: "jetzt", fr: "maintenant" },
          { de: "später", fr: "plus tard" },
          { de: "immer", fr: "toujours" },
          { de: "oft", fr: "souvent" },
          { de: "selten", fr: "rarement" },
          { de: "nie", fr: "jamais" }
        ]
      },

      {
        name: "🎨 Farben",
        words: [
          { de: "rot", fr: "rouge" },
          { de: "blau", fr: "bleu" },
          { de: "grün", fr: "vert" },
          { de: "schwarz", fr: "noir" },
          { de: "weiß", fr: "blanc" },
          { de: "grau", fr: "gris" },
          { de: "braun", fr: "marron" },
          { de: "orange", fr: "orange" },
          { de: "lila", fr: "violet" }
        ]
      },

      {
        name: "⭐ Wichtige Wörter und Adjektive",
        words: [
          { de: "ja", fr: "oui" },
          { de: "nein", fr: "non" },
          { de: "bitte", fr: "s'il te plaît / de rien" },
          { de: "danke", fr: "merci" },
          { de: "vielleicht", fr: "peut-être" },
          { de: "zusammen", fr: "ensemble" },
          { de: "groß", fr: "grand" },
          { de: "klein", fr: "petit" },
          { de: "alt", fr: "vieux / âgé" },
          { de: "jung", fr: "jeune" },
          { de: "schön", fr: "beau" },
          { de: "gut", fr: "bon / bien" },
          { de: "schlecht", fr: "mauvais / mal" },
          { de: "neu", fr: "nouveau" },
          { de: "billig", fr: "bon marché" },
          { de: "teuer", fr: "cher" }
        ]
      },

      {
        name: "🏃 Verben des Alltags",
        words: [
          { de: "gehen", fr: "aller" },
          { de: "kommen", fr: "venir" },
          { de: "machen", fr: "faire" },
          { de: "essen", fr: "manger" },
          { de: "trinken", fr: "boire" },
          { de: "schlafen", fr: "dormir" },
          { de: "arbeiten", fr: "travailler" },
          { de: "lernen", fr: "apprendre" },
          { de: "sprechen", fr: "parler" },
          { de: "sehen", fr: "voir" },
          { de: "hören", fr: "entendre / écouter" },
          { de: "kaufen", fr: "acheter" },
          { de: "wohnen", fr: "habiter" }
        ]
      }
    ],

    beispiele: [
      {
        de: "Ich wohne in einem Haus.",
        fr: "J'habite dans une maison."
      },
      {
        de: "Meine Mutter trinkt Kaffee.",
        fr: "Ma mère boit du café."
      },
      {
        de: "Ich gehe zur Schule.",
        fr: "Je vais à l'école."
      },
      {
        de: "Ich fahre mit dem Bus.",
        fr: "Je prends le bus."
      },
      {
        de: "Heute lerne ich Deutsch.",
        fr: "Aujourd'hui, j'apprends l'allemand."
      },
      {
        de: "Das Auto ist rot.",
        fr: "La voiture est rouge."
      },
      {
        de: "Das Essen ist gut.",
        fr: "La nourriture est bonne."
      }
    ],

    merke: [
      "Lerne Nomen immer mit dem Artikel.",
      "das Haus, die Mutter, der Tisch.",
      "Lerne neue Wörter in kleinen Gruppen.",
      "Benutze neue Wörter in einfachen Sätzen."
    ],

    miniTest: [
      {
        question: "Was bedeutet „das Haus“?",
        options: [
          "la voiture",
          "la maison",
          "la table",
          "la chambre"
        ],
        correct: 1
      },
      {
        question: "Was bedeutet „die Mutter“?",
        options: [
          "le père",
          "la sœur",
          "la mère",
          "la grand-mère"
        ],
        correct: 2
      },
      {
        question: "Was bedeutet „der Zug“?",
        options: [
          "le bus",
          "le train",
          "le vélo",
          "la voiture"
        ],
        correct: 1
      },
      {
        question: "Was bedeutet „heute“?",
        options: [
          "demain",
          "hier",
          "maintenant",
          "aujourd'hui"
        ],
        correct: 3
      },
      {
        question: "Was bedeutet „teuer“?",
        options: [
          "bon marché",
          "nouveau",
          "cher",
          "petit"
        ],
        correct: 2
      }
    ]
  }

];


// ============================================================
// FONCTIONS POUR DEUTSCHCONNECT
// ============================================================

// Alle A1-Lektionen zurückgeben
function getA1Lessons() {
  return A1_LESSONS;
}

// Eine bestimmte Lektion finden
function getLessonById(id) {
  return A1_LESSONS.find(lesson => lesson.id === id);
}

// Eine Lektion nach Nummer finden
function getLessonByNumber(number) {
  return A1_LESSONS.find(lesson => lesson.number === number);
}

// Anzahl der A1-Lektionen
function getA1LessonCount() {
  return A1_LESSONS.length;
}

// Alle Wörter aus A1 sammeln
function getAllA1Vocabulary() {
  const vocabulary = [];

  A1_LESSONS.forEach(lesson => {

    if (lesson.wortschatz) {
      vocabulary.push(...lesson.wortschatz);
    }

    if (lesson.kategorien) {
      lesson.kategorien.forEach(category => {
        vocabulary.push(...category.words);
      });
    }
  });

  return vocabulary;
}

// ============================================================
// EXPORT
// ============================================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    A1_LESSONS,
    getA1Lessons,
    getLessonById,
    getLessonByNumber,
    getA1LessonCount,
    getAllA1Vocabulary
  };
}
