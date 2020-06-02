/*
 * Global
 */

function filterSite() {
  hideQuestions();
}

/*
 * Question Masker
 */

function hideQuestions() {
  const questions = findQuestions();
  questions.forEach((question) => {
    hideQuestion(question);
  });
}

function findQuestions() {
  const headlines = findHeadlines();
  return Array.from(headlines).filter((headline) => {
    return headline.innerText.includes("?");
  });
}

/*
 * Common
 */

function findHeadlines() {
  return document.querySelectorAll("a.storylink");
}

function hideQuestion(question) {
  blurElement(question);
}

function blurElement(element) {
  element.style["-webkit-filter"] = "blur(10px)";
}

filterSite();
