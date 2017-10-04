const email = encodeURIComponent('some.address@gmail.com');

Meteor.startup(() => {
  process.env.MAIL_URL = `smtp://${email}:password@smtp.gmail.com:465`;
});