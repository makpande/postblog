import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostIndex from './components/posts_index';
import PostNew from './components/posts_new';
import App from './components/app';
import PostsShow from './components/post_show';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

//this.props.params.id
