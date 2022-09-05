function myFunction() {
    document.getElementById("date").innerHTML = Date();
};

new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Learn JavaScript', checked: true },
            { text: 'Learn Vue', checked: false },
            { text: 'Build something awesome', checked: false }
        ]
    }
});