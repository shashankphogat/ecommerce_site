import image1 from "./assets/products/1.png"
import image2 from "./assets/products/2.png"
import image3 from "./assets/products/3.png"
import image4 from "./assets/products/4.png"
import image5 from "./assets/products/5.png"
import image6 from "./assets/products/6.webp"

export const Products = [
    {
        id:1,
        name: "Phone",
        price:80000,
        image:image1,
        description: {name:"phone",company:"apple",color:"white",model:"pro max"}
    },
    {
        id:2,
        name: "Laptop",
        price:125000,
        image:image2,
        description: {name:"laptop",company:"apple",color:"silver",model:"mac book air pro"}
    }
    ,  {
        id:3,
        name: "Camera",
        price:35000,
        image:image3,
        description: {name:"camera",company:"canon",color:"black",model:"EOS"}
    },
    {
        id:4,
        name: "Jacket",
        price:2500,
        image:image4,
        description: {name:"jacket",company:"fugazee",type:"denim", size:"large"}
    },
    {
        id:5,
        name: "Led strip lights",
        price:800,
        image:image5,
        description: {name:"led strip lights",company:"ailbton",LightColor:"multicoloured",lightIntensity:"10 watts"}
    },
    {
        id:6,
        name: "Tshirt",
        price:1800,
        image:image6,
        description: {name:"tshirt",company:"bonkers",size:"large",colour:"cream"}
    },
]