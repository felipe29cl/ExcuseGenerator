function aleatorio() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var getNumberWho = Math.floor(Math.random() * who.length);
  var getNumberWhat = Math.floor(Math.random() * what.length);
  var getNumberWhen = Math.floor(Math.random() * when.length);

  var text = [
    who[getNumberWho] + " " + what[getNumberWhat] + " " + when[getNumberWhen]
  ];

  document.getElementById("demo").innerHTML = text;
}
