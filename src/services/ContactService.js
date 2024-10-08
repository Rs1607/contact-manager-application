import axios from "axios"
export class ContactService{
    static serverURL=`http://localhost:9000`

//for group
    static getGroups(){    
        let dataURL =`${this.serverURL}/groups`;
        return axios.get(dataURL)
    }

    //for group id
    static getGroup(contact){
        let groupId=contact.groupId;
        let dataURL =`${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL)

    }

    static getAllContacts(){
        let dataURL= `${this.serverURL}/contacts`
        return axios.get(dataURL);
    }

    static getContact(contactId){
        let dataURL=`${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    //create data

    static createContact(contact){
         let dataURL= `${this.serverURL}/contacts`
         return axios.post(dataURL,contact);


    }


    //update

    static updateContact(contact,contactId){

        let dataURL=`${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL,contact);


   }

   //Delete

   static deleteContact(contactId){

    let dataURL=`${this.serverURL}/contacts/${contactId}`;
    return axios.delete(dataURL);


}




}