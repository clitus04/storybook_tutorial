import { memo } from "react";
import './index.scss';

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'outlined' | 'dark'
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick = () => { }, variant = 'primary', disabled = false }) => {
    return (
        <button className={`btn-${variant}`} onClick={onClick} disabled={disabled}>{label}</button>
    );
};

export default memo(Button);