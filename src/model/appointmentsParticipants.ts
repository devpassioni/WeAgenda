
export interface appointmentsParticipants{
    id: string,
    appointment_id: string,
    user_id: string,
    status: "Confirmed" | "Pending" | "Declined",
    suggest_time?: string,
}