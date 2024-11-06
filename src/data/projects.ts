type Project = {
    label: string;
    url?: string;
    repoUrl: string;
    description: string;
    stars: number;
    highlight: boolean;
    tags: string[];
};

const projects: Project[] = [
    {
        label: 'Seller keyboard',
        repoUrl: 'https://github.com/tongducthanhnam/SellerKeyboard',
        description: "A keyboard custom for seller",
        stars: 1,
        highlight: true,
        tags: ['Kotlin', 'Jetpack compose', 'SQLite'],
    },
    {
        label: 'Building Material Retail',
        repoUrl: 'https://github.com/TongDucThanhNam/building_material_retail',
        description: "A Application for building material retail store",
        stars: 1,
        highlight: true,
        tags: ['Flutter', 'Firebase'],
    },
    {
        label: 'E-commerce',
        repoUrl: 'https://github.com/TongDucThanhNam/E-Commerce',
        description: "An E-commerce application",
        stars: 1,
        highlight: true,
        tags: ['NodeJs', 'NextJs', "ReactJS"],
    },
];

export default projects;
