import React from "react";
import {BOOKS} from "../../books"
import {useState} from "react";
import "./search.css"

export const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="zaglavlje">
      <label> <b>Proverite da li imamo knjigu koju tražite</b></label> <br />
                  
      <input onChange={(e) => setSearch(e.target.value)} 
      placeholder='Unesite ime knjige' type='text'/>
      <br /><br />

      <div className="filter">
        {BOOKS.filter((item) => 
        {return search.toLowerCase() === '' ? item : (item.bookName.toLowerCase()).includes(search)}).map((item) =>(
            
        <p>{item.bookName}, {item.author}, {item.price} dinara</p>

        ) )}
        <br />
      </div>
    </div>
  )
}