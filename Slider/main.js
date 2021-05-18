var
    arrayImages = Array.from(document.querySelectorAll('.slider-container img')),
    numberOfSlides = arrayImages.length,
    currentSlides = 1,
    SlideNumber = document.getElementById('slide-number'),
    nextBottom = document.getElementById('next'),
    prevBottom = document.getElementById('prev');



nextBottom.onclick = nextSlide;
prevBottom.onclick = prevSlide;


var PaginationList = document.createElement('ul');
PaginationList.setAttribute('id', 'Pagination-ul')
for (var i = 1; i <= numberOfSlides; i++) {
    var PaginationItems = document.createElement('li');
    PaginationItems.setAttribute('data-index', i);
    PaginationItems.appendChild(document.createTextNode(i));
    PaginationList.appendChild(PaginationItems);

}

document.getElementById('indicators').appendChild(PaginationList);
var paginationUl = document.getElementById('Pagination-ul');
arrayPaginationItems = Array.from(document.querySelectorAll('#Pagination-ul li'));
for (var i = 0; i < arrayPaginationItems.length; i++) {
    arrayPaginationItems[i].onclick = function () {
        currentSlides = parseInt(this.getAttribute('data-index'));
        Check();
    }
}
Check();

function nextSlide() {
    if (nextBottom.classList.contains('disabled')) {
    }
    else {
        currentSlides++;
        Check();
    }
}
function prevSlide() {
    if (prevBottom.classList.contains('disabled')) {
    }
    else {
        currentSlides--;
        Check();
    }
}
function removeActivations() {

    arrayImages.forEach(function (it) {
        it.classList.remove('active');
    });
    arrayPaginationItems.forEach(function (i) {
        i.classList.remove('active');
    });
}
function Check() {
    SlideNumber.textContent = 'Slide #' + (currentSlides) + ' of ' + (numberOfSlides);
    removeActivations();
    arrayImages[currentSlides - 1].classList.add('active');
    paginationUl.children[currentSlides - 1].classList.add('active');
    if (currentSlides == 1) {
        prevBottom.classList.add('disabled');
    }
    else {
        prevBottom.classList.remove('disabled');
    }

    if (currentSlides == numberOfSlides) {
        nextBottom.classList.add('disabled');
    }
    else {
        nextBottom.classList.remove('disabled');
    }
}

//console.log(paginationUl);