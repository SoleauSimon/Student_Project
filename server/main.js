import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

function insertLink(name, lastName, github) {
  Links.insert({ name, lastName, github, createdAt: new Date() });
}

function removeLink(_id) {
  Links.remove({ _id });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  // if (Links.find().count() === 0) {
  // }
});

//Create
  //Links.insert({ title, url, createdAt: new Date() });

//Read
  //Links.find({ title, url, createdAt: new Date() });

//Update 
  //Links.update({ title, url, createdAt: new Date() });

//Delete
  //Links.remove({ title, url, createdAt: new Date() });
