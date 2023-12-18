import './style.css';

const COLOR_PALETTE = {
  '#48639C': 'Lapis lazuli',
  '#4C4C9D': 'Violet blue',
  '#712F79': 'Eminence',
  '#976391': 'Pomp and Power',
  '#F7996E': 'Atomic tangerine',
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
  });
};

const addEventListenerToColorInput = () => {
  const colorInput = document.querySelector('#color-input');
  const colorName = document.querySelector('#color-name');

  colorInput.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${newColor}`;
    colorName.innerText = colorInput ? colorNameText : '-';
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
addEventListenerToColorInput();
