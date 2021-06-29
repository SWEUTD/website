import React, { useState, useEffect } from 'react';
import axios from "axios";
import { authMiddleWare } from "../util/auth";

import MemberList from './memberList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [memberListDefault, setMemberListDefault] = useState();
  const [memberList, setMemberList] = useState();

  const fetchData = async () => {
    return await fetch('https://us-central1-swe-utd-portal.cloudfunctions.net/api/memberList')
      .then(response => response.json())
      .then(data => {
         let memberList = data.users.filter(item => (item.events != null && item.events.length >= 1)).sort((a, b) => a.points > b.points ? -1 : 1);
         setMemberList(memberList) 
         setMemberListDefault(memberList)
       });
       
    }

  const updateInput = async (input) => {
      const filtered = memberListDefault.filter(item => {
          // console.log(input);
        return item.firstName.toLowerCase().includes(input.toLowerCase()) || item.events.some(function(item) {
          return item.eventName.toLowerCase().includes(input.toLowerCase())
        });
       })
     setInput(input);
     setMemberList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
	
  return (
    <>
      <input 
       style={BarStyling}
       key="random1"
       value={input}
       placeholder={"Search member or event"}
       onChange={(e) => updateInput(e.target.value)}
      />
      <hr/>
      <MemberList memberList={memberList}/>
    </>
   );
}

export default SearchPage