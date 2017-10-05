import React from 'react'
import ReactDOM from 'react-dom'

const UserDetail = ({user}) =>
    <div>
        <h1>Look at this cool person</h1>
        <div>
            {user.username}
        </div>
    </div>


ReactDOM.render(
    React.createElement(UserDetail, window.props),
    window.react_mount,
)