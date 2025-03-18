
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    

    const r = Math.floor(Math.random() * 255);
    const g= Math.floor(Math.random() * 255);
    const b= Math.floor(Math.random() * 255);

    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    h1.textContent = newColor;
    btn.style.color = newColor;

    const rgbSum = r + g + b;
    if(rgbSum < 150){
        document.body.style.color = 'white';
    }else {
        document.body.style.color = 'black'
    }
    
})