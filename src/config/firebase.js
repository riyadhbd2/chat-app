
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVfO_44VJ4ir0Bq78rw7E8RnZq7wFhVp8",
  authDomain: "chat-app-gs-9508d.firebaseapp.com",
  projectId: "chat-app-gs-9508d",
  storageBucket: "chat-app-gs-9508d.appspot.com",
  messagingSenderId: "455285023635",
  appId: "1:455285023635:web:b73e442cfe60df8d6dfe66"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signUp = async (username, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "hey, there i am using chat app",
            lastSeen: Date.now(),
        })
        await setDoc(doc(db,"chat", user.uid),{
            chatData: [],
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }

}

const login = async (email, password) =>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error);
        toast.error(error.code);
    }
}

export {signUp, login}