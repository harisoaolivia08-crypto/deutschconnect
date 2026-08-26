function getA1Lessons() {

  // Nouveau data.js
  if (
    typeof A1_LESSONS !== "undefined" &&
    Array.isArray(A1_LESSONS)
  ) {
    return A1_LESSONS.filter(function (lesson) {
      return lesson.level === "A1";
    });
  }

  // Ancien format : lessons
  if (
    typeof lessons !== "undefined" &&
    Array.isArray(lessons)
  ) {
    return lessons.filter(function (lesson) {
      return lesson.level === "A1";
    });
  }

  // Ancien format : a1Lessons
  if (
    typeof a1Lessons !== "undefined" &&
    Array.isArray(a1Lessons)
  ) {
    return a1Lessons;
  }

  // Ancien format : lernzettel
  if (
    typeof lernzettel !== "undefined" &&
    Array.isArray(lernzettel)
  ) {
    return lernzettel.filter(function (lesson) {
      return lesson.level === "A1";
    });
  }

  console.error("❌ Aucune donnée A1 trouvée dans data.js");

  return [];
}
