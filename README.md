# Backbone.ListView
A general purpose ListView for Backbone.js that makes building lists of views faster.

Example:

```javascript

var contacts = new Backbone.Collection([
  {name: "Tim", age: 5},
  {name: "Ida", age: 26},
  {name: "Rob", age: 55}
]);

var ContactsListItemView = Backbone.ListItemView.extend({
  template: HandlebarsTemplates['contacts']
  
  // The template would maybe look like so:
  // <span>{{name}}</span><span>{{age}}</span>
  //

});

var contactsListView  = new Backbone.ListView({ 
  collection: contacts, 
  itemView: ContactsListItemView 
});

$('#list-wrapper').html(contactsListView.render().el);

```
