let selectedColor = ""
const container = document.getElementById('main');
const colorForm = document.getElementById('colorful-form')
const colorPicker = document.getElementById('picker')
const colorSelection = document.getElementById('mySelect')


function renderpalate(selectcolor,scheme="monochrome"){
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectcolor}&mode=${scheme}&count=5`).then(res => res.json())
.then(data => {
     let palate = ""
     for(let i=0;i<5;i++){
        palate += `
        <div class="item">
        <div style="background-color:${data.colors[i].hex.value}" class="item"></div>
        <button onclick="copyColorValue(${data.colors[i].hex.value})">${data.colors[i].hex.value}</button></div>
        `
     }
     container.innerHTML = palate;
    
})
}

// function copyColorValue(){
//     console.log('${data.colors[i].hex.value}')
// }

colorForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const color = colorPicker.value
    const selectedpalate = colorSelection.value
    selectedColor = color.slice(1, 7)
    // console.log(selectedColor)
    // const printvalue = colorSelection.value;
    // console.log("printing value")
    if(colorSelection.value){
        console.log(colorSelection.value)
    }
    else{
        console.log("you have to take differnt approach to slove.")
    }

    renderpalate(selectedColor,selectedpalate)


})


const defaultvalue = "000000"
renderpalate(defaultvalue)
