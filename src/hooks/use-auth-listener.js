import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Nouvelle API modulaire

export default function useAuthListener() {
  // Initialiser l'utilisateur à partir de localStorage (optimisation avec callback)
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('authUser'));
  });

  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase); // Obtenir l'instance d'authentification Firebase

  useEffect(() => {
    if (!auth) return; // Si auth n'est pas encore défini, ne pas exécuter l'effet

    // Écouter les changements d'état d'authentification
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // L'utilisateur est connecté
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // L'utilisateur est déconnecté
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // Nettoyer l'écouteur lorsque le composant est démonté
    return unsubscribe;
  }, [auth]); // Exécuter cet effet uniquement lorsque "auth" change

  return { user };
}
