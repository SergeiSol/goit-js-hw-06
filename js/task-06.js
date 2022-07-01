const inputRef = document.querySelector("#validation-input");
const validValue = inputRef.dataset.length;  
   
inputRef.addEventListener("blur", (event) => {
    const { value } = event.currentTarget;
    inputRef.className = value.length === Number(validValue)
        ? "valid" : "invalid";
    })
    
    
    
// refs.input.addEventListener("blur", onInputLoozeBlur);

// function onInputLoozeBlur(event) {
//     console.log(event.currentTarget.value.length);
//     if (event.currentTarget.value.length === 6) {
//         refs.input.classList.add("valid")
        

//     }
//     else refs.input.classList.add("invalid")
// }