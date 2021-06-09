import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Collection.module.css'

export const Collections:React.FC<{}>=()=>{



    return(
        <div className={styles.container}>
            <div className={styles.heading}>Our Collections</div>
            <div className={styles.tiles}>
                <Link to="/men">
                    <div className={styles.title}>
                        <img src='../../images/men.png' title="Men's Shoes">
                        <p>Men</p>
                        </img>
                    </div>
                </Link>
                <Link to="/women">
                    <div className={styles.title}>
                        <img src='../../images/women.png' title="Women Shoes">
                        <p>Men</p>
                        </img>
                    </div>
                </Link>
                <Link to="/kids">
                    <div className={styles.title}>
                        <img src='../../images/kids.png' title="Kids Shoes">
                        <p>Kids</p>
                        </img>
                    </div>
                </Link>
            </div>

        </div>
    )
}