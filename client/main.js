import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "./main.html";
import "./proto-bad-words/index";

Template.body.helpers({
  resolutions: [],
  error: "",
});

Template.body.events({
  "submit .form-task"(e) {
    const title = e.target.title.value;

    const task = {
      title,
      createdAt: new Date(),
    };

    console.log(title);
    // resolutions.concat(task)
    return false;
  },

  "input .form-task_title"(e) {
    const title = e.target.value;
    const { badWords, links } = title.filterBadWork();

    let error = "";

    if (badWords) {
      console.log(
        'при використанні грубої лайки над текстом випливе попередження "Використання лайки заборонено Правилами використання сайту, параграф 2, пункт 8"'
      );
    } else if (links) {
      console.log(
        'Посилання на інші портали допустиме лише у випадках необхідних для виконання замовлення, згідно Правил... параграф..."'
      );
    }

    console.log(error);
  },
});
