$(".main-header__button").on("click", () => {
  $(".main-content__modal").css("display", "block");
  $(".main-content__substrate").css("display", "block");
  $(".main-content__substrate").css("background-color", "rgba(100, 100, 100, 0.9)");
});

$(".modal-close").on("click", () => {
  $(".main-content__modal").css("display", "none");
  $(".main-content__substrate").css("display", "none");
});

$(".main-content-table__row").on("click", function () {
  let that = this;
  $.ajax({
    url: "report.php",
    method: "get",
    dataType: "html",
    data: { update: 1 },
    success: function (color) {
      $(that).css("background-color", color);
      $(that).css("color", "white");
    },
  });
});
