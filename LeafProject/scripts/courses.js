// function changeText(classname) {
//     let originalText = document.querySelector(classname);
//     if (originalText.innerText === 'Add to cart') {
//         originalText.innerText = 'Added';
//     } else {
//         originalText.innerText = 'Add to cart';
//     }
// }

const product = [
    {
        id: 0,
        image: '/Images/javalogo.png',
        title: 'JAVA',
        price: 20000,
    },
    {
        id: 1,
        image: '/Images/pythonlogo.jpg',
        title: 'PYTHON',
        price: 25000,
    },
    {
        id: 2,
        image: '/Images/ailogo.jpg',
        title: 'AI',
        price: 22000,
    },
    {
        id: 3,
        image: '/Images/cybersecuritylogo.jpg',
        title: 'CYBERSECURITY',
        price: 30000
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
              <div class='img-box'>
                 <img class='images' src=${image}>
              </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>${price}</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
            </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
    let j = 0,total=0;
    document.getElementById('count').innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML=0;
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var {image,title,price} = items;
            total=total+price;
            document.getElementById('total').innerHTML=total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                   <img class='rowing' src=${image}>
                   </div>
                   <p style='font-size:12px;'>${title}</p>
                   <h2 style='font-size:15px;'>${price}</h2>`+
                   "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}
