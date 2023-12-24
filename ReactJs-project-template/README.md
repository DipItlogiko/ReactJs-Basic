# ReactJs_project_file_structure_best_practice([Tutorial](https://www.youtube.com/watch?v=Emb-pOw_LmY&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=67))

```Vit``` ba ```Parcel``` (bundler) ar maddhome akta fresh ReactJs project create kore
jokhon amra ReactJs project korbo tokhon amader file structure ta kemon howa uchit ta ai khane kora hoyeche ashole ak ak company ar ak ak dhoroner file structure thakte pare ba ai ta parson to parson vari kore tobe aikhane amader standard way ta follow kora hoyeche.... 

1. ```src``` directory ar moddhe amra akta directory create korbo ```routes``` nam aaa and oi ```routes``` directory ar moddhe amader akta file create korbo ```Index.jsx``` nam aaa and ai ```Index.jsx```  file ar moddhe amra amader sob routing ar kaj korbo...and ai ```routes``` directory ar moddhe amra PrivateRoute ar kaj korar jonno ```PrivateRoute.jsx``` nam aa akta file create korbo and ProtectedRoute ar kaj korar jonno ```ProtectedRoute.jsx``` nam aaa r ooo akta file create korbo amader  ```routes``` directory ar moddhe.....

2. src/App.jsx ar moddhe arma shudhu route guloke access korbo ta chara rrr kichu korbo na amader src/App.jsx ar moddhe

3. amader project ar sob pages gulo amra amader ```src``` directory ar moddhe ```pages``` directory create kore tar moddhe rakhbo and ai ```pages``` directory ar moddhe amader oonek file and sub directory thakte pare jemon ```home``` directory jar moddhe amader home ar page gulo thakbe.....

4. amader Component gulo rakhar jonno amra ```src``` directory ar moddhe ```components``` nam aa akta directory create korbo and oi ```component``` directory ar moddhe amader sob components gulo thakbe jodi amra kono complex component create kori tahole amder src/components directory ar moddhe sub directory create kore tar moddhe rakhte hobe....

5. jokhon amra kono component create kori tokhon oonek somoy amader image ar proyojon hoy ba component ke style korar proyojon hoy tokhon oi image ba sytle ar file gulo rakhar jonno amara ```src``` directory ar moddhe ```assets``` directory create kori and ai ```assets``` directory ar moddhe amader ```image``` and ```style``` nam aa directory create kore tar moddhe rakhi amader image and style ar file gulo....jei image and style guloke amra global eeee access korte chacchi oi file ba directory gulo amra ai ```assets``` ar moddhe rekhe debo...

6. amader environment variable gulo setUp korar jonno amra ```src``` directory ar moddhe ```config``` nam aaa akta directory create kore ai ```config``` directory ar moddhe  environment variable gulo setUp kori...

7. oonek somoy dekha jai amader header sob page ar jonno same thake amader footer sob page ar jonno same thake tokhon amra ai  header and footer ke ```src``` directory ar moddhe ```layouts``` nam aa akta directory create kore tar moddhe amader ai header and footer rakhbo 2 ta file create kore mane amder project ar moddhe jei gulo sob page ar moddhei same thakbe oi jinish guloke amra ai layouts ar moddhe rakhbo.......

8. jodi amra ReactJs ar redux ba ReactRedux ta use kori tahole amra ```src``` directory ar moddhe ```middleware``` nam aaa akta directory create korbo and ai ```middleware``` directory ar moddhe side effect gulo amra kori and API ooo call dei ai ```middleware``` directory ar moddhe theke

9. amra ReactJs ar redux aaa ba ReactRedux  aaaa Action dei and oi Action ar oopore base kore reducer kono akta kaj kore thake and ai Action and reducer ke rakhar jonno amra ```services``` nam aa akta directory create kori amader ```src``` ar moddhe...and ai ```services``` ar moddhe amader ```actions``` and ```reducers``` and ```constants``` and ```utils``` ai directory gulo thakebe 

 * ```actions``` directory ar moddhe amader action related file gulo thakbe

 * ```reducers``` directory ar moddhe amader reducer reladed file gulo thakbe

 * ```constants``` directory ar moddhe amader constant related file gulo thakbe

 * ```utils``` directory ar moddhe amader formatting related file gulo thakbe jemon date format ta oonek bar korar proyojon hote pare and number format oonek bar korar proyojon hote pare and shei kaj gulo amra ```utils``` directory ar moddhe kori..... 




**NOTE :** ai file structure ta hocche standared akta file structure akhane amra App.jsx ar moddhe theke shudhu Route ke access korbo and route ar moddhe diye amader  page call hobe  and oi page ar moddhe 
amader niye jabe ba browser aa show korbe amader oi page ta and akta page ar moddh amader ooonek gulo component thakte pare....
 