"use client"
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Spinners from "./Loader";

export default function Categories() {
    const [isloader, setloader] = useState(true)
    const [data, setdata] = useState([])
    async function datacatch(){
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setdata(data);
    }
    useEffect(() => {
      datacatch();
      setloader(false)
    }, [])
    
    return (
        <div className="cards-contain">
            {
            isloader ? <Spinners/>:
            data.map((items, index)=>
            <div class="card">
                <Image src={items.image}
                    width={400}
                    height={300}
                    class="card-img-top"
                    alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
            )
            }
        </div>
    )
}
