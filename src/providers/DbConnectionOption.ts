import { ConnectionOptions } from "typeorm";

export const connectionOptions: ConnectionOptions = {
     name: `default`,
     type: "mongodb",
     host: "localhost",
     port: 27017,
     database: "sharetube",
     synchronize: true,
     logging: true,
    // This causes problems with minification since there's no longer a directory structure
     entities: []
}