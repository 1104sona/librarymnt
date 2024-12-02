import axios from "axios";

// Define the base URL for your backend API
const API_URL = "http://localhost:5000/api/books";

// Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books", error);
  }
};

// Create a new book
export const createBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error("Error creating book", error);
  }
};

// Delete a book
export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting book", error);
  }
};