import Ember from 'ember';
import I18nService from 'ember-i18n/services/i18n';

export default I18nService.extend({
    _globals: {},

    t(key, data = {}) {
        data = Ember.merge(this.get('_globals'), data);
        return this._super(key, data);
    },

    addGlobal(key, value) {
        this.set(`_globals.${key}`, value);
    },

    addGlobals(globals) {
        this.set('_globals', Ember.merge(this.get('_globals'), globals));
    },
});