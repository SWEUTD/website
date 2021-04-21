import React, { useState, useEffect } from 'react';
// import SearchBar from './searchBar';
import CountryList from './countryList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('http://localhost:5000/swe-utd-portal/us-central1/api/memberList')
      .then(response => response.json())
      .then(data => {
         setCountryList(data.users) 
         setCountryListDefault(data.users)
         //console.log("Data in search page:" + data.users.length);
         //console.log("Data in search page:" + data.users[0].firstName);
         //console.log("Data in search page:" + data.users[1]);
       });
       
    }

  const updateInput = async (input) => {
      //console.log("country list default:"+ countryListDefault);
      const filtered = countryListDefault.filter(item => {
          // console.log(item.firstName.toLowerCase().includes(input.toLowerCase()));
        return item.firstName.toLowerCase().includes(input.toLowerCase())
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
       placeholder={"search member"}
       onChange={(e) => updateInput(e.target.value)}
      />
      
      <CountryList countryList={countryList}/>
    </>
   );
}

export default SearchPage