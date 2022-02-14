import React from 'react'


export const Footer = () => {
    let styless={
        
        top:"40vh",
        width:"100%",
        position:"relative"
    }
    return (
        <div className="container" style={styless}>
            <footer className="bg-dark text-light my-3" >
              <p className="text-center">  Copyright &copy;My Todo-list copyrights</p>
            </footer>
        </div>
    )
}
