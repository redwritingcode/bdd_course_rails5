// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require bootstrap-sprockets

Navigate to app/views/layouts/application.html.erb and add a navigation bar in the body tag:
<header role="banner">
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
<div class="container-fluid"> 
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse"
data-target="#bs-example-navbar-collapse-1"> 
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<%= link_to "Blog App", root_path, class: "navbar-brand" %> 
</div>
<div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
<ul class="nav navbar-nav">
<li class="active"><%= link_to "Authors", "#" %></li>
</ul> 
</div>
</div> 
</nav>
</header>
<div class="container"> 
<div class="row">
<div class="col-md-12">
<% flash.each do |key, message| %>
<div class="text-center alert alert-<%= key == 'notice'? 'success': 'danger' %>">
<%= message %> 
</div>
<% end %>
<%= yield %> 
</div>
</div> 
</div>
//= require turbolinks
//= require_tree .
