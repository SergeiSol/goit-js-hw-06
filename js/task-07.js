const textRef = document.querySelector("#text");
const inputSizeRef = document.querySelector("#font-size-control");

inputSizeRef.addEventListener("input", (event) => {
    textRef.style.fontSize = event.currentTarget.value + "px"
})





// const handleClick = () => {
//   console.log("handleClick");
// };
// sizeRef.addEventListener("click", handleClick);

// textRef.style.fontSize = value;