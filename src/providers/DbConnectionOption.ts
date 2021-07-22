import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const connectionOptions: ConnectionOptions = {
     name: `default`,
     type: "mongodb",
     host: "localhost",
     port: 27017,
     database: "sharetube",
     synchronize: true,
     logging: true,
     namingStrategy: new SnakeNamingStrategy(),
    // This causes problems with minification since there's no longer a directory structure
     entities: []
}