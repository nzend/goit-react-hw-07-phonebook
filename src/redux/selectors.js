// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;
