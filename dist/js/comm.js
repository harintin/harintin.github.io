// fullpage

$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    loopBottom: true,
    sectionSelector: "section",
    scrollingSpeed: 800,
    scrollbars: false,
  });
});
