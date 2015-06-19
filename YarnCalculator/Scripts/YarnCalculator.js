YarnCalculator = {};

//--- Yarn Weight from
//http://www.craftyarncouncil.com/weight.html
YarnCalculator.YarnWeights = [];
YarnCalculator.YarnWeights[0] = {
    WeightCode: 0,
    WeightDescription: "Lace",
    WeightDescriptionMore: "Fingering, 10-count crochet thread",
    Knitting: {
        NeedleSize: {
            US: { minimun: 000, maximun: 1 },
            MetricInMM: { minimun: 1.5, maximun: 2.25 }
        },
        StitchesPer4Inches: { minimun: 33, maximun: 40 },
        StitchesPerInch: { minimun: 8, maximun: 10 },
        usages: "Lace knitting"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "B-1", maximun: "B-1" },
                Steel: { minimun: 6, maximun: 8 }
            },
            MetricInMM: { minimun: 1.4, maximun: 1.6 }
        },
        StitchesPer4Inches: { minimun: 32, maximun: 42 }
    }
};

YarnCalculator.YarnWeights[1] = {
    WeightCode: 1,
    WeightDescription: "Super fine",
    WeightDescriptionMore: "Sock, Fingering, Baby",
    Knitting: {
        NeedleSize: {
            US: { minimun: 1, maximun: 3 },
            MetricInMM: { minimun: 2.25, maximun: 3.25 }
        },
        StitchesPer4Inches: { minimun: 27, maximun: 32 },
        StitchesPerInch: { minimun: 7, maximun: 8 },
        usages: "Light layettes, socks"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "B-1", maximun: "E-4" },
                Steel: { minimun: 0, maximun: 0 }
            },
            MetricInMM: { minimun: 2.25, maximun: 3.5 }
        },
        StitchesPer4Inches: { minimun: 21, maximun: 32 }
    }
}
YarnCalculator.YarnWeights[2] = {
    WeightCode: 2,
    WeightDescription: "Fine",
    WeightDescriptionMore: "Sport, Baby",
    Knitting: {
        NeedleSize: {
            US: { minimun: 3, maximun: 5 },
            MetricInMM: { minimun: 3.25, maximun: 3.75 }
        },
        StitchesPer4Inches: { minimun: 23, maximun: 26 },
        StitchesPerInch: { minimun: 5, maximun: 6 },
        usages: "Light sweaters, baby things, accessories"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "E-4", maximun: "7" },
                Steel: { minimun: 0, maximun: 0 }
            },
            MetricInMM: { minimun: 3.5, maximun: 4.5 }
        },
        StitchesPer4Inches: { minimun: 16, maximun: 20 }
    }
};
YarnCalculator.YarnWeights[3] = {
    WeightCode: 3,
    WeightDescription: "Light",
    WeightDescriptionMore: "DK, Light Worsted",
    Knitting: {
        NeedleSize: {
            US: { minimun: 5, maximun: 7 },
            MetricInMM: { minimun: 3.75, maximun: 4.5 }
        },
        StitchesPer4Inches: { minimun: 21, maximun: 24 },
        StitchesPerInch: { minimun: 5, maximun: 5.5 },
        usages: "Sweaters and other garments, lightweight scarves"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "7", maximun: "I-9" },
                Steel: { minimun: 0, maximun: 0 }
            },
            MetricInMM: { minimun: 4.5, maximun: 5.5 }
        },
        StitchesPer4Inches: { minimun: 12, maximun: 17 }
    }
};

YarnCalculator.YarnWeights[4] = {
    WeightCode: 4,
    WeightDescription: "Medium",
    WeightDescriptionMore: "Worsted, Afghan, Aran",
    Knitting: {
        NeedleSize: {
            US: { minimun: 7, maximun: 9 },
            MetricInMM: { minimun: 4.5, maximun: 5.5 }
        },
        StitchesPer4Inches: { minimun: 16, maximun: 20 },
        StitchesPerInch: { minimun: 4, maximun: 5 },
        usages: "Sweaters, blankets, outdoor wear (hats, scarves, mittens, and so on)"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "I-9", maximun: "K-10.5" },
                Steel: { minimun: 0, maximun: 0 }
            },
            MetricInMM: { minimun: 5.5, maximun: 6.5 }
        },
        StitchesPer4Inches: { minimun: 11, maximun: 14 }
    }
};

