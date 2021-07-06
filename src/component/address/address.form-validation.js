import * as Yup from 'yup';

export let ValidationSchema =
    Yup.object().shape({
        address1: Yup.string().required('Address is required'),
        address2: Yup.string(),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        pincode: Yup.string().required('Pincode is required'),
        phone: Yup.number().required('Phone number is required'),
        defaultAddress: Yup.boolean().default(() => {
            return false;
        })
    });
