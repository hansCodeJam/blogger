import React, {Component} from 'react';
import Button from './Button';

class UpdateBlog extends Component{
    constructor(){
        super()
        this.state = {
            blog:{title:'', subject:'', author:'', article:'', objectId: new Date().getTime() 
            }
    }
    }

    handleChange = (event) => {
        let updatedBlog = {...this.state.blog}
        updatedBlog[event.target.name] = event.target.value;

        this.setState({blog: updatedBlog}, () => {
            console.log(updatedBlog);
        })
    };
    
    handlesSubmit = (event) => {
        event.preventDefault();
        this.props.handleUpdateBlogSubmit(event, this.state.blog, this.props.blog._id);
        let emptyBlog = {title: '', author: '', subject: '', article: ''};
        // let blogState = [ ...this.state.blogs ];

        // blogState.unshift(this.state.blog);
        this.setState({ blog:emptyBlog})
        event.target.reset();
    };

    render(){
        return(
            <div style={{margin: '40px', width: '300px' }}>
                <h1>Update Blog:</h1>
                <form onSubmit={this.handlesSubmit} className="ui form">
                        <div className="equal width fields">
                            <div className="field">
                                <label>Title</label>
                                <div className="ui fluid input">
                                    <input type="text" name="title" defaultValue={this.props.blog.title} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                    <div className="equal width fields">
                            <div className="field">
                                <label>Subject</label>
                                <div className="ui fluid input">
                                    <input type="text" name="subject" defaultValue={this.props.blog.subject} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="equal width fields">
                            <div className="field">
                                <label>Author</label>
                                <div className="ui fluid input">
                                    <input type="text" name="author" defaultValue={this.props.blog.author} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="equal width fields">
                            <div className="field">
                                <label>Article</label>
                                <div className="ui fluid input">
                                    <input type="text" placeholder="article..." name="article" defaultValue={this.props.blog.article} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <Button type="submit" className="ui button">
                                Submit
                            </Button>
                            
                        </div>
                </form>
                <hr />
                
            </div>
        )
    }
}

export default UpdateBlog;