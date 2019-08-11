$(".letter")
    .mouseenter(e => {
        anime({
            targets: `#${e.target.id}`,
            rotate: 180
        });
    })
    .mouseleave(e => {
        anime({
            targets: `#${e.target.id}`,
            rotate: 0
        });
    });


var zoom_timeline = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 1000,
    loop: true
})
    .add({
        targets: "#dampgang",
        scale: 2,
        rotate: 360
    })
    .add({
        targets: "#dampgang",
        scale: 1
    })

