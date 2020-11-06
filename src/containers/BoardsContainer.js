import React from 'react';

import { connect } from 'react-redux';

class BoardsContainer extends React.Component {


    render() {
        return <div>these are my boards</div>
    }
} 

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}


export default connect(mapStateToProps)(BoardsContainer);