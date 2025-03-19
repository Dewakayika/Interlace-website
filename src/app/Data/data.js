import * as Unicons from '@iconscout/react-unicons';
import { Icons } from '../components/Icons';

// Custom SVG icons for services
export const ServiceIcons = {
    Education: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
    ),
    // Add other service icons here
};

export const services = [
    {
        Icon: ServiceIcons.Education,
        title: "Education Services",
        description: "Description of education services"
    },
    // Add other services here
];

export  const clientData = [
    {
        name:'Thomas Israel',
        image:'/images/client/01.jpg',
        designation:'C.E.O',
        description:"I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
        name1:'Carl Oliver',
        image1:'/images/client/05.jpg',
        designation1:'C.E.O',
        description1:"There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        name:'Barbara McIntosh',
        image:'/images/client/02.jpg',
        designation:'C.E.O',
        description:"The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        name1:'Barbara McIntosh',
        image1:'/images/client/04.jpg',
        designation1:'C.E.O',
        description1:"I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        name:'Jill Webb',
        image:'/images/client/03.jpg',
        designation:'C.E.O',
        description:"I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        name1:'Janisha Doll',
        image1:'/images/client/06.jpg',
        designation1:'C.E.O',
        description1:"This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
]
export const BlogsNewsdata = [
    {
        id:1,
        image: "/images/blog/1.jpg",
        title: 'Introducing new tools for your design.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:2,
        image: "/images/blog/2.jpg",
        title: 'The Right Hand of Business IT World',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:3,
        image: "/images/blog/3.jpg",
        title: 'Truck Side Advertising Isn It Time for action.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:4,
        image: "/images/blog/4.jpg",
        title: 'Introducing new tools for your design.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:5,
        image: "/images/blog/5.jpg",
        title: 'The Right Hand of Business IT World',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:6,
        image: "/images/blog/6.jpg",
        title: 'Truck Side Advertising Isn It Time for action.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:7,
        image: "/images/blog/7.jpg",
        title: 'Introducing new tools for your design.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:8,
        image: "/images/blog/8.jpg",
        title: 'The Right Hand of Business IT World',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    },
    {
        id:9,
        image: "/images/blog/9.jpg",
        title: 'Truck Side Advertising Isn It Time for action.',
        detail: 'The phrasal sequence of the is now so that many campaign and benefit',
        more: 'Read More',
    }
]
export const MeetOursdata = [
    {
        image: "/images/client/01.jpg",
        title: 'Jack John',
        type: 'Designer'
    },
    {
        image: "/images/client/02.jpg",
        title: 'Krista John',
        type: 'Designer'
    },
    {
        image: "/images/client/03.jpg",
        title: 'Roger Jackson',
        type: 'Designer'
    },
    {
        image: "/images/client/04.jpg",
        title: 'Johnny English',
        type: 'Designer'
    },
    {
        image: "/images/client/05.jpg",
        title: 'Samuel Bales',
        type: 'Designer'
    },
    {
        image: "/images/client/06.jpg",
        title: 'Judith Grasser',
        type: 'Designer'
    },
    {
        image: "/images/client/07.jpg",
        title: 'Nina Baker',
        type: 'Designer'
    },
    {
        image: "/images/client/08.jpg",
        title: 'Avery Slade',
        type: 'Designer'
    },
]
export const Contact = [
    {
        Icon: Icons.Phone,
        title: "Phone",
        detail: "Contact us through phone",
        type: "+152 534-468-854"
    },
    {
        Icon: Icons.Mail,
        title: "Email",
        detail: "Contact us through email",
        type: "contact@example.com"
    },
    {
        Icon: Icons.MapPin,
        title: "Location",
        detail: "View our office location",
        type: "View on Google map"
    }
]