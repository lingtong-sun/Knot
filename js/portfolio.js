var formStr = "<form>
    Partner: <input type='text'></input>
</form>";
$(document).ready(function() {
    $(".addKnot").on("click", function(e){
        console.log("hi");
        e.preventDefault();
        $(this).closest("#addKnotPane").append(formStr);
    });
});