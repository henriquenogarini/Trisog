-- CreateTable
CREATE TABLE "triptype" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_trip" INTEGER NOT NULL,
    "id_type" INTEGER NOT NULL,
    CONSTRAINT "triptype_id_trip_fkey" FOREIGN KEY ("id_trip") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "triptype_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
