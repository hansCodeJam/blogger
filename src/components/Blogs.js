import React from 'react';
import BlogItem from './BlogItem'
import { searchIt } from '../services/search';
import PropTypes from 'prop-types';

const Blogs = (props) => {
  return(
    <div>
      {props.blogs.filter(searchIt(props.searchTerm)).map((blog, idx) => {
                return (
                  <BlogItem key={blog._id} onDelete={props.onDelete} blog={blog} onUpdate={props.onUpdate}/>
                  
                );
              })}
    </div>
  )
}

Blogs.propTypes = {
  toggle: PropTypes.number,
  onDelete: PropTypes.func,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })
  )
}

export default Blogs;