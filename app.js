import { db } from "./firebase.js";
import {
  collection, addDoc, onSnapshot, query, orderBy, getDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.send = async () => {
  const id = userId.value.trim();
  if(!id) return alert("Brak ID");

  const idDoc = await getDoc(doc(db,"ids",id));
  if(!idDoc.exists()) return alert("Nieprawidłowe ID");

  await addDoc(collection(db,"comments"),{
    id: id,
    text: text.value,
    time: Date.now()
  });

  text.value="";
};

const q = query(collection(db,"comments"), orderBy("time","desc"));
onSnapshot(q,snap=>{
  list.innerHTML="";
  snap.forEach(d=>{
    const c=d.data();
    list.innerHTML+=`<li><b>${c.id}:</b> ${c.text}</li>`;
  });
});
