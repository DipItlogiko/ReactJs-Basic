import React, { useState } from 'react' /// akhane amader react module theke React and useState Hook take import korechi...amra Functional Component ar moddhe  state use korbo tai amra react module theke setState Hook take import kore niyechi karon amra Functional Component ar moddhe sorasori state use korte pabo na Class Component moto tai Functional Component ar moddhe state use korte hole amader setState Hook take import korte hobe

function Counter() {
    //// akhane ami akta functional component create korechi...

    const [count, setValue] = useState(0) ////akhane ami const diye akta variable diclear korechi count nam aaa and akta function diclear korechi setValue nam aa and useState Hook ar moddhe 0 diye amra amader count variable ar akta inicial value diye diyechi 0

    const incrementHandel = () => {   ///jehutu amra akta Functional component ar moddhe r akta function likhchi tai amra function ke const ar moddhe rakhbo...jodi amader Class component ar moddhe ai function ta likhtam tahole amra ai const ar moddhe amader function take rakhtam na just sorasori amader function ar nam likhe kaj kortam and aikhane amra Es6 ar function likhechi
        setValue((count) => count + 1) ////amra jani jokhon eee amra amader state ar value take change korbo tokhon amder state ar privious value ar opore vitti kore amader state ta update korte hobe jemon ami akhane amder state ar value take update korar somoy amder privious state ar value ar opore vitti kore tar pore amder state ar value take change korechi... aikhane (count) amder privious state ar value ta peye jabo..and ai privious state ar value ar opore vitti kore akhane amra amder state ar value take update korchi
    }

    const dicrementHandel = () => {
        setValue((count) => count - 1)
    }

    const resateHandel = () => {
        setValue((count) => 0)
    }

    return (
        <div>
            <div className="counter center">
                <h1 className="counter__title">Counter App</h1>
                <div className="card center">
                    <h2 className="card__title">Count : {count}</h2>  {/* akhane amder state value ta prit korechi ba count variable ar value ta print korechi */}
                    <div className="card__btns">
                        <button className="btn card__btn" onClick={incrementHandel} disabled={count == 5 ? true : false}>  {/* akhane amder + button a kew click korle amader onClick Event ta fire hobe and ai event take listen korbe amader incrementHandel ai function ta  and aikhane disabled={count == 5 ? true : false} ami disabled ar moddhe ternary operator use korechi ternary operator mane jar 3 ta part and ai tarnary operator ar moddhe ami bole diyechi jodi amader count variable ar value ta jodi 5 hoy tahole true hobe mane amder ai button ta disabled hoye jabe jodi 5 ar theke kom hoi amader count variable ar value tahole false hobe mane amder button ta disabled hobe na*/}
                            +
                        </button>
                        <button className="btn card__btn" onClick={dicrementHandel} disabled={count == -5 ? true : false}>
                            -
                        </button>
                        <button className="btn card__btn" onClick={resateHandel}>
                            0
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
