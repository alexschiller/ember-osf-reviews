import Component from '@ember/component';

export default Component.extend({
    tagName: 'section',
    classNameBindings: ['disabled'],

    title: null,
    disabled: false,
});
