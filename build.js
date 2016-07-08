var page = new WebPage(),
    moment = require('moment');

page.paperSize = {
  width: '768px',
  height: '1024px',
};

page.open("public/index.html", function (status) {
    page.render("pdf/cv-" + moment().format("DD-MM-YYYY") + ".pdf");
    phantom.exit();
});