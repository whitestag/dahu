/**
 * Created by dufourau on 6/12/14.
 */
define([
    'handlebars',
    'backbone.marionette',
    // modules
    'modules/events',
    // views
    'views/common/objects/object',
    // behaviors
    'behaviors/workspace/objects/resizable',
    'behaviors/workspace/objects/draggable',
    // templates
    'text!templates/views/workspace/tooltip.html'
], function(
    Handlebars,
    Marionette,
    // modules
    events,
    // models
    ObjectView,
    // behaviors
    ResizableBehavior,
    DraggableBehavior,
    // templates
    tooltipTemplate){

    /**
     * Tooltip view
     */
    return ObjectView.extend({
        template: Handlebars.default.compile(tooltipTemplate),

        className: 'object tooltip ui-widget-content',

        events: {
            "dblclick": "edit"
        },

        modelEvents: {
            'change': 'render'
        },

        behaviors: {
            ResizableBehavior: {
                behaviorClass: ResizableBehavior
            },
            DraggableBehavior: {
                behaviorClass: DraggableBehavior
            }
        },

        onResizeCompleted: function(size) {
            this.model.set('width', size.width);
            this.model.set('height', size.height);
        },

        onDragCompleted: function(position) {
            this.model.set('posx', position.x);
            this.model.set('posy', position.y);
        },

        edit: function(event) {
            events.trigger('app:workspace:tooltips:edit', this.model);
        }
    });
});
