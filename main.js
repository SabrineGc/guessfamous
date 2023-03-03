var array=[
    {pic:"https://cdn-s-www.bienpublic.com/images/354668EB-A9B7-44DB-9605-00FCC8625B75/NW_raw/emma-watson-en-2019-photo-angela-weiss-afp-1614288991.jpg",name:"emma watson"},
    {pic:"https://static.cnews.fr/sites/default/files/styles/image_750_422/public/shakira_63fdf17ada80f_0.jpg?itok=uIGOc6Hw",name:"shakira"},
    {pic:"https://img.a.transfermarkt.technology/portrait/big/8198-1673305564.jpg?lm=1",name:"cristiano ronaldo"},
    {pic: "https://pbs.twimg.com/media/FjOt_wHaUAEF751?format=jpg&name=large", name:"selena gomez"},
    {pic: "https://www.lalibre.be/resizer/VAb8rKgSrY4XtUfEV4SMDyQ7RzY=/1200x800/filters:format(jpeg):focal(1356x939:1366x929)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/JRQAZRGZPRAHJKHUBFV2NNSRP4.jpg", name:"justin bieber"},
    {pic: "https://akns-images.eonline.com/eol_images/Entire_Site/2022227/rs_1200x1200-220327085135-1200-Travis-Scott.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top", name:"travis scott"},
    {pic: "https://img.nrj.fr/yyb4GU0iEhQrE4S2TDLvE8O6UMc=/800x450/smart/medias%2F2018%2F03%2FLP.jpg", name:"lp"},
    {pic: "https://m.media-amazon.com/images/M/MV5BMTg0NzY2NjYzM15BMl5BanBnXkFtZTcwNzk5NTc0NA@@._V1_.jpg", name:"david guetta"},
    {pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kendall_Jenner_at_Met_Gala_2021_5.jpg/280px-Kendall_Jenner_at_Met_Gala_2021_5.jpg", name:"kendall jenner"},
    {pic: "https://fr.web.img4.acsta.net/pictures/20/10/28/17/28/1085825.jpg", name:"celine dion"},
    {pic: "https://cfj.org/wp-content/uploads/2021/04/George-Clooney-scaled.jpg", name:"george clooney"},
    {pic: "https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg", name:"billie eilish"},
    {pic: "https://media.vogue.fr/photos/6346c1a49c99ea31c59a69da/2:3/w_2560%2Cc_limit/270625178_505140590786342_2370226527065886147_n.jpg", name:"zendaya"},
    {pic:"https://resize.elle.fr/portrait/var/plain_site/storage/images/beaute/chirurgie-esthetique/gigi-hadid-a-t-elle-fait-de-la-chirurgie-esthetique-le-mannequin-repond-3865870/93208903-1-fre-FR/Gigi-Hadid-a-t-elle-fait-de-la-chirurgie-esthetique-Le-mannequin-repond.jpg", name:'gigi hadid'},
    {pic:"https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fca84f241-5609-4877-aebb-2fb0d11c2f99.2Ejpeg/1731x1200/quality/80/zayn-malik.jpeg", name:"zayn malik"},
    {pic:"https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_.jpg", name:"harry styles"}
];
var pic=0;
var correctGuess = ""
function changePic(){

    pic= Math.floor(Math.random() * (array.length));
     $('#picture').append("<img>" )
     $("img").attr("src", array[pic].pic)
     correctGuess = array[pic].name
    };

  changePic()



  
  var int=document.getElementById('#inp')
  var score=0
 $('.btn').click(

    //$("body").append($("").val())


  

    
  function(){
    
    
    
        if($('#inp').val()===correctGuess){
            score=score+10
           alert ("You Guessed! "+" Your Score is " +score)
           changePic()
           $('#inp').val("")
           
        }
        else{
            score=score
            alert ("Sorry! Try another time! "+" Your Score still " +score)
            $('#inp').val("")
        }
            

        
    })



