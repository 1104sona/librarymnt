import axios from "axios";

const API_URL = "http://localhost:5000/api/books"; // Adjust the API URL based on your backend

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching books!", error);
    throw error;
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error("There was an error adding the book!", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("There was an error deleting the book!", error);
    throw error;
  }
};