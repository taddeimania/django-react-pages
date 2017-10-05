from django.shortcuts import render
from django.views.generic import TemplateView

USERS = [
    {'username': 'alice', 'id': 1},
    {'username': 'bob', 'id': 2}
]

class ReactView(TemplateView):
    template_name = "app/component.html"

    def get_props(self):
        return {}

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['component'] =  self.component
        context['props'] = self.get_props()
        return context


class IndexView(ReactView):
    component = 'myPeople.js'

    def get_props(self):
        return {
            'users': USERS
        }


class UserDetailView(ReactView):
    component = 'userDetail.js'

    def get_props(self):
        user_id = self.kwargs.get("pk")
        return {
            'user': USERS[int(user_id) - 1]
        }