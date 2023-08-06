
export interface slides{
    id:Number;
    img:string;
    title:string;
    description: string;
    bg:string;   
    cat:string;
}
export type category={
    id?:Number;
    img ?:string;
    title?:string;
    cat?:string;
}
export const SliderItems:slides[]=[
    {
        id:1,
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        title:"SUMMER SALE",
        description:"what do you wanna say?",
        bg:"red",
        cat:"shopping",
        
    },
    {
        id:2,
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        title:"AUTUMN SALE",
        description:"what do you wanna say?",
        bg:"blue",
        cat:"shopping",
    },
    {
        id:3,
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        title:"WINTER SALE",
        description:"what do you wanna say?",
        bg:"green",
        cat:"jeans",
    },
    
]
export const categories:category[]=[
    {
        id: 1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifLuD5rgYRmsvxAIUwqZ--x1GPyUgQmBsZA&usqp=CAU",
        title: "ITEM 1",
        cat:"women"

    },
    {
        id:2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAXXgCKwd-sejw_jyiwO9xt2aVKM1xfSHUg&usqp=CAU",
        title: "ITEM 2",
        cat:"men"
    },
    {
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdEPgdt07K75atTQW62yotqtgu-k_0V40ig&usqp=CAU",
        title:"ITEM 3",
        cat:"children"
    },
]
export interface products{
    id:Number;
    img: String;
    title: String;
    desc: String;
    cat:String;
}
export const ImpProducts:products[]=[
    {
        id:1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAXXgCKwd-sejw_jyiwO9xt2aVKM1xfSHUg&usqp=CAU",
        title:"Mens Tee",
        desc:"",
        cat:"",
    },
    {
        id:2,
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        title:"",
        desc:"",
        cat:"",
    },
    {
        id:3,
        img:"",
        title:"",
        desc:"",
        cat:"",
    },
    {
        id:4,
        img:"",
        title:"",
        desc:"",
        cat:"",
    },
    {
        id:5,
        img:"",
        title:"",
        desc:"",
        cat:"",
    },
    {
        id:6,
        img:"",
        title:"",
        desc:"",
        cat:"",
    },
    {
        id:7,
        img:"",
        title:"",
        desc:"",
        cat:"",
    },


]
export interface Filter{
    color:string[],
    size:string[],
}
export const FilterData:Filter[]=[
    {
        color:['red','blue','green','yellow'],
        size:['S','M','L','XL'],
    }
]

