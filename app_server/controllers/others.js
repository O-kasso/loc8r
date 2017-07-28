/* GET 'about' page */
module.exports.about = function(req, res) {
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nCupcake ipsum dolor sit. Amet gingerbread macaroon I love. Cheesecake sweet candy canes ice cream dessert tootsie roll.\n\nPastry cake wafer. Dragée gingerbread I love sweet gingerbread pudding I love tart. Halvah apple pie jujubes jujubes toffee topping jelly-o I love wafer. Sesame snaps jelly-o I love jelly beans muffin.\n\nJelly beans gummies oat cake jelly-o danish dessert. Cake jelly beans fruitcake chocolate cake macaroon. Fruitcake oat cake gingerbread cupcake fruitcake candy canes carrot cake gummi bears. Cake marzipan macaroon wafer. Cotton candy caramels powder pie bear claw liquorice. Brownie danish cake gingerbread lollipop macaroon macaroon candy canes.'
  });
};
