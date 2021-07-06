import React from 'react';
import './address.style.scss';
import { Formik, Form } from 'formik';
import CustomButton from '../custom-button/custom-button.component';
import { ValidationSchema } from './address.form-validation';
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createUserAddress } from '../../firebase/firebase.util';
import { setUserAddressAction } from '../../redux/user/user.action';
import uuid from 'react-uuid'


class AddNewAddress extends React.Component {

    render() {
        const { currentUser, handleClick, addAdress } = this.props;
        console.log('here', currentUser);
        return (
            <div className="address-form">
                <h2>ADD NEW ADDRESS</h2>
                <Formik
                    initialValues={
                        {
                            address1: '',
                            address2: '',
                            pincode: '',
                            phone: '',
                            city: '',
                            state: '',
                            id: uuid()
                        }
                    }
                    validationSchema={ValidationSchema}
                    onSubmit={(fields) => {
                        createUserAddress(currentUser.id, fields);
                        addAdress([fields]);
                        handleClick();
                    }}>
                    {({ errors, status, touched, values, handleBlur, handleChange, handleSubmit }) => {
                        return (

                            <div className="address">
                                <div className="address__image">
                                    <img src='https://images.unsplash.com/photo-1527377667-83c6c76f963f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt="" />
                                </div>
                                <div className="form-wrapper">
                                    <Form onSubmit={handleSubmit}>
                                        <div className="input-wrapper">
                                            <input
                                                onChange={handleChange}
                                                label='Address1'
                                                type="text" name="address1"
                                                onBlur={handleBlur}
                                                value={values.address1}
                                                className={`${errors.address1 && touched.address1 ? 'error' : ''}`}
                                                placeholder='Enter Address1 *Required*'
                                            />
                                            {
                                                errors.address1 && touched.address1 ?
                                                    <span className='address-errors'>{errors.address1}</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className="input-wrapper">
                                            <input
                                                onChange={handleChange}
                                                label='Address2'
                                                type="text" name="address2"
                                                onBlur={handleBlur}
                                                value={values.address2}
                                                placeholder='Enter Address2'
                                            />
                                        </div>

                                        <div className="input-wrapper">
                                            <input
                                                onChange={handleChange}
                                                label='City'
                                                type="text" name="city"
                                                onBlur={handleBlur}
                                                value={values.city}
                                                placeholder='Enter City *Required*'
                                                className={`${errors.city && touched.city ? 'error' : ''}`}

                                            />
                                            {
                                                errors.city && touched.city ?
                                                    <span className='address-errors' >{errors.city}</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className="input-wrapper">
                                            <input
                                                onChange={handleChange}
                                                label='State'
                                                type="text" name="state"
                                                onBlur={handleBlur}
                                                value={values.state}
                                                placeholder='Enter State *Required*'
                                                className={`${errors.state && touched.state ? 'error' : ''}`}

                                            />
                                            {
                                                errors.state && touched.state ?
                                                    <span className='address-errors' >{errors.state}</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className="input-wrapper">
                                            <input
                                                onChange={handleChange}
                                                label='Pincode'
                                                type="text" name="pincode"
                                                onBlur={handleBlur}
                                                value={values.pincode}
                                                placeholder='Enter Pincode *Required*'
                                                className={`${errors.pincode && touched.pincode ? 'error' : ''}`}

                                            />
                                            {
                                                errors.pincode && touched.pincode ?
                                                    <span className='address-errors' >{errors.pincode}</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className="input-wrapper">
                                            <input
                                                onChange={handleChange}
                                                label='Phone'
                                                type="text" name="phone"
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                placeholder='Enter Phone Number *Required*'
                                                className={`${errors.phone && touched.phone ? 'error' : ''}`}

                                            />
                                            {
                                                errors.phone && touched.phone ?
                                                    <span className='address-errors'>{errors.phone}</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className="btn">
                                            <CustomButton onClick={handleClick} inverted type='cancel'>Cancel</CustomButton>
                                            <CustomButton type='submit'>Save</CustomButton>
                                        </div>



                                    </Form>
                                </div>
                            </div>
                        )
                    }
                    }
                </Formik>
            </div>
        )
    }


}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
});

const mapDispathToProps = dispatch => ({
    addAdress: data => dispatch(setUserAddressAction(data))
})

// const mapDispathToProps = dispatch => ({
//     setCurrentUser: user => dispatch(setCurrentUserAction(user)),
//     addUserAddress: data => dispatch(setUserAddressAction(data))
//   });


export default connect(mapStateToProps, mapDispathToProps)(AddNewAddress);

