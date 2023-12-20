#  prop drilling ([Tutorial](https://www.youtube.com/watch?v=_JNIQXYSUu4&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=57))


![imagte](./public/Screenshot%20from%202023-12-20%2018-21-35.png)

amra ai oporer image theke dekhte parchi amader akhane 4 ta componet ache aita hote pare jekono component and ai 4 ta component ar moddhe parent child ar somporko ache jemon amader component ta hocche sobar parent component component2 ta hocche component1 ar child component3 ta hocche component2 ar child and component4 ta hocche component3 ar child ....akhon jodi ami component1 theke component4 ar moddhe amder ai "anisul islam" string take pass korte chai tahole amader props aakare aivabe data pass korte hobe

**component1->component2->component3->component4**

and aitakei bole **```Prop drilling```** mane prop ke drilling kore amder component1 theke component4 ar moddhe niye jete pari....

kintu ai **```Prop drilling```** ar akta proble hocche jodi ami component1 theke component4 ar moddhe sorasori data ba string ta pass korte chai **component1->component4** ta amra parbo na



**Prop drilling ar ai problem take amra **```useContext```** Hook ar maddhome solve korte pari**
