import React from 'react';
import styles from './ProductPages.module.css';
import {NavLink} from "react-router-dom";

function ProductPages(props) {




        return (
            <div>
                <div className={styles.blockProducts}>

                    {console.log(props)}

                    {props.products.map(u => <div className={styles.productInfo} key={u.id}>
                        <NavLink to={'/product/' + u.id}>
                            <div>
                                <ul>{u.id}</ul>
                                <ul>{u.name}</ul>
                            </div>
                        </NavLink>

                    </div>)
                    }
                </div>

            </div>
        );
}

export default ProductPages