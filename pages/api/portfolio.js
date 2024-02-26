const portfolio = [
    {
        id: 0,
        projectName: "NFT DROP DApp",
        url: "https://nftdrop-dapp.vercel.app/nft-drop",
        image: "projects/nftdrop-dapp.png",
        projectDetail: "An nft community project, to create an nft minting portal, this project is an opensource project.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "React"
            },
            {
                tech: "EtherJS"
            },
            {
                tech: "Wagmi"
            },
            {
                tech: "Solidity"
            },
            {
                tech: "EVM"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "FlappyOwl Vault",
        url: "https://testnet.flappyowl.fun/",
        image: "projects/flappyowl-testnet.png",
        projectDetail: "This is a DeFi project for nft flappyowl, currently running at goerli testnet.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Ethers"
            },
            {
                tech: "Vercel"
            },
            {
                tech: "ECharts"
            },
            {
                tech: "Open Graph"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "SIMAK Portal",
        url: "https://simak.wastu.digital/landing/",
        image: "projects/wastu-digital.png",
        projectDetail: "an academic system portal, for teaching and learning activities, lecturers and students.",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "Codeigniter"
            },
            {
                tech: "Javascript"
            },
            {
                tech: "jQuery"
            },
            {
                tech: "Bootstrap"
            },
        ]
    },
    {
        id: 3,
        projectName: "PMB Portal",
        url: "https://pmb.wastu.digital/",
        image: "projects/pmb-portal.png",
        projectDetail: "Portal for accepting new students, starting from registration, filing, selection tests, and so on.",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "Javascript"
            },
            {
                tech: "jQuery"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: "Codeigniter"
            },
        ]
    },
    {
        id: 4,
        projectName: "PAYMENT SISTEM",
        url: "",
        image: "projects/siskeu.png",
        projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "Codeigniter"
            },
            {
                tech: "Javascript"
            },
            {
                tech: "jQuery"
            },
            {
                tech: "FPDF"
            },
            {
                tech: "Bootstrap"
            },
        ]
    },
    {
        id: 5,
        projectName: "MFA",
        url: "",
        image: "projects/mfa.png",
        projectDetail: "MyFeederAsisten is a client app for syns data academy to PDDIKTI",
        technologiesUsed: [
            {
                tech: "Node.js"
            },
            {
                tech: "PHP"
            },
            {
                tech: "OpenSSL"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Bootstrap"
            },
        ]
    },
    {
        id: 6,
        projectName: "QUANTIX",
        url: "https://quantixnft.xyz/",
        image: "projects/quantix.png",
        projectDetail: "The Quantix platform is designed to allow any asset represented by an NFT to become liquid",
        technologiesUsed: [
            {
                tech: "JS"
            },
            {
                tech: "OWL Carousel"
            },
            {
                tech: "Cloudflare"
            },
            {
                tech: "Open Graph"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
