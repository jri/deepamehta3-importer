function dm3_importer() {



    /**************************************************************************************************/
    /**************************************** Overriding Hooks ****************************************/
    /**************************************************************************************************/



    this.init = function() {
        $("#special-select").append($("<option>").text("Import..."))
    }

    this.handle_special_command = function(command) {
        if (command == "Import...") {
            var result = show_upload_dialog("deepamehta3-importer.start")
            show_result(result)
        }
    }



    /************************************************************************************************/
    /**************************************** Custom Methods ****************************************/
    /************************************************************************************************/



    function show_result(result) {
    }
}
