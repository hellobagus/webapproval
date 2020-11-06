// import { withRouter } from 'react-router-dom';

// <button onClick={this.props.history.goBack}>Back</button>

// export default withRouter(goBack) 
import React from 'react'
import { withRouter } from 'react-router-dom';


function goBack() {
    return (
        <div>
            <button onClick={this.props.history.goBack}>Back</button>
            
        </div>
    )
}
export default withRouter(goBack)
