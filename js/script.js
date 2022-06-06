let lang = document.querySelector('.lang');
let lang2 = document.querySelector('.lang-2');

let header = document.querySelector('.masthead');

let lvmenu = document.querySelector('.lv-item');
let engmenu = document.querySelector('.eng-item');

let lvmobmenu = document.querySelector('.lv-mob-item');
let engmobmenu = document.querySelector('.eng-mob-item');



//desktop
if (lvmenu) {
    lvmenu.addEventListener("click", () => { 
    if(header.classList.contains('marsruts-c')) {
        location.href = "../lv/marsruts.php";
    }
    if(header.classList.contains('route-c')) {
        location.href = "../lv/marsruts.php";
    }
    if(header.classList.contains('uzdevumi-c')) {
        location.href = "../lv/uzdevumi.php";
    }
    if(header.classList.contains('exercises-c')) {
        location.href = "../lv/uzdevumi.php";
    }
    if(header.classList.contains('krustojumi-c')) {
        location.href = "../../lv/marsruts/krustojumi.php";
    }
    if(header.classList.contains('crossroads-c')) {
        location.href = "../../lv/marsruts/krustojumi.php";
    }
    if(header.classList.contains('pieturvietas-c')) {
        location.href = "../../lv/marsruts/pieturvietas.php";
    }
    if(header.classList.contains('stops-c')) {
        location.href = "../../lv/marsruts/pieturvietas.php";
    }
    if(header.classList.contains('tilti-c')) {
        location.href = "../../lv/marsruts/tilti.php";
    }
    if(header.classList.contains('bridge-c')) {
        location.href = "../../lv/marsruts/tilti.php";
    }
    if(header.classList.contains('parki-c')) {
        location.href = "../../lv/marsruts/parki.php";
    }
    if(header.classList.contains('parks-c')) {
        location.href = "../../lv/marsruts/parki.php";
    }
    if(header.classList.contains('objekti-c')) {
        location.href = "../../lv/marsruts/apskates-objekti.php";
    }
    if(header.classList.contains('sights-c')) {
        location.href = "../../lv/marsruts/apskates-objekti.php";
    }
    if(header.classList.contains('vecriga-c')) {
        location.href = "../../lv/marsruts/vecriga.php";
    }
    if(header.classList.contains('oldriga-c')) {
        location.href = "../../lv/marsruts/vecriga.php";
    } 
});
}


if (engmenu) {
    engmenu.addEventListener("click", () => { 
    if(header.classList.contains('marsruts-c')) {
        location.href = "../eng/route.php";
    }
    if(header.classList.contains('route-c')) {
        location.href = "../eng/route.php";
    }
    if(header.classList.contains('uzdevumi-c')) {
        location.href = "../eng/exercises.php";
    }
    if(header.classList.contains('exercises-c')) {
        location.href = "../eng/exercises.php";
    }
    if(header.classList.contains('krustojumi-c')) {
        location.href = "../../eng/route/crossroads.php";
    }
    if(header.classList.contains('crossroads-c')) {
        location.href = "../../eng/route/crossroads.php";
    }
    if(header.classList.contains('pieturvietas-c')) {
        location.href = "../../eng/route/stops.php";
    }
    if(header.classList.contains('stops-c')) {
        location.href = "../../eng/route/stops.php";
    }
    if(header.classList.contains('tilti-c')) {
        location.href = "../../eng/route/bridges.php";
    }
    if(header.classList.contains('bridge-c')) {
        location.href = "../../eng/route/bridges.php";
    }
    if(header.classList.contains('kafejnicas-c')) {
        location.href = "../../eng/route/cafes.php";
    }
    if(header.classList.contains('cafes-c')) {
        location.href = "../../eng/route/cafes.php";
    }
    if(header.classList.contains('parki-c')) {
        location.href = "../../eng/route/parks.php";
    }
    if(header.classList.contains('parks-c')) {
        location.href = "../../eng/route/parks.php";
    }
    if(header.classList.contains('objekti-c')) {
        location.href = "../../eng/route/sightseeing.php";
    }
    if(header.classList.contains('sights-c')) {
        location.href = "../../eng/route/sightseeing.php";
    }
    if(header.classList.contains('vecriga-c')) {
        location.href = "../../eng/route/oldriga.php";
    }
    if(header.classList.contains('oldriga-c')) {
        location.href = "../../eng/route/oldriga.php";
    } 
});
}


