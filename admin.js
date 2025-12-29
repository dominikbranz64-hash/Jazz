import { db } from "./firebase.js";
import {
  setDoc, doc, getDocs, collection, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.addId = async ()=>{
  await setDoc(doc(db,"ids",newId.value),{
    created: Date.now()
  });
  location.reload();
};

const snap = await getDocs(collection(db,"ids"));
snap.forEach(d=>{
  const li=document.createElement("li");
  li.innerHTML=`${d.id} <button onclick="del('${d.id}')">X</button>`;
  ids.appendChild(li);
});

window.del = async(id)=>{
  await deleteDoc(doc(db,"ids",id));
  location.reload();
};
