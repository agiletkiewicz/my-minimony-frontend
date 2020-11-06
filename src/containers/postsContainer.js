import React from 'react';
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux';
import SaveModal from '../components/SaveModal';

class PostsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    setModalShow = (status) => {
        this.setState({ modalShow: status });
        console.log("clicked!")
    }

    render() {
        return (
        <div>
            <Posts posts={this.props.posts} setModalShow={this.setModalShow}/>
            <SaveModal
                show={this.state.modalShow}
                onHide={() => this.setModalShow(false)}
            />
        </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(PostsContainer);