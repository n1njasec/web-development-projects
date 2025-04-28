import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { name, date, time, number_of_people, table_number } = body;

  try {
    const reservation = await prisma.reserva.create({
      data: {
        name,
        date,
        time,
        number_of_people: parseInt(number_of_people),
        table_number: parseInt(table_number),
      },
    });
    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating reservation' }, { status: 500 });
  }
}