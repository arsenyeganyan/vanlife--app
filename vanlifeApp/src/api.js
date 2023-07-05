import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCnEe2nPE5jz6VO1ITjPONMvpLkTfRUGO8",
  authDomain: "vanlife-course-app.firebaseapp.com",
  projectId: "vanlife-course-app",
  storageBucket: "vanlife-course-app.appspot.com",
  messagingSenderId: "129232136940",
  appId: "1:129232136940:web:5d4b9a100db27175c313c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getVans(){
   const querySnapshot = await getDocs(vansCollectionRef);
   const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
   }))
   return dataArr;
}

export async function getVan(id){
    const docRef = doc(db, "vans", id);
    const vanSnapshot = await getDoc(docRef);
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    };
}

export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId", "==", "123"));
    const querySnapshot = await getDocs(q);
    const dataArr = querySnapshot.docs.map(doc => ({
         ...doc.data(),
         id: doc.id
    }))
    return dataArr;
}

export async function loginUser(creds){
    await sleep(1000);
    const res = await fetch("/api/login", 
        { method: "post", body: JSON.stringify(creds) }
    );
    const data = await res.json();
    
    if(!res.ok){
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data;
}