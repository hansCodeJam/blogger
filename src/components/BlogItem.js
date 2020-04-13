import React from 'react';
import Button from './Button';
import './App.css';


const BlogItem = ({onDelete, blog: {title, author, subject, article, objectId}}) => {
    return(
            <div className="ui card" style={{ width: '75%', padding: '20px' }}>
                    <div className="content">
                      <div className="header">{title}</div>
                      <br />
                      <div className="meta">Author: {author}</div>
                      <div className="meta">Subject: {subject}</div>
                      <hr />
                      <div className="description"> {article} </div>
                      <Button className="ui primary button" style={{margin: '10px 15px'}} onClick={() => {
                            return onDelete(objectId)
                        }}>
                           Delete
                      </Button>
                      <Button className="ui primary button green" style={{margin: '10px 15px'}} onClick={() => {
                            return console.log(`Update: ${objectId}`)
                        }}>
                           Update
                      </Button>
                    </div>
                  </div>
    )
}

export default BlogItem
