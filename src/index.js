import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
    <div className="ui container comments">

        <ApprovalCard>
            <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Sam" 
            timeAgo="Today at 3:00PM" 
            content="Nice blog post!" 
            />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Alex" 
            timeAgo="Today at 7:50AM" 
            content="Excellent stuff." 
            />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Lana" 
            timeAgo="Yesterday at 9:04PM" 
            content="Inspiring!" 
            />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Chris" 
            timeAgo="Today at 5:40PM" 
            content="Good idea." 
            />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail 
            avatar={faker.image.avatar()} 
            author="Chester" 
            timeAgo="Yesterday at 1:00AM" 
            content="Ground breaking!" 
            />
        </ApprovalCard>
        
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));