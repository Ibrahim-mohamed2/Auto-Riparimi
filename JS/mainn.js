$('.counter').counterUp({
    delay: 10,
    time: 1000
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


//start to top

let btn = document.querySelector('.ntb');
window.onscroll = function () {
    if (window.scrollY >= 800 ) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
// end to top


let nums = document.querySelectorAll(".technical-statistics  .counter");
let section = document.querySelector(".technical-statistics");
let start = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop)
    {
        if (!start)
        {
             nums.forEach((num) => startcount(num));

        }
        start = true;
    }
};


function startcount(el)
{
    let goal = el.dataset.goal;
    let count=setInterval(() => {
        
        el.textContent++;
        if (el.textContent == goal)
        {
            clearInterval(count);
            }
    }, 100);
}


let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.033333, lng: 31.233334 },
    zoom: 14,
  });
    
    let marker = new google.maps.Marker({
        position: { lat: 30.033333, lng: 31.233334 },
        map: map
    });
    let InfoWindow = new google.maps.InfoWindow({
        content:'<h1>this is my country<h1>'
    });
    marker.addListener('click', function () {
        InfoWindow.open(map, marker);
    });

  
}
