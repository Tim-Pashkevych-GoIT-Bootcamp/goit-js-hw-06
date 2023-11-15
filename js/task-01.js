const categories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${categories.length}`);
console.log('\n');

categories.forEach(category => {
  const categoryHeader = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryHeader}`);

  const items = category.querySelectorAll('ul > li').length;
  console.log(`Elements: ${items}`);

  // Also we can get the count of elements using .childElementCount property
  // const items = category.querySelector('ul').childElementCount;
  // console.log(`Elements: ${items}`);

  console.log('\n');
});
