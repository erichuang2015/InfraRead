
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./components/App.vue'));
Vue.component('post-details', require('./components/PostDetails.vue'));
Vue.component('post-filters', require('./components/PostFilters.vue'));
Vue.component('source-selector', require('./components/SourceSelector.vue'));
Vue.component('post-list', require('./components/PostList.vue'));
Vue.component('post-list-item', require('./components/PostListItem.vue'));
const app = new Vue({
    el: '#app'
});
