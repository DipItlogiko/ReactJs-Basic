# react memo([Tutorial](https://www.youtube.com/watch?v=pwh4oyGpVPk&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=71))([Document](https://dmitripavlutin.com/use-react-memo-wisely/#2-when-to-use-reactmemo))




```memo()``` function ta hocche ReactJs ar builtin akta function jar maddhome amra component ar  un-necessary rendering take bondho korte pari

memo hocche amader ReactJs ar builtin akta function ```memo()``` jar maddhome amra re-rendering take bondho korte pari...jokhon amader kono component render hower dorkar nei ta ooo jodi render hoy oi component ta tokhon amra memo() function ta use kore oi rendering take off kore dite pari....

* ReactJs ar builtin memo() function ar maddhome amra:

 * un-necessary components rendering take bondho korte pari...

 * ak eee props ar value jonno jokhon amader component ar un-necessary rendering take off kore dite pari


Check(src/App.jsx and src/components/Message.jsx)


**Note:** ReactJs ar small projec ar khettre amader ai memo() function ta na use korle ooo hobe...but ReactJs ar Medium and Big size project ar khetre amader ReactJs ar ai builtin memo() function ta use kora mendatory....
