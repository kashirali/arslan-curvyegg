import React from 'react'
import './review.css'

import sampleimg from '../../assets/support.png'
class Review extends React.Component 
{
    constructor(props) 
    {
        super(props)
        {
            this.state = {
                author: this.props.data.arsla.author,
                para: this.props.data.arsla.para,
                designation: this.props.data.arsla.designation,
                idx: 0
            }
        }
    }

    goNext = () => {
        const datas = this.props.data
        let keys = Object.keys(datas);
        let pointer  = this.state.idx;
        if(pointer == this.props.total - 1)
            pointer = 0;
        else
            pointer++;
        this.setState((state) => ({
                author: datas[keys[pointer]].author,
                para: datas[keys[pointer]].para,
                designation: datas[keys[pointer]].designation,
                idx: pointer }));
    }
    
    goPrev = () => {
        const datas = this.props.data
        let keys = Object.keys(datas);
        let pointer  = this.state.idx;
        if(pointer == 0)
            pointer = this.props.total - 1;
        else
            pointer--;
        this.setState((state) => ({
                author: datas[keys[pointer]].author,
                para: datas[keys[pointer]].para,
                designation: datas[keys[pointer]].designation,
                idx: pointer }));
    }
    render()
    {
        return(

            <div>
                <div className="main_hold">
                    <div class="review_card">
                        <div className="review_data">
                            <div className = "picture">
                                <div className = "container_img">
                                <img src={sampleimg} alt="kick" className="main_img_card" />
                                </div>
                            </div>
                            <div className = "author">
                                <span className = "auth_head">Author: </span><span className = "auth_name">{this.state.author}</span>
                            </div>
                            <div className = "para">
                                <p>
                                    {this.state.para}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div class="card_data">
                        
                        <div className = "image">
                            <div className = "container_img">
                                <img src={sampleimg} alt="kick" className="main_img_card" />
                            </div>
                        </div>
                    <div>
                        <div className = "auth">
                            {this.state.author}<br />
                            {this.state.designation}
                        </div>
                        <div className = "rats">*********</div>    
                        </div>
                    </div>
                    <div className = "ratched">
                    <button className="case" onClick={this.goPrev}>prev</button>
                    <button className="case" onClick={this.goNext}>next</button>
                    </div>
                    <div className = "sigh"><span className="sp">Read More Testomials</span></div>
                    </div>
                    
                </div>
            </div>
        );
    }
}


Review.defaultProps = {
    data: {
        arsla: {author: 'Arslan', para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla<br />", designation: "owner"},
        fake: {author: 'fake', para: "Lake take dolor sit kings, consectetur adipiscing elit per raka wakana fake lake the porla<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit per amet wakana fake lake the porla<br />", designation: "slave"}
    },
    total: 2
}
export default Review