
$(document).ready(function() {
	updateContentPane();
    function generateOneBlock(width, offset, isGreen) {
        var color = "#27ae60";
        if(!isGreen) color = "#2980b9";
        var returnStr = "<div class='colorBlocks' ";
        returnStr += " style = 'position:absolute; height:100%; top: 0; background:" + color + "; width:" + width + "%; left:" + offset + "%'";
        returnStr += "></div>";
        return returnStr;
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
	function constructKnotMember(partner, title, goal, enddate) {
		var returnStr = "<article class='knotMember' data-knots='[]' data-goal='"+ goal +"'>";
		returnStr += "<h3>" + title + "<BR><small>with " + partner + "</small></h3>";
        returnStr += "<span class='days'>" + daysLeft(enddate) + " days left</span>";
		returnStr += "<section class='memberDetail'>";
        returnStr += "<input type='range' class='logSlider' min=0/>";
        returnStr += "<div class='rangeVal'>0</div>";
        returnStr += " <button class='logConfirm'>ok</button>"
        returnStr += "</section>";
        // returnStr += "<div class='test'></div>";
        // returnStr += "<div class='test2'></div>";
        // returnStr += "<div class='test3'></div>";
        returnStr += "</article>";
		return returnStr;
	}
    function updateSlider(knot) {
        var percentages = $(knot).data("knots");
        var sum = 0;
        for(var i = 0; i < percentages.length; i++) {
            sum += percentages[i];
        }
        var goal = $(knot).data("goal");
        var max = Math.floor(goal - (goal * (sum/100)));
        $(knot).find('.logSlider').attr('max', max);
    }
    $("#knots").on("change", ".logSlider", function() {
        var newVal = $(this).val();
        $(this).closest(".knotMember").find('.rangeVal').html(newVal);
    });
	function getKnotString() {
		var partner = $("#partnerIn").val();
		var title = $("#titleIn").val();
		var goal = $("#goalIn").val();
		var enddate = $("#enddateIn").val();
		return constructKnotMember(partner,title,goal,enddate);
	}
	function updateContentPane() {
		var currentKnots = sessionStorage.getItem("knots");
		$("#knots").html(currentKnots);
	    $(".knotMember").each(function() {
            addBarsToKnot(this);
            updateSlider(this);
        });
    }
    $("#addKnotPane").on("click", ".addKnot",function(e){
    	var formStr = "<section id='addForm'><h2>Add New Knot</h2><a id='hideAddPane' href='#'>hide</a><form> Partner: <input id='partnerIn' type='text'></input><BR> Title: <input id='titleIn' type='text'></input><BR> Goal: <input id='goalIn' type='text'></input><BR> End date: <input id='enddateIn' data-format='yyyy-MM-dd' type='date'></input> <button id='addBtn'> add </button></form></section>";
        e.preventDefault();
        $(this).closest("#addKnotPane").append(formStr);
        $(this).remove();
    });
    $("#addKnotPane").on("click", "#hideAddPane", function(e) {
    	var buttonStr = "<a href=''><button class='addKnot'> <i class='fa fa-plus-circle'></i> Add Knot</button></a>";
    	e.preventDefault();
    	$(this).closest("#addKnotPane").append(buttonStr);
    	$(this).closest("#addForm").remove();
    });
    $("#addKnotPane").on("click", "#addBtn", function(e) {
    	e.preventDefault();
    	var newKnotString = getKnotString();
    	var allKnots = sessionStorage.getItem("knots");
    	sessionStorage.setItem("knots", newKnotString + allKnots);
    	updateContentPane();
    });
    $("#knots").on("click", ".logConfirm", function(e) {
        var knot = $(this).closest(".knotMember");
        var goal = knot.data('goal');
        var newVal = knot.find(".rangeVal").html();
        var newAsPercent = Math.floor(newVal/goal * 100);

        var oldArr = knot.data('knots');
        oldArr.push(newAsPercent);
        $(knot).attr("data-knots", oldArr);
        updateSlider(knot);
        addBarsToKnot(knot);
    });
    $("#knots").on("click", ".knotMember", function(e) {
        e.preventDefault();
        
        var show = $(this).hasClass('activeMember');
        if (show) {
          $(this).removeClass('activeMember')
          $(this).find(".memberDetail").slideUp('slow');
        }
        else {
          $(this).slideDown('slow', function() {
            $(this).addClass('activeMember');
            $(this).find(".memberDetail").slideDown();
          });
        }
    });

});