//mobile

if (lvmobmenu) {
    lvmobmenu.addEventListener("click", () => { 
    if(header.classList.contains('marsruts-c')) {
        location.href = "../lv/marsruts.php";
    }
    if(header.classList.contains('route-c')) {
        location.href = "../lv/marsruts.php";
    }
    if(header.classList.contains('uzdevumi-c')) {
        location.href = "../lv/uzdevumi.php";
    }
    if(header.classList.contains('exercises-c')) {
        location.href = "../lv/uzdevumi.php";
    }
    if(header.classList.contains('krustojumi-c')) {
        location.href = "../../lv/marsruts/krustojumi.php";
    }
    if(header.classList.contains('crossroads-c')) {
        location.href = "../../lv/marsruts/krustojumi.php";
    }
    if(header.classList.contains('pieturvietas-c')) {
        location.href = "../../lv/marsruts/pieturvietas.php";
    }
    if(header.classList.contains('stops-c')) {
        location.href = "../../lv/marsruts/pieturvietas.php";
    }
    if(header.classList.contains('tilti-c')) {
        location.href = "../../lv/marsruts/tilti.php";
    }
    if(header.classList.contains('bridge-c')) {
        location.href = "../../lv/marsruts/tilti.php";
    }
    if(header.classList.contains('kafejnicas-c')) {
        location.href = "../../lv/marsruts/kafejnicas.php";
    }
    if(header.classList.contains('cafes-c')) {
        location.href = "../../lv/marsruts/kafejnicas.php";
    }
    if(header.classList.contains('parki-c')) {
        location.href = "../../lv/marsruts/parki.php";
    }
    if(header.classList.contains('parks-c')) {
        location.href = "../../lv/marsruts/parki.php";
    }
    if(header.classList.contains('objekti-c')) {
        location.href = "../../lv/marsruts/apskates-objekti.php";
    }
    if(header.classList.contains('sights-c')) {
        location.href = "../../lv/marsruts/apskates-objekti.php";
    }
});
}

if (engmobmenu) {
    engmobmenu.addEventListener("click", () => { 
    if(header.classList.contains('marsruts-c')) {
        location.href = "../eng/route.php";
    }
    if(header.classList.contains('route-c')) {
        location.href = "../eng/route.php";
    }
    if(header.classList.contains('uzdevumi-c')) {
        location.href = "../eng/exercises.php";
    }
    if(header.classList.contains('exercises-c')) {
        location.href = "../eng/exercises.php";
    }
    if(header.classList.contains('krustojumi-c')) {
        location.href = "../../eng/route/crossroads.php";
    }
    if(header.classList.contains('crossroads-c')) {
        location.href = "../../eng/route/crossroads.php";
    }
    if(header.classList.contains('pieturvietas-c')) {
        location.href = "../../eng/route/stops.php";
    }
    if(header.classList.contains('stops-c')) {
        location.href = "../../eng/route/stops.php";
    }
    if(header.classList.contains('tilti-c')) {
        location.href = "../../eng/route/bridges.php";
    }
    if(header.classList.contains('bridge-c')) {
        location.href = "../../eng/route/bridges.php";
    }
    if(header.classList.contains('kafejnicas-c')) {
        location.href = "../../eng/route/cafes.php";
    }
    if(header.classList.contains('cafes-c')) {
        location.href = "../../eng/route/cafes.php";
    }
    if(header.classList.contains('parki-c')) {
        location.href = "../../eng/route/parks.php";
    }
    if(header.classList.contains('parks-c')) {
        location.href = "../../eng/route/parks.php";
    }
    if(header.classList.contains('objekti-c')) {
        location.href = "../../eng/route/sightseeing.php";
    }
    if(header.classList.contains('sights-c')) {
        location.href = "../../eng/route/sightseeing.php";
    }
    
});
}
