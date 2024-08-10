import "./Contact.css";
import Button from "../../components/Button/Button";
import { SetStateAction, useState } from "react";

const Contact = () => {
    const [name, useName] = useState("");
    const [email, useEmail] = useState("");
    const [phone, usePhone] = useState("");
    const [text, useText] = useState("");

    const handleChangeName = (e: { target: { value: SetStateAction<string>; }; }) => {
        useName(e.target.value);
    };
    const handleChangeEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
        useEmail(e.target.value);
    };
    const handleChangePhone = (e: { target: { value: SetStateAction<string>; }; }) => {
        usePhone(e.target.value);
    };
    const handleChangeText = (e: { target: { value: SetStateAction<string>; }; }) => {
        useText(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            text
        };

        console.log(data);
    }


    return (
        <>
            <div className="contact">
                <div className="contact_info">
                    <h1>Kontakt</h1>
                    <p>Proszę wypełnić poniższy formularz, aby wysłać nam wiadomość e-mail.</p>
                    <p>Masz pytania? Potrzebujesz pomocy w sprawie pobytu? Jesteśmy tu, aby Ci pomóc! Skontaktuj się z nami przez formularz lub mailowo. Odpowiemy najszybciej, jak to możliwe.</p>
                    <ul>
                        <li>Polski</li>
                        <li>English</li>
                        <li>Українська</li>
                        <li>Русский</li>
                    </ul>
                    <address className="contact_info-address">
                        <h2>E-mail:</h2>
                        <a href="mailto:mylegalno@op.pl">mylegalno@op.pl</a>
                        <h2>Whatsapp:</h2>
                        <a href="tel:+48699699699">+48 699 699 699</a>
                    </address>
                </div>
                <form className="contact_form" onSubmit={handleSubmit}>
                    <label className="contact_form-label">
                        Imię
                        <input className="contact_form-input" type="text" name="name" onChange={handleChangeName}></input>
                    </label>
                    <label className="contact_form-label">
                        E-mail
                        <input className="contact_form-input" type="text" name="email" onChange={handleChangeEmail}></input>
                    </label>
                    <label className="contact_form-label">
                        Telefon
                        <input className="contact_form-input" type="tel" name="phone" onChange={handleChangePhone}></input>
                    </label>
                    <label className="contact_form-label">
                        Wiadomość
                        <textarea className="contact_form-input" name="text" rows={8} onChange={handleChangeText}></textarea>
                    </label>
                    <div className="contact_button">
                        <Button />
                    </div>
                </form>
            </div>
        </>
    )
};

export default Contact;