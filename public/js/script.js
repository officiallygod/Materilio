$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".navbar").addClass("sticky");
    else $(".navbar").removeClass("sticky");
  });

  $(window).scroll(function () {
    if (this.scrollY > 1200) $(".skill-card__skillbar--percentage--level-1").addClass("anim-skill-1");
    else $(".skill-card__skillbar--percentage--level-1").removeClass("anim-skill-1");
  });

  $(window).scroll(function () {
    if (this.scrollY > 1200) $(".skill-card__skillbar--percentage--level-2").addClass("anim-skill-2");
    else $(".skill-card__skillbar--percentage--level-2").removeClass("anim-skill-2");
  });

  $(window).scroll(function () {
    if (this.scrollY > 1200) $(".skill-card__skillbar--percentage--level-3").addClass("anim-skill-3");
    else $(".skill-card__skillbar--percentage--level-3").removeClass("anim-skill-3");
  });

  $(".navbar__inner--menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar__inner--menu").toggleClass("active");
  });
});
