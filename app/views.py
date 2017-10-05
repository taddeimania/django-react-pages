from django.shortcuts import render
from django.views.generic import TemplateView

USERS = [
    {'username': 'alice', 'id': 1},
    {'username': 'bob', 'id': 2}
]

class ReactView(TemplateView):
    template_name = "app/component.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['props'] = {
            'users': USERS
        }
        context['component'] =  self.component
        return context


class IndexView(ReactView):
    component = 'myPeople.js'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['props'] = {
            'users': USERS
        }
        return context


class UserDetailView(ReactView):
    component = 'userDetail.js'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user_id = self.kwargs.get("pk")
        context['props'] = {
            'user': USERS[int(user_id) - 1]
        }
        return context