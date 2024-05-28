import React from "react";
import "./footer.css"

export const Footer = () => {
    return (
        <div className="all-footer">
            <section className="footer">
                <div className="footer-row">
                    <div className="footer-column">
                        <div className="contact">
                            <h3>Kontakt</h3>
                            <ul>
                                <li>Uzun Mirkova 24, Valjevo, Srbija</li>
                                <li>+381 14 565 211</li>
                                <li>knjizaraatina@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h2>Newsletter</h2>
                        <form>
                            <input type="email" placeholder="Unesite email adresu..." required /> <br />
                            <button type="submit" className="btnPrijaviSe">Prijavite se</button>
                        </form>
                    </div>
                </div>

                <hr />
                <p className="copyright">Copyright © 2023. Knjižara "Atina"</p>

            </section>
        </div>
    );
};