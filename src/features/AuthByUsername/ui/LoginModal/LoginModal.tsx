import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
}

export const LoginModal = ({ className }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
    >
        <LoginForm />
    </Modal>
);
