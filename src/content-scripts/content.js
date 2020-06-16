import {fetchSettings} from "common/settings";
import Vue from "vue";
import App from "./takeover/components/App.vue";

/*
 * Global
 */

export async function filterSite() {
  const settings = await fetchSettings();
  if (settings.allDisabled) {
    return;
  }
  if (settings.questionsBlurring.enabled) {
    hideQuestions();
  }
  if (settings.entryTakeover.enabled) {
    showTakeover();
  }

  if (settings.greyscale.enabled) {
    makeGreyscale(settings);
  }
}

function hideLinks() {
  const links = document.querySelectorAll("a");
  for (let link of links) {
    blurElement(link);
  }
}

/*
 * Takeover
 */

function showTakeover() {
  if (!(location.href == "https://news.ycombinator.com/")) {
    return;
  }
  const div = document.createElement("div");
  document.body.insertBefore(div, document.body.firstChild);

  new Vue({
    el: div,
    render: (h) => {
      return h(App);
    },
  });
}

/*
 * Greyscaler
 */
function makeGreyscale(settings) {
  const url = location.href;
  const badSites = settings.badSites;
  const shouldApply = badSites.some((site) => {
    return url.includes(site);
  });
  if (!shouldApply) {
    return;
  }
  document.body.style.filter = "grayscale(1)";
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
  const headlines = findHackerNewsHeadlines();
  return Array.from(headlines).filter((headline) => {
    return headline.innerText.includes("?");
  });
}

/*
 * Common
 */

function addVueApp(app) {}

// function detectHeadlines() {
//   // BST of the dom
//   // Find a dom that has at least 3 siblings and for each of the siblings
//   // They are the same dom element
//   // They have at least one class in common
//   // They are links OR have at least one link
// }

// function detectHeadlinesBFS(queue) {
//   // Base Case
//   while (queue.length >= 0) {
//     const current = queue.pop();
//     if (isHeadlineContainer(current)) {
//       blurElement(current);
//     } else {
//       const children = current.children;
//       queue = queue.concat(children;)
//     }
//   }
// }

// function isHeadlineContainer(element) {

//   // First Basic Check
//   const children = current.children;
//   if (children.length < 4) {
//     return false;
//   }

//   // Second Basic Check
//   let allChildrenAreLinks = false;
//   for (let child of children) {
//     allChildrenAreLinks = allChildrenAreLinks && child.nodeName === 'A';
//   }
//   if (allChildrenAreLinks) {
//     return true;
//   }

//   // Third
//   let allChildrenHaveLinks = false;
//   for (let child of children) {
//     if (child.querySelector('a') == null)
//   }

//   let allChildrenHaveSimilarClasses = false;
//   const classNames = current.firstChild.className.split(" ");
//   if (classNames.length < 1) {
//     return true;
//   }
//   return true;
// }

function findHackerNewsHeadlines() {
  return document.querySelectorAll("a.storylink");
}

function hideQuestion(question) {
  blurElement(question);
}

function blurElement(element) {
  element.style["-webkit-filter"] = "blur(10px)";
}
