-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "data" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "n_people" INTEGER NOT NULL,
    "t_position" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_name_key" ON "Reserva"("name");
