import React from "react";

class User extends React.Component{
    componentWillMount(){
        this.props.getUsers();
    }
    
    buildUsers(){
        let res = [];
        for(let user of this.props.users){
            res.push(
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                </div>
            )
        }
        return res;
    }

    render(){
        return <div>
            <h2>User Component</h2>
            <div>
                {this.buildUsers()}
            </div>
        </div>
    }
}

export default User