
export interface appointments {
    id: string,
    owner_id: number,
    date: string,
    time: string,
    status: "Confirmed" | "Pending" | "Canceled",
    type_of_meeting: "On-Person" | "Remote",
    location?: string
    description?: string
}