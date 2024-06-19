import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SensorChart({timestamps,sensor}) {
    return (
        <LineChart
            xAxis={[{ data: timestamps }]}
            series={[
                {
                    data: sensor,
                },
            ]}
            height={1000}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
        />
    );
}