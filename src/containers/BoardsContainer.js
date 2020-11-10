import React from 'react';
import Boards from '../components/boards/Boards'
import BoardInput from '../components/boards/BoardInput'

import { connect } from 'react-redux';

class BoardsContainer extends React.Component {


    render() {
        return ( 
            <div>
                <BoardInput />
                <Boards boards={this.props.boards}/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}


export default connect(mapStateToProps)(BoardsContainer);