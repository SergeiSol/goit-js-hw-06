const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");


nameInputRef.addEventListener("input", (event) => {
    console.log(event.currentTarget.value === "");
    if (event.currentTarget.value.trim() === "") {
        return (nameOutputRef.textContent = "Anonimus");
    }
    nameOutputRef.textContent = event.currentTarget.value;
})