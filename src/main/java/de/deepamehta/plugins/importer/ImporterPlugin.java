package de.deepamehta.plugins.importer;

import de.deepamehta.core.model.ClientContext;
import de.deepamehta.core.model.CommandParams;
import de.deepamehta.core.model.CommandResult;
import de.deepamehta.core.service.Plugin;
import de.deepamehta.core.util.UploadedFile;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;

import java.util.logging.Logger;



public class ImporterPlugin extends Plugin {

    // ---------------------------------------------------------------------------------------------- Instance Variables

    private Logger logger = Logger.getLogger(getClass().getName());

    // -------------------------------------------------------------------------------------------------- Public Methods



    // ************************
    // *** Overriding Hooks ***
    // ************************



    @Override
    public CommandResult executeCommandHook(String command, CommandParams params, ClientContext clientContext) {
        if (command.equals("deepamehta3-importer.start")) {
            UploadedFile file = null;
            try {
                file = params.getFile("file");
                logger.info("### Importing " + file);
                importFile(file);
                return new CommandResult("message", "OK");
            } catch (Exception e) {
                throw new RuntimeException("Importing " + file + " failed", e);
            }
        }
        return null;
    }

    // ------------------------------------------------------------------------------------------------- Private Methods

    private void importFile(UploadedFile file) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
        StringBuilder builder = new StringBuilder();
        builder.append(reader.readLine() + "\n");
        builder.append(reader.readLine() + "\n");
        builder.append(reader.readLine() + "\n");
        builder.append(reader.readLine() + "\n");
        builder.append(reader.readLine() + "\n");
        logger.info("### First 5 lines:\n" + builder);
    }
}
