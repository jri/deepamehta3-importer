function dm3_importer() {

    // ------------------------------------------------------------------------------------------------ Overriding Hooks

    this.init = function() {
        dm3c.add_to_special_menu({label: "Import..."})
    }

    this.handle_special_command = function(label) {
        if (label == "Import...") {
            dm3c.show_upload_dialog("deepamehta3-importer.start", show_result)
        }
    }

    // ----------------------------------------------------------------------------------------------- Private Functions

    function show_result(result) {
        alert("import result=" + JSON.stringify(result))
    }
}
