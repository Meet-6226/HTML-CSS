document.addEventListener('DOMContentLoaded', () => {
    const colorDisplay = document.getElementById('colorDisplay');
    const colorHex = document.getElementById('colorHex');
    const generateBtn = document.getElementById('generateBtn');
    
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    
    const getBrightness = (hexColor) => {
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
    };
    
    const updateColor = () => {
        const newColor = generateRandomColor();
        colorDisplay.style.backgroundColor = newColor;
        colorHex.textContent = newColor.toUpperCase();
        
        const brightness = getBrightness(newColor);
        colorHex.style.color = brightness > 128 ? '#000' : '#fff';
    };
    
    generateBtn.addEventListener('click', updateColor);
    updateColor();
    
});
