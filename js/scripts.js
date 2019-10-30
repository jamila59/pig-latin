$(document).ready(function(){
  $("#submit").click(function(event) {
    event.preventDefault();
    var english = $("input#english").val().split(" ");
    var vowels = /[aeiou]/i;
    var constants = /[bcdfghjklmtnpqrswxz]/i;
    var result = [];

    for (var i = 0; i < english.length; i++){
        if (english[i].charAt(0).match(vowels)) {
          result.push(english[i] + "way");
          console.log(result);
      } else if (english[i].charAt(0).match(constants)) {
        result.push(english[i] - english[i].charAt(1) + "ay");

      }

    };
  });
 });
