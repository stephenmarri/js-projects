import React from 'react'
import style from '../smaller.module.css'

const Copyright = () => {
    return (
        <div className=
        {`${style.copyright_container} fr`}
        >
            <div className={style.copyright_text}>Copyright © 2024 Terrebone Pediatrics Limited</div>
            <div className=
            {`${style.copyright_icons} fr`}
            >
                <a href='mailto:example@domain.com' style={{backgroundImage: `url('/icons/s3/mail.svg')`}} className={`${style.icon_fb} ${style.media_icons} media_icons` } target="_blank" ></a>                  
                <a href='tel:+11012023003' style={{backgroundImage: `url('/icons/s3/phone.svg')`}} className={`${style.icon_tel} ${style.media_icons} media_icons` } target="_blank" ></a>
                <a href='https://maps.app.goo.gl/75NY9NNvidx1S2bJ9' style={{backgroundImage: `url('/icons/s3/maps.svg')`}} className={`${style.icon_fb} ${style.media_icons} media_icons` } target="_blank" ></a>
                <a href='https://www.facebook.com/childrenwecare2017' style={{backgroundImage: `url('/icons/s3/fb.svg')`}} className={`${style.icon_tel} ${style.media_icons} media_icons` } target="_blank" ></a>
                
            </div>
        </div>

        
    )
}

export default Copyright