import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file location
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// product.json is in the same folder as crud.js
const FILE = path.join(__dirname, "product.json");

// Get cart
const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");

    // If product.json is empty
    if (!data.trim()) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    // If product.json doesn't exist
    await writeFile(FILE, "[]");
    return [];
  }
};

// Save cart
const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

// Add product
const addToCart = async (product) => {
  const myCart = await getCart();

  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);

  console.log(`Product added/updated with id ${product.id} into cart`);
};

// Show cart
const showCart = async () => {
  const data = await getCart();

  if (data.length === 0) {
    console.log("Your cart is empty 🛒");
    return;
  }

  console.table(data);

  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total + data[i].qty * data[i].price;
  }

  console.log("You have to pay: Rs.", total);
};

// Main
const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      // Show cart
      case 1:
        await showCart();
        break;

      // Add product
      case 2: {
        const data = await cin.question("Enter id,name,price,qty: ");

        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());

        const product = {
          id: Number(id),
          name: name,
          price: Number(price),
          qty: Number(qty),
        };

        await addToCart(product);

        break;
      }

      // Remove product
      case 3:
        console.log("Remove product");
        break;

      // Update quantity
      case 4:
        console.log("Update product quantity");
        break;

      // Checkout
      case 5:
        console.log("See you later 👋");
        break;

      default:
        console.log("Invalid choice! Try again 🛑");
    }
  } while (Number(choice) !== 5);

  cin.close();
};

main();











// import readline from "readline/promises";
// import { stdin, stdout } from "process";
// import { readFile, writeFile } from "fs/promises";

// const FILE = "product.json";

// const getCart = async () => {
//   const data = await readFile(FILE, "utf-8");
//   return JSON.parse(data);
// };

// const saveCart = async (myCart) => {
//   await writeFile(FILE, JSON.stringify(myCart, null, 2));
// };

// const addToCart = async (product) => {
//   const myCart = await getCart();
//   const isFound = myCart.find((item) => item.id === product.id);
//   if (isFound) {
//     isFound.qty += product.qty;
//   } else {
//     myCart.push(product);
//   }
//   await saveCart(myCart);
//   console.log(`product added/updated with id ${product.id} into cart`);
// };

// const showCart = async () => {
//   const data = await getCart();
//   console.table(data);
//   let total = 0;
//   total = data.reduce((t, item) => t + item.price * item.qty, 0);
//   console.log("Total amount to pay:", total);
// };
// const deleteFromCart = async (pid) => {
//   const data = await getCart();
//   const count = data.length;
//   const newData = data.filter((item) => item.pid !== pid);
//   const newCount = newData.length;
//   if (count === newCount) {
//     console.log("product with id ${pid} not found");
//   } else {
//     await saveCart(newData);
//     console.log("product with id ${pid} removed from cart");
//   }
// };
// const updateQuantity = async (pid, value) => {
//   const data = await getCart();
//   const product = data.find((item) => item.pid === pid);
//   if (product) {
//     product.qty = value;
//     await saveCart(data);
//     console.log(`product quantity updated for id ${pid}`);
//   } else {
//     console.log("product with id ${pid} not found");
//   }
// };

// const main = async () => {
//   let choice;
//   const cin = readline.createInterface({ input: stdin, output: stdout });
//   do {
//     console.log("Welcome to Flipkart 🤸");
//     console.log("1.......... Show cart");
//     console.log("2.......... Add Product");
//     console.log("3.......... Remove Product");
//     console.log("4.......... Update Quantity");
//     console.log("5.......... Checkout");
//     choice = await cin.question("Enter your choice:");
//     switch (Number(choice)) {
//       case 1:
//         await showCart();
//         break;
//       case 2:
//         let data = await cin.question("Enter id,name,price,qty:");
//         const [id, name, price, qty] = data
//           .split(",")
//           .map((item) => item.trim());
//         const product = {
//           id: Number(id),
//           name,
//           price: Number(price),
//           qty: Number(qty),
//         };
//         await addToCart(product);

//         break;
//       case 3:
//         let pid = await cin.question("Enter product id to remove:");
//         await deleteFromCart(Number(pid));
//         break;
//       case 4:
//         let pid = await cin.question("Enter product id to update:");
//         let qty = await cin.question("Enter new quantity:");
//         await updateQuantity(Number(pid), Number(qty));
//         break;
//       case 5:
//         console.log("See you later");
//         break;
//       default:
//         console.log("Invalid choice! try again 🛑");
//     }
//   } while (choice != 5);
//   cin.close();
// };

// main();
