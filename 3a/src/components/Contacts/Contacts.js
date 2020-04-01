import React, { useEffect, useState } from 'react'
import { firebase, db, auth } from '../../firebase'
import style from './contacts.module.css'


const Contacts = () => {
    const [contacts, setContacts] = useState('')

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

    return (
        <>
            {
                contacts && contacts.map((user, index) => {
                    return <p key={index} className={style.h1}>{user.username}</p>
                })
            }
        </>
    )
}

export default Contacts