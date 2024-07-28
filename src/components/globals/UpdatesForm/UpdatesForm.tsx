import React, { useState } from 'react';

import CustomInput from '../../UI/Input/CustomInput';
import CustomButton from '../../UI/Button/CustomButton';

import cl from "./UpdatesForm.module.scss";

const UpdatesForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const onFormSend = () => {
        // do anything in the future 
    }

    return (
        <section className={cl["updates-form"]}>
            <div className={cl["updates-form__texts"]}>
                <p className={cl["updates-form__title"]}>Новинки,Акції та найкращі пропозиції </p>
                <p className={cl["updates-form__subtitle"]}>Залишіть свій e-mail, аби не пропускати останні новини </p>
            </div>
            <form action="#" className={cl["updates-form__form"]}>
                <CustomInput
                    type="text" 
                    placeholder='Ваше ім’я' 
                    className={cl["updates-form__input"]}                            
                    value={formData.name} 
                    onChange={handleInputChange}
                    name='name'
                />

                <CustomInput
                    type="text" 
                    placeholder='Ваш e-mail' 
                    className={cl["updates-form__input"]}                            
                    value={formData.email} 
                    onChange={handleInputChange}
                    name='email'
                />

                <CustomButton
                    type='button'
                    onClick={onFormSend}
                >
                    Підписатися
                </CustomButton>
            </form>
        </section>
    );
};

export default UpdatesForm;