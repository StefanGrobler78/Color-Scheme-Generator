const colorPicker = document.querySelector('.colorPicker');
const colorPalette = document.querySelector('.color_palette');
const colorSwatch = document.querySelector('.color_swatch');
const getSchemeBtn = document.getElementById('getSchemeBtn')
const modeSelect = document.querySelector('#modeSelect');
const handleChange = () => {
    return modeSelect.value;
}

modeSelect.addEventListener('change', handleChange)
const selectColor = () => {
let pickedColor = colorPicker.value;
let hashedColor = pickedColor.replace('#', '');
    fetch(`https://www.thecolorapi.com/scheme?hex=${hashedColor}&mode=${handleChange()}&count=5`)
    .then(res => res.json())
    .then(result => {
        let schemeColorArray = result.colors;
        schemeColorArray.forEach(color => {
            let bgColor = color.hex.value;
            const divSwatch = document.createElement('DIV');
            divSwatch.classList.add('color_swatch')
            divSwatch.style.backgroundColor = bgColor;
            const colorValue = document.createElement('P');
            colorValue.textContent = bgColor;
            colorPalette.appendChild(divSwatch);
            divSwatch.appendChild(colorValue)
        });
        modeSelect.value = '';
    })
    colorPalette.innerHTML = '';
}


getSchemeBtn.addEventListener('click', selectColor);


