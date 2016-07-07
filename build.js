var page = new WebPage();

page.paperSize = {
    format        : "A4",
    orientation    : "portrait",
    margin        : { left:"1cm", right:"1cm", top:"1cm", bottom:"1cm" },
};
page.viewportSize = { 
    width: 768, 
    height: 1014 
};

page.open("public/index.html", function (status) {
    page.render("cv.pdf");
    phantom.exit();
});