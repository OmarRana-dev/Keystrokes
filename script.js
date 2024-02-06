let vl_keycode = document.querySelectorAll(".vl-keyCode");
let vl_event_key = document.querySelector("#event-key")
let vl_event_code = document.querySelector("#event-code")
let vl_event_which = document.querySelector("#event-which")
let vl_event_location = document.querySelector("#event-location")


window.addEventListener("keydown", (e) => {
    e.preventDefault()

    // console.log(e.location)
    vl_keycode.forEach(value => {
        value.textContent = e.keyCode
    });
    vl_event_key.textContent = e.key
    vl_event_code.textContent = e.code
    vl_event_which.textContent = e.which
    key_location(e)
})

function key_location(e) {
    switch (e.location) {
        case 0:
            vl_event_location.textContent = "General Keys";
            break
        case 1:
            vl_event_location.textContent = "Left-side modifier keys";
            break
        case 3:
            vl_event_location.textContent = "Numpad";
            break
        case 2:
            vl_event_location.textContent = "Right-side modifier keys";
            break
    } 
} 