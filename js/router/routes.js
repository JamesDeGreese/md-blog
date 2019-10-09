import Home from '../views/home.js'
import Blog from '../views/blog.js'
import About from '../views/about.js'
import Post from '../views/post.js'

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: Post },
    { path: '/about', component: About },
]

export default routes