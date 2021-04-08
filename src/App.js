import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/Search-Form";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody"


function App() {
    const [employees, setEmployees] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
  
    //API call to render employees data
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&nat=us")
          .then((res) => res.json())
          .then((json) => {
            setEmployees(json.results);
          })
      
    }, []);

    //function to display input searched names
    function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
    }

    const filteredEmployees = employees.filter(employee => `${employee.name.first.toLowerCase()}  ${employee.name.last.toLowerCase()}`.includes(searchTerm.toLowerCase()));

    function handleSortByName() {
      // sort array ascending or descending by first name
      if (!sorted) {
          setEmployees(employees.sort((a, b) => `${a.name.first} ${a.name.last}` > `${b.name.first} ${b.name.last}`? 1 : -1));
          setSorted(true);
      } else {
          setEmployees(employees.sort((a, b) => `${a.name.first} ${a.name.last}` > `${b.name.first} ${b.name.last}` ? -1 : 1));
          setSorted(false);
      }
    }

    return (
        <>
          <Header />
            <div className="container">
                <SearchForm onSearch={handleSearchTerm} searchTerm={searchTerm} />         
                <table className="table">
                  <Thead handleSortByName={handleSortByName}/>
                  <tbody>
                    <Tbody employees={filteredEmployees}/>
                  </tbody>
                </table>
            </div>
          <Footer />
      </>
   );
}


export default App;