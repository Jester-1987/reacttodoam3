import React from 'react';

function TodoBanner ({userName, todoItems})
{
    return (
        <h4 className="bg-info text-white text-center p-2">
            { userName }'s to do list!
            ({ todoItems.filter(t => !t.done).length } items to do.)
        </h4>
    );
}

export default TodoBanner;