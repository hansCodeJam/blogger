import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import UpdatedBlog from './UpdateBlog';
// import blogs from '../data/data';

    // function searchIt(term){
    //   return function(item){
    //     return item.subject.toLowerCase().includes(term.toLowerCase());
    //   }
    // }


    class Apps extends Component {
        constructor(){
            super()
            this.state = {
                blogs: [],
                searchTerm: '',
                toggle: true,
                blog: {},
            }   
            this.onDelete = this.onDelete.bind(this)
        }

        loadBlogs = () => {
          const url = '/blogs';
          axios.get(url).then((blogs) => {
            // return console.log(blogs.data);
            return this.setState({blogs: blogs.data})
          })
        }

        loadBlog = (id) => {
          axios.get(`/blog/${id}`).then((blog) => {
            this.setState({
              toggle: false,
              blog: blog.data,
            })
            return console.log(blog.data);
          })
        }

        onDelete = (id) => {
            // const updatedBlog = this.state.blogs.filter(item=> item.objectId !== id);

            // this.setState({blogs: updatedBlog})
            // console.log('Delete item with id: ', id);
            axios.delete(`/blog/${id}`).then(() => {
              this.loadBlogs();
            })
        }

        onUpdate = (id) => {
          this.loadBlog(id)
          // return console.log(`Update: ${id}`)
        }

        handleChange = (event) => {
          this.setState({ searchTerm: event.target.value },() => {
            console.log(this.state.searchTerm);
            })
        }

        handleCreateBlogSubmit = (event, blog) => {
            event.preventDefault();

          let axiosConfig = {
            headers: {
              'Content-Type' : 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*'
            }
          }

          axios.post('/blog', blog, axiosConfig).then(()=>{
            this.loadBlogs();           

          })
        }

        handleUpdateBlogSubmit = (event, blog, id) => {
          event.preventDefault();
          this.setState({
            toggle: true,
          });

          let axiosConfig = {
            headers: {
              'Content-Type' : 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*'
            }
        }

        axios.put(`/blog/${id}`, blog, axiosConfig).then(() => {
          return this.loadBlogs();
        });
      }

        componentDidMount(){
          this.loadBlogs();
        }

        render() {
          console.log('Blogs...', this.state.blog)
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
            {this.state.toggle ? (<CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit} />) : (<UpdatedBlog blog={this.state.blog} handleUpdateBlogSubmit={this.handleUpdateBlogSubmit}/>)}
             
              
            <Blogs blogs={this.state.blogs} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} toggle={this.state.toggle}/>
              
            </div>
          );
        }
      }

export default Apps;