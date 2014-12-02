
    $(document).on('change', '.joinCateAll', function ()
    {
        var chked = $(this).attr("checked") == "checked" ? true : false;
        $(this).closest(".checkbox").next().find("input[type=checkbox]").checkbox(chked?"check":"uncheck" );
    });