
addEventListener(toggle, themeToggle); {
    function myFunction() {
        var element = document.getElementsByClassName("button, coloredButton, salmonButton");
        element.classList.toggle("altClass");
    }
}

$ ("drop i").click(function() {
    let classBg = $(this).data("bg")
    let colorName = $(this).data("color")
}

$("#gallery>img").click(function() {
    let $img = $(this).children("img")
    let src =$img.attr("src")
    let src = $img.attr("alt") || "..."
    console.log(text)
    $("#modal-img").children("img").attr({ 'src': src, 'alt: alt'})
    $("#modal-img").children("figcaption").text(text)
    $("modal").addClass("modal-open")
})

$("#modal-close").click(function() {
    $("modal").removeClass("modal-open")
    $("#modal").hide();

    $("#modal").click(function() {
        if(event.target === (this)
            $("#modal-img").removeClass("modal-open")
            $("#modal").hide();
    }