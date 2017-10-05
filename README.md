# What is this?

It's a django application where each view has it's own associated
react component. [Inspired from this article](https://hackernoon.com/reconciling-djangos-mvc-templates-with-react-components-3aa986cf510a) it allows a developer to utilize a backend webserver's built in awesomeness as well as react's frontend awesomeness.

## Install

1) Clone the repository

```
git clone https://github.com/taddeimania/django-react-pages.git
```

2) Create a virtualenv (this project will use direnv, but if you aren't then just create as you are most comfortable) and Install python dependencies

```
pip install -r requirements.txt
```

3) Start the django webserver

```
python manage.py runserver
```

4) Install frontend dependencies

```
cd static/js/app
npm install
```

5) Generate the distribution components

```
webpack
```

Or just turn on `webpack -w` to watch during development

6) Navigate your browser to `http://localhost:8000`

## Workflow

### Django

Any page that will rely on a react component needs to inherit from the provided `ReactView`.

In your inherited `ReactView` you must define the name of the component on the class as `component = 'componentName.js'`.

For any props that you want to make available to the component you must add those to the view context as such:

```python
class IndexView(ReactView):
    component = 'MyPeople.js'

    def get_props(self):
        return { 
            'users': [
                'joel',
                'sarah',
                'peanut'
            ]
        }
```

### React

The components are all stored in the static directory under `static/app/src` and the webpack configuration contains definitions for all components.

In order to use 1 component per page, we want to avoid a large bundle being created as webpack would typically try to do. In order to do that we have to specify the name of each component separately (as you would in an Angular Module type of system).

For example, the `entry` portion of your component would look like this:

```js
  entry: {
    myPeople: "../app/src/components/MyPeople.jsx",
    userDetail: "../app/src/components/UserDetail.jsx"
  },
```

As you add new components, you need to add them to this `entry` attribute.

Each component in this project is treated as it's own react app, so that means each component must mount intself to the `react` element coming from the django template.

This is the contents of a template that was passed a single `user` on it's props.

```jsx
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
```

The `window.props` and `window.react_mount` are defined by the `ReactView`