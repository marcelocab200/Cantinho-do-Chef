import React from 'react';
import './styles.scss';

type PaginationDotProps = {
    id: number;
    text: string;
}

type SwiperPaginationProps = {
    activeDot: number;
    dots: PaginationDotProps[];
}

export default function SwiperPagination({activeDot, dots}: SwiperPaginationProps){
    // A função recebe como props dois valores:
    // O id do dot que está ativo e
    // um array de objetos contendo o id e o texto de cada dot, que vai ser renderizado por meio do map da lista

    return (
        <div className='Swiper-pagination'>
            <div className='line'/>
            {dots.map((dot) => (
                <>
                    <div className='dot-container'>
                        <div 
                            key={dot.id} 
                            className={`dot ${activeDot === dot.id ? 'active' : ''}`} // Caso seja o dot ativo, adiciona a estilização da classe 'active'
                        >
                            {dot.id}
                        </div>
                        {activeDot === dot.id && <span>{dot.text}</span>}
                    </div>
                    <div className='line'/>
                </>
            ))}
        </div>
    )
}