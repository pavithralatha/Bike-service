import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <small>Designed & Build by <a href="mailto:Pavijillulathagmail.com.com" style={{color:'rgb(26 210 14)'}}>Pavithra</a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | Pavithra</small> <br />
         </div>
    );
};

export default Copyright;