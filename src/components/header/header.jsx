import React from "react";
import "./header.css";
import Container from "../container/container";
import Img from "../../assets/Toto.jpg";

function Header() {
    return (
        <div className="border">
            <Container>
                <div className="header" >
                    <h1>DashBoard</h1>
                    <div className="Admin">
                        <h1>Tabaeak ✩</h1>
                        <div className="img">
                            <img src={Img} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Header;