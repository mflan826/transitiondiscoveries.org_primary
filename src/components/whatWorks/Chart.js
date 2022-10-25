import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Legend,
  Area,
  Bar,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Text,
} from "recharts";

import './charts.css'

const Chart = (props) => {
  const renderCustomAxisTick = ({ x, y, payload }) => {
    console.log('1111','dd',x,y)
    return (
      <g transform={`translate(${x},${y})`}>
        <Text
          dy={10}
          className={'scaleXaxis'}
          fontSize={13}
          textAnchor="middle"
          verticalAnchor="start"
          width={10}
        >
          {payload.value}
        </Text>
      </g>
    );
  };
  return (
    <ResponsiveContainer width="95%" height={400} >
      <ComposedChart data={props.data}>
        <XAxis
          dataKey="name"
          tick={renderCustomAxisTick}
          height={80}
          interval={0}
        />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Area
          type="monotone"
          dataKey="ALL_sdev"
          fill="#B4E5A0"
          stroke="#B4E5A0"
        />
        <Line type="monotone" dataKey="ALL_QIS" stroke="#000000" />
        <Area
          type="monotone"
          dataKey="FAMILY_sdev"
          fill="#B4E5A0"
          stroke="#B4E5A0"
        />
        <Line type="monotone" dataKey="FAMILY_QIS" stroke="#000000" />
        <Area
          type="monotone"
          dataKey="YOUTH_sdev"
          fill="#B4E5A0"
          stroke="#B4E5A0"
        />
        <Line type="monotone" dataKey="YOUTH_QIS" stroke="#000000" />
        <Area
          type="monotone"
          dataKey="SH_sdev"
          fill="#B4E5A0"
          stroke="#B4E5A0"
        />
        <Line type="monotone" dataKey="SH_QIS" stroke="#000000" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
