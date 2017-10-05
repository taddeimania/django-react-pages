import React from 'react'
import ReactDOM from 'react-dom'

class UserDetail extends React.Component {
    render() {
        return (
            <div>
                <h1>Look at this cool person</h1>
                <div>
                    {this.props.user.username}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <UserDetail {...window.props} />,
    window.react_mount,
)