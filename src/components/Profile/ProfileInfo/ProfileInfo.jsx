import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.size}>
                <img
                    src='https://images.wallpaperscraft.ru/image/plyazh_okean_pesok_palmy_bungalo_95633_1920x1080.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;