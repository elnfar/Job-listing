/*
  Warnings:

  - You are about to drop the column `applyUrl` on the `JobListing` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `JobListing` table. All the data in the column will be lost.
  - You are about to drop the column `experienceLevel` on the `JobListing` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `JobListing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "applyUrl",
DROP COLUMN "description",
DROP COLUMN "experienceLevel",
DROP COLUMN "shortDescription";
