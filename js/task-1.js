const categories = document.querySelector('#categories');
const categoriesChildren = Array.from(categories.children);

categories.classList.add('categories');

const addClassesListSubItem = categoriesChildren => {
  categoriesChildren
    .map(el => Array.from(el.children))
    .flatMap(el => Array.from(el[1].children))
    .forEach(el => {
      el.classList.add('list-sub-item');
    });
};
addClassesListSubItem(categoriesChildren);

const showInfo = categoriesChildren => {
  console.log(`Number of categories: ${categories.childElementCount}`);
  categoriesChildren
    .map(elem => Array.from(elem.children))
    .forEach(el => {
      console.log(`Category: ${el[0].textContent}`);
      console.log(`Elements:  ${el[1].children.length}`);
    });
};
showInfo(categoriesChildren);

//or
// const showInfo = categoriesChildren => {
//   let info;
//   info = `Number of categories: ${categoriesChildren.length}`;
//   categoriesChildren
//     .map(elem => Array.from(elem.children))
//     .forEach(el => {
//       info += `\nCategory: ${el[0].innerText} \nElements:  ${el[1].children.length}`;
//     });
//   return info;
// };
// console.log(showInfo(categoriesChildren));
