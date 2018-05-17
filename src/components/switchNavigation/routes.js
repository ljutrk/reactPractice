import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Darko from './home/Darko';
import Marija from './home/Marija';
import Ljuba from './home/Ljuba';
import BitBlog from './projects/BitBlog';
import BitBook from './projects/BitBook';
import BitTube from './projects/BitTube';

const routes = [
    {
        path: "/home",
        link: "Home",
        component: Home,
        routes: [
            {
                path: "/home/marija",
                link: "Marija",
                component: Marija
            },
            {
                path: "/home/darko",
                link: "Darko",
                component: Darko
            },
            {
                path: "/home/ljuba",
                link: "Ljuba",
                component: Ljuba
            }
        ]
    },
    {
        path: "/projects",
        link: "Projects",
        component: Projects,
        routes: [
            {
                path: "/projects/BitBook",
                link: "BitBook",                
                component: BitBook
            },
            {
                path: "/projects/BitTube",
                link: "BitTube",                
                component: BitTube
            },
            {
                path: "/projects/BitBlog",
                link: "BitBlog",                
                component: BitBlog
            }
        ]
    },
    {
        path: "/about",
        link: "About",
        component: About
    },
    {
        path: "/contact",
        link: "Contact",
        component: Contact
    }
]

export {
    routes
}