/*
  Warnings:

  - You are about to drop the column `postedById` on the `JobListing` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_postedById_fkey";

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "postedById";
