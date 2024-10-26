// Функція отримує масив товарів і повертає всі товари, які мають ціну нижчу за 100 або вищу за 500
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."

const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 250 },
  { name: 'Shirt', price: 30 },
  { name: 'Watch', price: 120 },
  { name: 'Tablet', price: 550 },
  { name: 'Shoes', price: 75 },
  { name: 'PlayStation', price: 590 }
];

function getProductsNotInPriceRange(products) {
  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < 100 || products[i].price > 500) {
      filteredProducts.push(products[i].name); 
    }
  }

  return filteredProducts;
}

console.log(getProductsNotInPriceRange(products));
module.exports = getProductsNotInPriceRange;