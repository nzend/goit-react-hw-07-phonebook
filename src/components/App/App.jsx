import css from './App.module.css';
import Form from '../Form/Form';

import { useEffect } from 'react';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

import { fetchContacts } from '../../redux/operations';
import { useDispatch } from 'react-redux';



const App = () => {
  const contacts = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.phonebookTitle}>
        Phone<span className={css.titlePart}>book</span>
      </h1>
      <Form></Form>
      {contacts ? (
        <>
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter />
          <ContactsList></ContactsList>
        </>
      ) : (
        <p className={css.empty__notification}>The contact list is empty</p>
      )}
    </div>
  );
};

export default App;
