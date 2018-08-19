// Business (or back-end) logic:
$(document).ready(function() {
        $("button#green").click(function() {
          $("body").addClass("green-background");
        });

        $("button#yellow").click(function() {
          $("body").addClass("yellow-background");
        });

        $("button#red").click(function() {
          $("body").addClass("red-background");
        });
      });
variable=parseint(document.querySelector('input{name ="variable"}:checked').value);
sub=parseint(document.querySelector("input{name="sub"}:checked').value);
con=parseint(document.querySelector('input{name="con"}:checked').value);
ifstate=parseint(document.querySelector('input{name="ifstate"}:checked').value);
// Everything below this line is user interface (or front-end) logic:
result=variable + sub + con + ifstate;
document.getElementById("grade").innerHTML=results;
if(result==0) {result2="I dont think you studied.<br/><img src='0.jpg' width='300'/>"};
if(result==20){result2="You need to spend more time.Try again.<br/><img src='20.jpg'width='300'/>"};
if(result==40){result2= "I think you could do better.Try again.<br/><img src='40.jpg'width='300'/>"};
if(result==60){result2="So close upto to the point.Try again.<br/><img src='60.jpg'width='300'/>"};
if(result==80){result2="Hooray you won!Javascript pro"<br/><img src='80.jpg'width='300'/>"};

return false;//required to not refresh the page; just leave this here
}//this ends the submit function
</script>
</body>
