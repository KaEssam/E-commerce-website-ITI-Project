"use strict";

//#region Imports

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

//#endregion

//#region App Configuration & Initialization

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1K5vkzW6gPU_q_RTjWtghmnwTF7Gccg",
  authDomain: "test-project-29227.firebaseapp.com",
  projectId: "test-project-29227",
  storageBucket: "test-project-29227.appspot.com",
  messagingSenderId: "157526435183",
  appId: "1:157526435183:web:5abef3e6169e9857be349a",
  measurementId: "G-VJ9RHL35J6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

//#endregion

//#region Input Validation

function validateEmail(emailInput) {
  const email = emailInput.value.trim();
  var emailAlertSpan = document.getElementById("emailAlertSpan");

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z-]+.)+[a-zA-Z]{2,}))$/;

  if (!email) {
    emailAlertSpan.innerText = "Please enter your email address.";
    return false;
  } else if (!emailRegex.test(email)) {
    emailAlertSpan.innerText = "Please enter a valid email address.";
    return false;
  }

  emailAlertSpan.innerText = "";
  return true;
}

function validatePassword(passwordInput) {
  const password = passwordInput.value.trim();
  var passwordAlertSpan = document.getElementById("passwordAlertSpan");

  const minLength = 8;
  const maxLength = 16;
  const hasUpperCase = /[A-Z]/g.test(password);
  const hasLowerCase = /[a-z]/g.test(password);
  const hasNumber = /[0-9]/g.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+=-{}[\]|\\:;'<>,./?~]/g.test(password);

  if (!password) {
    passwordAlertSpan.innerText = "Please enter your password.";
    return false;
  } else if (password.length < minLength) {
    passwordAlertSpan.innerText =
      "Password must be at least 8 characters long.";
    return false;
  } else if (password.length > maxLength) {
    passwordAlertSpan.innerText =
      "Password must be no longer than 16 characters.";
    return false;
  } else if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    passwordAlertSpan.innerText =
      "Password must include uppercase, lowercase, number, and special character.";
    return false;
  }

  passwordAlertSpan.innerText = "";
  return true;
}

