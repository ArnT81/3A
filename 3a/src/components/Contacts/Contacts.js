import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import styles from './contacts.module.css'
import { useHistory } from 'react-router-dom'


const Contacts = (props) => {
    const [contacts, setContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let filteredContact = Object.keys(contacts).map((key) => contacts[key]);
    const history = useHistory()

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const allUserNames = filteredContact.map((contact) => {
        return contact.username
    })

    useEffect(() => {
        db.collection('Users')
            .get()
            .then(snapshot => {
                const users = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    users.push(data)
                })
                setContacts(users)
            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        const results = allUserNames.filter(contact =>
            contact.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);


    const startMsg = () => {
        history.push('/message')
    }


    return (
        <div className={styles.contacts}>
            <h3>Search User</h3>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />

            {searchTerm ? searchResults.map((item, index) => (
                <h4 key={index} onClick={startMsg} className={styles.search}> {item}</h4>
            )) : null}

            {!searchTerm ? contacts.map((contact, index) => {
                return <h4 key={index} onClick={startMsg} >{contact.username}</h4>
            }) : null}
        </div>
    )
}
export default Contacts