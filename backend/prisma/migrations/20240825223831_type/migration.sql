/*
  Warnings:

  - Added the required column `id_type` to the `trips` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_type" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_trips" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_type" INTEGER NOT NULL,
    "destine" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "start_date" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "trips_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_trips" ("createdAt", "days", "destine", "id", "image", "location", "price", "start_date", "updatedAt") SELECT "createdAt", "days", "destine", "id", "image", "location", "price", "start_date", "updatedAt" FROM "trips";
DROP TABLE "trips";
ALTER TABLE "new_trips" RENAME TO "trips";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
