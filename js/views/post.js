export default {
    template: '<div class="post-container">' +
            '<div v-html="parsedMD"></div>' +
            '<v-btn to="/blog" text>Back</v-btn>' +
        '</div>'
    ,
    data: function () {
        return {
            parsedMD: ''
        }
    },
    mounted () {
        var self = this
        fetch('/data/blog/posts/' + self.$route.params.slug + '.md')
            .then(function (response) {
                return response.text().then(function (text) {
                    self.parsedMD = marked(text)
                });
        })
    }
}