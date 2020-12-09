document.getElementById("personData").style.display = "none";

var handleButton1Click = function () {
  document.getElementById("overskrift").innerHTML =
    "Surprise! Nu er den skrevet med JavaScript.";
  document.getElementById("knap").style.display = "none";
  document.getElementById("personData").style.display = "block";
};

function handleButton2Click() {
  var fNavnData = document.getElementById("fNavn").value;
  var eNavnData = document.getElementById("eNavn").value;
  var kønValg = document.getElementsByName("køn");
  var køn;
  for (var i = 0; i < kønValg.length; i++) {
    if (kønValg[i].checked) {
      køn = kønValg[i].value;
    }
  }
  alert(fNavnData + " " + eNavnData + ", " + køn + ".");
}

var button1 = document.getElementById("knap");

button1.addEventListener("click", handleButton1Click);
