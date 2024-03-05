//Clestoria vintage  Alcoholic&beverages
// flamingo

// import "@babel/generator"
// import "@babel/preset-env"
// import { response } from 'express';

let data = [
    {
        id:1,
        title:"Arbora",
        image:"./images/Arbora.jpg",
        price:"50 $",
        Established:"2003",
        percentage:"13.0%",
        Located:"Dealu Mare",
        quantity:"750ml",
        Type:"Beer",
        about:
            "Our story began in 2003, when the company was established by oenologist Aurelia Visinescu and her associate, Steve Cacenco. In love with nature, during the last years attending Horticulture University, Aurelia Vișinescu chose to study oenology, fascinated by the science behind Bacchus liquor.",
    },

    {
        id:2,
        title:"Baileys",
        image:"./images/Baileys.jpg",
        price:"60 $",
        Established:"1974",
        percentage:"17.0%",
        Located:"Ireland",
        quantity:"750ml",
        Type:"Liqueur",
        about:
            "Baileys Irish Cream is an Irish cream liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, in Dublin, Ireland and in Mallusk, Northern Ireland",
    },

    {
        id:3,
        title:"Bombay Dry Gin",
        image:"./images/Bombay dry gin.jpg",
        price:"90$",
        Established:"1960",
        percentage:"43.0%",
        Located:"London",
        quantity:"750ml",
        Type: "Gin",
        about:"Based upon one of the world’s oldest gin recipes, BOMBAY® Dry Gin was the world’s first distilled London Dry Gin using a unique vapor-infusion process. Eight hand-selected botanicals combine perfectly to create a balanced flavor with notes of juniper, and citrus, along with floral and earthy accents. BOMBAY Dry Gin makes a great addition to any cocktail and is a cornerstone of an at-home bar. A juniper-forward classic gin, BOMBAY Dry Gin has high citrus notes, liquorice, and hints of cinnamon.",

    },
    {
        id:4,
        title:"BowMore",
        image:"./images/BowMore.jpg",
        price:"100$",
        Established:"1779",
        percentage:"43.0%",
        Located: "Scotland",
        Type:"Whikey",
        quantity:"750ml",
        about:"Bowmore distillery produces Scotch whisky on the Isle of Islay, an island of the Inner Hebrides. The distillery, which lies on the South Eastern shore of Loch Indaal, is one of the oldest in Scotland. It is said to have been established in 1779 and is the oldest running distillery on Islay",


    },
    {
        id:5,
        title:"CHIANTI",
        image:"./images/CHIANTI.jpg",
        price:"120$",
        Established:"1970",
        percentage:"23.0%",
        Located:"Italian",
        Type:"Wine",
        quantity:"750ml",
        about:"Chianti[a] is an Italian red wine produced in the Chianti region of central Tuscany, principally from the Sangiovese grape. It was historically associated with a squat bottle enclosed in a straw basket, called a fiasco ; pl.: fiaschi). However, the fiasco is now only used by a few makers of the wine; most Chianti is bottled in more standard-shaped wine bottles."

        

    },
    {
        id:6,
        title:"CHIANTI",
        image:"./images/CHIANTI.jpg",
        price:"120$",
        Established:"1970",
        percentage:"23.0%",
        Located:"Italian",
        Type:"Wine",
        quantity:"750ml",
        about:"Chianti[a] is an Italian red wine produced in the Chianti region of central Tuscany, principally from the Sangiovese grape. It was historically associated with a squat bottle enclosed in a straw basket, called a fiasco ; pl.: fiaschi). However, the fiasco is now only used by a few makers of the wine; most Chianti is bottled in more standard-shaped wine bottles.",
        
        

    },

    {
        id:7,
        title:"Chivas Reagal",
        image:"./images/Chivas Reagal.jpg",
        price:"130$",
        Established: "1909",
        percentage:"40.0%",
        Located:"Scotland",
        Type:"Whikey",
        quantity:"750ml",
        about:"Chivas Regal was created in 1909 by Chivas Brothers Master Blender Charles Stewart Howard as a 25 year old luxury whisky.[1] Chivas Regal has been the market-leading Scotch whisky aged 12 years and older in Europe and Asia Pacific."
        
        

    },

    {
        id:8,
        title:"Colorado Ribeirao Lagger",
        image:"./images/Colorado Ribeirao Lagger.jpg",
        price:"70$",
        Established:"1996",
        percentage:"4.50%",
        Located:"American",
        Type:"Beer",
        quantity:"750ml",
        about:"Cervejaria Colorado is one of the first Craft Breweries in Brazil, founded by Marcelo Carneiro in 1996. Originally from Ribeirão Preto, we strongly support local micro-producers, who provide inputs for creative labels. Since its founding, Colorado has valued typically Brazilian ingredients in its beers, proving that biodiversity also generates biodeliciousness."
        
        

    },
    {
        id:9,
        title:"Country Wine",
        image:"./images/Country Wine.jpg",
        price:"170$",
        Established:"1812",
        percentage:"14.50%",
        Located:"Spanish",
        Type:"Wine",
        quantity:"750ml",
        about:"The region is famed for its wineries, its cuisine, Michelin star restaurants, boutique hotels, luxury resorts, historic architecture, and culture. Viticulture and wine-making have been practiced in the region since the Spanish missionaries from Mission San Francisco Solano established the first vineyards in 1812"
        
        

    },

    {
        id:10,
        title:"Dalie",
        image:"./images/Dalie.jpg",
        price:"190$",
        Established:"2004",
        percentage:"11.50%",
        Located:"Italy",
        Type:"Wine",
        quantity:"750ml",
        about:"Dalia Pinot Grigio hails from Northern Italy in the Veneto region where the protective shadows of the Dolomite mountains create the ideal environment for Pinot Grigio to thrive."
        
    },

    
    {
        id:11,
        title:"Gallantry_Whiskey",
        image:"./images/Gallantry_Whiskey.jpg",
        price:"180$",
        Established:"1989",
        percentage:"40.50%",
        Located:"Ireland",
        Type:"Whikey",
        quantity:"750ml",
        about:"This blend is carefully distilled from 100% barley, fine blend of Irish malt and grain whiskeys, stored in oak barrels for more than 3 years, 40% vol."
        
    },

      
    {
        id:12,
        title:"Glenfiddich",
        image:"./images/Glenfiddich.jpg",
        price:"190$",
        Established:"1887",
        percentage:"40.50%",
        Located:"Scotland",
        Type:"Whikey",
        quantity:"750ml",
        about:"Glenfiddich distillery (Scottish English: [ɡlɛnˈfɪdɪç][1]) is a Speyside single malt Scotch whisky distillery owned by William Grant & Sons in the Scottish burgh of Dufftown in Moray."
        
    },

    {
        id:13,
        title:"Green Lable",
        image:"./images/Green Lable.jpg",
        price:"339$",
        Established:"1997",
        percentage:"40.50%",
        Located:"Italy",
        Type:"Whikey",
        quantity:"750ml",
        about:"Johnnie Walker Green Label is a hidden gem. Blended by the Scottish masters, Johnnie Walker Green is made up of vibrant whiskies, all of which have been aged at least 15 years."
        
    },
    {
        id:14,
        title:"Growlers_Club",
        image:"./images/Growlers_Club.jpg",
        price:"30$",
        Established:"1884",
        percentage:"10.50%",
        Located:"America",
        Type:"Beer",
        quantity:"750ml",
        about:"Growlers are airtight glass, steel or ceramic jugs that provide patrons with a portable, refillable vessel that can be filled up with draft beer at your favorite craft brewery and taken on the go"
        
    },

    {
        id:15,
        title:"Hennessy",
        image:"./images/Hennessy.jpg",
        price:"7000$",
        Established:"1765",
        percentage:"40.50%",
        Located:"France",
        Type:"Brandy",
        quantity:"750ml",
        about:"Hennessy Very Special (V.S) is one of the most popular cognacs in the world. Matured in new oak barrels, Hennessy V.S is bold and fragrant. Its beguiling character is uniquely Hennessy, a timeless choice with an intensity all its own."
    },

    {
        id:16,
        title:"HiBiki",
        image:"./images/HiBiki.jpg",
        price:"449$",
        Established:"1989 ",
        percentage:"40.50%",
        Located:"Japanese",
        Type:"Whikey",
        quantity:"750ml",
        about:"Hibiki was introduced in 1989 by Suntory, originally with expressions having age statements of 17 and 21 years.[5] (In the convention for whisky age statements, the age stated is the age of the youngest whisky in the blend.)"
    },

    {
        id:17,
        title:"Jacobs Creek",
        image:"./images/Jacobs creek.jpg",
        price:"109$",
        Established:"1847 ",
        percentage:"13.50%",
        Located:"Australia",
        Type:"Wine",
        quantity:"750ml",
        about:"Located in Australia's most famous wine region, the Barossa Valley, the winery uses grapes sourced from several wine-growing regions in southeast Australia to create elegant, contemporary wines with great varietal expression. Jacob's Creek, part of Pernod Ricard since 1989, is a true icon of New World wines."
    },

    {
        id:18,
        title:"JAGERMEISTER ",
        image:"./images/JAGERMEISTER .jpg",
        price:"130$",
        Established:"1934  ",
        percentage:"35.00%",
        Located:"America",
        Type:"Liqueur",
        quantity:"750ml",
        about:"Jägermeister is a German digestif made with 56 herbs and spices. Developed in 1934 by Wilhelm and Curt Mast, it has an alcohol by volume of 35%. The recipe has not changed since its creation and continues to be served in its signature green glass bottle"

    },

    {
        id:19,
        title:"Jim_Beam",
        image:"./images/Jim_Beam.jpg",
        price:"150$",
        Established:"1795  ",
        percentage:"40.50%",
        Located:"America",
        Type:"Whikey",
        quantity:"750ml",
        about:"Jim Beam is an American brand of bourbon whiskey produced in Clermont, Kentucky, by Beam Suntory. It is one of the best-selling brands of bourbon in the world. Since 1795 (interrupted by Prohibition), seven generations of the Beam family have been involved in whiskey production for the company that produces the brand."
    },

    {
        id:20,
        title:"Kai_simone",
        image:"./images/Kai_simone.jpg",
        price:"450$",
        Established:"2019",
        percentage:"40.50%",
        Located:"America",
        Type:"Wine",
        quantity:"750ml",
        about:"Kai-Simone Winery is a family owned winery located in Spring Branch, Texas along the Guadalupe River, very close to San Antonio. One of the newest wineries in the Texas Hill Country, we provide high quality wines and exceptional customer service at affordable prices"
    },

    {
        id:21,
        title:"LS",
        image:"./images/LS.jpg",
        price:"199$",
        Established:"2017 ",
        percentage:"13.50%",
        Located:"Australia",
        Type:"Wine",
        quantity:"750ml",
        about:"LS Merchants emerged as a winery with a mission: crafting interesting, approachable, and most importantly, delicious wines while staying true to our belief that wine should be a source of enjoyment and not taken too seriously."
    },

    {
        id:22,
        title:"Old_Parr",
        image:"./images/Old_Parr.jpg",
        price:"500$",
        Established:"1909 ",
        percentage:"40%",
        Located:"England",
        Type:"Whikey",
        quantity:"750ml",
        about:"Grand Old Parr (often simply just Old Parr)[1] is a blended Scotch whisky produced by Diageo in Scotland. Is named after the Old Tom Parr, the reputed oldest man in England."
    },
    {
        id:23,
        title:"Raylee",
        image:"./images/Raylee.jpg",
        price:"189$",
        Established:"1998 ",
        percentage:"13.50%",
        Located:"Australia",
        Type:"Wine",
        quantity:"750ml",
        about:"People. Rowlee is a family project that has its roots in the Dalmatian wine country on the Adriatic coastline of Croatia, where the family tradition of grape growing and wine making began"
    },
    {
        id:24,
        title:"ReyMos",
        image:"./images/ReyMos.jpg",
        price:"109$",
        Established:"1918 ",
        percentage:"7.5%",
        Located:"Spain",
        Type:"Wine",
        quantity:"750ml",
        about:"The wineries Reymos are one of the oldest in Spain and were founded in 1918, its location, Cheste, is the perfect place for cultivation and development of Alexandria Moscatel grape."

    },

    {
        id:25,
        title:"samtrot_spatlese",
        image:"./images/samtrot_spatlese.jpg",
        price:"60$",
        Established:"1928 ",
        percentage:"11.50%",
        Located:"Germany",
        Type:"Wine",
        quantity:"750ml",
        about:"`The Samtrot Spätlese is a red wine with soft and velvety traits. The Spätlese has an aroma of raspberries and cherries and appears in the glass with a garnet-red play of colors`. The` palate flatters the Samtrot Spätlese with fresh fruit and harmoniously integrated tannins. The Samtrot is a mutation from Schwarzriesling and was discovered in 1928"

    },
    {
        id:26,
        title:"Tanqueray",
        image:"./images/Tanqueray.jpg",
        price:"309$",
        Established:"1847",
        percentage:"13.50%",
        Located:"England",
        Type:"Gin",
        quantity:"750ml",
        about:" Tanqueray is a London dry gin, reflecting its distillation process and origin in Bloomsbury, London. London dry gin is made by double distilling grain, with select botanicals added during the second distillation. While the Tanqueray recipe is a closely guarded trade secret, it is known to contain four botanicals: juniper, coriander, angelica root and liquorice, all common botanicals in gin productions overall.  "
    },
    {
        id:27,
        title:"The Ned",
        image:"./images/The Ned.jpg",
        price:"449$",
        Established:"1973  ",
        percentage:"47.50%",
        Located:"America",
        Type:"Wine",
        quantity:"750ml",
        about:"History: Named after the tallest peak in the Wither Hills range - The Ned is an iconic symbol of Marlborough and therefore an appropriate brand name for one of New Zealand's fastest growing wine brands. Brent and Rosemary Marris founded Marisco Vineyards in 2003 and launched their new company with wine brand The Ned."
    },
    {
        id:28,
        title:"Wente",
        image:"./images/Wente.jpg",
        price:"349$",
        Established:"1883 ",
        percentage:"40.50%",
        Located:"America",
        Type:"Wine",
        quantity:"750ml",
        about:"The winery was established by C.H. Wente in 1883 on 47 acres of land.[2] Having received training in wines while working for Charles Krug of Napa Valley, Wente purchased a few vineyards and land of excellent soil.[2] In 1934 his sons, Ernest and Herman, introduced California's first varietal wine label, Sauvignon Blanc. In 1936, they introduced the first varietally labeled Chardonnay. ."
    },

    
            
];





const Isworking=()=>{
   

 

    return(

        
<>

<div>
{

data.map((e)=>{return e.title})

}
</div>



</>
    
        
        
       

       
        
        
        
      
    )
}

export default Isworking
