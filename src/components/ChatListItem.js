import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className='chatListItem'>
            <img className='chatListItem--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt='' />
            <div className='chatListItem--lines' >
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>Khristopher Kidman</div>
                    <div className='chatListItem--date'>19:00</div>
                </div>
                <div className='chatListItem--line'>
                    <div className='chatListItem--lastMsg'>
                        <p>A live vai ficar no ar por quanto tempo depois que terminar?A live vai ficar no ar por quanto tempo depois que terminar?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}