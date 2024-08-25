-- CreateTable
CREATE TABLE "comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_trip" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "note_services" INTEGER NOT NULL,
    "note_prices" INTEGER NOT NULL,
    "note_locations" INTEGER NOT NULL,
    "note_food" INTEGER NOT NULL,
    "note_amenities" INTEGER NOT NULL,
    "note_comfort" INTEGER NOT NULL,
    CONSTRAINT "comments_id_trip_fkey" FOREIGN KEY ("id_trip") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
