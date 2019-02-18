import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

// PostList component
class PostList extends Component {

    // after component is mounted, call action creator
    componentDidMount = () => {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props);
        return <div>PostList</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
