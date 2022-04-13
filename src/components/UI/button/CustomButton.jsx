import React from 'react';
import classes from "./CustomButton.module.css";

/**
 * module.css - позволяет генерировать уникальное название.
 * позволяет не накладываться стилям компонентов с одинаковыми классами (заменяет BEM)
 * {children, ...props} - деструктуризация
 * */
const CustomButton = ({children, ...props}) => {
    return (
        // {...props} - все свойства которые будут переданы в CustomBtn прилетят сюда
        <button {...props} className={classes.customBtn}>
            {children}
        </button>
    );
};

export default CustomButton;