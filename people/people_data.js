var people_data ={
    person1:{
        name:"Daniel Craig",
        info:"Born on March 2nd, 1968",
        description:"Daniel Craig is an accomplished British actor whose career spans across film,\
        television, and theatre. He gained worldwide fame for playing James Bond in five films from Casino Royale \
        (2006) to No Time to Die (2021). Known for his intense, rugged portrayal of the iconic spy, Craig's version \
        of Bond was both vulnerable and tough, redefining the character for a new generation. Beyond Bond, he has \
        starred in films like The Girl with the Dragon Tattoo and Knives Out, showcasing his versatile acting skills. \
        Craig's career has earned him critical acclaim, including BAFTA nominations and wins. He's also respected for \
        his choice of roles in indie films and his dedication to bringing depth to every character he plays.",
        image:"images/daniel_craig.png"
    },

    person2:{
        name:"Tim Curry",
        info:"Born on April 19th, 1946",
        description:"Tim Curry is a versatile actor, renowned for his unique ability to portray both villains and comedic characters. \
        Born in  Grappenhall, Warrington in 1946, he gained fame with his iconic portrayal of Dr. Frank-N-Furter in The Rocky Horror Picture Show (1975), \
        a role that cemented his place in pop culture. Curry's distinctive voice has also made him a sought-after voice actor, lending his \
        talents to animated series and films like The Addams Family and DuckTales the Movie: Treasure of the Lost Lamp. His memorable role as \
        Pennywise the Dancing Clown in It (1990) left a lasting impact on horror fans. \
        Tim Curry's career spans decades, showcasing his wide range of acting skills in both stage and screen performances.",
        image:"images/tim_curry.png"
    },

    person3:{
        name:"Paula Radcliffe",
        info:"Born on December 17th, 1973 ",
        description:"Paula Radcliffe is a retired British athlete, best known for setting the women's world record in \
        the marathon with a time of 2:15:25, a record that still stands today. She achieved global recognition with her victory \
        in the 2005 London Marathon and her win at the 2002 Chicago Marathon, marking her as one of the greatest marathoners of all time. \
        Radcliffe also represented Great Britain in multiple Olympic Games and World Championships, earning medals and breaking numerous records. \
        Her relentless determination and resilience, especially after battling injuries, solidified her legacy in the sport. Off the track, \
        Radcliffe is a prominent advocate for women's athletics and continues to contribute to sports commentary and charity work.",
        image:"images/paula_radcliffe.jpg"
    },

    person4:{
        name:"Gary Barlow",
        info:"Born on January 20th, 1971",
        description:"Gary Barlow rose to fame as the lead singer and primary songwriter of the British boy band Take That, \
        which dominated the 1990s pop scene with hits like Back for Good and Never Forget. After the band's initial breakup in 1996, \
        Barlow enjoyed a successful solo career, releasing chart-topping albums such as Open Road and Since I Saw You Last. His talents \
        extend beyond performing; Barlow has also established himself as a respected songwriter and producer, collaborating with numerous artists. \
        He made headlines as a judge on The X Factor, where his insightful critiques gained him widespread recognition. \
        Barlow’s music, combined with his charisma, has made him one of the UK’s most beloved entertainers.",
        image:"images/gary_barlow.jpg"
    },

    person5:{
        name:"Michael Owen",
        info:"Born on December 14th, 1979",
        description:"Michael Owen is a former English footballer who became one of the country's most prominent strikers in the \
        late 1990s and 2000s. Known for his exceptional pace and clinical finishing, Owen made his mark at Liverpool, where he won \
        numerous domestic and international honors, including the UEFA Cup. His career also included stints at Real Madrid, Newcastle United, \
        and Manchester United, where he continued to showcase his goal-scoring prowess. Owen was part of the England national team for several years, \
        scoring key goals in major tournaments like the 1998 World Cup and Euro 2004. After retiring from professional football, \
        he transitioned into media work, including football commentary and analysis. \
        His legacy remains one of a sharp, instinctive goal-scorer with a lasting impact on English football.",
        image:"images/michael_owen.jpg"
    },

    person6:{
        name:"Lewis Carrol",
        info:"Born on January 27th, 1832",
        description:"Lewis Carroll, born Charles Lutwidge Dodgson in 1832, was a multifaceted English writer and mathematician, \
        most famous for creating the beloved children's books Alice's Adventures in Wonderland and its sequel Through the Looking-Glass. \
        A fellow at Christ Church, Oxford, Carroll was also a skilled logician and photographer, and his work in mathematics and logic was \
        highly regarded. His whimsical and surreal stories, particularly those featuring the curious Alice, \
        have captivated readers for generations, \inspiring countless adaptations in film, theater, and other media. \
        Carroll's works are known for their playful use of language, nonsensical rhymes, and exploration of logic and absurdity, \
        leaving a lasting impact on literature and popular culture.",
        image:"images/lewis_carrol.jpg"
    },
}


var parameter = new URLSearchParams(window.location.search);
var person = parameter.get("person")


if (person && people_data[person]) {
    var data = people_data[person]
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("info").innerHTML = data.info;
    document.getElementById("description").innerHTML = data.description;
    document.getElementById("image").src = data.image;

}
else{
    window.location.href = "../not_found.html"
}