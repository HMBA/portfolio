import React, {useState} from 'react'
import Contactcard from './ContactCard'
import ContactData from './ContactData'

const Contact = () => {
   const [contactDataStore, setcontactData] = useState(ContactData)
    return (
        <>
          {<Contactcard contactDataProps={contactDataStore}/>}
        </>
    )
}
export default Contact
