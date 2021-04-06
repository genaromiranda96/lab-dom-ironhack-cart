// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotalValue = (price.innerText) * (quantity.value);

  let subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subtotalValue
  return subTotal;

  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product')
  let allProdcuts = [...products]
  let sum = 0
  allProdcuts.forEach((element) => {
    updateSubtotal(element)
    sum += Number(element.querySelector('.subtotal span').innerText)
  })

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span')
  total.innerText = sum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
