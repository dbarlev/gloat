import React from 'react';
import { notification } from 'antd';

export const ToastSuccess = (msg) => {
    notification.success({
        description: msg,
        className: 'custom-class',
        placement: 'bottomRight'
    });
};

export const ToastCustom = (msg, icon) => {
    notification.info({
        description: msg,
        className: 'custom-class',
        icon,
        placement: 'bottomRight'
    });
};