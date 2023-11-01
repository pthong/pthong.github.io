var colors = [
  "#123456",
  "#afa899",
  "#ccd8eb",
  "#aff4c6",
  "#3079e2",
  "#afa899",
  "#ccd8eb",
  "#3079e2",
  "#afa899",
  "#ccd8eb"
];

var shadows = ["#3079e2", "#afa899", "#ccd8eb"];

function draw() {
  $("body").addClass("hide");
  setTimeout(function() {
    var classes = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine"
    ];
    $("body").removeClass("hide");
    $("#wrap").removeClass("hide");
    $(".cell").removeClass(classes);
    $("#wrap .cell").each(function() {
      $(this).addClass(classes[~~(Math.random() * classes.length)]);
    });
    $(".cell").each(function() {
      $(this)
        .get(0)
        .style.setProperty("--position", Math.floor(Math.random() * 12 - 1));

      $(this)
        .get(0)
        .style.setProperty("--position2", Math.floor(Math.random() * 12 - 1));

      $(this)
        .get(0)
        .style.setProperty(
          "--color1",
          colors[Math.floor(Math.random() * colors.length)]
        );

      $(this)
        .get(0)
        .style.setProperty(
          "--color2",
          colors[Math.floor(Math.random() * colors.length)]
        );

      $(this)
        .get(0)
        .style.setProperty(
          "--shadows",
          shadows[Math.floor(Math.random() * shadows.length)]
        );

      $(this)
        .get(0)
        .style.setProperty("--size", Math.floor(Math.random() * 2 + 1));

      $(this)
        .get(0)
        .style.setProperty("--opacity", Math.floor(Math.random() * 2 + 1));
      $(this)
        .get(0)
        .style.setProperty("--angle", Math.floor(Math.random() * 2) - 1);
    });
  }, 1000);
}

$(function() {
  draw();
  $("body").on("click", function() {
    draw();
  });
});