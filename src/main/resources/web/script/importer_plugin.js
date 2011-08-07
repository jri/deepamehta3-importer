function importer_plugin() {

    // ------------------------------------------------------------------------------------------------ Overriding Hooks

    this.init = function() {
        dm4c.toolbar.special_menu.add_item({label: "Import...", handler: do_import})
    }

    // ----------------------------------------------------------------------------------------------- Private Functions

    function do_import() {
        dm4c.upload_dialog.show("deepamehta-importer.start", show_result)
    }

    function show_result(result) {
        alert("import result=" + JSON.stringify(result))
    }
}
