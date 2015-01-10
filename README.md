# Backbone.ListView
A general purpose ListView for Backbone.js that makes building lists of views faster.

Example:

```javascript

var contacts = new Backbone.Collection([
    {name: "Tim Schneider", age: 35},
    {name: "John Black", age: 26}
]);

var ContactsListItemView = Backbone.ListItemView.extend({
    render: function(){
        var compiled = _.template("<%= name %>, <%= age %> years old");
        var html = compiled(this.model.toJSON());
        this.$el.html(html);
        return this;
    }
});

var contactsListView  = new Backbone.ListView({ 
  collection: contacts, 
  itemView: ContactsListItemView 
});

$('#list-wrapper').html(contactsListView.render().el);

```
Demo: [http://jsfiddle.net/zinssmeister/tsd91a26/1/](http://jsfiddle.net/zinssmeister/tsd91a26/1/)