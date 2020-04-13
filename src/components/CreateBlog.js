import React, {Component} from 'react';
import Button from './Button';

class CreateBlog extends Component{
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
        this.props.handleCreateBlogSubmit(event, this.state.blog);
        let emptyBlog = {title: '', author: '', subject: '', article: ''};
        // let blogState = [ ...this.state.blogs ];

        // blogState.unshift(this.state.blog);
        this.setState({ blog:emptyBlog})
        event.target.reset();
    };

    render(){
        return(
            <div style={{margin: '40px' }}>
                <form onSubmit={this.handlesSubmit} className="ui form">
                        <div className="equal width fields">
                            <div className="field">
                                <label>Title</label>
                                <div className="ui fluid input">
                                    <input type="text" placeholder="title..." name="title" value={this.state.blog.title} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                    <div className="equal width fields">
                            <div className="field">
                                <label>Subject</label>
                                <div className="ui fluid input">
                                    <input type="text" placeholder="subject..." name="subject" value={this.state.blog.subject} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="equal width fields">
                            <div className="field">
                                <label>Author</label>
                                <div className="ui fluid input">
                                    <input type="text" placeholder="author..." name="author" value={this.state.blog.author} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="equal width fields">
                            <div className="field">
                                <label>Article</label>
                                <div className="ui fluid input">
                                    <input type="text" placeholder="article..." name="article" value={this.state.blog.article} onChange={this.handleChange} />
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

export default CreateBlog;