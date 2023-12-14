// Link: https://firebase.google.com/docs/web/learn-more?authuser=0#libraries-cdn
import * as firebase_app from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import * as firebase_auth from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import * as firebase_firestore from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import * as firebase_storage from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

Object.assign(globalThis, firebase_app);
Object.assign(globalThis, firebase_auth);
Object.assign(globalThis, firebase_firestore);
Object.assign(globalThis, firebase_storage);

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

// Add functions to global window
window.createNewProduct = createNewProduct;
window.getAllProducts = getAllProducts;
window.getProductByID = getProductByID;
window.getAllCategories = getAllCategories;
window.loadCategoriesIntoSelectInput = loadCategoriesIntoSelectInput;

/**
 * 
 * Input Validation
 * 
 */

function validateProductName(inputElement) {

}

function validateProductDescription(inputElement) {

}

// function validateProductDescription(inputElement) {

// }

/**
 * 
 * Auth
 * 
 */

async function checkIfUserIsLoggedIn() {
    await onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            alert("Signed in!")
            // ...
        } else {
            // User is signed out
            // ...
            alert("Signed out!")
        }
    });
}

async function signUpNewUser() {
    // Validation here!

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

async function signInExistingUser(email, password) {
    // Validation here!

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

function signOut() {
    auth.signOut();
}

/**
 * 
 * CRUD on products
 * 
 */

export async function createNewProduct(e, formElement) {
    e.preventDefault();

    // extract values from form
    var name = formElement.elements["name"].value;
    var description = formElement.elements["description"].value;
    var category = formElement.elements["category"].value;
    var price = formElement.elements["price"].value;
    var quantity = formElement.elements["quantity"].value;
    var thumbnail = formElement.elements["thumbnail"].files[0];
    var images = formElement.elements["images"].files;

    // Validation here!

    const docRef = await addDoc(collection(db, "products"), {
        name: name,
        description: description,
        category: doc(db, "categories", category),
        price: price,
        quantity: quantity,
        rating: 0,
        numberOfRatings: 0
    });

    const thumbnailURL = await uploadFile(docRef.id, thumbnail, "thumbnail");
    await setDoc(doc(db, "products", docRef.id), {
        thumbnail: thumbnailURL
    }, { merge: true });


    var imagesArray = [];
    for (let index = 0; index < Math.min(4, images.length); index++) {
        const image = images[index];
        const imageURL = await uploadFile(docRef.id, image, "image");
        imagesArray.push(imageURL);
    }

    await setDoc(doc(db, "products", docRef.id), {
        images: imagesArray
    }, { merge: true });
}

export async function getAllProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));

    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

export async function getProductByID(pid) {
    const docRef = doc(db, "products", pid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return [];
    }
}

export async function UpdateExistingProduct(e, formElement, pid) {
    e.preventDefault();

    var name = formElement.elements["name"].value;
    var description = formElement.elements["description"].value;
    var category = formElement.elements["category"].value;
    var price = formElement.elements["price"].value;
    var quantity = formElement.elements["quantity"].value;
    var rating = formElement.elements["rating"].value;
    var numberOfRatings = formElement.elements["numberOfRatings"].value;

    // Validation here!

    await updateDoc(doc(db, "products", pid), {
        name: name,
        description: description,
        category: category,
        price: price,
        quantity: quantity,
        rating: rating,
        numberOfRatings: numberOfRatings
    });
}

export async function deleteProduct(pid) {
    await deleteDoc(doc(db, "products", pid));
}

/**
 * 
 * CRUD on categories
 * 
 */

export async function createNewCategory(e, formElement) {
    e.preventDefault();

    // extract values from form
    var name = formElement.elements["name"].value;

    // Validation here!
    // name.split(" ").join("_") ======> Check if there are spaces or non alphacahr in name
    var nameAsID = name;

    const docRef = await setDoc(doc(db, "categories", nameAsID), {
        name: name
    });
    console.log("Document written with ID: ", docRef.id);
}

export async function getAllCategories() {
    const querySnapshot = await getDocs(collection(db, "categories"));

    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

async function getCategoryByID(cid) {
    // Validation here!

    const docRef = doc(db, "categories", cid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return [];
    }
}

async function UpdateExistingCategory(cid, name) {
    // Validation here!

    const categoryRef = doc(db, "categories", cid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(categoryRef, {
        name: name
    });
}

async function deleteCategory(cid) {
    // Validation here!

    await deleteDoc(doc(db, "categories", cid));
}

/**
 * 
 * Order functions
 * 
 */

async function createNewOrder(itemsAndQuantities) {

    await onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            addOrderToDatabase(uid);
            // ...
        } else {
            // User is signed out
            // ...
            alert("Signed out!")
        }
    });

}

async function addOrderToDatabase(user_id) {
    const docRef = await addDoc(collection(db, "users", user_id, "orders"), {
        name: "test"
    });
}

/**
 * 
 * Helper Functions
 * 
 */

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
    if (type == "thumbnail") {
        var filePathAndName = `/images/${pid}/thumbnail/thumbnail-${pid}-${Date.now()}`;
    } else if (type == "image") {
        var filePathAndName = `/images/${pid}/images/image-${pid}-${Date.now()}`;
    }

    const storageRef = ref(storage, filePathAndName);

    const uploadTask = await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(uploadTask.ref);

    return downloadURL;
}
