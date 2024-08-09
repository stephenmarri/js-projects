import React from 'react'
import style from './Services.module.css'

const SingleService = ({ name, imgPath, name2 }) => {
    return (
        <div className={style.single_service}>
                {name2 && <img src={imgPath} alt="service" />}
            <div>
                {name2 &&
                    <>
                        <p className={style.title}>{name2}</p>
                        <p className={style.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error veniam dicta dolorem amet impedit velit tempore vel!</p>
                        <br />
                    </>
                }
                <p className={style.title}>{name}</p>
                <p className={style.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error veniam dicta dolorem amet impedit velit tempore vel,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error veniam dicta dolorem amet impedit velit tempore vel, Error veniam dicta dolorem amet impedit velit tempore vel, reiciendis ad quos eius non nobis animi laborum dolor exercitationem aut eaque aspernatur!</p>
            </div>
            {!name2 && <img src={imgPath} alt="service" />}
            
        </div>
    )
}

export default SingleService