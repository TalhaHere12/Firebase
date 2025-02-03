import { db, auth } from '../config/firebse';
import { collection, addDoc, getDocs, where, query, deleteDoc, doc } from 'firebase/firestore';
export const addTask = async (task) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user logged in. Cannot add task.');
      return;
    }
    const docRef = await addDoc(collection(db, 'tasks'), {
      title: task.title,
      userId: user.uid,
      createdAt: Date.now(),
    });
    console.log('Task added with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding task:', error.message);
  }
};

export const getAllTasks = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user logged in. Cannot fetch tasks.');
      return [];
    }
    const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    const tasks = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log(`Fetched ${tasks.length} tasks.`);
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    return [];
  }
};

export const deleteTask = async (taskId) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user logged in. Cannot delete task.');
      return;
    }
    const taskDocRef = doc(db, 'tasks', taskId);
    await deleteDoc(taskDocRef);
    console.log('Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error.message);
  }
};