#  React Hooks | useContext Hook ([Tutorial](https://www.youtube.com/watch?v=RYeRn5_xL7k&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=58))


![imagte](./public/Screenshot%20from%202023-12-20%2018-21-35.png)

amra ai oporer image theke dekhte parchi amader akhane 4 ta componet ache aita hote pare jekono component and ai 4 ta component ar moddhe parent child ar somporko ache jemon amader component ta hocche sobar parent component component2 ta hocche component1 ar child component3 ta hocche component2 ar child and component4 ta hocche component3 ar child ....akhon jodi ami component1 theke component4 ar moddhe amder ai "anisul islam" string take pass korte chai tahole amader props aakare aivabe data pass korte hobe

**component1->component2->component3->component4**

and aitakei bole **```Prop drilling```** mane prop ke drilling kore amder component1 theke component4 ar moddhe niye jete pari....

kintu ai **```Prop drilling```** ar akta problem hocche jodi ami component1 theke component4 ar moddhe sorasori data ba string ta pass korte chai **component1->component4** ta amra parbo na



**Prop drilling ar ai problem take amra **```useContext```** Hook ar maddhome solve korte pari**


**```useContext```** Hook ar sahajje amra global state set korte pari...jemon ami jodi amader parent component ar moddhe global state create kore dei tahole amader ai parent component ar under aaa joto gulo child componet thakbe oi child component gulo kono prop drilling charai sorasori oi global state ar value take access korte parbe componet1 theke sorasori componet4 oi state ar value ta ke access korte parbe kono prop drilling charai useContext Hook ar maddhome


## ```useContext``` hook take use korar jonno amader ai 3 ta stap follow korte hobe

step1: create Context (check src/Components/UserContext.jsx)

step2: wrap childs components with context provider from parent component (check src/Components/Component1.jsx)

step3: access global state by useContext Hook from child component (check src/Components/Component4.jsx)
