// alert(1);
$(function() {
    $.fn.email = function() {
        let $this = $(this);
        const pattern = /^\w{2,15}@\w{2,15}[.]\w{2,5}([.](us|cn|fr))?$/;
        let input = $this.val();
        result = pattern.test(input);
        let status = $.fn.check(result, 'email');
        return status;
    };

    $.fn.zip = function() {
        let $this = $(this);
        const pattern = /^[0-9]{6}$/;
        let input = $this.val();
        result = pattern.test(input);
        let status = $.fn.check(result, 'zip');
        return status;
    }


    $.fn.username = function() {
        let $this = $(this);
        const pattern = /^[a-zA-Z]{4,}$/;
        let input = $this.val();
        result = pattern.test(input);
        let status = $.fn.check(result, 'username');
        return status;
    }


    $.fn.phone = function() {
        let $this = $(this);
        const pattern = /^[0-9]{10}$/;
        let input = $this.val();
        result = pattern.test(input);
        let status = $.fn.check(result, 'phone');
        return status;
    }

    $.fn.check = function(result, id) {
        if (result === true) {
            $(`#${id}`).removeClass('is-invalid');
            return true;
        } else {
            $(`#${id}`).addClass('is-invalid');
            return false;
        }
    }



});