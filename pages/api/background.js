const background = [
    {
        eduCards: [
            {
                id: 0,
                title: "Bachelor's Degree",
                degree: 'S.Kom, Informatics Engineering',
                detail: "Bachelor's Degree in Informatics Engineering from STT Wastukancana.",
                year: '2014-2019'
            },
            {
                id: 1,
                title: 'Master Degree',
                degree: 'M.Kom, Applied Computer Engineering',
                detail: "Currently completing a Master's program in Computer Science at Budiluhur University",
                year: '2024'
            },
            {
                id: 2,
                title: 'Coding Studio',
                degree: 'Database Professional Application',
                detail: "Program Course, Build Database Professional Application",
                year: '2023'
            },
            {
                id: 3,
                title: 'Ethereum Developer Bootcamp',
                degree: 'Ethereum Developer',
                detail: "Building decentralized applications (DApp), and designing smart contracts on the ethereum network",
                year: '2021'
            }
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'PT SUPPLY',
                role: 'Full Stack Developer',
                url: {
                    label:'no website',
                    link:''
                },
                url2: {
                    label:'no website',
                    link:''
                },
                desc: 'As a backend developer, I use Nodejs for build server api.',
                year: '2016 - 2018',
                location: 'Bandung, Indonesia'
            },
            {
                id: 1,
                title: 'PT Outdoor Footwer Network',
                role: 'IT Support',
                url: {
                    label:'no website',
                    link:'#'
                },
                url2: {
                    label:'no website',
                    link:'#'
                },
                desc: 'As IT support, I am tasked with handling network problems and maintenance of software and hardware in the company.',
                year: '2013 - 2015',
                location: 'Purwakarta, Indonesia'
            },
            {
                id: 2,
                title: 'STT Wastukancana Purwakarta',
                role: 'Development Staff Information Systems',
                url: {
                    label:'WEB PROFILE',
                    link:'https://stt-wastukancana.ac.id/'
                },
                url2: {
                    label:'SISTEM AKADEMIK',
                    link:'https://wastu.digital/'
                },
                desc: "I worked there as an information system developer, which was built with PHP and JavaScript.",
                year: '2020 - Present',
                location: 'Purwakarta, Indonesia'
            },
            {
                id: 3,
                title: 'OPTIMISM LAB',
                role: 'Partner Developer',
                url: {
                    label:'Optimism.io',
                    link:'https://www.optimism.io/'
                },
                url2: {
                    label:'Optimism Career',
                    link:'https://jobs.optimism.io/jobs',
                },
                desc: "I worked there as an ecosystem partner, building a dapp, using NextJs, React, Solidity.",
                year: '2019 - Present',
                location: 'Remote, '
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
