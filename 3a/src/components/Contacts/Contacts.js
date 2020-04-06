import React, { useEffect, useState } from 'react'
import { firebase, db, auth } from '../../firebase'
import style from './contacts.module.css'


const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let filteredContact = Object.keys(contacts).map((key) => contacts[key]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const people = filteredContact.map((contact) => {
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

    console.log(filteredContact)
    useEffect(() => {

        const results = people.filter(contact =>
            contact.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);


    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />

            {searchTerm ? searchResults.map(item => (
                <h3 style={{ color: 'white' }}>{item}</h3>
            )) : null}

            {contacts && contacts.map((contact) => {
                return <h3 >{contact.username}</h3>
            })}
        </>
    )
}

export default Contacts