import React, { useState } from 'react'

function Toggle() {
    const [toggle, setToggle] = useState(true)

    return (    ///jehetu amader return function ta akta eee element accept kore tai jodi amra amader return function ar moddhe oonek gulo element likhi tahole amader oobossoi oi element gulo ke <div></div> ar moddhe rakhte hobe ba <></> fragment ar moddhe rakhte hobe
        <div style={{ margin: '1rem', backgroundColor: 'gray', padding: '1rem' }}>
            {toggle && (     ////akhane ami short sarkit use korechi jodi amader toggle state ar value ba toggle variable ar value ta jodi true hoy taholei shudhu amader p tag ar moddh thaka content gulo show korbe false hole p tag ar content gulo show korbe na karon ami shor sarkit ar moddh && mane and operator use korechi and ai && mane and operator ar kaj hocche or bam side ar condition ta true hole dan side ar condition ta check kore and oi ta condition eeee true hole amder oi moddhe thaka code take read kore and print kore dei
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odit quod cupiditate, eaque mollitia
                    porro modi vero atque delectus illum commodi veniam vel, in alias! Maxime nam hic repudiandae
                    cumque?
                </p>
            )}

            <div style={{ textAlign: 'center' }}>
                <button onClick={() => {setToggle(!toggle)}}>   {/* jokhon amader hide ba show button ar moddhe click kora hobe tokhon amader onClick Event ta fire hobe and amader setToggle function ta amader state ar value take update kore debe jehetu amader toggle state ar value ta true ache default and jokhon ee kew kono button a click korbe mane hide ba show button a jokhon eee click hobe tokhon amader toggle state ar value ta true thakle false hoye jabe and jodi amader toggle state ar value ta false thake tahole true hoye jabe tai amra amader setToggle() function ar moddhe !toggle aita diyechi and !toggle aita diye amra amader state take update kore dicchi protibar amader hide ba show button click korar pore  */}
                    {toggle ? "hide" : "show" }   { /* akhane jodi amader toggle state ar value ta ba toggle variable ar value ta jodi true hoy tahole amader hide button ta show korbe and jodi amader toggle state ba toggle variable ar value ta false hoy tahole show button dekhabe aita ami tarnary operator ar maddhome korechi jar 3 ta part thake take tarnary operator bole */}
                </button>

                 
            </div>
        </div>
    )
}

export default Toggle
