export default {
    template: '<div class="post-container">' +
            '<div v-html="parsedMD"></div>' +
            '<v-btn to="/blog" text class="mt-5">Back</v-btn>' +
        '</div>'
    ,
    data() {
        return {
            parsedMD: ''
        }
    },
    mounted() {
        fetch('/data/blog/posts/' + this.$route.params.slug + '.md')
            .then(response => response.text())
            .then(text => this.parsedMD = marked(text))
    }
}