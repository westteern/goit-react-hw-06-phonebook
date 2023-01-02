import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const tasksSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const repeatCheck = state.find(
          contact => contact.name === action.payload.name
        );
        repeatCheck
          ? alert(`${action.payload.name} is already in contacts!`)
          : state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name: name,
            number: number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.filter(contact => contact.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = tasksSlice.actions;
export const contactReducer = tasksSlice.reducer;
