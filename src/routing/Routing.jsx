import React from 'react'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'
import ContactList from '../components/contacts/ContactList/ContactList'
import AddContact from '../components/contacts/AddContact/AddContact'
import ViewContact from '../components/contacts/ViewContact/ViewContact'
import EditContact from '../components/contacts/EditContact/EditContact'
import PageNotFound from '../components/PageNotFound/PageNotFound'
// import Spinner from '../components/Spinner/Spinner'
// import Footer from '../components/Footer/Footer'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={<Navigate to={'/contacts/list'}/>}/>
                
                <Route path='/contacts/list' element={<ContactList/>}/>
                <Route path='/contacts/add' element={<AddContact/>}/>
                <Route path='/contacts/view/:contactId' element={<ViewContact/>}/>
                <Route path='/contacts/edit/:contactId' element={<EditContact/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            
        </BrowserRouter>
    </>
  )
}

export default Routing