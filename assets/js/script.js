var filterElem = document.querySelectorAll('.filter');
for (var i = 0; i < filterElem.length; i++){
    filterElem[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.innerHTML;
            for (var k = 0; k < filterElem.length; k++){
                filterElem[k].classList.remove("active-filter");
            }
            e.target.classList.add("active-filter");
            filter(elem);
        }
    })
}

function filter(elemFilter) {
    var element = document.querySelectorAll('.filter-image');
    for (var j = 0; j < element.length; j++) {
        var a = element[j].getAttribute("data-gallery");
        element[j].classList.remove('active');
        element[j].classList.remove('none');
        if (elemFilter == a || elemFilter == "all") {
            element[j].className += " active";
        } else {
            element[j].className += " none";
        }
    }
}















