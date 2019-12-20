import React from 'react';

function Error({mesaje}){
    return(
        <div className="card-panel red darken-4 error col s12">
            {mesaje}
        </div>
    );
}

export default Error;