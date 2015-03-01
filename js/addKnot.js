
$(document).ready(function() {
	updateContentPane();
    function generateOneBlock(width, offset, isGreen) {
        var color = "#27ae60";
        if(!isGreen) color = "#2980b9";
        var returnStr = "<div ";
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
		var returnStr = "<article class='knotMember' data-knots='[20,10]'>";
		returnStr += "<h3>" + title + "<BR><small>with " + partner + "</small></h3>";
        returnStr += "<span class='days'>" + daysLeft(enddate) + " days left</span>";
		returnStr += "<section class='memberDetail'>";
        returnStr += "</section>";
        // returnStr += "<div class='test'></div>";
        // returnStr += "<div class='test2'></div>";
        // returnStr += "<div class='test3'></div>";
        returnStr += "</article>";
		return returnStr;
	}
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