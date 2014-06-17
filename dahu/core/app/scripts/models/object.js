define([
    'underscore',
    'backbone',
    'uuid'
], function(_, Backbone, UUID){

    /**
     * Base object model.
     */
    var ObjectModel = Backbone.Model.extend({
        defaults: function() {
            return {
                id: UUID.v4(),
                posx: 0,
                posy: 0
            }
        },

        initialize: function () {
            // define a is{Type} function.
            this["is"+this.get("type").charAt(0).toUpperCase() + this.get("type").substring(1)] = function() {
                return true;
            };
        }
    });

    return ObjectModel;
});