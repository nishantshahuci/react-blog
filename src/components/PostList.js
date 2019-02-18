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
        return <div>PostList</div>;
    }
}

export default connect(null, {fetchPosts})(PostList);
