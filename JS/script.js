let numbersOf
let size, crust, toppings
function getInputs() {
    size = document.getElementById("size").value;
    crust = document.getElementById("crust").value;
    toppings = document.getElementById("toppings").value;
    numbersOf = parseInt(document.getElementById("number").value);
    console.log(size);
    console.log(crust);
    console.log(toppings);
    console.log(numbersOf);
}
// let size = document.getElementById("size").value;
// let crust = document.getElementById("crust").value;
// let toppings = document.getElementById("toppings").value;
// let numbersOf = parseInt(document.getElementById("number").value);
// console.log(size);
// console.log(crust);
// console.log(toppings);
// console.log(numbersOf);


let priceOfSize, priceOfCrust, priceOfToppings, yourTotalPrice
function totalPrice () {
    getInputs()
    if (size == "small") {
        priceOfSize = 100;
        console.log(priceOfSize);

    } else if (size == "medium") {
        priceOfSize = 150;
        console.log(priceOfSize);

    }

    else if (size == "large") {
        priceOfSize = 200;
        console.log(priceOfSize);
    }
    
        if (crust == "Crispy") {
            priceOfCrust = 100;
            console.log(priceOfCrust);
        }

        else if (crust == "stuffed") {
            priceOfCrust == 150;
            console.log(priceOfCrust);
        }

        else if (crust == "glutenfree") {
            priceOfCrust = 200;
            console.log(priceOfCrust);
        }


        if (toppings == "hawaiian") {
            priceOfToppings = 100;
            console.log(priceOfToppings);
        }

        else if (toppings == "extra-cheese") {
            priceOfToppings == 150;
            console.log(priceOfToppings);
        }

        else if (toppings == "pepperoni") {
            priceOfToppings = 200;
            connsole.log(priceOfToppings);
        }

        yourTotalPrice = (priceOfSize + priceOfCrust + priceOfToppings) * numbersOf;
            console.log(yourTotalPrice)
    
    if (yourTotalPrice < 0) {
        alert("This is incorrect please make an order")

    } else {
        document.getElementById("output1").innerHTML = "Your total price for " + size  + crust+ toppings + " is Ksh. " + yourTotalPrice;
    };
};
//String.prototype.newTotalPrice=function() {
 //   alert(this +"Ksh.200 more on delivery")
//};