function validateProduct(product, formElement, newOrUpdate, pid = 0) {
  debugger;
  var errors = []; // Array to store validation errors
  var nameAlertSpan;
  var descriptionAlertSpan;
  var categoryAlertSpan;
  var priceAlertSpan;
  var quantityAlertSpan;
  var ratingAlertSpan;
  var numberOfRatingsAlertSpan;
  var thumbnailAlertSpan;
  var imagesAlertSpan;

  if (newOrUpdate == "new") {
    nameAlertSpan = document.getElementById("nameAlertSpan");
    descriptionAlertSpan = document.getElementById("descriptionAlertSpan");
    categoryAlertSpan = document.getElementById("categoryAlertSpan");
    priceAlertSpan = document.getElementById("priceAlertSpan");
    quantityAlertSpan = document.getElementById("quantityAlertSpan");
    ratingAlertSpan = document.getElementById("ratingAlertSpan");
    numberOfRatingsAlertSpan = document.getElementById(
      "numberOfRatingsAlertSpan"
    );
    thumbnailAlertSpan = document.getElementById("thumbnailAlertSpan");
    imagesAlertSpan = document.getElementById("imagesAlertSpan");
  } else if (newOrUpdate == "update") {
    nameAlertSpan = document.getElementById(`${pid}-nameAlertSpan`);
    descriptionAlertSpan = document.getElementById(
      `${pid}-descriptionAlertSpan`
    );
    categoryAlertSpan = document.getElementById(`${pid}-categoryAlertSpan`);
    priceAlertSpan = document.getElementById(`${pid}-priceAlertSpan`);
    quantityAlertSpan = document.getElementById(`${pid}-quantityAlertSpan`);
    ratingAlertSpan = document.getElementById(`${pid}-ratingAlertSpan`);
    numberOfRatingsAlertSpan = document.getElementById(
      `${pid}-numberOfRatingsAlertSpan`
    );
  }

  // Check name
  if (!product.name) {
    errors.push("Name is required.");
    nameAlertSpan.innerText = "Please enter a product name.";
    if (newOrUpdate == "new") {
      formElement["nameInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-name`].style.border = "1px solid red";
    }
  } else {
    nameAlertSpan.innerText = "";
    if (newOrUpdate == "new") {
      formElement["nameInput"].style.border = "1px solid #333";
    } else {
      formElement[`${pid}-name`].style.border = "1px solid #333";
    }
  }

  // Check description
  if (!product.description) {
    errors.push("Description is required.");
    descriptionAlertSpan.innerText =
      "Please enter a description for the product.";
    if (newOrUpdate == "new") {
      formElement["descriptionInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-description`].style.border = "1px solid red";
    }
  } else {
    descriptionAlertSpan.innerText = "";
    if (newOrUpdate == "new") {
      formElement["descriptionInput"].style.border = "1px solid #333";
    } else {
      formElement[`${pid}-description`].style.border = "1px solid #333";
    }
  }

  // Check category
  if (!product.category) {
    errors.push("Category is required.");
    categoryAlertSpan.innerText = "Please select a valid category.";
    if (newOrUpdate == "new") {
      formElement["categoryInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-category`].style.border = "1px solid red";
    }
  } else {
    getCategoryById(product.category)
      .then((category) => {
        // If category doesn't exist, add error
        if (!category) {
          errors.push("Invalid category selected.");
          categoryAlertSpan.innerText = "The selected category does not exist.";
          if (newOrUpdate == "new") {
            formElement["categoryInput"].style.border = "1px solid red";
          } else {
            formElement[`${pid}-category`].style.border = "1px solid red";
          }
        } else {
          categoryAlertSpan.innerText = "";
          if (newOrUpdate == "new") {
            formElement["categoryInput"].style.border = "1px solid #333";
          } else {
            formElement[`${pid}-category`].style.border = "1px solid #333";
          }
        }
      })
      .catch(() => {
        errors.push("Error fetching category.");
        categoryAlertSpan.innerText =
          "An error occurred while verifying the category.";
        if (newOrUpdate == "new") {
          formElement["categoryInput"].style.border = "1px solid red";
        } else {
          formElement[`${pid}-category`].style.border = "1px solid red";
        }
      });
  }

  // Check price
  if (!product.price) {
    errors.push("Price must be a valid number.");
    priceAlertSpan.innerText = "Please enter a valid price for the product.";
    if (newOrUpdate == "new") {
      formElement["priceInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-price`].style.border = "1px solid red";
    }
  } else if (product.price < 0) {
    errors.push("Price cannot be negative.");
    priceAlertSpan.innerText = "The product price cannot be less than zero.";
    if (newOrUpdate == "new") {
      formElement["priceInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-price`].style.border = "1px solid red";
    }
  } else {
    priceAlertSpan.innerText = "";
    if (newOrUpdate == "new") {
      formElement["priceInput"].style.border = "1px solid #333";
    } else {
      formElement[`${pid}-price`].style.border = "1px solid #333";
    }
  }

  // Check quantity
  if (!product.quantity) {
    errors.push("Quantity must be a valid number.");
    quantityAlertSpan.innerText =
      "Please enter a valid quantity for the product.";
    if (newOrUpdate == "new") {
      formElement["quantityInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-quantity`].style.border = "1px solid red";
    }
  } else if (product.quantity < 0) {
    errors.push("Quantity cannot be negative.");
    quantityAlertSpan.innerText =
      "The product quantity cannot be less than zero.";
    if (newOrUpdate == "new") {
      formElement["quantityInput"].style.border = "1px solid red";
    } else {
      formElement[`${pid}-quantity`].style.border = "1px solid red";
    }
  } else {
    quantityAlertSpan.innerText = "";
    if (newOrUpdate == "new") {
      formElement["quantityInput"].style.border = "1px solid #333";
    } else {
      formElement[`${pid}-quantity`].style.border = "1px solid #333";
    }
  }

  if (newOrUpdate == "new") {
    // Check thumbnail
    if (!product.thumbnail) {
      errors.push("Thumbnail image is required.");
      thumbnailAlertSpan.innerText =
        "Please upload a thumbnail image for the product.";
      formElement["thumbnailInput"].style.border = "1px solid red";
    } else {
      thumbnailAlertSpan.innerText = "";
      formElement["thumbnailInput"].style.border = "none";
    }

    // Check images
    if (!product.images || product.images.length !== 4) {
      errors.push("4 images are required for product images.");
      imagesAlertSpan.innerText = "Please upload 4 images for the product.";
      formElement["imagesInput"].style.border = "1px solid red";
    } else {
      imagesAlertSpan.innerText = "";
      formElement["imagesInput"].style.border = "none";
    }
  }

  // Check rating and number of ratings
  if (product.rating < 0 || product.rating > 5) {
    errors.push("Rating must be between 0 and 5.");
    ratingAlertSpan.innerText = "The product rating must be between 0 and 5.";
    if (newOrUpdate == "update") {
      formElement[`${pid}-rating`].style.border = "1px solid red";
    }
  } else {
    ratingAlertSpan.innerText = "";
    if (newOrUpdate == "update") {
      formElement[`${pid}-rating`].style.border = "1px solid #333";
    }
  }

  if (product.numberOfRatings < 0) {
    errors.push("Number of ratings cannot be negative.");
    numberOfRatingsAlertSpan.innerText =
      "The number of ratings can't be less than 0.";
    if (newOrUpdate == "update") {
      formElement[`${pid}-numberOfRatings`].style.border = "1px solid red";
    }
  } else {
    numberOfRatingsAlertSpan.innerText = "";
    if (newOrUpdate == "update") {
      formElement[`${pid}-numberOfRatings`].style.border = "1px solid #333";
    }
  }

  return errors;
}

async function validateCategory(category, formElement, newOrUpdate, cid = 0) {
  var errors = []; // Array to store validation errors
  var nameAlertSpan;

  if (newOrUpdate == "new") {
    nameAlertSpan = document.getElementById("nameAlertSpan");
  } else if (newOrUpdate == "update") {
    nameAlertSpan = document.getElementById(`${cid}-nameAlertSpan`);
  }

  const isDuplicate = await doesCategoryExist(category.name);

  // Check name
  if (!category.name) {
    errors.push("Name is required.");
    nameAlertSpan.innerText = "Please enter a category name.";
    if (newOrUpdate == "new") {
      formElement["nameInput"].style.border = "1px solid red";
    } else {
      formElement[`${cid}-name`].style.border = "1px solid red";
    }
  } else if (isDuplicate) {
    errors.push("Name must be unique.");
    nameAlertSpan.innerText = "Please enter a unique category name.";
    if (newOrUpdate == "new") {
      formElement["nameInput"].style.border = "1px solid red";
    } else {
      formElement[`${cid}-name`].style.border = "1px solid red";
    }
  } else {
    nameAlertSpan.innerText = "";
    if (newOrUpdate == "new") {
      formElement["nameInput"].style.border = "1px solid #333";
    } else {
      formElement[`${cid}-name`].style.border = "1px solid #333";
    }
  }

  return errors;
}

//#endregion

//#region Authentication

export async function signUpNewUser(event, formElement) {
  debugger;
  const emailInput = formElement["emailInput"];
  const passwordInput = formElement["passwordInput"];
  const emailAlertSpan = document.getElementById("emailAlertSpan");
  const passwordAlertSpan = document.getElementById("passwordAlertSpan");

  if (!validateEmail(emailInput)) {
    event.preventDefault();
    return;
  }

  if (!validatePassword(passwordInput)) {
    event.preventDefault();
    return;
  }

  const email = formElement["emailInput"].value.trim();
  const password = formElement["passwordInput"].value.trim();

  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.replace("index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    });
}

export async function signInExistingUser(event, formElement) {
  debugger;
  const emailInput = formElement["emailInput"];
  const passwordInput = formElement["passwordInput"];
  const emailAlertSpan = document.getElementById("emailAlertSpan");
  const passwordAlertSpan = document.getElementById("passwordAlertSpan");

  if (!validateEmail(emailInput)) {
    event.preventDefault();
    return;
  }

  if (!validatePassword(passwordInput)) {
    event.preventDefault();
    return;
  }

  const email = formElement["emailInput"].value.trim();
  const password = formElement["passwordInput"].value.trim();

  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.replace("index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    });
}

export function signOut() {
  auth.signOut();
}

export async function checkIfUserIsLoggedIn() {
  await onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;

      const docSnap = await getDoc(doc(db, "users", uid));

      if (docSnap.exists()) {
        alert("Signed in!");
      } else {
        alert("This page is for customers only!");
        signOut();
        window.location.replace("login.html");
      }
    } else {
      alert("Signed out!");
      window.location.replace("login.html");
    }
  });
}

export async function checkIfAdminIsLoggedIn() {
  await onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;

      const docSnap = await getDoc(doc(db, "admins", uid));

      if (docSnap.exists()) {
        alert("Signed in!");
      } else {
        alert("This page is for admins only!");
        signOut();
        window.location.replace("login.html");
      }
    } else {
      alert("Signed out!");
      window.location.replace("login.html");
    }
  });
}

//#endregion

//#region Products

export async function addNewProduct(event, formElement) {
  var product = {};
  product.name = formElement.elements["nameInput"].value.trim();
  product.description = formElement.elements["descriptionInput"].value.trim();
  product.category = formElement.elements["categoryInput"].value;
  product.price = parseInt(formElement.elements["priceInput"].value);
  product.quantity = parseInt(formElement.elements["quantityInput"].value);
  product.thumbnail = formElement.elements["thumbnailInput"].files[0];
  product.images = formElement.elements["imagesInput"].files;

  if (!formElement.elements["ratingInput"]) {
    product.rating = 0;
  } else {
    product.rating = parseInt(formElement.elements["ratingInput"].value);
  }

  if (!formElement.elements["numberOfRatingsInput"]) {
    product.numberOfRatings = 0;
  } else {
    product.numberOfRatings = parseInt(
      formElement.elements["numberOfRatingsInput"].value
    );
  }

  // If there are any errors, prevent submission and display them
  const errors = validateProduct(product, formElement, "new");
  if (errors.length > 0) {
    event.preventDefault();
    return;
  }

  const docRef = await addDoc(collection(db, "products"), {
    name: product.name,
    description: product.description,
    category: doc(db, "categories", product.category),
    price: product.price,
    quantity: product.quantity,
    rating: product.rating,
    numberOfRatings: product.numberOfRatings,
  });

  const thumbnailURL = await uploadFile(
    docRef.id,
    product.thumbnail,
    "thumbnail"
  );
  await setDoc(
    doc(db, "products", docRef.id),
    {
      thumbnail: thumbnailURL,
    },
    { merge: true }
  );

  var imagesArray = [];
  for (const image of product.images) {
    const imageURL = await uploadFile(docRef.id, image, "image");
    imagesArray.push(imageURL);
  }

  await setDoc(
    doc(db, "products", docRef.id),
    {
      images: imagesArray,
    },
    { merge: true }
  );

  alert("Product Has Been Added Successfully!");
  formElement.reset();
  window.location.reload();
}

export async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getProductById(pid) {
  const docSnap = await getDoc(doc(db, "products", pid));

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return [];
  }
}

export async function getProductsByCategory(cid) {
  const querySnapshot = await getDocs(
    collection(db, "products"),
    where("category", "==", doc(db, "categories", `${cid}`))
  );

  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function UpdateExistingProduct(event, formElement, pid) {
  var product = {};
  product.name = formElement.elements[`${pid}-name`].value.trim();
  product.description = formElement.elements[`${pid}-description`].value.trim();
  product.category = formElement.elements[`${pid}-category`].value;
  product.price = parseInt(formElement.elements[`${pid}-price`].value);
  product.quantity = parseInt(formElement.elements[`${pid}-quantity`].value);
  product.rating = parseInt(formElement.elements[`${pid}-rating`].value);
  product.numberOfRatings = parseInt(
    formElement.elements[`${pid}-numberOfRatings`].value
  );

  // If there are any errors, prevent submission and display them
  const errors = validateProduct(product, formElement, "update", pid);
  if (errors.length > 0) {
    event.preventDefault();
    return "skip changing button text";
  }

  await updateDoc(doc(db, "products", pid), {
    name: product.name,
    description: product.description,
    category: doc(db, "categories", product.category),
    price: product.price,
    quantity: product.quantity,
    rating: product.rating,
    numberOfRatings: product.numberOfRatings,
  });

  window.location.reload();
}

export async function deleteProduct(pid) {
  await deleteDoc(doc(db, "products", pid));
  window.location.reload();
}

//#endregion

//#region Categories

export async function addNewCategory(event, formElement) {
  var category = {};
  category.name = formElement.elements["nameInput"].value.trim();

  // If there are any errors, prevent submission and display them
  const errors = await validateCategory(category, formElement, "new");
  if (errors.length > 0) {
    event.preventDefault();
    return;
  }

  await addDoc(collection(db, "categories"), {
    name: category.name,
  });

  alert("Category Has Been Added Successfully!");
  formElement.reset();
  window.location.reload();
}

export async function getAllCategories() {
  const querySnapshot = await getDocs(collection(db, "categories"));

  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getCategoryById(cid) {
  const docRef = doc(db, "categories", cid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return [];
  }
}

export async function getCategoryNameByCategoryId(cid) {
  const docRef = doc(db, "categories", cid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().name;
  } else {
    return null;
  }
}

export async function UpdateExistingCategory(event, formElement, cid) {
  var category = {};
  category.name = formElement.elements[`${cid}-name`].value.trim();

  // If there are any errors, prevent submission and display them
  const errors = await validateCategory(category, formElement, "update", cid);
  if (errors.length > 0) {
    event.preventDefault();
    return "skip changing button text";
  }

  await updateDoc(doc(db, "categories", cid), {
    name: category.name,
  });

  window.location.reload();
}

export async function deleteCategory(cid) {
  await deleteDoc(doc(db, "categories", cid));
  window.location.reload();
}

//#endregion

//#region Orders
//#endregion

//#region Wishlist
//#endregion

//#region Search
//#endregion

//#region Helper Functions

export async function loadCategoriesIntoSelectInput(selectElement) {
  var categories = await getAllCategories();

  for (let category of categories) {
    let op = document.createElement("option");
    op.value = category.id;
    op.innerHTML = category.name;

    if (category.id == "main") {
      op.disabled = true;
      selectElement.insertBefore(op, selectElement.firstChild);
      continue;
    }

    selectElement.appendChild(op);
  }
}

export async function uploadFile(pid, file, type) {
  var filePathAndName;
  if (type == "thumbnail") {
    filePathAndName = `/images/${pid}/thumbnail/thumbnail-${pid}-${Date.now()}`;
  } else if (type == "image") {
    filePathAndName = `/images/${pid}/images/image-${pid}-${Date.now()}`;
  }

  const storageRef = ref(storage, filePathAndName);

  const uploadTask = await uploadBytes(storageRef, file);

  const downloadURL = await getDownloadURL(uploadTask.ref);

  return downloadURL;
}

async function doesCategoryExist(categoryName) {
  const q = query(
    collection(db, "categories"),
    where("name", "==", categoryName)
  );

  // Get the matching documents (if any)
  const snapshot = await getDocs(q);

  // Return true if at least one document was found, false otherwise
  return !snapshot.empty;
}

//#endregion
