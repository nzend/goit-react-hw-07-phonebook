import css from './App.module.css';
import Form from '../Form/Form';

import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { async } from 'q';
axios.defaults.baseURL =
  'https://649d76829bac4a8e669dc70a.mockapi.io/phonebook/';

 



const App = () => {
  // const contacts = useSelector(state => state.contacts.contacts);
  const contacts = true;

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
