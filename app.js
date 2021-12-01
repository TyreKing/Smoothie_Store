
var products = [];
var total = 0;

function addToCart(button){
    let price = button.previousElementSibling;
    let description = price.previousElementSibling;
    let name = description.previousElementSibling;
    let product = new Product(button.id, price.innerHTML, description.innerHTML, name.innerHTML);
    this.products.push(product);
    let cart = document.getElementById('items');
    var entry = document.createElement('li');
    entry.className = name
    entry.appendChild(document.createTextNode(product.name + ' '));
    entry.appendChild(document.createTextNode(product.price + ' '));
    let btn = document.createElement('button');
    btn.innerHTML = 'X';
    btn.id = button.id;
    

    entry.appendChild(btn);
    cart.appendChild(entry);
    btn.className = name;
    btn.addEventListener("click", function () {
        products.splice(btn.id, 1);
        total = 0;
        calculateTotal();
        let list = document.getElementById('items');
        list.childNodes.forEach(item => {
           if(item.className == btn.className){
               list.removeChild(item);
           }
        });
         
        
    });
    calculateTotal();
}   

function removeFromCart(btn){
    products.splice(btn.id, 1);
}

function calculateTotal(){
    
    products.forEach(product =>{
        
        total += (parseFloat(product.price.substring(1)));
    });
    document.getElementById('total').innerHTML = '$'+ total.toFixed(2);
}


class Product{

    constructor(id, price, description, name){
        this.id = id;
        this.price = price;
        this.description = description;
        this.name = name
    }
}