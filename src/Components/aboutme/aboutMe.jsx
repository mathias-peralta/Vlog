import React, { Component } from "react";
import '../aboutme/aboutme.css'
class AboutMe extends Component {
    render() {
        return(
            <div className="container mt-3">
                <div className="row bgRow">
                    <div className="col-md-4 text-center p-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/avatar.png?alt=media&token=67a15361-e9b2-4fa2-a4c3-1532322896a6" className="m-auto" width="150px" height="150px" alt=""/>
                    </div>
                    <div className="col-md-8 p-2">
                        <h3 className="title">Mi Perfil</h3>
                        <p className="contenido text-white">Tengo 21 años, actualmente estoy en el 5to semestre de la carrera Lic. en Ciencias Informatica de la Facultad Politecnica de la
                            Universidad Nacional de Asunción
                        </p>
                    </div>
                </div>
                <div className=" row bgRow">
                    <h3 className="title mt-3 ml-3">Skills</h3>
                </div>
                <div className="row bgRow text-white text-center p-3">
                    <div className="col-md-3">
                        <p className="animate__animated animate__backInLeft">HTML</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/html-5.png?alt=media&token=8b8dfdee-0e9b-402c-bc62-3f5588862e93" 
                            alt=""
                            className="animate__animated animate__bounce"
                            height="200"
                            width="200"
                        />
                    </div>
                    <div className="col-md-3">
                        <p className="animate__animated animate__backInLeft">CSS3</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/css-3.png?alt=media&token=73ce949c-3db9-4d7e-bbc2-b97dadf5bb9a" 
                            alt=""
                            width="200"
                            height="200"
                            className="animate__animated animate__bounce"
                        />
                    </div>
                    <div className="col-md-3">
                        <p className="animate__animated animate__backInLeft">Bootstrap</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-bootstrap-fill animate__animated animate__bounce" viewBox="0 0 16 16">
                            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                        </svg>
                    </div>
                    <div className="col-md-3">
                        <p className="animate__animated animate__backInLeft">JavaScript</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/vlog-7a01f.appspot.com/o/javascript.png?alt=media&token=b3e89887-3e64-4759-9344-c9099602a85c" 
                            alt=""
                            width="200"
                            height="200"
                            className="animate__animated animate__bounce"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;