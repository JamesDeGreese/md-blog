export default {
    template:
        '<v-row justify="start" wrap>' +
            '<v-col :cols="12">' +
                '<h1 class="display-2 white--text">Blog</h1>' +
            '</v-col>' +
            '<v-col v-for="(post, index) in displayedPosts" :key="index" xs="12" sm="6" md="4" xl="2" >' +
                '<v-card class="mx-auto">' +
                    '<v-list-item>' +
                        '<v-list-item-content>' +
                            '<v-list-item-title class="headline">{{ post.title }}</v-list-item-title>' +
                            '<v-list-item-subtitle>{{ post.published_at }}</v-list-item-subtitle>' +
                        '</v-list-item-content>' +
                    '</v-list-item>' +
                    '<v-img :src="post.image" height="194"></v-img>' +
                    '<v-card-text>{{ post.description}}</v-card-text>' +
                    '<v-card-actions>' +
                        '<v-btn :to="getUrl(post.slug)" text color="deep-purple accent-4">Read</v-btn>' +
                    '</v-card-actions>' +
                '</v-card>' +
            '</v-col>' +
            '<v-col v-if="totalPages > 1" :cols="12">' +
                '<v-container class="max-width">' +
                    '<v-pagination v-model="page" :length="totalPages" color="light-green"></v-pagination>' +
                '</v-container>' +
            '</v-col>' +
        '</v-row>',
    data() {
        return {
            posts: [],
            page: 1,
            perPage: 6,
        }
    },
    methods: {
        paginate(posts) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return  posts.slice(from, to);
        },
        getUrl(slug) {
            return '/blog/' + slug
        }
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.posts);
        },
        totalPages() {
            return Math.ceil(this.posts.length / this.perPage)
        }
    },
    mounted() {
        fetch('/data/blog/list.json')
            .then(response => response.json())
            .then(data => this.posts = data.reverse())
    }

}