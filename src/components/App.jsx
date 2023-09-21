import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Section from './Section/Section';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';
import Loader from './Loader/Loader';
import Message from './Message/Message';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);
  return (
    <div>
      <Section title="Phonebook">
        {isLoading ? (
          <Loader />
        ) : errorMessage ? (
          <Message message={errorMessage} />
        ) : (
          <ContactForm />
        )}
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        {isLoading ? (
          <Loader />
        ) : errorMessage ? (
          <Message message={errorMessage} />
        ) : (
          <ContactList />
        )}
      </Section>
    </div>
  );
};
