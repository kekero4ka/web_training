/**
 * Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance,
 * but mixins can be implemented by copying methods into prototype.
 */

let eventMixin = {
    /**
     * Subscribe to event, usage:
     *  menu.on('select', function(item) { ... }
     */
    on(eventName, handler) {
        if (!this._eventHandlers)
            this._eventHandlers = {};  // {eventName: [], eventName2: []}
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        if (this._eventHandlers[eventName].indexOf(handler) === -1) {
            this._eventHandlers[eventName].push(handler);
        }
    },

    /**
     * Cancel the subscription, usage:
     *  menu.off('select', handler)
     */
    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];

        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            console.log('handlers[i]: ', handlers[i]);
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    /**
     * Generate an event with the given name and data
     *  this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return; // no handlers for that event name
        }

        // call the handlers
        this._eventHandlers[eventName].forEach(handler => handler.call(this, args));
    }
};

// Usage:
class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler, to be called on selection:
menu.on("select", value => console.log(`Value selected: ${value}`));

// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");
menu.off("select", value => console.log(`Value selected: ${value}`));