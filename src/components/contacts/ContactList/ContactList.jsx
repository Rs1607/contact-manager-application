import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";

const ContactList = () => {

  let[query,setQuery]=useState({
    text:''
  })



  let [state, setState] = useState({
    //initialState
    loading: false,
    contacts: [],
    filteredContacts:[],
    errorMessage: "",
  });

  // useEffect(async()=>{
  //   try{
  //     let response= await ContactService.getAllContacts()
  //     // console.log(response.data)

  //   }
  //   catch(error){

  //   }

  // })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        // console.log(response.data);

        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContacts:response.data
        });
      } catch (error) {
        // console.error(error);

        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    };

    fetchData();
  }, []);



  //delete

  let clickDelete= async(contactId)=>{
    try{
      let response=await ContactService.deleteContact(contactId)
      if(response){
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        // console.log(response.data);

        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContacts:response.data
        });

      }

    }
    catch(error){
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });

    }
  }


  //search

  let searchContacts=(event)=>{
    setQuery({...query, text:event.target.value})
    let theContacts=state.contacts.filter(contact=>{
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    // console.log(theContacts)
    setState({
      ...state,
      filteredContacts:theContacts
    })

  }


  let { loading, contacts, filteredContacts, errorMessage } = state;

  return (
    <>
    {/* <pre>{query.text}</pre> */}
      {/* <pre>{JSON.stringify(contacts)}</pre> */}
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to="/contacts/add" className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                The Contact Manager App is designed to help users efficiently organize, manage, and maintain their personal and professional contacts. With a user-friendly interface and robust functionality, this app allows users to easily add, update, delete, and search for contacts, ensuring they stay connected and informed.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                      name="text"
                      value={query.text}
                      onChange={searchContacts}
                        type="text"
                        className="form-control"
                        placeholder="Search Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="contct-list">
            <div className="container">
              <div className="row">

              {
                filteredContacts.length>0 && 
                filteredContacts.map(contact=>{
                  return(
                    <div className="col-md-6" key={contact.id}>
                  <div className="card my-2">
                    <div className="card-body">
                      <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4">
                          <img
                            src={contact.photo}
                            alt=""
                            className="contact-img"
                          />
                        </div>
                        <div className="col-md-7">
                          <ul className="list-group">
                            <li className="list-group-item list-group list-group-item-action">
                              Name:<span className="fw-blod">{contact.name}</span>
                            </li>
                            <li className="list-group-item list-group list-group-item-action">
                              Mobile:<span className="fw-blod">{contact.mobile}</span>
                            </li>
                            <li className="list-group-item list-group list-group-item-action">
                              Email:
                              <span className="fw-blod">
                              {contact.email}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-1 d-flex flex-column align-items-center">
                          <Link
                            to={`/contacts/view/${contact.id}`}
                            className="btn btn-warning my-1"
                          >
                            <i className="fa fa-eye" />
                          </Link>
                          <Link
                            to={`/contacts/edit/${contact.id}`}
                            className="btn btn-primary my-1"
                          >
                            <i className="fa fa-pen" />
                          </Link>
                          <button className="btn btn-danger my-1" onClick={()=> clickDelete(contact.id)}>
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  )
                })
              }
                
              </div>
            </div>
            <Footer/>
          </section>
          
        </>
        
      )}
    </>
  );
};

export default ContactList;
