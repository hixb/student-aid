import { NextResponse } from 'next/server'

import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const traineeName = searchParams.get('traineeName')
  const traineeTel = searchParams.get('traineeTel')
  const traineeStatus = searchParams.get('traineeStatus')

  try {
    if (!traineeName || !traineeTel)
      throw new Error('Pet and owner names required')
    await sql`INSERT INTO Trainee (Name, Tel, Status) VALUES (${traineeName}, ${traineeTel}, ${traineeStatus});`
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  const trainee = await sql`SELECT * FROM Trainee;`
  return NextResponse.json({ trainee }, { status: 200 })
}
