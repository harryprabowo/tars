/**
 * Sample for Multiple Axis
 */
import * as React from 'react';
import {
    CircularGaugeComponent,
    AxesDirective,
    AxisDirective,
    PointersDirective,
    PointerDirective
} from '@syncfusion/ej2-react-circulargauge';

export default class DoubleCircularGauge extends React.Component {

    render() {
        return (<CircularGaugeComponent id='range-container' title={"TEMPERATURE (C)"}
            height='200' titleStyle={{
                color: 'red',
                size: '14px'
            }}>
            <AxesDirective>
                <AxisDirective lineStyle={{ width: 1.5, color: ' #9E9E9E' }} radius='95%' startAngle={220} endAngle={140} minimum={0} maximum={100} majorTicks={{
                    position: 'Inside',
                    width: 2, height: 10, color: '#757575'
                }} minorTicks={{
                    position: 'Inside', width: 2,
                    height: 5, color: '#757575'
                }} labelStyle={{
                    position: 'Inside', autoAngle: true,
                    hiddenLabel: 'None', font: { color: '#333333' }
                }}>
                    <PointersDirective>
                        <PointerDirective value={80} radius='100%' color='#3333ff' markerHeight={15} markerWidth={15} type='Marker' markerShape='Triangle' />
                    </PointersDirective>
                </AxisDirective>
                <AxisDirective lineStyle={{ width: 1.5, color: ' #E84011' }} radius='95%' startAngle={220} endAngle={140} minimum={0} maximum={240} majorTicks={{
                    position: 'Outside', width: 2, height: 10,
                    color: '#E84011'
                }} minorTicks={{
                    position: 'Outside', width: 2,
                    height: 5, color: '#E84011'
                }} labelStyle={{
                    position: 'Outside', autoAngle: true,
                    hiddenLabel: 'None'
                }}>
                    <PointersDirective>
                        <PointerDirective value={90} radius='100%' color='#C62E0A' markerHeight={15} markerWidth={15} type='Marker' markerShape='InvertedTriangle' />
                    </PointersDirective>
                </AxisDirective>
            </AxesDirective>
        </CircularGaugeComponent>);
    }
}