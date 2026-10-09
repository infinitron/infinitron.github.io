import Vue from 'vue'
import Router from 'vue-router'
import NoComp from '../components/NoComp.vue'
import AboutMe from '../components/views/AboutMe.vue'
import IntroPage from '../components/views/Intro.vue'
import ExperiencePage from '../components/views/Experience.vue'
import ContaceMeTab from '../components/views/GetInTouch.vue'
import ResearchPage from '../components/views/Research.vue'
import PublicationList from '../components/views/Publications.vue'
import BlogList from '../components/views/Blog.vue'
import BlogPost from '../components/views/BlogPost.vue'
import { findPost } from '../posts'
// import EducationTab from '../components/views/EducationTab.vue'



Vue.use(Router);

// const About = { template: '<div>About</div>' }

const routes = [
    { path: '/AboutMe', component: AboutMe, name: 'AboutMe' ,meta:{title:'Karthik Reddy - About me'}},
    {path:'/Research',component:ResearchPage,name:'Research',meta:{title:'Karthik Reddy - Research'}},
    {path:'/Publications',component:PublicationList,name:'Publications',meta:{title:'Karthik Reddy - Publications'}},
    {path:'/Blog',component:BlogList,name:'Blog',meta:{title:'Karthik Reddy - Blog'}},
    {path:'/Blog/:slug',component:BlogPost,name:'BlogPost',props:true},
    { path: '/', redirect: '/Intro' },
    { path: '/JustLensing', component: NoComp, name: 'JustLensing' ,meta:{title:'Karthik Reddy - Watch Lensing'}},
    { path: '/Intro', component: IntroPage, name: 'Intro', meta:{title:'Karthik Reddy - Basic Astrophysicist, Part-time Batman'} },
    {path: '/Experience/', component: ExperiencePage,name:'Experience',meta:{title:'Karthik Reddy - Experience'}    },
    { path: '*', redirect: '/Intro' },
    { path: '/ContactMe', component: ContaceMeTab, name: 'ContactMe' ,meta:{title:'Karthik Reddy - Contact me'}}
]

const router = new Router({ routes });

const DEFAULT_TITLE = 'Karthik Reddy - Basic Astrophysicist, Part-time Batman';
router.afterEach((to, ) => {
    Vue.nextTick(() => {
        const post = to.name === 'BlogPost' ? findPost(to.params.slug) : null;
        document.title = post ? `${post.title} - Karthik Reddy` : (to.meta.title || DEFAULT_TITLE);
    });
});

export default router


// , childern: [
//     {path: '',redirect:{name:'Experience',params:{type:'Education'}},name:'default'},
//     { path: 'Education', component: NoComp, name: 'Education' },
//     { path: 'Work', component: EducationTab, name: 'Work' },
//     { path: 'Skills', component: EducationTab, name: 'Skills' },
    
// ]