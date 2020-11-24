$("div").animate(
  {
    marginLeft: "50px",
    height: "+=150px",
    width: "+-100px",
  },
  2000,
  function () {
    $(this).removeAttr("style");
  }
);
