let size=document.getElementById("size");
let crust=document.getElementById("crust")
let  toppings=document.getElementById("toppings")
let  numbersOf=document.getElementById("number").value;


function totalPrice() {
    if (size==small) {
        priceOfSize=100;
        
    } else if (size==medium){
        priceOfSize=150;
        
    }

    else if (size==large){
        priceOfSize=200;
    }
    else{
        if(crust==crispy){
            priceOfCrust=100;
        }

        else if(crust==stuffed){
            priceOfCrust==150;
        }

        else if (crust==glutenfree){
            priceOfCrust=200;
        }
    
    else {
        if(toppings==hawaiian){
            priceOfToppings=100;
        }
        
        else if(toppings==extra-cheese){
            priceOfToppings==150;
        }

        else if (toppings==pepperoni){
            priceOfToppings=200;
        }
        else {
            let yourTotalPrice=(priceOfSize*priceOfCrust*numbersOf*priceOfToppings);
        }
        
        
    }
    
   
}
if (yourTotalprice<0) {
    alert("This is incorrect please make an order")
    
} else {
    document.getElementById("output1").innerHTML="Your total price for "+size +crust + topping +"is "+yourTotalPrice;   
};
};