import React,{useState , useEffect} from "react"

function UseEffectExample(){
    const [count,setCount] = useState(0)
    const [isClicked , setIsClicked] = useState(false)

    ////========== calls with every render ========///
    // useEffect(() => {    ////useEffect take opore import korechi and aikhane use korechi useState ar moton eee useEffect ta hocche amader ReactJs ar r akta Hook...amader oobossoi mone rakhte hobe je useEffect(ar moddhe amader akta annonimous function likhte hobe aita must korte hobe and amra chile amader anonimous function ar pore paramiter ooo use korte pari....and anonimous function bolte jei function ar kono nam thake na oi function ke anonimous function  bole and amader ai file ar return ta joto bar render hobe amader ai useEffect ta toto bar call hobe)
    //     console.log("useEffect")
    // })

    ////========== calls with only first render ========///
    // useEffect(() => {    ////useEffect take opore import korechi and aikhane use korechi useState ar moton eee useEffect ta hocche amader ReactJs ar r akta Hook...amader oobossoi mone rakhte hobe je useEffect(ar moddhe amader akta annonimous function likhte hobe aita must korte hobe and amra chile amader anonimous function ar pore paramiter ooo use korte pari....and anonimous function bolte jei function ar kono nam thake na oi function ke anonimous function  bole and amader ai file ar return ta joto bar render hobe amader ai useEffect ta toto bar call hobe na karon amader ai useEffect ar moddhe jei anonimous function ta ache oi function ar seshe ami koma diye akta dependence add kore diyechi [] aita diye jar fole amader ai file ar return ta jokhon prothombar render hobe tokhon eee amader ai useEffect ta hobe and pore joto bar eee amader ai file ar return ta render hok na keno amader useEffect call hobe na...)
    //     console.log("useEffect")
    // }, [])

    ////========== calls with first render and depened on count state ========///
    useEffect(() => {    ////useEffect take opore import korechi and aikhane use korechi useState ar moton eee useEffect ta hocche amader ReactJs ar r akta Hook...amader oobossoi mone rakhte hobe je useEffect(ar moddhe amader akta annonimous function likhte hobe aita must korte hobe and amra chile amader anonimous function ar pore paramiter ooo use korte pari....and anonimous function bolte jei function ar kono nam thake na oi function ke anonimous function  bole and amader ai file ar return ta prothom aa jokhon render hobe amader ai useEffect ta ooo tokhon render hobe kintu tar pore ami jotobar amder return ta ke render kori na keno amader useEffect ta call hobe na karon ami useEffect ar moddhe annonimous function ar sheshe koma diye dependence ar moddhe [coutn] count state take diye diyechi jar fole amader count state ar value ta  joto bar update hobe shudhu totobar amader ai useEffect ta call hobe ta chara call hobe na jemon ami jodi click button aa click kori tahole amader return ta thik eee render hobe kintu amader useEffect ta call hobe na karon amader useEffect ar moddhe annonimous function ar pore dependency ar moddhe count state take diye dewa hoyechi tai prothom eee amader jokhon ai return ta render hobe tokhon ai useEffect ta call hobe and tar pore amader count state ar value joto bar update hobe shudhu totobar amader ai useEffect ta call hobe ta chara call hobe na)
        console.log("useEffect")
    }, [count])

    return(
        <div>
            <div>
                {console.log("Rendering...")}
                <h1>Count: {count}</h1>  
                <button onClick={() => {setCount(count => count + 1)}}>+</button>   
            </div>
            <button onClick={() => {setIsClicked(!isClicked)}}>click</button>
        </div>
    )
}

export default UseEffectExample




