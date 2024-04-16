import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconCustom = ({
    color,
    name,
    focused,
    size = 24,
}: {
    focused?: boolean;
    color?: string;
    size?: number;
    name: string;
}) => {
    return <Icon name={name} size={size} color={color} />;
};

export default IconCustom;