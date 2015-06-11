YarnCalculator = {};


//http://www.craftyarncouncil.com/weight.html
YarnCalculator.YarnWeights = [

 {   WeightCode: 0,
     WeightDescription: "Lace",
     WeightDescriptionMore: "Fingering, 10-count crochet thread",
     Knitting: {
         NeedleSize: {
             US: { minimun: 000, maximun: 1 },
             MetricInMM: { minimun: 1.5, maximun: 2.25 }
         },
         StitcherPer4Inches: { minimun: 33, maximun: 40 },         
         StitchesPerInch: { minimun: 8, maximun: 10 },
         usages: "Lace knitting"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "B-1", maximun: "B-1"} ,
                 Steel:{ minimun:  6, maximun: 8}
             },
             MetricInMM: { minimun: 1.4, maximun: 1.6}
         },
         StitcherPer4Inches: { minimun: 32, maximun: 42 }
     }
 },
 
 {   WeightCode: 1,
     WeightDescription: "Super fine",
     WeightDescriptionMore: "Sock, Fingering, Baby",
     Knitting: {
         NeedleSize: {
             US: { minimun: 1, maximun: 3 },
             MetricInMM: { minimun: 2.25, maximun: 3.25 }
         },
         StitcherPer4Inches: { minimun: 27, maximun: 32 },         
         StitchesPerInch: { minimun: 7, maximun: 8 },
         usages: "Light layettes, socks"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "B-1", maximun: "E-4"} ,
                 Steel:{ minimun: 0 , maximun: 0}
             },
             MetricInMM: { minimun: 2.25, maximun: 3.5}
         },
         StitcherPer4Inches: { minimun: 21, maximun: 32 }
     }
 },
 {   WeightCode: 2,
     WeightDescription: "Fine",
     WeightDescriptionMore: "Sport, Baby",
     Knitting: {
         NeedleSize: {
             US: { minimun: 3, maximun: 5 },
             MetricInMM: { minimun: 3.25, maximun: 3.75 }
         },
         StitcherPer4Inches: { minimun: 23, maximun: 26 },         
         StitchesPerInch: { minimun: 5, maximun: 6},
         usages: "Light sweaters, baby things, accessories"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "E-4", maximun: "7"} ,
                 Steel:{ minimun: 0 , maximun: 0}
             },
             MetricInMM: { minimun: 3.5, maximun: 4.5}
         },
         StitcherPer4Inches: { minimun: 16, maximun: 20 }
     }
 },
 {   WeightCode: 3,
     WeightDescription: "Light",
     WeightDescriptionMore: "DK, Light Worsted",
     Knitting: {
         NeedleSize: {
             US: {minimun: 5, maximun: 7 },
             MetricInMM: { minimun: 3.75, maximun: 4.5 }
         },
         StitcherPer4Inches: { minimun: 21, maximun: 24 },         
         StitchesPerInch: { minimun: 5, maximun: 5.5},
         usages: "Sweaters and other garments, lightweight scarves"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "7", maximun: "I-9"} ,
                 Steel:{ minimun: 0 , maximun: 0}
             },
             MetricInMM: { minimun: 4.5, maximun: 5.5}
         },
         StitcherPer4Inches: { minimun: 12, maximun: 17 }
     }
 },
 
 {   WeightCode: 4,
     WeightDescription: "Medium",
     WeightDescriptionMore: "Worsted, Afghan, Aran",
     Knitting: {
         NeedleSize: {
             US: { minimun: 7, maximun: 9 },
             MetricInMM: { minimun: 4.5, maximun: 5.5 }
         },
         StitcherPer4Inches: { minimun: 16, maximun: 20 },         
         StitchesPerInch: { minimun: 4, maximun: 5 },
         usages: "Sweaters, blankets, outdoor wear (hats, scarves, mittens, and so on)"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "I-9", maximun: "K-10.5"} ,
                 Steel:{ minimun: 0 , maximun: 0}
             },
             MetricInMM: { minimun: 5.5, maximun: 6.5}
         },
         StitcherPer4Inches: { minimun: 11, maximun: 14 }
     }
 },
 
 {   WeightCode: 5,
 WeightDescription: "Bulky",
 WeightDescriptionMore: "Chunky, Craft, Rug",
     Knitting: {
         NeedleSize: {
             US: {minimun: 9, maximun: 11},
             MetricInMM: { minimun: 5.5, maximun:8 }
         },
         StitcherPer4Inches: { minimun: 12, maximun: 15 },         
         StitchesPerInch: { minimun: 3, maximun: 3.5 },
         usages: "Rugs, jackets, blankets"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "K-10.5", maximun: "M-13"} ,
                 Steel:{ minimun: 0 , maximun: 0}
             },
             MetricInMM: { minimun: 6.5, maximun: 9}
         },
         StitcherPer4Inches: { minimun: 8, maximun: 11 }
     }
 }, 
 {   WeightCode: 6,
 WeightDescription: "Super Bulky",
 WeightDescriptionMore: "Super Bulky, Roving",
     Knitting: {
         NeedleSize: {
             US: { minimun: 11, maximun: 17},
             MetricInMM: { minimun: 8, maximun: 12.75 }
         },
         StitcherPer4Inches: { minimun: 7, maximun: 11 },         
         StitchesPerInch: { minimun: 2, maximun: 2.5 },
         usages: "Heavy blankets and rugs, sweaters"
     },
     Crochet: { 
         HookSize: {
             US: {
                 Regular:{minimun:  "M-13", maximun: "Q"} ,
                 Steel:{ minimun: 0 , maximun: 0}
             },
             MetricInMM: { minimun: 9, maximun: 16}
         },
         StitcherPer4Inches: { minimun: 6, maximun: 9 }
     }
 },
 {
     WeightCode: 7,
     WeightDescription: "Jumbo",
     WeightDescriptionMore: "Jumbo, Roving",
     Knitting: {
         NeedleSize: {
             US: { minimun: 17, maximun: "larger" },
             MetricInMM: { minimun: 12.75, maximun: "larger" }
         },
         StitcherPer4Inches: { minimun: 6, maximun: "fewer" },
         StitchesPerInch: { minimun: 2, maximun: 2.5 },
         usages: "Heavy blankets and rugs, sweaters"
     },
     Crochet: {
         HookSize: {
             US: {
                 Regular: { minimun: "Q", maximun: "larger" },
                 Steel: { minimun: 0, maximun: 0 }
             },
             MetricInMM: { minimun: 16, maximun: "larger" }
         },
         StitcherPer4Inches: { minimun: 5, maximun: "fewer" }
     }
 }
];
$(document).ready(function () {


    YarnCalculator.YarnWeights.forEach(function (value, index) {
        var inputForThicknessesSelectionList = document.getElementById("thicknesses");
        inputForThicknessesSelectionList.options[inputForThicknessesSelectionList.options.length] = new Option(value.WeightCode + '-' + value.WeightDescription, value.WeightCode);
    });
});