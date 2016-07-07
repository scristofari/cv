var page = new WebPage();

page.paperSize = {
  width: '768px',
  height: '1024px',
};

page.open("public/index.html", function (status) {
    page.render("cv.pdf");
    phantom.exit();
});