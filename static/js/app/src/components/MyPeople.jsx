import React from 'react'
import ReactDOM from 'react-dom'

const MyPeople = ({users}) =>
    <div>
        <h1>Look at these cool people</h1>

        <ul>
            {users.map(user =>
            <li key={user.id}>
                <a href={`/user/${user.id}/`}>
                    {user.username}
                </a>
            </li>
            )}

        </ul>
    </div>



ReactDOM.render(
    React.createElement(MyPeople, window.props),
    window.react_mount,
)