// import { useEffect, useState, useContext } from 'react'
// import { FirebaseContext } from '../context/firebase'

// export default function useContent(target) {
//   const [content, setContent] = useState([])
//   const { firebase } = useContext(FirebaseContext)

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection()
//       .get()
//       .then((snapshot) => {
//         const allContent = snapshot.docs.map((contentObj) => ({
//           ...contentObj.data(),
//           docId: contentObj.id
//         }))
//         setContent(allContent)
//       })
//       .catch((error) => {
//         console.error(error.message);
//       })
//   }, [firebase])
  
//   return { [target]: content };
// }

import { useEffect, useState, useContext } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]); 
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Création d'une référence à la collection ciblée
        const db = getFirestore(firebase);
        const targetCollection = collection(db, target);

        // Récupération des documents de la collection
        const snapshot = await getDocs(targetCollection);

        // Transformation des documents en tableau
        const allContent = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id, // Ajout de l'ID du document
        }));

        setContent(allContent); // Mise à jour de l'état local
      } catch (error) {
        console.error(
          `Error while fetching (${target}) data:`,
          error
        );
      }
    };

    fetchContent();
  }, [firebase, target]); // Dépendances : Firebase et target

  return { [target]: content }; // Retourne un objet structuré avec la clé `target`
}
