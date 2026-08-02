import { useInstantLayoutTransition } from "framer-motion";
import Italy from '../assets/10023.jpg'
import greece from '../assets/10024.jpg'
import jaiserlame from '../assets/10025.jpg'
import switzerland from '../assets/10027.jpg'
import { button } from "framer-motion/client";
import timer from '../assets/timer.svg'
import group from '../assets/group.svg'



export const TourContent =[
    {
        id: "aaa",
        image: Italy,
        place: "Italy",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far  away, behind the word mountain far from countries Vokalia and .",
        duration:"6days 3hours",
        duration_icon: timer,
        groupsize:  "15+ peaple",
        groupsize_icon: group,
        price:"$1200",
        button:"book now"
    },

      {
         id: "bbb",
        image: jaiserlame,
        place: "jaisalmer",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far  away, behind the word mountain far from countries Vokalia and  ",
        duration:"7days 8hours",
        duration_icon: timer,
        groupsize_icon: group,
        groupsize: "10+ peaple",
        price:"$750",
        button:"book now"
    },

     {
         id:"ccc",
        image: switzerland,
        place: "Switzerland",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far  away, behind the word mountain far from countries Vokalia and  .",
        duration:"7days 8hours",
        duration_icon: timer,
        groupsize_icon: group,
        groupsize: "50+ peaple",
        price:"$750",
        button:"book now"
    },

    {
         id: "ddd",
        image: greece,
        place: "greece",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far  away, behind the word mountain far from countries Vokalia and  .",
        duration:"6days 3hours",
        duration_icon: timer,
        groupsize_icon: group,
        groupsize: "50+ peaple",
        price:"$250",
        button:"book now"
    }
]