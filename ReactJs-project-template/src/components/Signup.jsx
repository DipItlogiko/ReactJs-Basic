////================= Yup With Formik =================////
import React from 'react'
import * as yup from 'yup'

import { useFormik } from 'formik'

function Signup() {

    const formik = useFormik({
        initialValues: { ////akhane amader state ar value guloke inicialize kore diyechi......
            name: '',
            email: '',
            password: '',
        },

        validationSchema: yup.object({ /// amader yup package ta install korar pore yup ke opore import kore then ami aikhane amader input field guloke validate korechi..and ai validationSchema ta hocche formik ar akta poparty and ai validationSchema ta akta schema ke validate korte pare and akhane ami yup ar akta object create korechi and ai object take ami aikhane validate korechi
            name: yup.alphabetic().min(2 , 'name must have atleast 2 characters').required('name field is required'),
            email: yup.string().email().required('email field is required'),
            password: yup.string().min(6 , 'password must have atleast 6 characters').required('password field is required'),
        }),

        onSubmit: (values , {resetForm}) => {  /// akhane ami onSubmit take call korechi and values take ooo call korechi jokhon amader form ta submit hobe tokon oi form ar input field ar value gulo amader ai values ar moddhe chole ashbe and ami aikhane {resetForm} ai take call korechi karon ami cacchi amader form ta submit howar pore reset hoye jak mane aabar aager moto sob input field ar value gulo empty hoye jak tai
            console.log(values)
            resetForm( { values: ''})  ////akhane amader form  ta submit howar pore amader form ar input field ar moddhe joto gulo value thakbe ta aabar empty hoye jabe 
        },
    })

     

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={formik.handleSubmit}>  {/* jokhon amader ai form ta submit hobe  tokhon amader onSubmit event ta fire hobe and amader ai onSubmit event take listen korbe handleSubmit ai function ta jei function ta amader formik ar moddhe bydefault vabe create kora ache tai amader r create korar dorkar nai */}
                <div style={{ paddingBottom: '5px' }}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />  {/* akhane value={formik.values.name} ar maddhome amader form ar ai input field take amader state ar sathe connect kore diyechi jei state take ami formik ar maddhome create korechi  and jokhon eee amader input field aa kono change hobe tokhon eee amader onChange event ta fire hobe and oi onChange event take listen korbe amader formik ar moddhe bydefault vabe create kora handelChange ai function ta jehetu amader ai handelChange function ta bydefault vabe amader formik ar moddhe create kora thake tai amader r create korar proyojon nei */}
                    
                    <br/>
                    {formik.touched.name && formik.errors.name &&    ///// akhane amader formik ar moddhe jodi name field ar moddhe kew touched kore and amader formik ar name filed ar moddhe jodi kono error thake tahole amader formik ar moddhe errors ar moddhe theke amader name field ar error ta dekhabe niche...and amra chaile amader ai validation error ta return ar opore akta variable diclear kore oi variable ar moddhe store kore diye oi variable ar nam ta aikhane likhe dite pari ai vabe {variable_ar_nam} tahole amader jsx code ta clear thakbe
                        <span style={{ color : 'red'}}>
                            { formik.errors.name }  {/* akhane amader formik ar moddhe theke errors ar moddhe theke amader name field ar error ta show korbe jodi kono error pai amader name field ar moddhe tahole */}
                        </span>
                    }
                </div>

                <div style={{ paddingBottom: '5px' }}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />

                    <br/>
                    {formik.touched.email && formik.errors.email &&
                        <span style={{ color : 'red'}}>
                            { formik.errors.email }
                        </span>
                    }
                </div>

                <div style={{ paddingBottom: '5px' }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />

                    <br/>
                    {formik.touched.password &&  formik.errors.password &&
                        <span style={{ color : 'red'}}>
                            { formik.errors.password }
                        </span>
                    }
                </div>

                <div style={{ paddingBottom: '5px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
