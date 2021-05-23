
$(".parallax").mousemove(function(e) {
    parallaxIt(e, "#00", -50);
    parallaxIt(e, "#01", 50);
    parallaxIt(e, "#02", 20);
    parallaxIt(e, "#03", 60);
    parallaxIt(e, "#04", 80);
    parallaxIt(e, "#05", -20);
    parallaxIt(e, "#06", 40);
    parallaxIt(e, "#07", -90);
    parallaxIt(e, "#08", 60);
    parallaxIt(e, "#09", -70);
    parallaxIt(e, "#10", -50);
    parallaxIt(e, "#11", 50);
    parallaxIt(e, "#11", 50);
});

function parallaxIt(e, target, movement) {
    var $this = $(".parallax");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}