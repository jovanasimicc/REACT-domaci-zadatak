import React from "react";
import "./contact.css";

export const Contact = () => {
    return (
    <div className="contact">
        <h2>Podelite sa nama svoje utiske!</h2>
        <form id='kontaktForm'>
                  <label htmlFor='ime'>Ime i prezime</label> <br />
                  <input name='ime' placeholder='Unesite ime i prezime...' type='text' required />
                  <br /> <br /> <br />
                   <label htmlFor='email'>Email adresa</label> <br />
                  <input name='email' placeholder='Unesite email adresu...' type='email' required />
                  <br /> <br /> <br />
                  <label htmlFor='komentar'>Komentar</label> <br />
                  <textarea name='komentar' rows='7' placeholder='Unesite poruku...' required></textarea>
                  <br /> <br /> <br />
                  <button type='submit' className="contactBtn">Pošalji</button>
              </form>
          </div>
   )
}

export default Contact