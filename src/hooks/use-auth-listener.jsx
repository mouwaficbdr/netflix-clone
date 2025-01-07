import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Nouvelle API modulaire

export default function useAuthListener() {
  const [user, setUser] = useState(() => {
    // Initialisation du state depuis localStorage avec un callback pour plus de performance
    return JSON.parse(localStorage.getItem('authUser'));
  });

  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase); // Obtenir l'instance d'authentification de Firebase

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // Cleanup de l'écouteur lorsque le composant est démonté
    return () => listener();
  }, [auth]); // Auth est une dépendance, il peut changer (utile si Firebase est reconfiguré)

  return { user };
}
