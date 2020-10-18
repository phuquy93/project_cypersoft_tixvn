$('#contentMovie .tab-item').click(function () {
    $("#contentMovie .tab-item").removeClass("active");
    $(this).addClass('active');
    for (var i = 0; i < $("#contentMovie2 .tab-pane").length; i++) {
        if ($(this).attr("data-href").split("#")[1] == $(`#contentMovie2 .tab-pane:eq(${i})`).attr("id")) {
            $("#contentMovie2 .tab-pane").removeClass("active");
            $(`#contentMovie2 .tab-pane:eq(${i})`).addClass("active");
        }
    }
});

$("#contentMovie2 .item-head").click(function () {
    $(this).next().slideToggle();
});

$('#box-time-tab li:eq(0)').click(function () {
    $("#box1-1").addClass("active");
    $("#box2-1").removeClass("active");
    $("#box3-1").removeClass("active");
    $("#box4-1").removeClass("active");
    $("#box5-1").removeClass("active");
    $("#box6-1").removeClass("active");
});
$('#box-time-tab li:eq(1)').click(function () {
    $("#box2-1").addClass("active");
    $("#box1-1").removeClass("active");
    $("#box3-1").removeClass("active");
    $("#box4-1").removeClass("active");
    $("#box5-1").removeClass("active");
    $("#box6-1").removeClass("active");
});
$('#box-time-tab li:eq(2)').click(function () {
    $("#box3-1").addClass("active");
    $("#box1-1").removeClass("active");
    $("#box2-1").removeClass("active");
    $("#box4-1").removeClass("active");
    $("#box5-1").removeClass("active");
    $("#box6-1").removeClass("active");
});
$('#box-time-tab li:eq(3)').click(function () {
    $("#box4-1").addClass("active");
    $("#box1-1").removeClass("active");
    $("#box3-1").removeClass("active");
    $("#box2-1").removeClass("active");
    $("#box5-1").removeClass("active");
    $("#box6-1").removeClass("active");
});
$('#box-time-tab li:eq(4)').click(function () {
    $("#box5-1").addClass("active");
    $("#box1-1").removeClass("active");
    $("#box3-1").removeClass("active");
    $("#box2-1").removeClass("active");
    $("#box4-1").removeClass("active");
    $("#box6-1").removeClass("active");
});
$('#box-time-tab li:eq(5)').click(function () {
    $("#box6-1").addClass("active");
    $("#box1-1").removeClass("active");
    $("#box3-1").removeClass("active");
    $("#box2-1").removeClass("active");
    $("#box4-1").removeClass("active");
    $("#box5-1").removeClass("active");
});