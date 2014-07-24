$(function() {
            $('.list ul > li').hover(
                    function () {
                        var $this = $(this);
                        $('.list-message',$this).stop(true,true).animate({
                            'margin-left':'0'
                        }, 300);
                    },
                    function () {
                        var $this = $(this);
                        $('.list-message',$this).stop(true,true).animate({
                            'margin-left':'-295px'
                        }, 300);
                    }
            );
        });
