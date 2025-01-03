
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
        $('.readme_scroll').scrollTop(0, 0);
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
function showTagInfo(tag) {
    var tagInfoDiv = document.getElementById("tagInfo");
    var content = getTagContent(tag);
    tagInfoDiv.innerHTML = content;
}
function showTagInfo2(tag) {
    var tagInfoDiv = document.getElementById("tagInfo2");
    var content = getTagContent(tag);
    tagInfoDiv.innerHTML = content;
}
function getTagContent(tag) {
    var tagContents = {
        "spring-legacy": "Spring MVC를 통해 게시물의 작성· 수정· 삭제· 목록 조회· 상세 보기와 같은 웹 애플리케이션의 핵심적인 기능들을 구현하였습니다.<br><br>▶ 클라이언트 요청을 처리하는 컨트롤러와, 비즈니스 로직을 처리하는 서비스, 데이터베이스와의 상호작용을 담당하는 데이터 액세스 레이어로 구성하여<br> 각 기능들을 분리하고 확장성과 유지보수성을 높였습니다.",
        "jsp": "JSP를 활용하여 웹 페이지의 디자인을 구성하고 동적 컨텐츠를 제공하였습니다.<br><br>▶ 사용자가 게시물을 조회하거나 작성할 때 적절한 화면을 제공하고,<br> 데이터를 입력 받아 서버로 전달하여 데이터를 처리하도록 구현하였습니다.",
        "ajax": "AJAX를 활용하여 페이지를 새로고침 없이 서버와 비동기적으로 통신하여<br> 댓글 기능을 구현하였습니다. 이를 통해 사용자들은 페이지 전체를 새로고침하지 않고도 댓글을 작성하고 조회할 수 있어, 편리한 이용을 경험할 수 있습니다.",
        "mybatis": "Mybatis를 활용하여 데이터베이스와의 원활한 상호작용을 통해<br> 게시물을 영구 보존하고 효율적으로 관리하였습니다.<br><br> ▶ SQL 쿼리와 자바 객체를 매핑하는 방식으로 DB와의 연동을 간소화하여,<br>효율적인 데이터 처리가 가능하게 구현하였습니다.",
        
        "spring-boot": "Spring Boot를 활용하여 웹 애플리케이션의 구조를 간소화하였고,<br>설정을 자동화 하여 이전 Legacy 프로젝트보다 빠른 개발을 경험하였습니다. <br><br>▶ Spring Boot의 통합된 의존성 관리를 통해,<br> 라이브러리 버전 충돌 문제를 최소화하고 안정성을 향상시켰습니다.",
        "react": "React를 활용하여 사용자 인터페이스를 구현하고,<br> 컴포넌트 기반 접근 방식으로 UI를 재사용 가능한 모듈로 구성하였습니다. <br><br>▶ 부모 컴포넌트에서 자식 컴포넌트로 'props'를 전달하여<br>컴포넌트 간의 유연한 상호작용을 가능하게 하였으며,<br>이를 통해, 하나의 폼에서 여러 컴포넌트의 데이터를 입력 받을 수 있도록 구현하였습니다.",
        "jpa": "JPA를 활용하여 객체와 데이터베이스의 매핑을 간편하게 처리하고,<br> 객체 지향적인 개발을 통해 유지보수성을 용이하게 하였습니다. <br><br>▶ 다양한 어노테이션을 사용하여 SQL 쿼리를 직접 다루지 않고도<br> 객체를 통해 DB에 접근하여 데이터 조작을 처리할 수 있도록 구현하였습니다.",
        "elk": "ELK(Elasticsearch, Logstash, Kibana) 스택을 도입하여 빅데이터를 처리하고<br> 중요한 정보를 한눈에 파악할 수 있도록 시각화하여 구현하였습니다.<br><br>▶ Elasticsearch로 빠른 검색을 통해 빅데이터에서 핵심 항목을 추출하고,<br> ▶ Logstash를 통해 데이터를 수집하고 정제하였으며,<br>▶ Kibana를 사용하여 추출된 데이터를 직관적으로 시각화하였습니다.",
        "python": "Python을 활용하여 머신러닝을 통해 빅데이터를 분석하여,<br> 학습된 데이터를 가지고 신용평가에 영향을 미칠 주요 항목을 추출하였습니다. <br><br>▶ Python의 다양한 라이브러리와 머신러닝 프레임워크를 활용하여<br> 데이터를 처리하고 모델을 구축하였으며, <br>이를 통해 정확하고 신뢰성 있는 신용평가를 제공하였습니다."
    };

    return tagContents[tag] || ".";
}
