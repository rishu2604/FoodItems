import React from 'react';

export default function FoodList({item}) {
    return (
        <div className='container pt-4'>
            <h3 className='pb-3'>Food Items</h3>
            <ul className='list-group'>
                {item.map((itemset, index)=>{
                    return (<li key={index}className='list-group-item'>{itemset}</li>)
                })}
            </ul>

        </div>
    )
}
