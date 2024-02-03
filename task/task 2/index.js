// "use script"
const mathProduct = {
    val1:4,
    val2:8,
    product:function(){
        return ()=>{
            console.log(this.val1*this.val2)
        }
        
    }
}

mathProduct.product()();