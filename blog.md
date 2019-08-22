---
layout: layouts/default.njk
title: Blog
---

<ul reversed class="postlist" style="counter-reset: start-from {{ collections.posts.length + 1 }}">
{% for post in collections.posts | reverse %}
  <li class="postlist-item{% if post.url == url %} postlist-item-active{% endif %}">
    <a href="{{ post.url | url }}" class="postlist-link">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a>
    <time class="postlist-date" datetime="{{ post.date | htmlDateString }}"><small>{{ post.date | readableDate }}</small></time>
    <br/>{% if post.data.description %}{{ post.data.description }}<br/>{% endif %}
  </li>
{% endfor %}
</ul>


