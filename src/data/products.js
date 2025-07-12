const products = [
    {
        id: 1,
        name: "AUTOCLAVE",
        description: "Autoclave clase N capacidad de 18L y 23L, secado con puerta cerrada por sistema de escape de válvula, cuenta con una selección de ciclos de esterilización. Panel LCD que identifica: temperatura, presión y tiempo.",
        price: "$2.500.000",
        stock: 3,
        image: "/img/autoclave.webp",
        category: "Equipos"
    },
    {
        id: 2,
        name: "EQUIPO PANORÁMICO DIGITAL FONA STELLARIS 3D CEPH",
        description: "Stellaris 3D es un sistema CBCT, panorámico y cefalométrico 3D completo, compacto y totalmente actualizable, que cubre una amplia gama de aplicaciones, desde endodoncia, periodoncia, cirugía, implantología hasta ortodoncia, todo lo que necesita en su práctica diaria.",
        price: "$140.000.000",
        stock: 5,
        image: "/img/equipoPanoramico.webp",
        category: "Equipos"
    },
    {
        id: 3,
        name:"EQUIPO DE RX PARED RUNYES RAY 68 W V-2.0",
        description:"El equipo de rayos x de diagnóstico está destinado a unidades médicas para el diagnóstico de radiología dental de rayos x. El equipo de rayos x se utiliza principalmente para tomar imágenes para película periapical, película de mordida intraoral, película de ala de mordida",
        price: "$4.500.000",
        stock: 10,
        image: "/img/equipoDeRx.webp",
        category: "Equipos"
    },
     {
        id: 4,
        name:"BLOQUES DE RESINA BRILLIANT CRIOS A1 HT 14 CJ x 5",
        description:"BRILLIANT Crios es un bloque de composite reforzado para la fabricación de restauraciones definitivas indirectas utilizando un proceso de tallado CAD/CAM. Su amplia gama, con dos grados detranslucidez y 13 tonos a escoger, permite realizar restauraciones individuales estéticas tanto en el sector anterior como posterior.",
        price: "$725.000",
        stock: 60,
        image: "/img/bloquesDeResina.jpg",
        category: "Odontología"
    },
     {
        id: 5,
        name:"DESMINERALIZANTE ETCHANT GEL S AL 35% JER x 2.5ml",
        description:"Gel de grabado ácido fosfórico al 35% con colocación precisa, utilizable para el esmalte y la dentina.Contiene 2 x 2,5 ml de jeringa de gel etch y 20 puntas de colocación.",
        price: "$20.000",
        stock: 110,
        image: "/img/desmineralizante.jpg",
        category: "Odontología"

    },
    {
        id: 6,
        name:"CEPILLO DENTAL ORAL-B PROSALUD PROFLEX",
        description:"El primer cepillo con tecnología Pro-Flex™ con lados flexibles que ayudan a remover más placa. Oral-B Pro-Salud Clinical Protection Pro-Flex es el primer cepillo de dientes con lados Pro-Flex, que se adapta a los contornos de tus dientes y encías, ayudando a remover más placa que un cepillo dental común",
        price: "$22.800",
        stock: 75,
        image: "/img/cepilloProFlex.webp",
        category: "Higiene"

    },
    {
        id: 7,
        name:"ENCIAS DETOX ESMALTE REPARADOR PASTA DENTAL CON FLUOR 75ML",
        description:"La Pasta Dental Oral-B Detox Esmalte Repair tiene la formula más avanzada dentro de la familia Oral-B. Gracias a su tecnología avanzada te ofrece una Micro espuma que actúa donde otras pastas no y limpia entre dientes y encías, eliminando las bacterias que se alojan en lugares de difícil alcance.",
        price: "$12.000",
        stock: 60,
        image: "/img/crema.webp",
        category: "Higiene"

    },
    {
        id: 8,
        name:"ENJUAGUE BUCAL CUIDADO TOTAL LISTERINE",
        description:"Gracias a su fórmula única de 4 Aceites Esenciales (mentol, timol, eucaliptol y salicilato de metilo) más flúor y zinc, es el LISTERINE más completo para una protección avanzada.",
        price: "$25.500",
        stock: 42,
        image: "/img/listerine.png",
        category: "Higiene"
    },
    
]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === Number ( productId));
            resolve(product);
        }, 2000);
    });
};

export { getProducts, getProductById };