YarnCalculator.YarnWeights[5] = {
    WeightCode: 5,
    WeightDescription: "Bulky",
    WeightDescriptionMore: "Chunky, Craft, Rug",
    Knitting: {
        NeedleSize: {
            US: { minimun: 9, maximun: 11 },
            MetricInMM: { minimun: 5.5, maximun: 8 }
        },
        StitchesPer4Inches: { minimun: 12, maximun: 15 },
        StitchesPerInch: { minimun: 3, maximun: 3.5 },
        usages: "Rugs, jackets, blankets"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "K-10.5", maximun: "M-13" },
                Steel: { minimun: 0, maximun: 0 }
            },
            MetricInMM: { minimun: 6.5, maximun: 9 }
        },
        StitchesPer4Inches: { minimun: 8, maximun: 11 }
    }
};
YarnCalculator.YarnWeights[6] = {
    WeightCode: 6,
    WeightDescription: "Super Bulky",
    WeightDescriptionMore: "Super Bulky, Roving",
    Knitting: {
        NeedleSize: {
            US: { minimun: 11, maximun: 17 },
            MetricInMM: { minimun: 8, maximun: 12.75 }
        },
        StitchesPer4Inches: { minimun: 7, maximun: 11 },
        StitchesPerInch: { minimun: 2, maximun: 2.5 },
        usages: "Heavy blankets and rugs, sweaters"
    },
    Crochet: {
        HookSize: {
            US: {
                Regular: { minimun: "M-13", maximun: "Q" },
                Steel: { minimun: 0, maximun: 0 }
            },
            MetricInMM: { minimun: 9, maximun: 16 }
        },
        StitchesPer4Inches: { minimun: 6, maximun: 9 }
    }
};

YarnCalculator.YarnWeights[7] = {
    WeightCode: 7,
    WeightDescription: "Jumbo",
    WeightDescriptionMore: "Jumbo, Roving",
    Knitting: {
        NeedleSize: {
            US: { minimun: 17, maximun: "larger" },
            MetricInMM: { minimun: 12.75, maximun: "larger" }
        },
        StitchesPer4Inches: { minimun: 6, maximun: "fewer" },
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
        StitchesPer4Inches: { minimun: 5, maximun: "fewer" }
    }
};
//--- end yarn weights

//--- YarnImageLookUp
YarnCalculator.ImageLookUp = [];
YarnCalculator.ImageLookUp[0] = "/images/0_lace.jpg";
YarnCalculator.ImageLookUp[1] = "/images/1_superfine.jpg";
YarnCalculator.ImageLookUp[2] = "/images/2_fine.jpg";
YarnCalculator.ImageLookUp[3] = "/images/3_light.jpg";
YarnCalculator.ImageLookUp[4] = "/images/4_medium.jpg";
YarnCalculator.ImageLookUp[5] = "/images/5_bulky.jpg";
YarnCalculator.ImageLookUp[6] = "/images/6_superbulky.jpg";
YarnCalculator.ImageLookUp[7] = "/images/7_jumbo_3L.png";
//--- end YarnImageLookUp


