import React from "react";

export const ContactPicker = (props) => {

  const { contacts, setContact } = props;

  const handleChange = e => {
    setContact(e.target.value);
  } 

  return (
    <select onChange={handleChange}>
      <option value="">--Pick a contact--</option>
      {
        contacts.map((contact, i) =>
          <option key={i} value={contact.name}>{contact.name}</option>
        )
      }
    </select>
  );
};
