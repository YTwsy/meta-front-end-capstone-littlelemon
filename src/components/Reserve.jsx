import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select } from 'antd';
const { Option } = Select;

const Reserve = ( props ) => {
    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")
    const [form] = Form.useForm();

    const handleSubmit = (e) => {
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical" style={{width:'200px'}}>
            <Form.Item
                label="Choose Date"
                name="date"
                rules={[{ required: true, message: 'Please select a date!' }]}
            >
                <DatePicker onChange={(value)=>handleChange(value)} />
            </Form.Item>

            <Form.Item
                label="Choose Time"
                name="time"
                rules={[{ required: true, message: 'Please select a time!' }]}
            >
                <Select onChange={(value) => setTimes(value)} placeholder="Select Times">
                    {props.availableTimes['availableTimes'].map(availableTimes => {return <Option key={availableTimes}>{availableTimes}</Option>})}
                </Select>
            </Form.Item>

            <Form.Item
                label="Number of Guests"
                name="guests"
                rules={[{ required: true, message: 'Please input the number of guests!', min: 1, max: 10 }]}
            >
                <Input onChange={(value)=> setGuests(value)} type="number" placeholder="Enter number of guests" />
            </Form.Item>

            <Form.Item
                label="Occasion"
                name="occasion"
                rules={[{ required: true, message: 'Please select an occasion!' }]}
            >
                <Select onChange={(value) => setOccasion(value)} placeholder="Select an occasion">
                    <Option value="Birthday">Birthday</Option>
                    <Option value="Anniversary">Anniversary</Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Make Your Reservation
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Reserve;
