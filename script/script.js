$(function(){

    setInterval(fnSlide, 3000);

    function fnSlide() {

        /* 작업 순서
        1. 모든 a요소를 fadeOut 한다.
        2. 2번째 a요소를 fadeIn 한다.
           fadeIn 완료 후 콜백함수를 사용하여
           첫 째 a요소를 마지막으로 이동한다.
        */

        $("#slideArea a").fadeOut(500);
        $("#slideArea a:nth-child(2)").fadeIn(
            1000,
            function() {
                $("a:first-child").insertAfter("a:last-child");
            }
        );

    }

});
