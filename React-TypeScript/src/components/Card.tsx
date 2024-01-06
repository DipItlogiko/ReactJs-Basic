import React from "react";
 

function Card({ children } : { children: React.ReactNode }) {   ///////akhane amader Children ar moddhe jei data ta ashbe oi data tar type ami React.ReactNode set kore diyechi and children take distructuring kore niyechi
    return(
        <div className="card">
            { children }   {/* akhane amader children ar moddhe jei data ta ashbe amader Post component ar moddhe theke  oi data take print korbe aikhanee */}
        </div>
    )
}

export default Card