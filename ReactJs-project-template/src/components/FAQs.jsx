import React, {useState} from "react"

import FAQ from "./FAQ"
import Data from "./Data"
import Style from "./faqs.module.css"

function FAQs(){    
    const [faqs , setFAQ] = useState(Data)  ////akhane amra amader Data guloke FAQ variable ar moddhe inisalized kore diyechi
    return(
        <div>
           <main className={Style.container}>
            <section className={Style.faqs}>
                <h1>FAQ</h1>
                {faqs.map(faq => <FAQ key={faq.id} {...faq} />)} {/* akhane amader faqs ar moddhe theke protibar akta akta kore amader object ashbe faq ar moddhe and oi object take ami amader FAQ component ar moddhe pass kore diyechi and protita object ke ami unique korar jonno akhane key ar moddhe amader faq ar moddhe jei object ta ache oi object ar moddhe jei id ta ache oi id take ami key ar moddhe diye diyechi faq.id ar maddhome and {...faq} aitar moddhome amader faq ar moddhe jei object ta ashbe oi object ar moddhe r jei data ba value gulo ache oi sob data ba value guloke ami aikhane distructruing kore tarpore amadre FAQ component ar moddhe pass kore diyechi sperade operator ar maddhome ai vabe {...faq} and jehetur amader faq ar moddhe portibar akta akta kore object ashbe amader faqs theke tai destructuring korar somoy amara oitake {} curly braces ar moddhe rekhechi..jodi array aakare faq ar moddhe data ashto tahole disturcturing korar somoy amra oitake [] ar moddhe rakhtam... jodi amra aivabe sparade oprerator ar maddhome object ta distructruing kore na pass korte chai tahole amra ai vabe oo likhte pari data={faq} */}
            </section>
           </main>
        </div>
    )
} 

export default FAQs