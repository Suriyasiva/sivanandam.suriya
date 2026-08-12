"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

interface TechBarChartProps {
  data: { name: string; value: number }[];
}

export function TechBarChart({ data }: TechBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
        <XAxis type="number" hide domain={[0, 40]} />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: "#9CA3AF", fontSize: 12 }}
          width={100}
          axisLine={false}
          tickLine={false}
        />
        <Bar
          dataKey="value"
          fill="url(#barGradient)"
          radius={[0, 6, 6, 0]}
          barSize={20}
          isAnimationActive={false}
          activeBar={false}
        />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
