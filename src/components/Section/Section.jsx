import { useState } from 'react';
import { UserCard } from '../UserCard/UserCard';
import './Section.css';

import fresaImg from'../../assets/fresa.png'
import frutasImg from'../../assets/frutas.png'
import limonImg from'../../assets/limon.png'

const fruits =[
    {
        id:1,
        name: 'fresa',
        description:'strawnberry',
        image: fresaImg
    },
    {
        id:2,
        name: 'manzana',
        description:'apple',
        image: frutasImg
    },
     {
        id:3,
        name: 'limon',
        description:'lemmon',
        image: limonImg
    }

]
export const Section = () => {
    const [count, setCount] = useState(0); 
    console.log(count);

    return (
        <section>
            {fruits.map((fruit) => (
                <UserCard key={fruit.id} user={fruit} />
            ))}
        </section>
    );
};


