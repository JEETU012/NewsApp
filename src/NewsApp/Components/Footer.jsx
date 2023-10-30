import React from 'react';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center my-auto py-3 text-white">
                &copy; {new Date().getFullYear()} News App. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;


    
