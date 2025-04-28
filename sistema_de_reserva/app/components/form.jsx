'use client'

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

const { Form, FormField, FormItem } = require("@/components/ui/form");

export const FormComponent = () => {
    const [success, setSuccess] = useState(false);

    const form = useForm({
        defaultValues: {
            name: "",
            date: "",
            time: "",
            number_of_people: "",
            table_number: ""
        }
    });

    async function onSubmit(values) {
        const res = await fetch("/api/create-reservation", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.ok) {
            setSuccess(true);
        } else {
            alert("Erro ao criar reserva!");
        }
    }

    const SuccessReservation = () => {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-center text-green-600">Reserva realizada com sucesso!</h1>
                
            </div>
        );
    };

    if (success) {
        return <SuccessReservation />;
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <div className="flex flex-col gap-4 w-full max-w-sm bg-gray-100 p-4 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-center">Reservar Mesa</h1>
                        <p className="text-gray-600 text-center">Preencha os dados abaixo para fazer uma reserva</p>

                        <FormField 
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <Input {...field} placeholder="Nome" className="border border-gray-300 rounded-md p-2 bg-white" />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            name="date"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <Input {...field} placeholder="Data" className="border border-gray-300 rounded-md p-2 bg-white" />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            name="time"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <Input {...field} placeholder="Horário" className="border border-gray-300 rounded-md p-2 bg-white" />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            name="number_of_people"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <Input {...field} placeholder="Número de pessoas" className="border border-gray-300 rounded-md p-2 bg-white" />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            name="table_number"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <Input {...field} placeholder="Posição da mesa" className="border border-gray-300 rounded-md p-2 bg-white" />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-center mt-4">
                            <button 
                                type="submit" 
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Fazer Reserva
                            </button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
