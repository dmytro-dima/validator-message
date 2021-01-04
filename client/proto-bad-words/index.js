import { arrBadWords } from "./bad-words";

export default String.prototype.filterBadWork = function () {
  const presenceBadWords = this.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .split(" ")
    .map((word) =>
      arrBadWords.join(",").toLowerCase().split(",").includes(word)
        ? true
        : false
    )
    .includes(true);

  const presenceLinks = this.replace(
    /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/gi,
    "links"
  ).includes("links");

  return { badWords: presenceBadWords, links: presenceLinks };
};
