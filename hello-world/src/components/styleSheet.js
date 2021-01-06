import React from 'react';
import './myStyle.css';
import styles from './myStyle.module.css';
function StyleSheet(){
    return(
        <div>
            <p className = {styles.sample}>this is a css StyleSheet</p>
        </div>
    )
}

export default StyleSheet;