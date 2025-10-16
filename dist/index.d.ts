import React from 'react';
import { ViewStyle, ViewProps, StyleProp } from 'react-native';
interface Props extends ViewStyle, ViewProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
declare const View: React.FC<Props>;
export default View;
