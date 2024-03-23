const categories = document.querySelector('#categories');
const categoriesChildren = categories.children;

function showInfo(categoriesChildren) {
  console.log(`Number of categories: ${categoriesChildren.length}`);
  const arr = Array.from(categoriesChildren).map(elem =>
    Array.from(elem.children)
  );
  arr.forEach(el => {
    console.log(`Category: ${el[0].innerText} ${el[1].children.length}`);
    console.log(`Elements:  ${el[1].children.length}`);
  });
}
//or
// function showInfo(categoriesChildren) {
//   let info;
//   info = `Number of categories: ${categoriesChildren.length}`;
//   const arr = Array.from(categoriesChildren).map(elem =>
//     Array.from(elem.children)
//   );
//   arr.forEach(el => {
//     info += `\nCategory: ${el[0].innerText} ${el[1].children.length} \nElements:  ${el[1].children.length}`;
//   });
//   return info;
// }
//console.log(showInfo(categoriesChildren));
