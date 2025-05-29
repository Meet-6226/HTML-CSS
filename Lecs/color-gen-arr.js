let arr = ['#352942', '#7ea89c', '#3c4ed1', '#4a6b8d', '#7e5d0a'];

let colorGen = () => {
    if (arr.length > 0) {
        let color = arr[0];
        document.body.style.backgroundColor = color;
        document.getElementById('colorCode').textContent = `Current Color: ${color}`;
        arr.shift();
    } else {
        alert("No colors left");
    }
};