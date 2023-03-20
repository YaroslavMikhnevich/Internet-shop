import React from 'react'
import './PurchaseForm.scss'
import './loader.scss'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { delateOrders } from '../../store/sliceUsers';
import { useFormik } from 'formik';
import { RiLoader3Line } from 'react-icons/ri';



import Btn from '../Btn/Btn';
import * as Yup from 'yup'

function PurchaseForm(props) {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.items.orders);
    const [loader, setLoader] = useState(false);
    const alert = useSelector(state => state.items.alert)
    const [purchaseForm, setPurchaseForm] = useState(false)
    
    let total = 0
    orders.map((el) => {
        let addNumber = Number(el.price);
        total += addNumber
    })

    const initialValues = {
        name: "",
        secondname: "",
        age: "",
        adress: "",
        phone: '',
    };
    const onSubmit = values => 
    {
        if (Object.keys(formik.errors).length === 0) {
            setLoader(true)               
            setTimeout(() => {
                console.log('Форма заповнена клієнтом :');
                console.log(formik.values);
                console.log('Товари які придбав клієнт :');
                console.log(orders);
                orders.forEach(element => {
                    dispatch(delateOrders(element))
                });
            }, 2000)
            
        }
       
        return values
    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required('*Поле не заповнене')
            .matches(/^(?=.*[А-ЯA-Z]).+$/, '*І\'мя має починатися з великої букви')
            .min(3, '*Введіть ім\'я в якого більше 2х літер '),

        secondname: Yup.string().required('*Поле не заповнене').matches(/^(?=.*[А-ЯA-Z]).+$/, '*Прізвище має починатися з великої букви'),

        age: Yup.string().matches(/^[0-9]+$/, "Введіть ціле число").required('*Поле не заповнене'),

        adress: Yup.string().required('*Поле не заповнене'),

        phone: Yup.string().matches(/^[0-9]+$/, "Введіть ціле число")
            .required('*Поле не заповнене')
            .min(10, '*Введіть корректний телефон з 10 цифер')
            .max(10, '*Введіть корректний телефон з 10 цифер'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    return (
        <div className={purchaseForm ? 'purchase-form active-btn' : 'purchase-form'}  >
            <div className='purchase-form__pre-purchase'>
                <div>
                    <p>До сплати:</p>
                    <p>{total} грн</p>
                </div>

                <div className='fold-block'>
                    <button onClick={() => { setPurchaseForm(!purchaseForm) }}>
                        {<MdArrowBackIosNew
                            className={purchaseForm ? 'active-btn' : ''} />}
                        {purchaseForm ? 'Згорнути' : 'Розгорнути'}
                    </button>
                </div>
            </div>
            <div className='purchase-form__main-form'>
                <p className='form-title'>Для оформлення замовлення заповніть форму нижче.</p>
                <form onSubmit={formik.handleSubmit} >

                    <div className='form-item'>
                        <label htmlFor="name">І'мя:</label>
                        <input className={formik.errors.name && formik.touched.name ? 'error-input' : ''} type="text" id='name' name='name'
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name && <p className='error-message'>{formik.errors.name}</p>}
                    </div>

                    <div className='form-item'>
                        <label htmlFor="secondname">Прізвище:</label>
                        <input className={formik.errors.secondname && formik.touched.secondname ? 'error-input' : ''} type="text" id='secondname' name='secondname'
                            {...formik.getFieldProps('secondname')} />
                        {formik.touched.secondname && formik.errors.secondname && <p className='error-message'>{formik.errors.secondname}</p>}

                    </div>

                    <div className='form-item'>
                        <label htmlFor="age" >Вік користувача:</label>
                        <input className={formik.errors.age && formik.touched.age ? 'error-input' : ''} type="text" id='age' name='age'
                            {...formik.getFieldProps('age')} />
                        {formik.touched.age && formik.errors.age && <p className='error-message'>{formik.errors.age}</p>}

                    </div>

                    <div className='form-item'>
                        <label htmlFor="adress">Адреса отримувача:</label>
                        <input className={formik.errors.adress && formik.touched.adress ? 'error-input' : ''} type="text" id='adress' name='adress'
                            {...formik.getFieldProps('adress')} />
                        {formik.touched.adress && formik.errors.adress && <p className='error-message'>{formik.errors.adress}</p>}

                    </div>
                    <div className='form-item'>
                        <label htmlFor="phone">Телефон отримувача:</label>
                        <input className={formik.errors.phone && formik.touched.phone ? 'error-input' : ''} type="text" id='phone' name='phone'
                            {...formik.getFieldProps('phone')}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.phone} 
                        />
                        {formik.touched.phone && formik.errors.phone && <p className='error-message'>{formik.errors.phone}</p>}

                    </div>
                    <Btn
                        className='confirm-purchase'
                        text='Оформити замовлення'
                        onClick={() => {                         
                            formik.handleSubmit()
                        }
                        }
                        type='submit'
                    />
                </form>

                {loader ? <div className="loader-container">
                    <RiLoader3Line className='loader' />
                    <div class="overlay"></div>
                </div> : null}

            
            </div>
        </div>
    )
}

export default PurchaseForm
