var CoreView = require('backbone/core-view');
var template = require('./add-basemap.tpl');
var XYZView = require('./xyz/xyz-view.js');
var XYZModel = require('./xyz/xyz-model.js');

/**
 * Add basemap dialog
 */
module.exports = CoreView.extend({

  className: 'Dialog-content Dialog-content--expanded',

  initialize: function (opts) {
    if (!opts.layerDefinitionsCollection) throw new Error('layerDefinitionsCollection is required');

    this._layerDefinitionsCollection = opts.layerDefinitionsCollection;
  },

  render: function () {
    this.clearSubViews();
    this.$el.html(template());
    this._initViews();
  },

  _initViews: function () {
    var xyzView = new XYZView({
      model: new XYZModel(),
      layerDefinitionsCollection: this._layerDefinitionsCollection
    });
    this.addView(xyzView);
    this.$('.js-content-container').append(xyzView.render().el);
  }

});