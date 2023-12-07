# Event_Bubbling/Event_Propagation([Tutorial](https://www.youtube.com/watch?v=4AfRswo9RmY&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=29))


jodi eemon hoy je amader parent kono element ar sathe amra onClick Event add kore diyechi aabar oi parent element ar moddhe chaild element gulor moddhe ooo onClick event add kore diyechi tahole dekha jebe amader parent element a click kore amder event ta thik thak kaj korche kintu jokhon amra amader oi parent ar moddhe thaka kono child element ar moddhe click korbo tokhon dekha jabe amder parent ar event ta oo call hocche abar child ar event ta ooo call hocche..and ai takei bole ```Event Bubbling```.(check src/App.jsx and src/components/Test.jsx)


and ai ```Event Bubbling``` take off korar jonno mane jokhon amader child element ar event ta call hobe tokhon jeno amader parent element ar event ta call na hoy tar jonno amader ```stopPropagation``` ai ta likhe dite hobe amder child element ar event take jei function ta listin korche oi function ar moddhe...(check src/App.jsx and src/components/Test.jsx)