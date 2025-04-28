import prisma from "@/lib/prisma";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    try {
        const reservations = await prisma.reserva.findMany({
            where: {
                date: date
            }
        });

        if (reservations.length === 0) {
            return new Response(JSON.stringify({ error: "Nenhuma reserva foi encontrada" }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify(reservations), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Erro ao buscar reservas" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}