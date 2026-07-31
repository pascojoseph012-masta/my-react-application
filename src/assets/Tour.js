import { useInstantLayoutTransition } from "framer-motion";
import Italy from '../assets/10023.jpg'
import greece from '../assets/10024.jpg'
import jaiserlame from '../assets/10025.jpg'
import switzerland from '../assets/10027.jpg'
import { button } from "framer-motion/client";

export const TourContent =[
    {
        image: Italy,
        place: "Italy",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.",
        duration:"6days 3hours",
        groupsize: "15+ peaple",
        price:"$1200",
        button:"book now"
    },

      {
        image: jaiserlame,
        place: "jaisalmer",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind ",
        duration:"1days 8hours",
        groupsize: "10+ peaple",
        price:"$750",
        button:"book now"
    },

     {
        image: switzerland,
        place: "Switzerland",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind .",
        duration:"7days 8hours",
        groupsize: "50+ peaple",
        price:"$750",
        button:"book now"
    },

    {
        image: greece,
        place: "greece",
        title: "Holiday Planners is a World Leading Online Tour Booking Platform",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind .",
        duration:"6days 3hours",
        groupsize: "50+ peaple",
        price:"$250",
        button:"book now"
    }
]