import React from 'react';
import {db} from './config' ;
import {useEffect,useState} from  'react';
//import {useCallback} from  'react';
import {getDocs,collection} from 'firebase/firestore'


function FireDb() {
    
    const userCollectionRef=collection(db,"reactTrial")   
    const [users,setUsers]=useState([]);
    const getUsers = async() => {
        const data = await getDocs(userCollectionRef);
        const usersFiltered = data.docs.map((doc)=>(
            {...doc.data(), docId:doc.id
            }
        )) 
        console.log(usersFiltered) 
        setUsers(usersFiltered)  
    } 
    useEffect(() => {
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 

    const membershipCollectionRef=collection(db,"reactTrial/personalInfo/membershipInfo")   
    const [membership,setMembership]=useState([]);
    const getMembership = async() => {
        const data = await getDocs(membershipCollectionRef);  
        //console.log(data) 
        const membershipFiltered = data.docs.map((doc)=>(
            {...doc.data(), docId:doc.id
            }
        )) 
        console.log(membershipFiltered) 
        setMembership(membershipFiltered)  
    }  
    useEffect(() => {
        getMembership();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 

    
    const jobCollectionRef=collection(db,"reactTrial/personalInfo/job")   
    const [job,setJob]=useState([]);
    const getJob = async() => {
        const data = await getDocs(jobCollectionRef);  
        //console.log(data) 
        const jobFiltered = data.docs.map((doc)=>(
            {...doc.data(), docId:doc.id
            }
        )) 
        console.log(jobFiltered) 
        setJob(jobFiltered)  
    }  
    useEffect(() => {
        getJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 

    const dataUser= users.map((person) => (
        <div key={person.name}>       
        <div> name:{person.name} </div> 
        <div> batch:{person.batch}</div> 
        </div>
    ))   
    const dataJob= job.map((job) => (
   // (job.title === 'manager' &&   
    <div key={job.title}> <div>title:{job.title}</div><div>company:{job.company}</div></div>
    ))

    const dataMembership= membership.map((member) => (     
        <div key={member.id}><div></div> valid:{member.validity}<div>dateofexpiry:{member.dateofexpiry.toDate().toDateString()}</div></div>) 
     )  
    return <div><div>{dataUser}</div><div>{dataJob}</div><div>{dataMembership}</div></div>
      
}
export default FireDb;