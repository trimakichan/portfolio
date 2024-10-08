// import test from '../../assets/images//eventlite.webp'

export const projectsData = [

    {
        name: "Fairhaven Yachts",
        status: 'active',
        group: false,
        teckStack: ['React', 'Sass', 'Figma'],
        images: ['/projectImages/FY.webp', '/projectImages/FYDesign.webp'],
        description: 'A website for the Fairhaven Yachts business is designed and developed to be visually appealing and more user-friendly The YachtWorld API has been integrated to display yachts directly on the site, enhancing user retention and improving SEO performance.',
        github: 'https://github.com/trimakichan/fairhaven_yatchts.git',
        site: 'https://www.fysyachts.com/'

    },

    {
        name: 'Eventlite',
        status: 'active',
        teckStack: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'React-Bootstrap'],
        group: true,
        images: '/projectImages/eventlite.webp',
        description: 'A full-stack mini Eventbrite-like application where users can create an account and purchase event tickets using PayPal.',
        github: 'https://github.com/trimakichan/react-eventProject',
        site: 'https://react-eventlite.herokuapp.com/',
        youtube: 'https://www.youtube.com/watch?v=fd6hM2vuu0s&ab_channel=MakikoYokoyama',


    },
    {
        name: 'SHOWTIME',
        status: 'active',
        group: false,
        teckStack: ['Angular', 'Typescript', 'CSS', 'Bootstrap', 'External API (TMDB)'],
        images: '/projectImages/showtime.webp',
        description: 'A TV and movie application that offers trending films and popular TV shows. Users can also easily search for their favorite content using keywords.',
        github: 'https://github.com/trimakichan/AngularShowTime',
        site: 'https://itisshowtime.netlify.app/',
    },
    {
        name: "Jisho App",
        status: 'inactive',
        group: true,
        isApp: true,
        teckStack: ['React Native', 'Sass', 'SQlite'],
        images: '/projectImages/jishoMockup.svg',
        description: 'Jisho app is a Japanese/English dictionary and language learning tool. Search words in Japanese or English with kanji, kana, romaji, or Latin alphabets. Get example sentences and kanji details for enhanced learning.',
    },
]