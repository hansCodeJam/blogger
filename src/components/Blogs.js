import React from 'react';
import BlogItem from './BlogItem'
import { searchIt } from '../services/search';

const Blogs = (props) => {
  return(
    <div>
      {props.blogs.filter(searchIt(props.searchTerm)).map((blog, idx) => {
                return (
                  <BlogItem key={blog.objectId} onDelete={props.onDelete} blog={blog}/>
                  
                );
              })}
    </div>
  )
}

export default Blogs;