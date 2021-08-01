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
    }
    
}