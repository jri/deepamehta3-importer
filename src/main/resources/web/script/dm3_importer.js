function dm3_importer() {

    // ------------------------------------------------------------------------------------------------ Overriding Hooks

    this.init = function() {
        $("#special-select").append($("<option>").text("Import..."))
    }

    this.handle_special_command = function(command) {
        if (command == "Import...") {
            dm3c.show_upload_dialog("deepamehta3-importer.start", show_result)
        }
    }

    // ----------------------------------------------------------------------------------------------- Private Functions

    function show_result(result) {
        alert("import result=" + JSON.stringify(result))
    }
}
