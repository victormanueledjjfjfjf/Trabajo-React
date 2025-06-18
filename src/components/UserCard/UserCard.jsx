import { useState } from 'react';

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);
    
    // const [techno, setTechno] = useState(['Java', 'React', 'PostgreSql', 'Laravel']);
    const { id, name, description, image } = user;

    const handleClick = () => {
        setIsContacted(!isContacted);
        // const newTechno = [...techno, 'flucter'];
        // setTechno(newTechno);
    };

    console.log(`targetas de ${name} fue renderizada`);

    return (
        <div className='card'>
            <img className='image' src={image} alt={name} />
            <h2 className='name'>{name}</h2>
            <p className=''>{description}</p>
            <button id={id} onClick={() => handleClick()}>
                {isContacted ? 'Contactado' : 'Contactar'}
            </button>
        </div>
    );
};