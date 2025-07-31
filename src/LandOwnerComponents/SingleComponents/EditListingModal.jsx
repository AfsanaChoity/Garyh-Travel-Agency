import React, { useState } from 'react';
import {
  Modal,
  Input,
  Checkbox,
  Select,
  Button,
  Form,
} from 'antd';

const { Option } = Select;

const EditListingModal = ({ visible, onCancel, onSave }) => {
  const [form] = Form.useForm();
  const [features, setFeatures] = useState(['Water', 'Wi-Fi', 'Firepit']);

  const handleFinish = (values) => {
    console.log('Form Values:', values);
    onSave(values); // or your save logic
  };

  return (
    <Modal
      title="Edit Listing"
      open={visible}
      footer={null}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          spotName: 'Sunset Forest Camp',
          address: '123 Camp road, TX  Link',
          features: ['Water', 'Wi-Fi', 'Firepit'],
          price: '$40',
          availableDate: 'June 1 - June 4',
          rvLength: '40 ft',
          status: 'Active',
        }}
        onFinish={handleFinish}
      >
        <Form.Item label="Spot Name" name="spotName">
          <Input />
        </Form.Item>

        <Form.Item label="Address/GPS" name="address">
          <Input />
        </Form.Item>

        <Form.Item label="Features" name="features">
          <Checkbox.Group>
            <Checkbox value="Water">Water</Checkbox>
            <Checkbox value="Wi-Fi">Wi-Fi</Checkbox>
            <Checkbox value="Firepit">Firepit</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="Price" name="price">
          <Input />
        </Form.Item>

        <Form.Item label="Available Date" name="availableDate">
          <Input />
        </Form.Item>

        <Form.Item label="Rv Length" name="rvLength">
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#28c840', border: 'none' }}>
              Save
            </Button>
            <Button onClick={onCancel} danger>
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditListingModal;
