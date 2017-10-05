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