import React, {Component} from 'react';
import blogs from '../data/data';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';

    // function searchIt(term){
    //   return function(item){
    //     return item.subject.toLowerCase().includes(term.toLowerCase());
    //   }
    // }


    class Apps extends Component {
        constructor(){
            super()
            this.state = {
                blogs,
                searchTerm: '',
            }   
            this.onDelete = this.onDelete.bind(this)
        }

        onDelete(id){
            const updatedBlog = this.state.blogs.filter(item=> item.objectId !== id);

            this.setState({blogs: updatedBlog})
            console.log('Delete item with id: ', id);
        }

        handleChange = (event) => {
          this.setState({ searchTerm: event.target.value },() => {
            console.log(this.state.searchTerm);
            })
        }

        handleCreateBlogSubmit = (event, blog) => {
            event.preventDefault();
            let copyState = [...this.state.blogs]
            copyState.unshift(blog);
            let updateBlogs = [blog, ...this.state.blogs];
            this.setState({
                blogs: updateBlogs,
            },
            () => {
                console.log(this.state.blogs);
            }

            )
        }

        render() {
          return (
            <div
              style={{
                marginTop: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
            <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
            <CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit} />
            <Blogs blogs={this.state.blogs} searchTerm={this.state.searchTerm} onDelete={this.onDelete}/>
              
            </div>
          );
        }
      }

export default Apps;