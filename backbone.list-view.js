/*  General purpose list view
*   Expects a Backbone collection and a itemView (name of a Backbone view resembling a li-row)
*/
Backbone.ListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(options){
    this.itemView     = options.itemView;
    this.itemViews    = [];

    //Events
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },
  render: function(){
    //reset the itemViews array
    this.purgeItemViews();

    if (this.collection.length > 0) {
      _.each(this.collection.models, function(model){
        var view = new this.itemView({model: model, collection: this.collection});
        this.itemViews.push(view)
        this.append(view);

      }, this);
    }

    this.trigger('rendered');
    return this;
  },
  append: function(itemView){
    this.$el.append(itemView.render().el);
    return this;
  },
  /* Remove all subviews and itself to prevent memory leak */
  remove: function(){
    //first remove all subviews, then this view
    this.purgeItemViews();
    Backbone.View.prototype.remove.apply(this, arguments);
  },
  purgeItemViews: function(){
    _.each(this.itemViews, function(view){
      if(view) {
        view.trigger("remove");
        view.remove();
      }
    }, this);
    this.itemViews = [];
  }
});

/*  General purpose list item view
*   Functions as a blueprint that actual ItemViews can inherit from
*/
Backbone.ListItemView = Backbone.View.extend({
  template: HandlebarsTemplates[''],
  tagName: 'li',
  initialize: function(options){
    this.listenTo(this.model, 'remove', this.remove);
  },
  render: function(){
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});