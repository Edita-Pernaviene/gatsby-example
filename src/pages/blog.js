import React from 'react'
import styles from '../components/blog.module.css'
import Layout from  '../components/layout'
const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
            <h1>this is our blog page</h1>    
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam deserunt illum fugiat, placeat aliquid consequuntur maiores eligendi quisquam, quibusdam vel sequi non hic nulla.
            </p> 
            </div>   
        </Layout>
    )
}

export default blog


