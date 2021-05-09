import React, { useState, useEffect } from 'react';
// import SearchBar from './searchBar';
import CountryList from './memberList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:5000/swe-utd-portal/us-central1/api/memberList')
      .then(response => response.json())
      .then(data => {
         //data.users.filter(member => (member.isMember == true));
         //console.log(data.users);
         //let memberList = data.users
         //data.users.filter(item => (item.isMember == false));
         //console.log(data.users.filter(item => (item.events != null && item.events.length >= 1)))
         let memberList = data.users.filter(item => (item.events != null && item.events.length >= 1)).sort((a, b) => a.points > b.points ? -1 : 1);
         setCountryList(memberList) 
         setCountryListDefault(memberList)
         //console.log("Data in search page:" + data.users.length);
         //console.log("Data in search page:" + data.users[0].firstName);
         //console.log("Data in search page:" + data.users[1]);
       });
       
    }

  const updateInput = async (input) => {
      //console.log("country list default:"+ countryListDefault);
      const filtered = countryListDefault.filter(item => {
        //if (item.isMember == true) {
          console.log(input);
        return item.firstName.toLowerCase().includes(input.toLowerCase()) || item.events.some(function(item) {
          return item.eventName.toLowerCase().includes(input.toLowerCase())
        });
        //} else return null;
       })
     setInput(input);
     setCountryList(filtered);
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
      
      <CountryList countryList={countryList}/>
    </>
   );
}

export default SearchPage