
$(document).ready(function() {

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('.modal-trigger').leanModal();
    //var seedData = '<article class="knotMember" data-knots="[13,20,6]" data-goal="15"><h3>Read for fun<br><small>with Mike</small></h3><span class="days">47 days left</span><section class="memberDetail" style="display: none;"><input type="range" class="logSlider" min="0/" max="9"><div class="rangeVal">1</div> <button class="logConfirm">ok</button></section><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:13%; left:0%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:20%; left:13%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:6%; left:33%"></div></article><article class="knotMember" data-knots="[20,40]" data-goal="5"><h3>Swim<br><small>with Wending</small></h3><span class="days">47 days left</span><section class="memberDetail" style="display: none;"><input type="range" class="logSlider" min="0/" max="2"><div class="rangeVal">2</div> <button class="logConfirm">ok</button></section><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:20%; left:0%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:40%; left:20%"></div></article><article class="knotMember" data-knots="[15,30,15,5,20]" data-goal="20"><h3>Morning Run<br><small>with John</small></h3><span class="days">33 days left</span><section class="memberDetail" style="display: block;"><input type="range" class="logSlider" min="0/" max="3"><div class="rangeVal">4</div> <button class="logConfirm">ok</button></section><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:15%; left:0%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:30%; left:15%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:15%; left:45%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:5%; left:60%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:20%; left:65%"></div></article>';
	var orig = localStorage.getItem("knots");
    //if(!orig) localStorage.setItem("knots", seedData);

 //    var seedData= '<article class="knotMember" data-knots="[13,20,6]" data-goal="15"><h3>Read for fun<br><small>with Mike</small></h3><span class="days">47 days left</span><section class="memberDetail" style="display: none;"><input type="range" class="logSlider" min="0/" max="9"><div class="rangeVal">1</div> <button class="logConfirm">ok</button></section><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:13%; left:0%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:20%; left:13%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:6%; left:33%"></div></article><article class="knotMember" data-knots="[20,40]" data-goal="5"><h3>Swim<br><small>with Wending</small></h3><span class="days">47 days left</span><section class="memberDetail" style="display: none;"><input type="range" class="logSlider" min="0/" max="2"><div class="rangeVal">2</div> <button class="logConfirm">ok</button></section><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:20%; left:0%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:40%; left:20%"></div></article><article class="knotMember" data-knots="[15,30,15,5,20]" data-goal="20"><h3>Morning Run<br><small>with John</small></h3><span class="days">33 days left</span><section class="memberDetail" style="display: block;"><input type="range" class="logSlider" min="0/" max="3"><div class="rangeVal">4</div> <button class="logConfirm">ok</button></section><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:15%; left:0%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:30%; left:15%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:15%; left:45%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#27ae60; width:5%; left:60%"></div><div class="colorBlocks" style="position:absolute; height:100%; top: 0; background:#2980b9; width:20%; left:65%"></div></article>';
	// var orig = sessionStorage.getItem("knots");
 //    if(!orig) sessionStorage.setItem("knots", seedData);
    $('.tooltipped').tooltip({delay: 50});
    initBoard();
    function generateOneBlock(width, offset, isGreen) {
        var color = "#27ae60";
        if(!isGreen) color = "#2980b9";
        var returnStr = "<div class='colorBlocks' ";
        returnStr += " style = 'position:absolute; height:100%; top: 0; background:" + color + "; width:" + width + "%; left:" + offset + "%'";
        returnStr += "></div>";
        return returnStr;
    }
    function backup() {
        var cur = $("#knots").html();
        console.log(cur);
        localStorage.setItem("knots", cur);
    }
    function restore() {
        
        var knotHTML = localStorage.getItem("knots");
        if(knotHTML != "") $("#knots").html(knotHTML);
    }
    function generateGrayBlock(width, offset){
        var color = "#95a5a6"
        var ret = "<div class='grayBlock' ";
        ret += " style= 'position: absolute; height: 100%; top: 0; background: " + color + "; width:" + width + "%; left:" + offset + "%'";
        ret += ">";
        ret +="</div>";
        ret += "<div class='yellowBlock' style='left:" + offset + "%'></div>"
        ret += "<div class='redBlock'></div>"

        return{
            color: "#95a5a6",
            width: "" + width + "%",
            offset: "" + offset+"%",
            firstString: ret
        };
        // return ret;
    }
    function addMotivation(knot) {
        var name = $(knot).children(".pName");
        $(name).addClass("needsMotivation");
        $(name).addClass("tooltipped");
        $(name).addClass("animated").addClass("infinite").addClass("pulse");
        $(name).attr("data-position", "bottom");
        $(name).attr("data-delay", "50");
        // $(name).attr("data-tooltip", "Click to motivate!");
        $('.tooltipped').tooltip({delay: 50});
    }
    function removeMotivation(knot) {
        var name = $(knot).children(".pName");
        $(name).removeClass("needsMotivation");
        $(name).removeClass("tooltipped");
        $(name).removeClass("animated").removeClass("infinite").removeClass("pulse");
        $(name).attr("data-position", "");
        $(name).attr("data-delay", "");
        // $(name).attr("data-tooltip", "");
    }

    function daysLeft(enddate) {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date();
        var secondDate = new Date(enddate);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
        return diffDays;
    }
    function addBarsToKnot(knot) {
        $(knot).find('.colorBlocks').remove();
        var percentages = $(knot).data("knots");
        var offset = 0;
        for(var i = 0; i < percentages.length; i++) {
            var curPercent = percentages[i];
            var blockToAdd = generateOneBlock(curPercent,offset,i%2==1);
            $(knot).append(blockToAdd);
            offset += curPercent;
        }
    }
    function updateSliderValue(knot) {
        var logVal = $(knot).children(".memberDetail").children("p").children(".logSlider").val();
        $(knot).children(".memberDetail").children("p").children(".rangeValue").val(logVal) ;
    }
	function constructKnotMember(partner, title, goal, enddate) {
		var returnStr = "<article class='knotMember bar' data-blue='0', data-green='0' data-goal='"+ goal +"' data-partner='"+partner+ "' data-activity='" + title + "'>";
		returnStr += "<h3 class='aTitle'>" + title + "<i class='fa fa-bullhorn motivation'></i><BR></h3>";
        returnStr += "<h3 class='yName'>YOU</h3>" ;
        returnStr += "<a href='#modal2' class='pName'>"+partner+"</a>" ;
        // returnStr += "<i class='fa fa-bullhorn fa-4x motivation'></i>"
        //returnStr += "<span class='days'>" + daysLeft(enddate) + " days left</span>";
		//returnStr += "<div class='encourage'><span class='fa fa-child fa-3x encourageIcon'></span></div>"
        returnStr += "<section class='memberDetail'>";
        returnStr += "<p class='range-field'><input type='range' class='logSlider' min=0/><p>";
        returnStr += "<input type='text' class='rangeValue' />";
        returnStr += " <button class='logConfirm waves-effect waves-light btn'>ok</button>"
        returnStr += "</section>";
        // returnStr += "<div class='test'></div>";
        // returnStr += "<div class='test2'></div>";
        // returnStr += "<div class='test3'></div>";
        returnStr += "</article>";
		return returnStr;
	}

    function createMiddleBlock(knot){   
        var grayBlock = generateGrayBlock(100, 0);
        $(knot).append(grayBlock.firstString);
    }
    // function createMiddleBlock(knot, isNew){
    //     $(knot).find('.middleBlocks').remove();
    //     var bluePercentage = $(knot).data("blue");
    //     var greenPercentage = $(knot).data("green");
    //     //var width = 100 - (bluePercentage + greenPercentage);
    //     var width = 100 - bluePercentage-greenPercentage;
    //     width = width > 0? width: 0;

    //     var grayBlockAttrs = generateGrayBlock(width, bluePercentage );
    //     // grayBlock = generateGrayBlock(15, bluePercentage );
    //     console.log(grayBlockAttrs);
    //     if ($(knot).children(".grayBlock").length){
    //         console.log("there is a grayBlock")
    //         $(knot).children(".grayBlock").css({
    //             "background-color": grayBlockAttrs.color,
    //             "width" : grayBlockAttrs.width + "%",
    //             "left": grayBlockAttrs.offset
    //         });
    //         $(knot).children(".yellowBlock").css({
    //             "left": grayBlockAttrs.offset,
    //             "width": 0
    //         });
    //         $(knot).children(".redBlock").css({
    //             "left": grayBlockAttrs.offset,
    //             "width": 0
    //         });
    //         if(isNew) {
    //             $(knot).addClass("shouldAnimate");
    //             //$(knot).data("green", (greenPercentage + Math.floor(Math.random() * 8 + 1)));
    //             var knat = knot;
    //             var newgreen = parseFloat($(knat).attr("data-green")) + Math.floor(Math.random() * 98 + 2);
    //             $(knat).attr("data-green", "" + parseFloat(newgreen) );
    //             var newwidth = 100 - $(knat).attr("data-green")- $(knat).attr("data-blue");
    //             $(knat).children(".grayBlock").attr(newwidth + "%");
    //             $(knat).children(".grayBlock").delay(500).stop().animate({
    //                 width: newwidth + "%"
    //             });
                
    //         }
            
    //     }
    //     else{
    //         $(knot).append(grayBlockAttrs.firstString);
    //     }

    // }

    function partnerAdded(knot) {
        removeMotivation(knot);
        checkIfCompleted(knot);
    }

    function checkIfCompleted(knot) {
        if(parseFloat($(knot).attr("data-blue")) + parseFloat($(knot).attr("data-green")) >= 100) {
            $(knot).remove().insertAfter($("#knots .bar:last")).addClass('completed');
            toast("Congrats on completing " + knot.data('activity') + " with " + knot.data('partner'), 5000);
            $(knot).html("");
            var headingTxt = "<h3 class='completedTxt'>" + knot.data('activity') + " with " + knot.data('partner') + "</h3>";
            $(knot).html(headingTxt);
            var placeholderString = "<div class='placeholder bar'><a href='#' class='addKnotText addKnot'>+ Add Knot</a></div>";
            $("#knots").prepend(placeholderString);
        }
        backup();
    }
    function adjustMiddleGrayBar(knot, width, offset, oldGreen) {
        var greyBar = $(knot).children(".grayBlock");
        //first illustrate user input
        $(knot).attr("data-blue", offset);
        $(greyBar).css({"width" : width - offset + "%"});
        $(greyBar).animate({
            "left" : offset + "%"
            
        },1000);
        //then illustrate "faked" animation

        addMotivation(knot);
        var newgreen = oldGreen + Math.floor(Math.random() * 30 + 2);
        if(offset - newgreen <= 0 ) {
         //   removeMotivation(knot);
        }
        if(offset - oldGreen <= -10){
            setTimeout(function(){
                toast(knot.data('partner') + ' is trying to motivate you!', 5000);
            }, 1000);
        }
        $(knot).attr("data-green", newgreen);
        $(greyBar).stop(true,true).delay(4000).animate({
            "width" : 100 - newgreen - offset + "%"
        },1000, function(){ partnerAdded(knot) });
    }
    function updateSlider(knot) {
        var sum = parseFloat($(knot).attr("data-blue")) + parseFloat($(knot).attr("data-green"));
        var goal = $(knot).data("goal");
        var max = Math.floor(goal - (goal * (sum/100)));
        $(knot).find('.logSlider').attr('max', max);
    }
    $("#knots").on("change", ".logSlider", function() {
        var newVal = $(this).val();
        $(this).closest(".knotMember").find('.rangeVal').html(newVal);
        
    });
    $("#knots").on("change input", ".memberDetail p .rangeValue", function(e) {
        var knot = $(this).closest(".knotMember");
        var logVal = $(knot).children(".memberDetail").children("p").children(".rangeValue").val();
        $(knot).children(".memberDetail").children("p").children(".logSlider").val(logVal);
        $(knot).children(".memberDetail").children("p").children(".logSlider").trigger("change");
    });
    $("#knots").on("change input", ".logSlider", function(e) {
        var curr = $(this).val();
        var max = $(this).attr("max");
        var knot = $(this).closest(".knotMember");
        var mine = $(this).closest(".knotMember").attr("data-blue") * max / 100.0;
        var partner = max - $(this).closest(".knotMember").attr("data-green") * max / 100.0;
        
        // console.log(mine);
        // console.log(partner);

        if (curr < mine) {
            $(this).val(parseInt(mine));
            e.preventDefault();
            return false;
        }

        if (curr > partner) {
            $(this).val(parseInt(partner));
            e.preventDefault();
            return false;
        }

        var bluePercentage = $(this).closest(".knotMember").attr("data-blue");
        var greenPercentage = $(this).closest(".knotMember").attr("data-green");
        //var width = 100 - (bluePercentage + greenPercentage);

        width = 1.0*(curr - mine)/max;
        $(this).closest(".knotMember").find(".yellowBlock").css({"left":bluePercentage+"%"});
        $(this).closest(".knotMember").find(".yellowBlock").width(width*100 +"%");
        var redWidth = width*100;
        if (curr > max/2) {
            curr = max/2 + (curr-max/2)*0.25;
            width = 1.0*(curr-mine)/max;
        }
        $(this).closest(".knotMember").find(".redBlock").css({"left":bluePercentage+"%"});
        $(this).closest(".knotMember").find(".redBlock").width(width*100 +"%");
        console.log(bluePercentage);
        console.log(width);
        updateSliderValue(knot);
    });

	function getKnotString() {
		var partner = $("#partnerIn").val();
		var title = $("#titleIn").val();
		var goal = $("#goalIn").val();
		var enddate = $("#enddateIn").val();
		return constructKnotMember(partner,title,goal,enddate);
	}
    function addPlaceHolders(numKnots) {
        $(".placeholder").remove();
        var completedD = $("#knots").children(".completed:first");
        var firstKnot = $("#knots").children(".knotMember:last");
        var numPlaceholders = 5 - numKnots;
        var placeholderString = "<div class='placeholder bar'><a href='#' class='addKnotText addKnot'>+ Add Knot</a></div>";
    
        for(var i = 1; i <= numPlaceholders; i++) {
            if(completedD.length > 0) {
                $(placeholderString).insertBefore($(completedD));
                console.log("blahD");
            }
            else if(firstKnot.length > 0) {
                $(placeholderString).insertAfter($(firstKnot));
                console.log("blah");
            }
            else {
                $("#knots").append(placeholderString);
            }
        }
        
    }
    
    function initBoard() {
        var currentKnots = localStorage.getItem("knots");
        console.log(currentKnots);
        if(currentKnots != "") $("#knots").html(currentKnots);
        if(currentKnots == null) localStorage.setItem("knots","");
        var numberOfKnots = $(".knotMember").length;
        if(currentKnots == "") addPlaceHolders(numberOfKnots);
        if(currentKnots) restore();
        $('.tooltipped').tooltip({delay: 50});
    }
	function updateContentPane(isNewLog) {
		var currentKnots = localStorage.getItem("knots");
		$("#knots").html(currentKnots);
	    $(".knotMember").each(function() {
            // addBarsToKnot(this);
            //createMiddleBlock(this, isNewLog);
            updateSlider(this);
            $(this).find(".memberDetail").slideUp();
        });
        var numberOfKnots = $(".knotMember").length;
        addPlaceHolders(numberOfKnots);

    }
    $("#knots").on("click", ".addKnot",function(e){
        $('#modal1').openModal();
    });
    $("#knots").on("click",".placeholder",function(e){
        $('#modal1').openModal();
    });
    $("#knots").on("click",".needsMotivation",function(e){
        $('#modal2').openModal();
    });
    $("#modal2").on("click",".senderBtn",function(e){
        toast("Message successfully sent!",3000);
    });
    $("#knots").on("click", ".addKnot",function(e){
    	//var formStr = "<section class='row' id='addForm'><h2>Add New Knot</h2><a id='hideAddPane' href='#'>hide</a><form class='col s12'><div class='row'> <div class='input-field col s6'> <input id='partnerIn' type='text'></input><label for='partnerIn'>Partner</label></div><div class='input-field col s6'> <input id='titleIn' type='text'></input><label for='titleIn'>Activity</label></div></div> <div class='input-field col s12'><input id='goalIn' type='text'></input><label for='goalIn'>Target Quantity</label> </div><div class='input-field col s12'><input id='enddateIn' type='date' class='datepicker'></input><label for='enddateIn'>End Date</label></div> <button id='addBtn'> add </button></form></section>";
        e.preventDefault();
        //$(this).closest("#addKnotPane").append(formStr);
        $("#addForm").slideDown();
        // $(this).remove();
    });
    $("#addKnotPane").on("click", "#hideAddPane", function(e) {
    	var buttonStr = "<a href=''><button class='addKnot'> <i class='fa fa-plus-circle'></i> Add Knot</button></a>";
    	e.preventDefault();
    	$(this).closest("#addKnotPane").append(buttonStr);
    	$("#addForm").slideUp();
    });
    function addNewKnot(knotStr) {
        var ap = $(knotStr);
        $("#knots").prepend(ap)
        backup();
        return ap;
    }
    
    $("#contentPane").on("click", "#addBtn", function(e) {
    	e.preventDefault();
    	var newKnotString = getKnotString();
    	//updateContentPane(false);
        var newKnot = addNewKnot(newKnotString);
        var numberOfKnots = $(".knotMember").length - $(".completed").length;
        
        createMiddleBlock(newKnot);
        updateSlider(newKnot);
        addPlaceHolders(numberOfKnots);
        backup();

        //var buttonStr = "<a href=''><button class='addKnot'> <i class='fa fa-plus-circle'></i> Add Knot</button></a>";
        //e.preventDefault();
        //$(this).closest("#addKnotPane").append(buttonStr);
        $('#modal1').closeModal();
    });
    $("#knots").on("click", ".motivation", function(e) {
        e.stopPropagation();
        $(this).find(".memberDetail").slideUp();
        // alert("Motivation Sent!");
        $('#modal2').openModal();
    });
    $("#knots").on("click", ".logConfirm", function(e) {
        e.stopPropagation();
        var knot = $(this).closest(".knotMember");
        var goal = knot.data('goal');
  //      var newVal = knot.find(".rangeVal").html();
        var newVal = knot.find(".logSlider").val();
        //really ghetto shit over here, LT
        if (newVal > goal/2) {
            newVal = goal/2 + (newVal-goal/2)*0.25;
        }
        console.log(newVal);
        var newAsPercent = Math.floor(newVal/goal * 100);

        var bluePercentage = parseFloat(knot.attr('data-blue'));
        var greenPercentage = parseFloat(knot.attr('data-green'));
        var motivation = knot.find(".motivation");
        console.log(newAsPercent-greenPercentage);
        if(newAsPercent-greenPercentage >= 10){
             motivation.css({"display":"inline"});
        //     motivation.css({"cursor": "pointer"});
         //   addMotivation(knot);
        }else{
             motivation.css({"display":"none"});
      //       motivation.css({"cursor": ""});
          //  removeMotivation(knot);
        }
        
        $(knot).attr("data-blue", ""+(newAsPercent));
        bluePercentage = parseFloat(knot.attr('data-blue'));

        //$(knot).data("blue", (bluePercentage+newAsPercent));
        
        // addBarsToKnot(knot);
        
        adjustMiddleGrayBar(knot, 100-greenPercentage,newAsPercent, greenPercentage);
        $(this).closest(".knotMember").find(".yellowBlock").width(0);
        $(this).closest(".knotMember").find(".redBlock").width(0);
        backup();
        $(this).closest(".knotMember").find(".memberDetail").slideUp();
        //updateContentPane(false);
    });

    $("#knots").on("click", ".knotMember", function(e) {
        var v = $(this).attr("data-blue");
        $(this).find(".logSlider").val(v);
        e.preventDefault();
        // $(this).find(".memberDetail").slideDown();

    });

    $("#knots").on("mouseenter", ".knotMember", function(e) {
        $(this).find(".memberDetail").slideDown();

    });
    $("#knots").on("mouseleave", ".knotMember", function(e) {
        $(this).find(".memberDetail").slideUp();

    });


    $("#notifs").on("click", function(e) {
        $("#notifCenter").slideToggle();
    });
    
});