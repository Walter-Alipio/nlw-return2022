import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps, 
    ActivityIndicator 
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps{
    isLoadin: boolean;
}

export function Button({isLoadin, ...rest}: Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    {...rest}
    >
        {
            isLoadin?
            <ActivityIndicator
              color={theme.colors.text_on_brand_color}
            />
            :
            <Text style={styles.title}>
                Enviar Feedback
            </Text>
        }
    </TouchableOpacity>
  );
}