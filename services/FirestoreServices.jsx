import { db } from '../config/firebse';
import { collection, addDoc, getDocs } from 'firebase/firestore';
export const addTask = async (task) => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), task);
    console.log('Task added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding task: ', error);
  }
};
export const getAllTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks: ', error);
  }
};