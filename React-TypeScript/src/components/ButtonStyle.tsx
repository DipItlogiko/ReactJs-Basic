import React from "react";

type ButtonStyleProps = {  /////akhane amder App.tsx component ar moddhe theke ami jei style ta pass korechi props aakare amader ai component ar moddhe myStyle key ar moddhe oi style take ami akhan theke receive korechi and ai myStyle key ar propsType ba dataType  React.CSSProperties set kore diyechi
    myStyle : React.CSSProperties    /////amra akhane chaile React.CSSProperties na likhe React ke import korar somoy import React ,{CSSProperties} from "react" ai valbe import korle akhane shudhu CSSProperties likhlei hoto...and ai myStyle key ar dataType ba PropsType ta React.CSSProperties diyechi mane ai key ta shudhu CSS niyei kaj korte parbe jodi amader App.tsx ar moddhe theke kew myStyle key ar moddhe CSS chara oonno kichu pass kore tahole amader error dekhabe amader App.tsx file ar moddhe myStyle key ar niche
}

function ButtonStyle(props : ButtonStyleProps ) { /////akhane ButtonStyleProps ar moddhe ja ache sob props ar moddhe set kore diyechi
    return(
        <div style={props.myStyle}>  {/* akhane props.myStyle ar moddhe jei style ta ache oi style ta apply hoye jabe akhane  */}
            button style
        </div>
    )
}

export default ButtonStyle