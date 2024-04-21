let counters = [
    { id: 'countone', start: 0, end: 15 },
    { id: 'countwo', start: 0, end: 392 },
    { id: 'counthree', start: 0, end: 3293 },
    { id: 'countfour', start: 0, end: 1212 },
];
let interval = 10;
let speed = 1; 

function startCounting() {
    counters.forEach(function(counter) {
        let counterElement = document.getElementById(counter.id);
        let count = counter.start;
        let maxCount = counter.end;

        let intervalId = setInterval(function() {
            if (count <= maxCount) {
                counterElement.textContent = count;
                count += speed;
            }
        }, interval);
    });
}

startCounting();


const div = document.querySelector('.productContainer')
const count = document.querySelector('.alo')


let db

function getAllData() {
    axios.get('https://dummyjson.com/products').then(res => {
            db = res.data.products
            db.forEach(item => {
                let box = document.createElement("div");
                box.className = "cards";
                box.innerHTML = `
                <img src=${item.thumbnail} alt="">
                        <h3>${item.title}</h3>
                        <p${item.brand}</p>
                        <h3>${item.price}</h2>
                        <button onclick="addToCart(${item.id})">ADD TO CART</button>
                        </div>
                `
                div.appendChild(box)
            })
        })
}



function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getAllData();





