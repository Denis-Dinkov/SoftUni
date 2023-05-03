function solve() {
   let products = Array.from(document.querySelectorAll('.product'));
   let addButtonElement = document.querySelectorAll('.add-product');
   
   for (const product of products) {
      product.addEventListener('click',(e) => {
         console.log(e.target);
         if(e.target.textContent.trim() == 'Add'){
            console.log('da');
            e.product
         }
      })
   }
}  