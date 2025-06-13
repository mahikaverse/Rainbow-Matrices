// const containerEl = document.querySelector(".container");
// for (let index = 0; index < 30; index++) {
//     const colourContainerEl = document.createElement("div");
//     colourContainerEl.classList.add("colour-container");
//     containerEl.appendChild(colourContainerEl);
// }
//   const colourContainerEl=document.querySelectorAll(".colour-container");
//   generateColours()

//   function generateColours(){
//     colourContainerEl.forEach((colourContainerEl) => {
//       const newcolourcode = randomColour();
//       console.log(newcolourcode);
        
//     });
//   }

//  function randomColour(){
//     const char = "0123456789abcdef"
//     const colourcodeLength =6;
//     let colour="";
//     for (let index = 0; index <colourcodeLength; index++) {
//          const randomNum = Math.floor(Math.random()*char.length);
//          colour+=char.substring(randomNum,randomNum+1);
//         return colourcode ;
        
//     }
//  }
    
const containerEl = document.querySelector(".container");

// Create 30 color containers
for (let index = 0; index < 30; index++) {
    const colourContainerEl = document.createElement("div");
    colourContainerEl.classList.add("colour-container");
    containerEl.appendChild(colourContainerEl);
}

// Get all color containers
const colourContainerEls = document.querySelectorAll(".colour-container");

// Generate and assign colors
generateColours();

function generateColours() {
    colourContainerEls.forEach((colourContainerEl) => {
        const newColourCode = randomColour();
        console.log(newColourCode);
        colourContainerEl.style.backgroundColor = `#${newColourCode}`;
        colourContainerEl.textContent = `#${newColourCode}`;
    });
}

function randomColour() {
    const chars = "0123456789abcdef";
    const colourCodeLength = 6;
    let colour = "";
    for (let i = 0; i < colourCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colour += chars.substring(randomNum, randomNum + 1);
    }
    return colour;
}
