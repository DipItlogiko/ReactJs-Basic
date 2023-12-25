#  redux | Introduction to redux ([Tutorial](https://www.youtube.com/watch?v=vaXwgADfJL8&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=75))

```redux``` hocche akta javascript library...tai ai redux library ke chaile ami ReactJs , ViewJs , AngularJS , NextJs je kono jaigai use korte pari....


* ```redux``` ar uddessho hocche State ke global ee manage kora..

* ReactJs ar small project ar kheetre amra ```redux``` use korbo na ```useContext``` Hook and ```useReducer``` Hook ta use korbo

* ReactJs ar Medium and Large project ar kheetre amader oobossoi ```redux``` javascript library teke amader ReactJs project ar moddhe use korte hobe...jar fole amra khub sohoje amader state gulo manage korte parbo...

* **INSTALL PROCESS**

  * ```React-redux``` ai package ta install kore amra ReactJs project ar moddhe redux ar kaj korte pari

* **IMPORTANT THINGS**

  * ```redux-toolkit``` ar sahajje amader redux ar jei logic gulo ache oi logic guloke mistakes avoide kore  easily likhte pari 

  * ```redux devtools extension``` amader google extension ar moddhe redux devtools nam aa akta extension ache oi extension ar maddhome amra khub sohoje debugging ar kaj korte parbo...

### How Redux Works?

* State ke global ee manage korai hocche Redux ar main uddeshho

* define state : amader akta state define kore nite hobe

* dispatch an Action : amader action guloke dispatch korte hobe

* Reducer update state based on Action Type : amader action ar type ar opore vitti kore Reducer state take update kore debe

* store will update the view : store amader view take update kore debe


![imame](./public/Screenshot%20from%202023-12-25%2019-56-28.png)

ai oporer image ar moddhe view ar moddhe akta Increment button ache to jokhon ee amra amader Increment button ar moddhe click korbo jokhon ee amder conut ar value ta 1 , 1 kore increment hobe ba barbe....jokhon eee ami amader Increment button a click korbo tokhon akta Action dispatch hobe ai Action ta hote pare INCREMENT ba DECREMENT...and ai action ar type ar opore vitti kore Reducers amader state ke update kore debe and state ar value ta update hoye jawar pore shei updated state ar value ta Store ar moddhe store hoye jabe.....Store ar kaj hocche amader application ar sob state ke store kora ...and Store ar kaj hocche View ke change kore dewa....

