export class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(type, handler) {
        if (!this.events[type]) {
            this.events[type] = [handler];
        }
    }
    once(type, fn) {
        const self = this;
        function onetime(...args) {
            fn.apply(this, args);
            self.off(type, fn);
        }
        self.on(type, onetime)
    }
    emit(type, ...args) {
        this.events.forEach(fn => {
            fn.apply(this, args);
        });
    }
    off(type, fn) {
        const index = this.events[type].indexOf(fn);
        this.events[type].splice(index, 1);
    }
}

