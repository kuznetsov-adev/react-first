import React from 'react';
import cl from './CustomModal.module.css'

const CustomModal = ({children, visible, setVisible}) => {
    //массив хранящий набор классов
    const rootClasses = [cl.customModal]
    //определяем необходимо ли добавить класс active
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        //rootClasses.join(' ') все классы из массива объединяем в строку через пробел
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.customModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;