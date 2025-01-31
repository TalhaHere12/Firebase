import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebse';
const AuthStateHook = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("AuthStateHook - User from Firebase:", user); 
      setUser(user ? user : null);
    });
    return () => unsubscribe(); 
  }, []);
  return { user };
};
export default AuthStateHook;