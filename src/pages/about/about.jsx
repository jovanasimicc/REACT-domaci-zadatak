import React from "react"
import image1 from "../../images/about1.jpg"
import image2 from "../../images/about2.jpg"
import "./about.css"

export const About = () => {
    return (
    <div className="all">
        <h1>Dobro došli!</h1>
        
        <section className="about">
            <div className="row">
                <div className="about-col">
                <h3>O nama</h3>
                <p>Naša knjižara „Atina“ osnovana je 2019. godine u Valjevu. <br /> 
                Već 3 godine smo inspirisani vašim zadovoljstvom i osmehom svake zadovoljne mušterije. <br /> 
                Zahvaljujući marljivom i posvećenom radu danas, osim u Valjevu, poslujemo u još 3 grada: <br /> 
                Novom Sadu, Zrenjaninu i Čačku. Odlučni smo u želji da svoje dalje poslovanje nastavimo <br /> 
                da širimo na teritoriji Srbije.Trudimo se da najnovija izdanja iz štamparija stignu pravo <br /> 
                na naše police i u vaše ruke! <br />
                Strpljivo, knjigu po knjigu, slažemo naše stepenice do uspeha i ostvarivanja naše misije!</p>
                </div>

                <div className="about-img">
                <img src={image1} alt="aboutImage1"></img>
                </div>
            </div>
        </section>

        <hr />

        <section className="about1">
            <div className="row1">
                <div className="about-col1">
                <h3>Misija i vizija</h3>
                <p>Misija nam je da naše knjige postanu sinonim za kvalitet i uživanje. <br /> 
                Kod nas možete pronaći sve vrste knjiga:
                dečije, naučne, drame, klasike, istorijske... <br /> Družimo se sa Andrićem, Selimovićem, Kaporom, 
                Dostojevskim i mnogim drugim piscima. <br />
                U našim prostorijama organizujemo književne večeri i diskusije koje su besplatne. <br /> 
                Želimo da naše knjige budu neizostavni deo svačijeg kutka za čitanje i imperativ pri svakoj kupovini
                knjiga. <b>„Knjigu po knjigu do sreće“</b>  je naša vizija i obećavamo da ćemo svakodnevno <br />
                raditi na tome i pomerati sopstvene granice. Pozivamo vas da postanete deo našeg sveta <br /> i 
                pridružite nam se na putu ka sreći!</p> 
                </div>

                <div className="about-img1">
                <img src={image2} alt="aboutImage2"></img>
                </div>
            </div>
        </section>
    </div>

   )
}

export default About