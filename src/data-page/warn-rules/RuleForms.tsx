import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface Iprops {
    open: boolean;
    setOpen: (f: boolean) => void;
}

function RuleForms(props: Iprops) {
    const { open, setOpen } = props;

    return (
        <Modal
            title="告警规则"
            visible={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
}

export default RuleForms;
