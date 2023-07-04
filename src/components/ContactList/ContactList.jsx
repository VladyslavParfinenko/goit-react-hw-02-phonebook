import css from './ContactList.module.css'
import cssq from '../ContactForm/ContactForm.module.css'


const ContactList =({filteredContacts,onDeleteContact})=>{

return(
<ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>{contact.name}:      {contact.number} <button type="button" className={cssq.gradientButton} onClick={()=>onDeleteContact(contact.id)}>Delete</button></li>
          ))}
        </ul>
);

}

export default ContactList;