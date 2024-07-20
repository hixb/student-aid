import { NextResponse } from 'next/server'

import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
  try {
    const result
      = await sql`CREATE TABLE Trainee ( Name varchar(255), Tel varchar(255), Status varchar(255) );`
    return NextResponse.json({ result }, { status: 200 })
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
