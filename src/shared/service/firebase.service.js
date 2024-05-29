import { db } from '../config/firebase.config.js';
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

export class FirebaseService {
  static async get(collectionName) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.log('Error en la solicitud GET:', error);
      throw error;
    }
  }

  static async post(collectionName, id, data) {
    try {
      await setDoc(doc(db, collectionName, id), data);
      return { id, ...data };
    } catch (error) {
      console.log('Error en la solicitud POST:', error);
      throw error;
    }
  }

  static async put(collectionName, id, data) {
    try {
      await setDoc(doc(db, collectionName, id), data, { merge: true });
      return { id, ...data };
    } catch (error) {
      console.log('Error en la solicitud PUT:', error);
      throw error;
    }
  }

  static async delete(collectionName, id) {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return { id };
    } catch (error) {
      console.log('Error en la solicitud DELETE:', error);
      throw error;
    }
  }
}
