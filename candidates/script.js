$(document).ready(function () {
    $("#profile_candidate").toggleClass("col-lg-12");

    $(".open_skills_arrow").click(function () {
        $("#profile_candidate").toggleClass("col-lg-8");
        $("#skills_candidate").toggleClass("active_skill_tab");
        $("#exp_candidate").hasClass("active_xp_tab").toggleClass("active_xp_tab");
        $(this).css("color","green");
    });

    $(".open_exp_arrow").click(function () {
        $("#profile_candidate").toggleClass("col-lg-8");
        $("#exp_candidate").toggleClass("active_xp_tab");
        $("#skill_candidate").hasClass("active_skill_tab").toggleClass("active_skill_tab");
    });

    


})
