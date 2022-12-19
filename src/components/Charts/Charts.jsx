import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    YAxis,
    XAxis,
    Tooltip,
    Bar,
    Label,
    LabelList,
    Cell,
} from 'recharts';

import useResizeScreen from 'shared/hooks/useResizeScreen';

import s from './Charts.module.scss'

const Charts = ({ chartdata: data }) => {
    const { isMobile } = useResizeScreen()

    const renderCustomizedLabelName = (props) => {
        const { x, y, width, value } = props

        return (<g className={s.custom_text}>
            <text x={x} y={y - 10} dominantBaseline="middle">{value} </text>
        </g>)
    }

    const renderCustomizedLabel = (props) => {
        console.log(props);
        const { x, y, width, value } = props

        if (isMobile) {
            return (<g className={s.custom_text} >
                <text x={x + 60 + (width / 2)} y={y - 10} dominantBaseline="middle">{`${value} UAH`} </text>
            </g >)
        }

        return (<g className={s.custom_text}>
            <text x={x + width / 1.5} y={y - 20} textAnchor="middle" dominantBaseline="middle">{`${value} UAH`} </text>
        </g>)
    }
    const renderCustomizedAxisTick = (props) => {
        const { x, y, payload } = props
        if (isMobile) {
            return (<g transform={`translate(${x},${y})`} className={s.custom_text}>
                <text x={7} y={0} dy={-20} dominantBaseline="middle" fill="#666">{payload.value} </text>
            </g>)
        }

        return (<g transform={`translate(${x},${y})`} className={s.custom_text}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">{payload.value} </text>
        </g>)
    }

    const resizeHights = data?.length * 50
    if (isMobile) {
        return (
            <ResponsiveContainer maxWidth='100%' height={resizeHights}>
                <BarChart data={data} layout='vertical' maxBarSize={18} >
                    <XAxis type='number' hide axisLine={false} tickLine={false} />
                    <YAxis hide type="category" dataKey="name" tick={renderCustomizedAxisTick} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Bar dataKey="price"  >
                        {data.map((entry, index) => (

                            <Cell
                                key={`${index}-cell`}
                                fill={index % 3 ? '#FFDAC0' : '#FF751D'}
                                radius={[0, 10, 10, 0]}
                            />

                        ))}

                        <LabelList dataKey='name' fill='#52555F' content={renderCustomizedLabelName} />
                        <LabelList dataKey='price' fill='#52555F' content={renderCustomizedLabel} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer >
        );
    }
    return (
        <ResponsiveContainer width="100%" height="100%" >
            <BarChart data={data} >
                <CartesianGrid vertical={false} stroke='#F5F6FB' horizontalPoints={[]} y={38} />
                <XAxis tick={renderCustomizedAxisTick} axisLine={false} tickLine={false} dataKey="name"  >
                    <Label />
                </XAxis>
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="price" maxBarSize={38} >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={index % 3 ? '#FFDAC0' : '#FF751D'}
                            radius={[10, 10, 0, 0]}
                        />
                    ))}
                    <LabelList dataKey='price' position="top" fill='#52555F' content={renderCustomizedLabel} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Charts;
