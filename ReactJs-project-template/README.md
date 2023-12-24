# How to create a JSON server([Tutorial](https://www.youtube.com/watch?v=AvXiwzRyA1o&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=68))

amra JSON server create kore khub sohoje get request post request put request delete request mane  HTTP request gulo create korte pari...


json server take amader ReactJs project ar moddhe install korar jonno ai command ta chalate hobe ```npm i json-server``` ba amra ai website theke ooo ai command ta copy kore niye ashte pari([Website](https://www.npmjs.com/package/json-server))


server take amader ReactJs project ar moddhe install korar pore database directory ar moddhe amra akta db.json file ar moddhe kichu damy data set kore diyechiand and tar pore amader ai command ta chalate hobe ```npx json-server -p 3001 -w database/db.json``` jar fole amader json server ta on hoye jabe and -p 3001 aita diye ami bolechi 3001 port a cholbe amader ai server ta and -w database/db.json aita diye bolechi all time amader database directory ar moddhe jei db.json file ta ache oi file take watch koro

and amra jei API ta pabo oi API ar moddhe theke data fatch korar jonno amra chaile ReactJs ar bydefault ```useEffect()``` Hook ta use korte pari ba ```axios``` use kore ooo amader ai API theke data fatch korte pari....

axios install korar jonno amader ai command ta chalate hobe ```npm install axios```


Check( src/App.jsx and database/db.json and run this command to run JSON server ```npx json-server -p 3001 -w database/db.json```)

