
let isClick = false;
let worksItem = 0;
let defaultSpeed = 1.3;
let leftValue = 0;
let speed = defaultSpeed;

const changeItemEvent = (prev, next) => {
    $('#nav' + prev).removeClass("active");
    $('.wi' + prev).fadeOut(150, "swing", () => {
        $('.wi' + next).stop().fadeIn(150, "swing", () => { worksItem = next; isClick = false; });
        $('#nav' + next).addClass("active");
    });
}


// 갤러리 함수

$(window).resize(function () {
    $('.wi .info_main .more_wrap').slideUp(0);
    $('.wi .info_main span').text('더보기');
}
);

let readmeOpen = false;

// 클릭 이벤트
const readmeClick = () => {
    if (readmeOpen) {
        $('.readme_container').removeClass('visible');
        $('html').css({ overflow: 'auto' });
    } else {
        $('.readme_container').addClass('visible');
        $('html').css({ overflow: 'hidden' });
        $('.readme_scroll').scrollTop(0,0);
    }
    readmeOpen = !readmeOpen;
}
const moreButtonClick = (e) => {
    $('.wi' + e + ' .info_main .more_wrap').stop().slideToggle(150);
    if ($('.wi' + e + ' .info_main span').text() == '더보기')
        $('.wi' + e + ' .info_main span').text('접기');
    else
        $('.wi' + e + ' .info_main span').text('더보기');
}

const subImgClick = (e, index, m = false) => {
    $('.wi' + e + ' .IMG_sub').removeClass('active');
    $('.wi' + e + ' .IMG_sub').eq(index).addClass('active');
    if (m) {
        //$('.wi' + e + ' .IMG_main').html(`<img class='mobileImg' src='/img/project/${e}_${index}.png' alt='프로젝트 이미지' onclick="mainImgClick(${e}, ${index}, ${m})">`);
        document.querySelector('.wi' + e + ' .IMG_main').outerHTML = `<div class="IMG_main" onclick="mainImgClick(${e}, ${index}, ${m})"><img class='mobileImg' src='/img/project/${e}_${index}.png' alt='프로젝트 이미지'></div>`;
    } else {
        //$('.wi' + e + ' .IMG_main').html(`<img src='/img/project/${e}_${index}.png' alt='프로젝트 이미지' onclick="mainImgClick(${e}, ${index}, ${m})">`);
        document.querySelector('.wi' + e + ' .IMG_main').outerHTML = `<div class="IMG_main" onclick="mainImgClick(${e}, ${index}, ${m})"><img src='/img/project/${e}_${index}.png' alt='프로젝트 이미지'></div>`;
    }
    $('.wi' + e + ' .IMG_main img').css({ opacity: '0' });
    $('.wi' + e + ' .IMG_main img').animate({ opacity: '1' }, 150);
}
const subImgClick2 = (e, index, m = false) => {
    $('.wi' + e + ' .IMG_sub2').removeClass('active');
    $('.wi' + e + ' .IMG_sub2').eq(index).addClass('active');
    if (m) {
        document.querySelector('.wi' + e + ' .IMG_main2').outerHTML = `<div class="IMG_main2" onclick="mainImgClick(${e}, ${index}, ${m})"><img class='mobileImg' src='/img/project/${e}_${index}.png' alt='프로젝트 이미지'></div>`;
    } else {
        document.querySelector('.wi' + e + ' .IMG_main2').outerHTML = `<div class="IMG_main2" onclick="mainImgClick(${e}, ${index}, ${m})"><img src='/img/project/${e}_${index}.png' alt='프로젝트 이미지'></div>`;
    }
    $('.wi' + e + ' .IMG_main2 img').css({ opacity: '0' });
    $('.wi' + e + ' .IMG_main2 img').animate({ opacity: '1' }, 150);
}

const mainImgClick = (e, index, m = false) => {
    $('.sizeUP').addClass('visible');
    $('.sizeUP').focus();
    if (m) {
        $('.sizeUP .ct').html(`<img class='mobileImg' src='/img/project/${e}_${index}.png' alt='프로젝트 이미지'>`);
    } else {
        $('.sizeUP .ct').html(`<img src='/img/project/${e}_${index}.png' alt='프로젝트 이미지'>`);
    }
    $('.sizeUP .ct').scrollTop(0);
    $('html').css('overflow', 'hidden');
}


$('.sizeUP .ct, .sizeUP .top .close-size').click(() => {
    $('.sizeUP').removeClass('visible');
    $('html').css('overflow', 'auto');
    defaultSpeed = 1.3;
    speed = defaultSpeed;
})

$('.Item_nav_next, .m_nav_wrap .next').click(() => {
    $('.wi .info_main .more_wrap').slideUp(150);
    $('.wi .info_main span').text('더보기');
    if (!isClick) {
        isClick = true;
        if (worksItem == 5) {
            $('#nav' + worksItem).removeClass("active");
            $('.wi' + worksItem).fadeOut(250, "swing", () => {
                $('.wi' + 0).stop().fadeIn(250, "swing", () => { worksItem = 0; isClick = false; });
                $('#nav' + 0).addClass("active");
            });
        }
        if (worksItem < 5) {
            $('#nav' + worksItem).removeClass("active");
            $('.wi' + worksItem).fadeOut(250, "swing", () => {
                $('.wi' + (worksItem + 1)).stop().fadeIn(250, "swing", () => { worksItem++; isClick = false; });
                $('#nav' + (worksItem + 1)).addClass("active");
            });
        }
    }
})

for (let i = 0; i < 6; i++) {
    $('#nav' + i).on('click', (event) => {
        if (!isClick) {
            isClick = true;
            changeItemEvent(worksItem, i);
        }
    });
}
/* hashtag 클릭시 내용표시  */
function toggleContent() {
    const tagInfos = document.getElementsByClassName('tag-info');
    for (let i = 0; i < tagInfos.length; i++) {
        tagInfos[i].style.display = 'none';
    }

    const clickedTag = event.target.id; // 클릭된 요소의 ID 가져오기
    const contentToShow = document.getElementById(clickedTag);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}
