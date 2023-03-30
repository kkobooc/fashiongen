import {Text, useTheme} from "@nextui-org/react";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    color?: string;
    label?: string;
    placeholder?: string;
    disable?: boolean;
}

const InputText = (props: Props) => {
    const { value, onChange, color, label, placeholder, disable } = props

    const { theme } = useTheme();
    //@ts-ignore
    const colorValue = color ? theme?.colors[color].value : '';

    return (
        <div style={{width: '100%'}}>
            <div style={{marginBottom: 3}}>
                <label htmlFor='field0' style={{display: 'block'}}><Text size={14} color={colorValue ?? 'default'}>{label ?? ''}</Text></label>
            </div>
            <div style={{width: '100%'}}>
                <input
                    id='field0'
                    placeholder={placeholder ?? ''}
                    type='text'
                    value={value}
                    onChange={onChange}
                    disabled={disable}
                    style={{
                        width: '100%',
                        height: 42,
                        borderRadius: 21,
                        paddingLeft: 15,
                        paddingRight: 15,
                        lineHeight: 1.5,
                        backgroundColor: 'transparent',
                        border: `1px solid ${colorValue}`,
                        outline: 'none',
                        transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
                        // '&hover': {
                        //     border: `1px solid ${colorValue}`,
                        // }
                    }}
                />
            </div>
        </div>
    )
}

export default InputText;