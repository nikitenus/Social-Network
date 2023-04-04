import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://llandscapes-10674.kxcdn.com/wp-content/uploads/2018/06/banff.gif"
                     alt="main-picture"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

