import React, {useState} from 'react'
import Card from './Card'

function Products() {

    let products=[{
        id: 1,
        name: "Lenvo thinpad X230",
        price: 1000,
        imgURL: "https://picsum.photos/200",
        categoryId:"laptops"
    },
    {
        id: 2,
        name: "Dell",
        price: 2000,
        imgURL: "https://picsum.photos/200",
        categoryId:"laptops"
    },
    {
        id: 3,
        name: "Lenovo Tab",
        price: 3000,
        imgURL: "https://picsum.photos/200",
        categoryId:"tablets"
    },
    {
        id: 4,
        name: "Samsung Tab",
        price: 5000,
        imgURL: "https://picsum.photos/200",
        categoryId:"tablets"
    },
    {
        id: 5,
        name: "Samsung note 10",
        price: 6000,
        imgURL: "https://picsum.photos/200",
        categoryId:"phones"
    },
    {
        id: 6,
        name: "Samsung S10",
        price: 8000,
        imgURL: "https://picsum.photos/200",
        categoryId:"phones"
    },
    {
        id: 7,
        name: "tochiba Utlra",
        price: 600,
        imgURL: "https://picsum.photos/200",
        categoryId:"laptops"
    },
    {
        id: 8,
        name: "Apple Utlra",
        price: 7060,
        imgURL: "https://picsum.photos/200",
        categoryId:"laptops"
    },
    {
        id: 9,
        name: "test Utlra",
        price: 7860,
        imgURL: "https://picsum.photos/200",
        categoryId:"tablets"
    },
    {
        id: 10,
        name: "Xiaomi",
        imgURL: "https://picsum.photos/200",
        price: 4444, 
        categoryId:"phones"
    },
    {
        name: "Dell",
        price: 7000,
        imgURL: "https://picsum.photos/200",
        categoryId:"laptops",
        id: 11
    }]

    let [arr,setArr]=useState(products);
    let[input,setInput]=useState('');

    function filter(type){
    if(type==='all'){
        setArr(products);
    }
    else{
        let newarr= products.filter((item)=>item.categoryId===type);
        setArr(newarr);
    }
}

    function highToLow(){
        let high = arr.sort(
            (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
            setArr(high);
            // console.log(arr)
    }

    function lowToHigh(){
        let low = arr.sort(
            (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
            setArr(low);
            // console.log(arr)
    }
    function save(e)
    {
    let newarr= products.filter((item)=>item.name===input);
        setArr(newarr);
    }

    function search(e){ 
        setInput(e.target.value)
    }

    return (
        <div className='row'>
            <div className='mt-2 ms-2'>
                <label className='fw-bold'>Search with product name</label>
                <input name='search' className='w-50 ms-2' onChange={search}></input>
                <button className='btn btn-primary ms-2' onClick={save}>Search</button>
            </div>

            <div className='row mt-3 ms-3'>
                <button className='btn btn-danger col-2 mx-2' onClick={()=>filter('all')}>All</button>
                <button className='btn btn-danger col-2 mx-2' onClick={()=>filter('laptops')}>Laptops</button>
                <button className='btn btn-danger col-2 mx-2' onClick={()=>filter('tablets')}>Tablets</button>
                <button className='btn btn-danger col-2 mx-2' onClick={()=>filter('phones')}>Phones</button>
            </div>
            <div>
                <button className='btn btn-success m-3 ms-3 col-4' onClick={highToLow}>From High to low</button>
                <button className='btn btn-warning m-3 col-4 text-white' onClick={lowToHigh}>From low to high</button><br/><br/>
            </div>
           
            {arr.map((item,index)=><Card key={index} product={item}/>)}
        </div>
    
  )
}

export default Products;
