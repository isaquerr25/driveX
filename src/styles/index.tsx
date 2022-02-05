import styled from 'styled-components/native';
import theme from './theme.json';
import MapView from 'react-native-maps';
import Pulse from 'react-native-pulse';
interface ContainerProps { 
    color?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL'|'transparent';
    flexP?:boolean;
    row?: boolean;
    justify?: string;
    padding?: number;
    align?: string;
    width?: number;
    height?: number;
    position?: string;
    top?: string;
    zIndex?: number;
    heightM?: number;
}
export const Container = styled.View<ContainerProps>`
    
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
    flex : ${(props) => props.flexP ? '0 1 auto' : '1 1 auto'};
    flex-direction : ${(props) => (props.row ? 'row' : 'column')};
    justify-content : ${(props) => props.justify || 'center'};
    padding : ${(props) => (props.padding || 0)}px;
    width: 100%;
    align-items : ${(props) => (props.align || 'center')};
    max-width : ${(props) => (props.width != null ? (props.width + 'px') : '100%')};
    max-height : ${(props) => (props.height ?  props.height + 'px' : 'auto')};
    min-height: ${(props) => (props.heightM ?  props.heightM + 'px' : '0px')};;
    position : ${(props) => (props.position || 'relative')};
    top : ${(props) => (props.top || '0px')};
    z-index : ${(props) => (props.zIndex || 1)};
`;  

export const Button = styled.TouchableOpacity<{marginD?:number;compact?:boolean; type?:'primary'|'light'|'info'|'info50'|'dark'|'black'|'muted'|'muted50'|'bottonL';}>`
    width: 100%;
    padding: ${(props) => (props.compact ? 5 : 15)}px;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.primary};
    margin: ${(props) => props.marginD!=null ? props.marginD :'5'}px;
`;



export const ButtonText = styled.Text<{color?:boolean}>`
    text-align: center;
    color: ${(props) => (props.color ? theme.colors[props.color] : '#000')}
`;
export const Title = styled.Text`
    font-size: 20px;
    color: ${theme.colors.dark};
    font-weight: bold;
`;

export const SubTitle = styled.Text<{ padding?:boolean;  small?:boolean;  bold?:boolean; color?:string; }>`
    font-size: ${(props) => (props.small ? '12px' : '15px')};
    opacity: 0.7;
    font-weight: ${(props) =>(props.bold ? 'bold': 'normal')};
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.dark};
    padding-left:  ${(props) => (props.padding ? '20px' : '0px')};
`;

export const PickerButton = styled.TouchableOpacity<{ active?:boolean; }>`
    width: 100%;
    height: 40%;
    margin-top: 2.5%;
    border-width: 3px ;
    border-style: solid;
    justify-content: space-around;
    align-items: center;
    border-color: ${(props) => props.active ? theme.colors.primary : theme.colors.muted50};
    background-color: ${(props) => props.active ? theme.colors.primary + '80' : theme.colors.muted50};
`;

export const Input = styled.TextInput`
    background-color: ${ theme.colors.light };
    border: 1px solid ${ theme.colors.muted };
    width: 100%;
    padding: 7px 15px;
    `;

export const Spacer = styled.View<ContainerProps>`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 10}px;

`;

export const AddressList = styled.FlatList`
    flex: 1;
    width: 100%;
    padding-top: 10;

`;

export const AddressItem = styled.TouchableOpacity`
    padding: 5px 0;
    align-items: flex-start;
`;



export const Map = styled(MapView)<{ disabled?:boolean}>`
    flex: 1;
    width: 100%;
    height: 100%;
    opacity: ${ (props) => props.disabled ? 0.2 : 1  };
`;

export const Avatar = styled.Image.attrs({elevation:50,})<{small?:boolean;}>`
    width: ${(props) => props.small ? '35px' : '50px'};
    height: ${(props) => props.small ? '35px' : '50px'};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    background: ${theme.colors.muted};
    border-radius: ${(props) => (props.small ? '35px' : '50px')};
`;

export const VerticalSeparator = styled.View`
    width: 1px;
    height: 40px;
    background-color: ${theme.colors.muted};
`;
export const Bullet = styled.View<{destination?:boolean}>`
    width: 8px;
    height: 8px;
    border-radius: 7px;
    margin-top: 2px;
    background : ${props => props.destination ? '#ff2929' : '#3ffd05'};
`;

export const PulseCirle = styled(Pulse).attrs({
    color: theme.colors.primary,
})``;



















