////================ Without Formik =================////

// import React, { useState } from 'react'

// function Signup() {
//     const [datas, setData] = useState({ name: '', email: '', password: '' })

//     const { name, email, password } = datas /// akhane distructuring kora hoyeche mane datas ar moddhe theke data guloke venge ber kore niye ashechi...and amader akta bishoy mathai rakhte hobe je  jokhon amra distructuring korbo tokhon amader dekhte hobe ami jeita theke distructuring korchi oitar modde ki aakare data ache jodi object aaakare data ashe tahole amader variable gulo { } curly braces ar moddhe rakhte hobe and jodi amader datagulo array aakare ashe tahole amader variable gulo [ ] ar moddhe rakhte hobe....

//     const handelChange = (event) => {
//         setData({ ...datas, [event.target.name]: event.target.value }) ////akhane ami sprade operator use kore datas state ba variable ar moddhe amader updated value take set kore diyechi

//     }

//     const handelSubmit = (event) => {
//         event.preventDefault()   ///jokhon amader form ta submit hobe tokhon amader browser ar jei default bihavior ta ache je form submit howar sathe sathe amader page take reload kora ai take off kore debe amader event.preventDefault() aita
//         setData({name: '', email: '', password: ''})
//         console.log(datas)
//     }

// return (
//     <div style={{ textAlign: 'center' }}>
//         <form onSubmit={handelSubmit}>
//             <div style={{ paddingBottom: '5px' }}>
//                 <label htmlFor="name">Name: </label>
//                 <input type="text" name="name" value={name} onChange={handelChange} />{' '}
//                 {/* akhane value={name} ar maddhome amader form ar ai input field take amader state ar sathe connect kore diyechi */}
//             </div>

//             <div style={{ paddingBottom: '5px' }}>
//                 <label htmlFor="email">Email: </label>
//                 <input type="email" name="email" value={email} onChange={handelChange} />
//             </div>

//             <div style={{ paddingBottom: '5px' }}>
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" value={password} onChange={handelChange} />
//             </div>

//             <div style={{ paddingBottom: '5px' }}>
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     </div>
// )
// }

// export default Signup

////================= With Formik =================////
import React from 'react'

import { useFormik } from 'formik'

function Signup() {

    const formik = useFormik({
        initialValues: { ////akhane amader state ar value guloke inicialize kore diyechi......
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values , {resetForm}) => {  /// akhane ami onSubmit take call korechi and values take ooo call korechi jokhon amader form ta submit hobe tokon oi form ar input field ar value gulo amader ai values ar moddhe chole ashbe and ami aikhane {resetForm} ai take call korechi karon ami cacchi amader form ta submit howar pore reset hoye jak mane aabar aager moto sob input field ar value gulo empty hoye jak tai
            console.log(values)
            resetForm( { values: ''})  ////akhane amader form  ta submit howar pore amader form ar input field ar moddhe joto gulo value thakbe ta aabar empty hoye jabe 
        }
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={formik.handleSubmit}>  {/* jokhon amader ai form ta submit hobe  tokhon amader onSubmit event ta fire hobe and amader ai onSubmit event take listen korbe handleSubmit ai function ta jei function ta amader formik ar moddhe bydefault vabe create kora ache tai amader r create korar dorkar nai */}
                <div style={{ paddingBottom: '5px' }}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />  {/* akhane value={formik.values.name} ar maddhome amader form ar ai input field take amader state ar sathe connect kore diyechi jei state take ami formik ar maddhome create korechi  and jokhon eee amader input field aa kono change hobe tokhon eee amader onChange event ta fire hobe and oi onChange event take listen korbe amader formik ar moddhe bydefault vabe create kora handelChange ai function ta jehetu amader ai handelChange function ta bydefault vabe amader formik ar moddhe create kora thake tai amader r create korar proyojon nei */}
                </div>

                <div style={{ paddingBottom: '5px' }}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                </div>

                <div style={{ paddingBottom: '5px' }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                </div>

                <div style={{ paddingBottom: '5px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
