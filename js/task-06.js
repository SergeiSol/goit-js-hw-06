const refs = {
    input: document.querySelector("#validation-input"),
};
refs.input.addEventListener("blur", onInputLoozeBlur);

function onInputLoozeBlur(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === 6) {
        refs.input.classList.add("valid")
        

    }
    else refs.input.classList.add("invalid")
}