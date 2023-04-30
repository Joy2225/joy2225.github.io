document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Java Developer", "Code Optimizer","Competitive Coder", "Front-End Developer", "Chess Player", "Tennis and Badminton"];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById("bio").innerHTML = text.substring(0, i+1) +' <span id="blinking-cursor">|</span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 150);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 4000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });