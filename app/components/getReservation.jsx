'use client'

import { useState } from "react";

export default function GetReservation() {
    const [date, setDate] = useState("");
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    function formatDateToBR(dateString) {
        if (!dateString) return "";
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    }

    async function fetchReservations(formattedDate) {
        try {
            setError(null);
    
            const res = await fetch(`/api/view-reservation?date=${formattedDate}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (!res.ok) {
                throw new Error("Nenhuma reserva encontrada para esta data");
            }
    
            const data = await res.json();
            setReservations(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
            setReservations([]);
        }
    }

    function handleSearch() {
        if (date) {
            const formattedDate = formatDateToBR(date);
            fetchReservations(formattedDate);
        }
    }

    function handleClear() {
        setReservations([]);
        setDate("");
    }

    return (
        <div className="flex flex-col items-center p-4 mt-4 min-h-screen">
            <h1 className="text-xl font-bold text-center">Consultar reservas</h1>
            <div className="flex flex-col items-center mt-4">
            <p className="font-bold">Insira a data:</p>
                <div>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2"
                    />
                    <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">Buscar</button>
                    <button onClick={handleClear} className="ml-2 p-2 bg-red-500 text-white">Limpar</button>
                </div>
            </div>
            {error && <div className="text-red-500 mt-4">Erro: {error}</div>}

            {reservations.length > 0 && (
                <div className="mt-4 w-full max-w-md p-4 border rounded-lg shadow-lg bg-white">
                    <h2>Reservas do dia {formatDateToBR(date)}</h2>
                    <ul>
                        {reservations.map((reservation) => (
                            <li key={reservation.id} className="border-b py-2">
                                <p>Nome: {reservation.name}</p>
                                <p>Hora: {reservation.time}</p>
                                <p>Quantidade de Pessoas: {reservation.number_of_people}</p>
                                <p>Mesa: {reservation.table_number}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
