// Initialize Smooth Scroll
smoothScroll.init({
    selectorHeader: 'nav'
});

//Init Popover
$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'hover',
        html: true
    })
});

// On scroll show button
var interested = document.getElementById('interested');
var classes = interested.className;

var once = false;
window.addEventListener('scroll', function () {
    var scrollPos = document.body.scrollTop;
   if (scrollPos > 800) {
        if (!once) {
            interested.className += ' show';
            once = true;
        }
   } else {
       interested.className = classes;
       once = false;
   }
});

// Open collapse
function openCollapse () {
    var extra = document.getElementById('extraInfo');
    extra.className += 'show';
}

// Year footer
var date = new Date();

$('#year').html(date.getFullYear());
$('#full-date').html(date.getDate() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getFullYear());

$("#leadForm, #leadFormModal").submit(function(e) {
    e.preventDefault();
    var element = $(this);
    var url = "https://hooks.zapier.com/hooks/catch/2222244/92t0tf/";

    $.ajax({
        method: "POST",
        url: url,
        data: $(this).serialize()
    })
        .done(function( msg ) {
            element.parent().parent().children(".alert-danger").hide();
            element.parent().hide();
            element.parent().parent().children(".alert-success").show();
            //LuckyOrange Tag
            window._loq = window._loq || [];
            window._loq.push(["tag", "Enviado"]);
            if(typeof ga != "undefined")
                ga('send', 'event', 'Conversion', 'Conseguida', 'Conversion Landing Autoclave');
        })
        .fail(function() {
            element.parent().parent(".alert-success").hide();
            element.parent().show();
            element.parent().parent(".alert-danger").show();
        });
});