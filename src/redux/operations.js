import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://649d76829bac4a8e669dc70a.mockapi.io/phonebook/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
