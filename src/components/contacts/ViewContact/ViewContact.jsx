import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

const ViewContact = () => {
  //id get

  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
    group:{}

  });

  //recive data

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getContact(contactId);
        let groupResponse = await ContactService.getGroup(response.data);
        // console.log(response.data);

        setState({
          ...state,
          loading: false,
          contact: response.data,
          group: groupResponse.data
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
  }, [contactId]);

  let { loading, contact, errorMessage,group } = state;

  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold">View Contact</p>
              <p className="fst-italic">
              The View Contact Details feature provides users with a comprehensive view of a specific contact's information. This feature enhances user experience by displaying all pertinent data in a well-structured format, allowing for easy access and readability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : 
        <>
          {Object.keys(contact).length > 0 && Object.keys(group).length>0 &&

            <section className="view-contact mt-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img src={contact.photo} alt="" className="contact-img" />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item list-group list-group-item-action">
                        Name:<span className="fw-blod">{contact.name}</span>
                      </li>
                      <li className="list-group-item list-group list-group-item-action">
                        Mobile:<span className="fw-blod">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group list-group-item-action">
                        Email:
                        <span className="fw-blod">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group list-group-item-action">
                        Company:
                        <span className="fw-blod">{contact.company}</span>
                      </li>
                      <li className="list-group-item list-group list-group-item-action">
                        Title:
                        <span className="fw-blod">{contact.title}</span>
                      </li>
                      <li className="list-group-item list-group list-group-item-action">
                        Group:
                        <span className="fw-blod">{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to="/contacts/list" className="btn btn-dark">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          
          }
        </>
      }
    </>
  );
};

export default ViewContact;
