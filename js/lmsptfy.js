function px(i) {
    return i.toString() + "px"
}
function cursorToInputField() {
    var input = $("input[name='q']");
    $("#cursor").animate({
        top: px(input.position().top + 15),
        left: px(input.position().left + 15)
    },
    1500, 'swing', function() {
        input.focus();
        setTimeout(function() {
            input.attr('readonly', false).focus();
            $("#cursor").animate({
                top: px(input.position().top + 35)
            },
            500, 'swing', function() {
                var str = $.query.get("q");
                str = String(str);
                type(str, 1);
            })
        },
        100)
    })
}
function cursorToIcon() {
    var icon = $("#search_button");
    setTimeout(function() {
        icon.mouseover()
    },
    500);
    $("#cursor").animate({
        top: px(icon.position().top + 15),
        left: px(icon.position().left + 20)
    },
    1000, 'swing', function() {
        setTimeout(go, 300)
    })
}
function go() {
    var qstring = $.query.empty().set("query", $.query.get("q")).toString();
    window.location = "https://startpage.com/do/search" + qstring
}
function type(str, index) {
    $("input[name='q']").focus().attr("value", str.substring(0, index));
    if (index < str.length) {
        setTimeout(function() {
            type(str, index + 1)
        },
        100)
    } else {
        setTimeout(cursorToIcon, 100)
    }
}
$(function() {
    var q = $.query.get("q");
    if (q != "") {
        $("#cursor").show();
        $("#hidden_input").focus();
        $("input[name='q']").attr("value", "").attr('readonly', true).focus(function() {
            this.blur()
        });
        setTimeout(cursorToInputField(), 200)
    }
});
$(window).load(function() {
    var urlPrefix = "https://lmsptfy.com/?q=";
    var base = 'https://lmsptfy.com/';
    $('#url').text(base);
    $('#urlPreview').show();
    function updatePreview(e) {
        var query = $('#searchBox').val();
        if (query && query.length > 0) {
            var query_uri = encodeURIComponent(query);
            $('#url').text(urlPrefix + query_uri);
            $('#urlPreview').show()
        } else {
            $('#url').text(base);
            $('#urlPreview').show()
        }
    }
    $('#searchBox').on('keyup', updatePreview);
    $(function() {
        if ($('#searchBox').val()) {
            updatePreview()
        }
    })
});
w = window;
d = document;
b = 0;
setTimeout('d.x.q.focus()', 100);
fq = 0;
function searchn() {
    if (d.x.q.value == '' || d.x.q.value == 'put search terms here') {
        d.x.q.value = 'put search terms here';
        d.x.q.style.color = '#AAAAAA';
        setTimeout('d.x.q.onclick();d.x.q.focus();', 1000);
        return false
    };
    setTimeout('d.x.submit()', 100)
};
