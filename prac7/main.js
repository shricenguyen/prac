Vue.component('component1', {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: 'This is our global extermination.',
        };
    },
});

var component2 = {
    template: '<div>This is our local extermination</div>',
};

Vue.component('kimChiNam', {
    props: ['line'],
    template: '<div>{{line}}</div>',
});

var app = new Vue({
    el: '#app',
    components: {
        'component2': component2,
    },
    data: {
        lyrics: [
            {id:1, line:'In-rhymes is not a skill?'},
            {id:2, line:'Meta is not a skill?'},
            {id:3, line:'In-rhymes is not a skill?'},
            {id:4, line:'So I wonder whether your grip is not as real.'},
        ],
    },
});

