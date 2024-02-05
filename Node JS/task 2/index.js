"use strict"
const mathProduct = {
    val1:4,
    val2:8,
    //function
    product:function(){
        console.log(this.val1);
        return ()=>{
            console.log(this.val1*this.val2)
        }
        
    },
    //method
    product(){
        console.log(this.val2);
        return ()=>{
            console.log(this.val1*this.val2)
        }
        
    }
}

mathProduct.product()();