$(document).ready(function(){
    $(".productList2").hide()
    $(".btnOne").click(function(){
        $(".btnOne").addClass("active")
        $(".btnTwo").removeClass("active")
        $(".productList1").show()
        $(".productList2").hide()
    })

    $(".btnTwo").click(function(){
        $(".btnTwo").addClass("active")
        $(".btnOne").removeClass("active")
        $(".productList2").css("opacity","1")
        $(".productList2").show()
        $(".productList1").hide()
    })
    


})
