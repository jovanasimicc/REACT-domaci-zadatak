import React from "react";
import {BOOKS} from "../../books"
import {useState} from "react";
import "./search.css"
import { AlignLeft } from "phosphor-react";

export const Search = () => {
    const [search, setSearch] = useState('');

    return (
    <div className="zaglavlje">
          <label> <b>Pronađite naslov koji tražite! </b></label> <br />
                  <input onChange={(e) => setSearch(e.target.value)} 
                  placeholder='Unesite ime knjige' type='text'/>
                  <br /> <br />

                  <div className="filter">
            <tbody>

          {BOOKS.filter((item) => 
          {return search.toLowerCase() === '' ? item : (item.bookName.toLowerCase()).includes(search)}).map((item) =>(
            <tr>
                <td>{item.bookName}</td>
                <td>{item.author}</td>
                <td>{item.price} dinara</td>
            </tr>
            ) )}
            </tbody>
        </div>
        </div>
    )
}