import React from 'react';

export default function FoodList({item}) {
    return (
        <div className='container pt-4'>
            <h3 className='pb-3'>Food Items</h3>
            {item.length===0 && <div className="alert alert-danger" role="alert">
                                    No food available!
                                </div>}

            {item.length>0 &&
                <ul className='list-group'>
                    {item.map((itemset, index)=>{
                        return (<li key={index}className='list-group-item rounded-pill bg-primary-subtle'>{itemset}</li>)
                    })}
                </ul>
            }
        </div>
    )
}