YarnCalculator.DisplayWeightDetails = function () {
    var inputForThicknessesSelectionList = document.getElementById("thicknesses");
    var SelectedWeightCode = inputForThicknessesSelectionList.options[inputForThicknessesSelectionList.selectedIndex].value;

    //html to set
    var weigthdetails = document.getElementById("weigthdetails");
    var weigthdetailsk = document.getElementById("weigthdetails_k");
    var weigthdetailsc = document.getElementById("weigthdetails_c");
    var yimg = document.getElementById("yimg");

    //null object settings
    var yarnWeightDetails = "<Please selected a valid thickness.>";
    var yarnWeightDetailsK = "<Knitting information is not generated for display>";
    var yarnWeightDetailsC = "<Crochet information is not generated for display>";
    yimg.src = YarnCalculator.ImageLookUp[0];
    yimg.style.visibility = "hidden";

    // 
    var yarnWeightObj = YarnCalculator.YarnWeights[SelectedWeightCode];
    if (yarnWeightObj) {
        yarnWeightDetails = "";
        yarnWeightDetails += "WeightCode: " + yarnWeightObj.WeightCode;
        yarnWeightDetails += "<br/>";
        yarnWeightDetails += " WeightDescription: " + yarnWeightObj.WeightDescription;
        yarnWeightDetails += " - " + yarnWeightObj.WeightDescriptionMore;
        yarnWeightDetails += "<br/>";
        yarnWeightDetails += yarnWeightObj.Knitting.usages;

        //
        yarnWeightDetailsK = "";
        yarnWeightDetailsK += "Needle Sizes (mm): " + yarnWeightObj.Knitting.NeedleSize.MetricInMM.minimun + " - " + yarnWeightObj.Knitting.NeedleSize.MetricInMM.maximun;
        if (yarnWeightObj.Knitting.NeedleSize.US) {
            yarnWeightDetailsK += "<br/>";
            yarnWeightDetailsK += "Needle Sizes (US): " + yarnWeightObj.Knitting.NeedleSize.US.minimun + " - " + yarnWeightObj.Knitting.NeedleSize.US.maximun;
        }
        if (yarnWeightObj.Knitting.NeedleSize.UK) {
            yarnWeightDetailsK += "<br/>";
            yarnWeightDetailsK += "Needle Sizes (UK): " + yarnWeightObj.Knitting.NeedleSize.UK.minimun + " - " + yarnWeightObj.Knitting.NeedleSize.UK.maximun;
        }
        yarnWeightDetailsK += "<br/>";
        yarnWeightDetailsK += "<br/>";
        yarnWeightDetailsK += "Stitches Per";
        yarnWeightDetailsK += "<br/>";
        yarnWeightDetailsK += "Stitches Per 4 Inches: " + yarnWeightObj.Knitting.StitchesPer4Inches.minimun + " - " + yarnWeightObj.Knitting.StitchesPer4Inches.maximun;
        yarnWeightDetailsK += "<br/>";
        yarnWeightDetailsK += "Stitches Per Inch: " + yarnWeightObj.Knitting.StitchesPerInch.minimun + " - " + yarnWeightObj.Knitting.StitchesPerInch.maximun;
        yarnWeightDetailsK += "<br/>";

        //
        yarnWeightDetailsC = "";
        yarnWeightDetailsC += "Hook Sizes (mm): " + yarnWeightObj.Crochet.HookSize.MetricInMM.minimun + " - " + yarnWeightObj.Crochet.HookSize.MetricInMM.maximun;
        if (yarnWeightObj.Crochet.HookSize.US) {
            yarnWeightDetailsC += "<br/>";
            yarnWeightDetailsC += "Hook Sizes (US): " + yarnWeightObj.Crochet.HookSize.US.Regular.minimun + " - " + yarnWeightObj.Crochet.HookSize.US.Regular.maximun;
        }
        if (yarnWeightObj.Crochet.HookSize.UK) {
            yarnWeightDetailsC += "<br/>";
            yarnWeightDetailsC += "Hook Sizes (UK): " + yarnWeightObj.Crochet.HookSize.UK.minimun + " - " + yarnWeightObj.Crochet.HookSize.UK.maximun;
        }


    }
    weigthdetails.innerHTML = yarnWeightDetails;
    weigthdetailsk.innerHTML = yarnWeightDetailsK;
    weigthdetailsc.innerHTML = yarnWeightDetailsC;

    //details image
    var dyimg = YarnCalculator.ImageLookUp[SelectedWeightCode];
    if (dyimg) {
        yimg.src = dyimg;
        yimg.style.visibility = "visible";
    }
}
//--- knitting needle size conversion
//http://www.yarnfwd.com/main/needleconv.html
//http://www.lionbrand.com/cgi-bin/faq-search.cgi?store=/stores/eyarn&faqKey=97
YarnCalculator.NeedleHookConversionBase = [
//{ MetricInMM:  , Knitting:{US: , UK:   }, Crochet:{US: , UK: } } ,
{ MetricInMM: 2.0, Knitting: { US: 0, UK: 14 }, Crochet: { US: "--" } },
{ MetricInMM: 2.25, Knitting: { US: 1, UK: 13 }, Crochet: { US: "B-1" } },
{ MetricInMM: 2.75, Knitting: { US: 2, UK: 12 }, Crochet: { US: "C-2" } },

{ MetricInMM: 3.0, Knitting: { US: "--", UK: 11 } },
{ MetricInMM: 3.25, Knitting: { US: 3, UK: 10 }, Crochet: { US: "D-3" } },
{ MetricInMM: 3.5, Knitting: { US: 4, UK: "--" }, Crochet: { US: "E-4" } },
{ MetricInMM: 3.75, Knitting: { US: 5, UK: 9 }, Crochet: { US: "F-8" } },

{ MetricInMM: 4.0, Knitting: { US: 6, UK: 8 }, Crochet: { US: "G-6" } },
{ MetricInMM: 4.5, Knitting: { US: 7, UK: 7 }, Crochet: { US: "7" } },

{ MetricInMM: 5.0, Knitting: { US: 8, UK: 6 }, Crochet: { US: "H-8" } },
{ MetricInMM: 5.5, Knitting: { US: 9, UK: 5 }, Crochet: { US: "I-9" } },

{ MetricInMM: 6.0, Knitting: { US: 10, UK: 4 }, Crochet: { US: "J-10" } },
{ MetricInMM: 6.5, Knitting: { US: 10.5, UK: 3 }, Crochet: { US: "K-10.5" } },

{ MetricInMM: 7.0, Knitting: { US: "--", UK: 2 } },
{ MetricInMM: 7.5, Knitting: { US: "--", UK: 1 } },

{ MetricInMM: 8.0, Knitting: { US: 11, UK: "0" }, Crochet: { US: "L" } },
{ MetricInMM: 9.0, Knitting: { US: 13, UK: "00" }, Crochet: { US: "M, N" } },

{ MetricInMM: 10.0, Knitting: { US: 15, UK: "000" }, Crochet: { US: "N, P" } },
{ MetricInMM: 11.5, Crochet: { US: "P" } },
{ MetricInMM: 12.0, Knitting: { US: 17 } },
{ MetricInMM: 13.0, Knitting: { US: 17, UK: "0000" } },

{ MetricInMM: 15.00, Knitting: { US: 19, UK: "00000" } },
{ MetricInMM: 15.75, Crochet: { US: "Q" } },

{ MetricInMM: 16.0, Knitting: { US: 19 } },
{ MetricInMM: 19.0, Knitting: { US: 35 }, Crochet: { US: "S" } },
{ MetricInMM: 25.0, Knitting: { US: 50 } }
];
//--- endknitting needle size conversion
YarnCalculator.NeedleHookConversionChartTableRows = function (elementId, displayKnitting, displayCrochet, addUnitFilterClasses) {

    var tablee = document.getElementById(elementId);

    if (tablee) {
        var header = tablee.createTHead();
        var row = tablee.insertRow(-1);
        var cell1;
        var cell2;
        var cell3;

        var cell4;
        var cell5;
        var cell6;


        if (displayKnitting) {
            cell1 = row.insertCell(-1);
            cell2 = row.insertCell(-1);
            cell3 = row.insertCell(-1);
            cell1.innerHTML = "Metric (mm)";
            cell2.innerHTML = "US";
            cell3.innerHTML = "UK";

            if (addUnitFilterClasses) {
                cell1.className = "MM";
                cell2.className = "US";
                cell3.className = "UK";
            };
        }
        if (displayCrochet) {
            cell4 = row.insertCell(-1);
            cell5 = row.insertCell(-1);
            cell6 = row.insertCell(-1);
            cell4.innerHTML = "Metric (mm)";
            cell5.innerHTML = "US";
            cell6.innerHTML = "UK";

            if (addUnitFilterClasses) {
                cell4.className = "MM";
                cell5.className = "US";
                cell6.className = "UK";
            };
        }

        YarnCalculator.NeedleHookConversionBase.forEach(function (value, index) {

            var row = tablee.insertRow(-1);

            if (displayKnitting && value.Knitting) {
                cell1 = row.insertCell(-1);
                cell2 = row.insertCell(-1);
                cell3 = row.insertCell(-1);
                cell1.innerHTML = value.MetricInMM;
                cell2.innerHTML = value.Knitting.US ? value.Knitting.US : "";
                cell3.innerHTML = value.Knitting.UK ? value.Knitting.UK : "";

                if (addUnitFilterClasses) {
                    cell1.className = "MM";
                    cell2.className = "US";
                    cell3.className = "UK";
                };
            }

            if (displayCrochet && value.Crochet) {
                var cell4 = row.insertCell(-1);
                var cell5 = row.insertCell(-1);
                var cell6 = row.insertCell(-1);
                cell4.innerHTML = value.MetricInMM;
                cell5.innerHTML = value.Crochet.US ? value.Crochet.US : "";
                cell6.innerHTML = value.Crochet.UK ? value.Crochet.UK : "";

                if (addUnitFilterClasses) {
                    cell4.className = "MM";
                    cell5.className = "US";
                    cell6.className = "UK";
                }
            }
        });
    } else {
        alert("Elementid: '" + elementId + "' to place hook/needle conversion chart is not available on this page.");
    }

};
YarnCalculator.HideShowKnittingCrochet = function (checkbox, showHideElementId) {
    var toHideOrShow = document.getElementById(showHideElementId);
    if (checkbox.checked) {
        toHideOrShow.style.display = "block";//"inherit";
        // toHideOrShow.style.visibility = "visible";
    } else {
        toHideOrShow.style.display = "none";
        // toHideOrShow.style.visibility = "hidden";
    }
}
YarnCalculator.HideShowClass = function (checkbox, showHideClass) {
    var toHideOrShowElements = document.getElementsByClassName(showHideClass);
    var style;
    if (checkbox.checked) {
        style = "visible";
    } else {
        style = "hidden";
    };

    for (i = 0; i < toHideOrShowElements.length; i++) {
        toHideOrShowElements[i].style.visibility = style;
    };
};
//-- project calculations
YarnCalculator.ProjectCalculator = {};
YarnCalculator.ProjectCalculator.OnChangeUpdateTotals = function (element) {
    var id = element.id;
    var rowIndex = id.split('_')[1];

    var rowYardageElement = document.getElementById("yardage_" + rowIndex);
    var rowQuantityElement = document.getElementById("quantity_" + rowIndex);
    var rowPriceElement = document.getElementById("price_" + rowIndex);

    var rowTotalYardageElement = document.getElementById("rowYardage_" + rowIndex);
    var rowTotalPriceElement = document.getElementById("rowPrice_" + rowIndex);


        if (!isNaN(rowYardageElement.value) && !isNaN(rowQuantityElement.value)) {
        rowTotalYardageElement.innerText = rowYardageElement.value * rowQuantityElement.value;
    };

    if (!isNaN(rowPriceElement.value) && !isNaN(rowQuantityElement.value)) {
        rowTotalPriceElement.innerText = rowPriceElement.value * rowQuantityElement.value;
    };
};
YarnCalculator.ProjectCalculator.AddNewRow = function () {
     var rowTemplateElement = document.getElementById("row_0");
   
};
//-- end
$(document).ready(function () {
    if (document.getElementById("KnittingNeedleSizesChart")) {
        YarnCalculator.NeedleHookConversionChartTableRows("KnittingNeedleSizesChart", true, false, true);
    }
    if (document.getElementById("CrochetHookSizesChart")) {
        YarnCalculator.NeedleHookConversionChartTableRows("CrochetHookSizesChart", false, true, true);
    }
    if (document.getElementById("NeedleHookSizesChart")) {
        YarnCalculator.NeedleHookConversionChartTableRows("NeedleHookSizesChart", true, true);
    }

    YarnCalculator.YarnWeights.forEach(function (value, index) {
        var inputForThicknessesSelectionList = document.getElementById("thicknesses");
        if (inputForThicknessesSelectionList) {
            inputForThicknessesSelectionList.options[inputForThicknessesSelectionList.options.length] = new Option(value.WeightCode + '-' + value.WeightDescription, value.WeightCode);
        }

    });
});