import { db } from '../config/firebase.config.js';
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

export class FirebaseService {
  /**
   * Obtiene todos los documentos de una colección.
   * @param {string} collectionName - El nombre de la colección.
   * @returns {Promise<Array>} - Una promesa que resuelve a un array de documentos.
   */
  static async get(collectionName) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.log('Error en la solicitud GET:', error);
      throw error;
    }
  }

  /**
   * Crea un nuevo documento en una colección.
   * @param {string} collectionName - El nombre de la colección.
   * @param {string} id - El ID del documento.
   * @param {Object} data - Los datos del documento.
   * @returns {Promise<Object>} - Una promesa que resuelve al documento creado.
   */
  static async post(collectionName, id, data) {
    try {
      await setDoc(doc(db, collectionName, id), data);
      return { id, ...data };
    } catch (error) {
      console.log('Error en la solicitud POST:', error);
      throw error;
    }
  }

  /**
   * Actualiza un documento en una colección, fusionando los datos.
   * @param {string} collectionName - El nombre de la colección.
   * @param {string} id - El ID del documento.
   * @param {Object} data - Los datos del documento.
   * @returns {Promise<Object>} - Una promesa que resuelve al documento actualizado.
   */
  static async put(collectionName, id, data) {
    try {
      await setDoc(doc(db, collectionName, id), data, { merge: true });
      return { id, ...data };
    } catch (error) {
      console.log('Error en la solicitud PUT:', error);
      throw error;
    }
  }

  /**
   * Elimina un documento de una colección.
   * @param {string} collectionName - El nombre de la colección.
   * @param {string} id - El ID del documento.
   * @returns {Promise<Object>} - Una promesa que resuelve al ID del documento eliminado.
   */
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