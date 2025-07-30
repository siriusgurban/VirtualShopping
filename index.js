let products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 2500,
    category: "smartphone", // aid olduğu kateqoriya
    description: "Apple şirkətinin yeni nəsil telefonu",
    stock: 10, // stokda qalan məhsul sayı
    is_active: true, // məhsul satışda olub-olmamasını bildirir
  },
  {
    id: 2,
    name: "iPhone 16",
    price: 3000,
    category: "smartphone", // aid olduğu kateqoriya
    description: "Apple şirkətinin yeni nəsil telefonu",
    stock: 20, // stokda qalan məhsul sayı
    is_active: true, // məhsul satışda olub-olmamasını bildirir
  },
  {
    id: 3,
    name: "iPhone 17",
    price: 3500,
    category: "smartphone", // aid olduğu kateqoriya
    description: "Apple şirkətinin yeni nəsil telefonu",
    stock: 30, // stokda qalan məhsul sayı
    is_active: false, // məhsul satışda olub-olmamasını bildirir
  },
  {
    id: 4,
    name: "Samsung 25",
    price: 2500,
    category: "smartphone", // aid olduğu kateqoriya
    description: "Samsung şirkətinin yeni nəsil telefonu",
    stock: 5, // stokda qalan məhsul sayı
    is_active: true, // məhsul satışda olub-olmamasını bildirir
  },
];

let basket = [
  {
    product_id: 1,
    quantity: 2, // seçilmiş məhsulun sayı
  },
];

let id = 1000;

function getName() {
  const value = prompt("Name");
  if (value && value.trim().length) return value;
}
function getPrice() {
  const value = prompt("Price");
  if (value && !isNaN(value.trim())) return Number(value);
  else {
    alert("Please enter a number next time");
    getPrice();
  }
}
function getCategory() {
  const value = prompt("Category");
  if (value && value.trim().length) return value;
}
function getDesc() {
  const value = prompt("Description");
  if (value && value.trim().length) return value;
}
function getStock() {
  const value = prompt("Stock");
  if (value && !isNaN(value.trim())) return Number(value);
  else {
    alert("Please enter a number next time");
    getStock();
  }
}
function getId() {
  const value = prompt("Id");
  if (value && value.trim().length) return value;
}

function swithcer() {
  let productSection = prompt(
    "What do you want to do: Add product - 1, Edit product - 2, Delete by id - 3, Show products - 4, Find product by id - 5, Search by name - 6, Sort by price - 7, Is Active - 8"
  );
  if (!isNaN(productSection)) {
    productSection = Number(productSection);
  } else {
    alert("You didn't enter number, try again!");
  }
  switch (productSection) {
    case 1:
      addProduct(products);
      break;
    case 2:
      editProduct(products);
      break;
    case 3:
      deleteById(products);
      break;
    case 4:
      showProducts(products);
      break;
    case 5:
      findById(products);
      break;
    case 6:
      search(products);
      break;
    case 7:
      sort(products);
      break;
    case 8:
      isActive(products);
      break;

    default:
      break;
  }
}

swithcer();

function addProduct(products) {
  const newProduct = {
    id: id + 1,
    name: getName(),
    price: getPrice(),
    category: getCategory(),
    description: getDesc(),
    stock: getStock(),
    is_active: true,
  };

  products = [...products, newProduct];
  console.log(newProduct, "Added");
  console.log(products);
}

function editProduct(products) {
  let getId = +prompt("Id");
  let product = products.find((item) => item.id === getId);

  if (product) {
    product.id;
    product.name = getName();
    product.price = getPrice();
    product.category = getCategory();
    product.description = getDesc();
    product.stock = getStock();
    product.is_active = true;
  } else {
    alert(`There is no product by ${getId} id`);
  }

  console.log(product, "id");
  console.log(products);
}

function deleteById(products) {
  const id = +getId();
  if (confirm("Are sure?")) {
    products = products.filter((item) => item.id !== id);
    console.log(`Product deleted`);
    console.log(products);
  }
}

function showProducts(products) {
  products.forEach((item) => {
    console.log(item);
  });
}

function findById(products) {
  const id = +getId();
  const product = products.find((item) => item.id === id);
  if (product) {
    console.log(`Product name: ${product.name}`);
    console.log(`Product price: ${product.price}`);
    console.log(`Product category: ${product.category}`);
    console.log(`Product description: ${product.description}`);
    console.log(`Product stock: ${product.stock}`);
    console.log(`Product is active: ${product.is_active}`);
  } else {
    alert(`There is no product by ${id}`);
  }
}

function search(products) {
  const name = getName();
  const product = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (product && product.length) {
    product.forEach((item) => {
      console.log(item);
    });
  } else {
    alert(`There is no product by name ${name}`);
  }
}

function sort(products) {
  const type = prompt("Enter only asc or desc");
  if (type == "asc") {
    products.sort((a, b) => a.price - b.price);
    console.log(products);
  } else if (type == "desc") {
    products.sort((a, b) => b.price - a.price);
    console.log(products);
  } else {
    alert("You didn't enter asc or desc");
  }
}


function isActive(products) {
  const id = +getId();
  const product = products.find((product) => product.id === id);
  if (product) {
    product.is_active = !product.is_active ;
    console.log(`${product.name} ${product.is_active ? "does not" : ""} on sale `);
  } else {
    alert(`There is no product by id ${id}`);
  }
}