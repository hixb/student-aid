import { NextResponse } from 'next/server'

import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    // 尝试创建表（如果不存在）
    await sql`CREATE TABLE IF NOT EXISTS Trainee (Name varchar(255), Tel varchar(255), Status varchar(255));`

    // 查询所有 Trainee 数据
    const trainees = await sql`SELECT * FROM Trainee;`

    // 返回查询结果
    return NextResponse.json(trainees.rows, { status: 200 })
  }
  catch (error) {
    // 如果发生错误，返回错误信息
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
