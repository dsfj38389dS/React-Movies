import React from 'react';
function Footer () {
    return(<>
    <footer className="page-footer">
          <div className="container">
              <div className="col l6 s12">
                <h5 className="white-text">{new Date().getFullYear()}</h5>
              </div>
          </div>
        </footer>
    </>)
}
export {Footer}