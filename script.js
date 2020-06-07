const reader = new FileReader();
const body = document.body;
var bg;

window.addEventListener("paste", (e) => {
  var file = e.clipboardData.files[0];
  reader.addEventListener(
    "load",
    function () {
      clearTimeout(bg);
      navigator.clipboard.writeText(reader.result).then(
        function () {
          console.log("Copied.");
        },
        function () {
          prompt("Copy this:", reader.result);
        }
      );
      document.body.style.backgroundColor = "#38f851";
      document.body.style.backgroundImage =
        "linear-gradient(66deg, rgb(56, 248, 81), rgb(90, 205, 105))";
      bg = setTimeout(function () {
        document.body.style.backgroundColor = "";
        document.body.style.backgroundImage = "";
      }, 3000);
    },
    false
  );
  if (file) {
    reader.readAsDataURL(e.clipboardData.files[0]);
  }
});
